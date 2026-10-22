import {
  getManagedHskWords,
  upsertManagedWord,
} from "@/lib/admin/course-words";
import { getSupabaseAdmin } from "@/lib/db/supabase";

const defaultFlashcardSettings = {
  key: "flashcards",
  label: "Flashcard settings",
  settings: {
    reviewButtons: ["Again", "Hard", "Good", "Easy"],
    showArabic: true,
    showExamples: true,
    playAudioOnReveal: false,
    againDays: 0,
    hardDays: 1,
    goodDays: 3,
    easyDays: 7,
  },
};

export async function getCourseSettings() {
  await ensureSettingsSeeded();
  const supabase = getSupabaseAdmin();
  const { data: rows } = await supabase
    .from("course_settings")
    .select("key, label, settings")
    .order("key", { ascending: true });

  return (rows || []).map((row) => ({
    key: row.key,
    label: row.label,
    settings: row.settings || {},
  }));
}

export async function upsertCourseSetting(payload) {
  const row = {
    key: String(payload.key || "flashcards").trim(),
    label: String(payload.label || payload.key || "Setting").trim(),
    settings: parseObject(payload.settings),
  };
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("course_settings")
    .upsert(
      {
        ...row,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    )
    .select("key, label, settings")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to upsert course setting.");
  }

  return {
    key: data.key,
    label: data.label,
    settings: data.settings || {},
  };
}

export async function getAudioRecords() {
  const supabase = getSupabaseAdmin();
  const { data: rows } = await supabase
    .from("audio_records")
    .select("key, label, data")
    .order("updated_at", { ascending: false });

  return (rows || []).map(fromAudioRecord);
}

export async function upsertAudioRecord(payload) {
  const record = {
    label: String(payload.label || "").trim(),
    level: Number(payload.level || 1),
    type: String(payload.type || "word").trim(),
    linkedId: String(payload.linkedId || "").trim(),
    path: String(payload.path || "").trim(),
    status: String(payload.status || "missing").trim(),
    notes: String(payload.notes || "").trim(),
  };
  if (!record.label) record.label = `${record.type} ${record.linkedId}`.trim();
  const key = `${record.level}-${record.type}-${record.linkedId}`;

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("audio_records")
    .upsert(
      {
        key,
        label: record.label,
        data: record,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key" },
    )
    .select("key, label, data")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to save audio record.");
  }

  return fromAudioRecord(data);
}

export async function deleteAudioRecord(key) {
  if (!key) return false;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("audio_records").delete().eq("key", key);
  return !error;
}

export async function bulkMatchWordAudio({
  level,
  audioType = "word",
  basePath = "",
  lines = "",
}) {
  const numericLevel = Number(level || 1);
  const safeAudioType = audioType === "example" ? "example" : "word";
  const paths = parseAudioLines(lines);
  const words = await getManagedHskWords(numericLevel);
  const index = buildWordAudioIndex(words);
  const matched = [];
  const unmatched = [];
  const ambiguous = [];

  for (const rawPath of paths) {
    const normalizedName = normalizeAudioName(rawPath);
    const candidates = index.get(normalizedName) || [];
    if (candidates.length === 1) {
      const word = candidates[0];
      const path = resolveAudioPath(rawPath, basePath);
      const nextWord = {
        ...word,
        audio: {
          ...word.audio,
          [safeAudioType]: path,
        },
      };
      await upsertManagedWord(nextWord);
      await upsertAudioRecord({
        label: `${word.hanzi} ${safeAudioType} audio`,
        level: numericLevel,
        type: safeAudioType,
        linkedId: word.id,
        path,
        status: "ready",
        notes: `Bulk matched by English meaning: ${word.meaning.en}`,
      });
      matched.push({
        path,
        wordId: word.id,
        hanzi: word.hanzi,
        english: word.meaning.en,
      });
    } else if (candidates.length > 1) {
      ambiguous.push({
        path: rawPath,
        key: normalizedName,
        matches: candidates.map((word) => ({
          wordId: word.id,
          hanzi: word.hanzi,
          english: word.meaning.en,
        })),
      });
    } else {
      unmatched.push({ path: rawPath, key: normalizedName });
    }
  }

  return {
    total: paths.length,
    matched,
    unmatched,
    ambiguous,
  };
}

async function ensureSettingsSeeded() {
  try {
    const supabase = getSupabaseAdmin();
    await supabase.from("course_settings").upsert(
      {
        key: defaultFlashcardSettings.key,
        label: defaultFlashcardSettings.label,
        settings: defaultFlashcardSettings.settings,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "key", ignoreDuplicates: true },
    );
  } catch {
    // ignore
  }
}

function fromAudioRecord(record) {
  const data = record.data || {};
  return {
    key: record.key,
    label: record.label || data.label || "",
    level: Number(data.level || 1),
    type: data.type || "word",
    linkedId: data.linkedId || "",
    path: data.path || "",
    status: data.status || "missing",
    notes: data.notes || "",
  };
}

function parseObject(value) {
  if (value && typeof value === "object" && !Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(String(value || "{}"));
    return parsed && typeof parsed === "object" && !Array.isArray(parsed)
      ? parsed
      : {};
  } catch {
    return {};
  }
}

function parseAudioLines(lines) {
  return String(lines || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function buildWordAudioIndex(words) {
  const index = new Map();
  for (const word of words) {
    const keys = [
      word.meaning?.en,
      firstMeaning(word.meaning?.en),
      word.id,
      word.pinyin,
      word.hanzi,
    ]
      .map(normalizeKey)
      .filter(Boolean);
    for (const key of new Set(keys)) {
      const current = index.get(key) || [];
      current.push(word);
      index.set(key, current);
    }
  }
  return index;
}

function firstMeaning(value) {
  return String(value || "").split(/[,;/()]/)[0];
}

function normalizeAudioName(value) {
  const fileName = String(value || "")
    .replaceAll("\\", "/")
    .split("/")
    .pop()
    ?.replace(/\.[a-z0-9]+$/i, "");
  return normalizeKey(fileName);
}

function normalizeKey(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[_-]+/g, " ")
    .replace(/[^a-z0-9\u4e00-\u9fff]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function resolveAudioPath(rawPath, basePath) {
  const cleanPath = String(rawPath || "")
    .trim()
    .replaceAll("\\", "/");
  if (cleanPath.startsWith("/")) return cleanPath;
  const cleanBase = String(basePath || "")
    .trim()
    .replaceAll("\\", "/");
  if (!cleanBase) return cleanPath;
  return `${cleanBase.replace(/\/$/, "")}/${cleanPath.replace(/^\//, "")}`;
}
