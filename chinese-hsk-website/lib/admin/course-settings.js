import { ObjectId } from "mongodb";
import {
  getManagedHskWords,
  upsertManagedWord,
} from "@/lib/admin/course-words";
import { getMongoDatabase } from "@/lib/db/mongodb";

const settingsCollection = "course_settings";
const audioCollection = "audio_records";

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
  const db = await getMongoDatabase();
  await ensureSettingsSeeded(db);
  const rows = await db
    .collection(settingsCollection)
    .find({})
    .sort({ key: 1 })
    .toArray();
  return rows.map((row) => ({
    mongoId: String(row._id),
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
  const db = await getMongoDatabase();
  const result = await db.collection(settingsCollection).findOneAndUpdate(
    { key: row.key },
    {
      $set: { ...row, updatedAt: new Date() },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true, returnDocument: "after" },
  );
  return {
    mongoId: String(result._id),
    key: result.key,
    label: result.label,
    settings: result.settings || {},
  };
}

export async function getAudioRecords() {
  const db = await getMongoDatabase();
  const rows = await db
    .collection(audioCollection)
    .find({})
    .sort({ updatedAt: -1 })
    .toArray();
  return rows.map(fromAudioRecord);
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
  const db = await getMongoDatabase();
  const filter =
    payload.mongoId && ObjectId.isValid(payload.mongoId)
      ? { _id: new ObjectId(payload.mongoId) }
      : { level: record.level, type: record.type, linkedId: record.linkedId };
  const result = await db.collection(audioCollection).findOneAndUpdate(
    filter,
    {
      $set: { ...record, updatedAt: new Date() },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true, returnDocument: "after" },
  );
  return fromAudioRecord(result);
}

export async function deleteAudioRecord(recordId) {
  if (!ObjectId.isValid(recordId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(audioCollection)
    .deleteOne({ _id: new ObjectId(recordId) });
  return result.deletedCount > 0;
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

async function ensureSettingsSeeded(db) {
  await db.collection(settingsCollection).updateOne(
    { key: defaultFlashcardSettings.key },
    {
      $setOnInsert: {
        ...defaultFlashcardSettings,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    { upsert: true },
  );
}

function fromAudioRecord(record) {
  return {
    mongoId: String(record._id),
    label: record.label || "",
    level: Number(record.level || 1),
    type: record.type || "word",
    linkedId: record.linkedId || "",
    path: record.path || "",
    status: record.status || "missing",
    notes: record.notes || "",
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
