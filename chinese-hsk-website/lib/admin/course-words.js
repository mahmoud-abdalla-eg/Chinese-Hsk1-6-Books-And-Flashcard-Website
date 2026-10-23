import { unstable_cache } from "next/cache";
import { getHskSummary, getHskWords } from "@/lib/data/hsk";
import { HSK_LEVELS, UNIT_SIZE } from "@/lib/data/schema";
import { getSupabaseAdmin } from "@/lib/db/supabase";

const PUBLIC_CACHE_SECONDS = 300;

const memoryWordCache = new Map();

const getManagedHskWordsCached = unstable_cache(
  async (level) => getManagedHskWordsUncached(level),
  ["managed-hsk-words"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

export async function getManagedHskWords(level) {
  const numericLevel = Number(level);
  if (memoryWordCache.has(numericLevel)) {
    return memoryWordCache.get(numericLevel);
  }
  const words = await getManagedHskWordsCached(numericLevel);
  if (words && words.length > 0) {
    memoryWordCache.set(numericLevel, words);
  }
  return words;
}

async function getManagedHskWordsUncached(level) {
  const numericLevel = Number(level);
  if (!HSK_LEVELS.includes(numericLevel)) return [];
  try {
    const supabase = getSupabaseAdmin();
    const { data: words, error } = await supabase
      .from("course_words")
      .select("*")
      .eq("level", numericLevel)
      .order("order", { ascending: true });

    if (error || !words || words.length === 0) {
      return getHskWords(numericLevel);
    }
    return words.map(fromDbWord);
  } catch {
    return getHskWords(numericLevel);
  }
}

export const getManagedHskSummary = unstable_cache(
  async () => getManagedHskSummaryUncached(),
  ["managed-hsk-summary"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedHskSummaryUncached() {
  try {
    const fallbackSummary = getHskSummary();
    const supabase = getSupabaseAdmin();

    const summaries = await Promise.all(
      HSK_LEVELS.map(async (level) => {
        const { count, error } = await supabase
          .from("course_words")
          .select("*", { count: "exact", head: true })
          .eq("level", level);

        const fallback = fallbackSummary.find((item) => item.level === level);
        const wordCount =
          error || count == null || count === 0
            ? fallback?.wordCount || 0
            : count;

        return {
          level,
          wordCount,
          expectedCount: fallback?.expectedCount || wordCount,
          unitCount: Math.ceil(wordCount / UNIT_SIZE),
          conversationCount: Math.ceil(wordCount / UNIT_SIZE),
          progress: 0,
        };
      }),
    );
    return summaries;
  } catch {
    return getHskSummary();
  }
}

export const getManagedHskWordIds = unstable_cache(
  async (level) => getManagedHskWordIdsUncached(level),
  ["managed-hsk-word-ids"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedHskWordIdsUncached(level) {
  const numericLevel = Number(level);
  if (!HSK_LEVELS.includes(numericLevel)) return [];
  try {
    const supabase = getSupabaseAdmin();
    const { data: words, error } = await supabase
      .from("course_words")
      .select("id")
      .eq("level", numericLevel)
      .order("order", { ascending: true });

    if (error || !words || words.length === 0) {
      return getHskWords(numericLevel).map((word) => word.id);
    }
    return words.map((word) => word.id);
  } catch {
    return getHskWords(numericLevel).map((word) => word.id);
  }
}

export async function getManagedUnitsForLevel(level) {
  const words = await getManagedHskWords(level);
  const units = [];
  for (let i = 0; i < words.length; i += UNIT_SIZE) {
    const unitWords = words.slice(i, i + UNIT_SIZE);
    units.push({
      id: units.length + 1,
      level: Number(level),
      start: i + 1,
      end: i + unitWords.length,
      words: unitWords,
      wordCount: unitWords.length,
    });
  }
  return units;
}

export async function getManagedUnit(level, unitId) {
  const words = await getManagedHskWords(level);
  const numericUnitId = Number(unitId);
  const startIdx = (numericUnitId - 1) * UNIT_SIZE;
  if (startIdx < 0 || startIdx >= words.length) return null;
  const unitWords = words.slice(startIdx, startIdx + UNIT_SIZE);
  return {
    id: numericUnitId,
    level: Number(level),
    start: startIdx + 1,
    end: startIdx + unitWords.length,
    words: unitWords,
    wordCount: unitWords.length,
  };
}

export async function getManagedWord(level, wordId) {
  const words = await getManagedHskWords(level);
  return words.find((word) => word.id === wordId) || null;
}

export async function upsertManagedWord(payload) {
  const level = Number(payload.level || payload.hskLevel || 1);
  const word = normalizeWord({ ...payload, level });
  const supabase = getSupabaseAdmin();

  const record = {
    id: word.id,
    level: word.level,
    order: word.order,
    hanzi: word.hanzi,
    pinyin: word.pinyin,
    part_of_speech: word.partOfSpeech,
    meaning: word.meaning,
    example: word.example,
    audio: word.audio,
    tags: word.tags,
    examples: word.examples,
    book: payload.book || null,
    lesson: payload.lesson ? String(payload.lesson) : null,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("course_words")
    .upsert(record, { onConflict: "level,id" })
    .select("*")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to upsert word.");
  }

  memoryWordCache.clear();
  return fromDbWord(data);
}

export async function deleteManagedWord(wordId) {
  if (!wordId) return false;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("course_words")
    .delete()
    .eq("id", wordId);
  if (!error) {
    memoryWordCache.clear();
  }
  return !error;
}

export async function getManagedWordsForAdmin(level) {
  return getManagedHskWordsUncached(level);
}

function normalizeWord(payload) {
  const hanzi = String(payload.hanzi || "").trim();
  const id = String(payload.id || hanzi).trim();
  const example = {
    hanzi: String(payload.example?.hanzi || "").trim(),
    pinyin: String(payload.example?.pinyin || "").trim(),
    en: String(payload.example?.en || "").trim(),
    ar: String(payload.example?.ar || "").trim(),
  };
  const examples = normalizeExamples(payload.examples, example);

  return {
    id,
    level: Number(payload.level || 1),
    order: Math.max(1, Number(payload.order) || 1),
    hanzi,
    pinyin: String(payload.pinyin || "").trim(),
    partOfSpeech:
      String(payload.partOfSpeech || payload.pos || "").trim() || "word",
    meaning: {
      en: String(payload.meaning?.en || payload.english || "").trim(),
      ar: String(payload.meaning?.ar || payload.arabic || "").trim(),
    },
    example: examples[0] || example,
    audio: {
      word: String(payload.audio?.word || "").trim(),
      example: String(payload.audio?.example || "").trim(),
    },
    tags: Array.isArray(payload.tags)
      ? payload.tags.map((tag) => String(tag).trim()).filter(Boolean)
      : String(payload.tags || "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
    examples,
  };
}

function normalizeExamples(examples, primaryExample) {
  const rows = [];
  if (Array.isArray(examples)) rows.push(...examples);
  if (primaryExample?.hanzi) rows.unshift(primaryExample);
  const seen = new Set();
  return rows
    .map((example) => ({
      hanzi: String(example?.hanzi || "").trim(),
      pinyin: String(example?.pinyin || "").trim(),
      en: String(example?.en || "").trim(),
      ar: String(example?.ar || "").trim(),
    }))
    .filter((example) => {
      if (!example.hanzi || seen.has(example.hanzi)) return false;
      seen.add(example.hanzi);
      return true;
    });
}

function fromDbWord(word) {
  const examples = Array.isArray(word.examples)
    ? word.examples.map((example) => ({
        hanzi: example.hanzi || "",
        pinyin: example.pinyin || "",
        en: example.en || "",
        ar: example.ar || "",
      }))
    : [];

  return {
    id: word.id,
    level: Number(word.level),
    order: Number(word.order || 0),
    hanzi: word.hanzi || "",
    pinyin: word.pinyin || "",
    partOfSpeech: word.part_of_speech || word.partOfSpeech || "word",
    meaning: {
      en: word.meaning?.en || "",
      ar: word.meaning?.ar || "",
    },
    example: {
      hanzi: word.example?.hanzi || "",
      pinyin: word.example?.pinyin || "",
      en: word.example?.en || "",
      ar: word.example?.ar || "",
    },
    audio: {
      word: word.audio?.word || "",
      example: word.audio?.example || "",
    },
    tags: Array.isArray(word.tags) ? word.tags : [],
    examples,
  };
}
