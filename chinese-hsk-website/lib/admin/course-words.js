import { ObjectId } from "mongodb";
import { unstable_cache } from "next/cache";
import { getHskSummary, getHskWords } from "@/lib/data/hsk";
import { HSK_LEVELS, UNIT_SIZE } from "@/lib/data/schema";
import { getMongoDatabase } from "@/lib/db/mongodb";

const wordsCollection = "course_words";
const stateCollection = "course_data_state";
const WORD_SOURCE_VERSION = "hsk-1-5-pdf-update-2026-06-02";
const PUBLIC_CACHE_SECONDS = 300;

export const getManagedHskWords = unstable_cache(
  async (level) => getManagedHskWordsUncached(level),
  ["managed-hsk-words"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedHskWordsUncached(level) {
  const numericLevel = Number(level);
  if (!HSK_LEVELS.includes(numericLevel)) return [];
  try {
    await ensureLevelSeeded(numericLevel);
    const db = await getMongoDatabase();
    const words = await db
      .collection(wordsCollection)
      .find({ level: numericLevel })
      .sort({ order: 1, hanzi: 1 })
      .toArray();
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
    const db = await getMongoDatabase();
    const summaries = await Promise.all(
      HSK_LEVELS.map(async (level) => {
        await ensureLevelSeeded(level);
        const wordCount = await db
          .collection(wordsCollection)
          .countDocuments({ level });
        return {
          level,
          wordCount,
          expectedCount: fallbackSummary.find((item) => item.level === level)
            ?.expectedCount,
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
    await ensureLevelSeeded(numericLevel);
    const db = await getMongoDatabase();
    const words = await db
      .collection(wordsCollection)
      .find({ level: numericLevel }, { projection: { _id: 0, id: 1 } })
      .sort({ order: 1, hanzi: 1 })
      .toArray();
    return words.map((word) => word.id);
  } catch {
    return getHskWords(numericLevel).map((word) => word.id);
  }
}

export const getManagedUnitsForLevel = unstable_cache(
  async (level) => getManagedUnitsForLevelUncached(level),
  ["managed-hsk-units"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedUnitsForLevelUncached(level) {
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

export const getManagedUnit = unstable_cache(
  async (level, unitId) => getManagedUnitUncached(level, unitId),
  ["managed-hsk-unit"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedUnitUncached(level, unitId) {
  const units = await getManagedUnitsForLevel(level);
  return units.find((unit) => unit.id === Number(unitId));
}

export const getManagedWord = unstable_cache(
  async (level, wordId) => getManagedWordUncached(level, wordId),
  ["managed-hsk-word"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedWordUncached(level, wordId) {
  const words = await getManagedHskWords(level);
  return words.find((word) => word.id === wordId);
}

export async function upsertManagedWord(payload) {
  const level = Number(payload.level || payload.hskLevel || 1);
  await ensureLevelSeeded(level);
  const db = await getMongoDatabase();
  const existing = await findExistingWord(db, level, payload);
  const word = normalizeWord(mergeWordPayload(existing, { ...payload, level }));
  const now = new Date();
  const result = await db.collection(wordsCollection).findOneAndUpdate(
    { level: word.level, id: word.id },
    {
      $set: {
        ...word,
        updatedAt: now,
      },
      $setOnInsert: {
        createdAt: now,
      },
    },
    { returnDocument: "after", upsert: true },
  );
  return fromDbWord(result);
}

async function findExistingWord(db, level, payload) {
  const id = String(payload.id || "").trim();
  const hanzi = String(payload.hanzi || "").trim();
  const existing = await db.collection(wordsCollection).findOne({
    level,
    ...(id ? { id } : { hanzi }),
  });
  if (existing) return fromDbWord(existing);
  const source = getHskWords(level).find(
    (word) => (id && word.id === id) || (hanzi && word.hanzi === hanzi),
  );
  return source || null;
}

function mergeWordPayload(existing, payload) {
  if (!existing) return payload;
  return {
    ...existing,
    ...payload,
    meaning: {
      ...existing.meaning,
      ...withoutEmpty(payload.meaning),
    },
    example: {
      ...existing.example,
      ...withoutEmpty(payload.example),
    },
    audio: {
      ...existing.audio,
      ...withoutEmpty(payload.audio),
    },
    examples: Array.isArray(payload.examples)
      ? payload.examples
      : existing.examples || [],
  };
}

function withoutEmpty(value = {}) {
  return Object.fromEntries(
    Object.entries(value || {}).filter(([, item]) => String(item || "").trim()),
  );
}

export async function deleteManagedWord(wordId) {
  if (!ObjectId.isValid(wordId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(wordsCollection)
    .deleteOne({ _id: new ObjectId(wordId) });
  return result.deletedCount > 0;
}

export async function getManagedWordsForAdmin(level) {
  const words = await getManagedHskWordsUncached(level);
  return words.map((word) => ({ ...word, mongoId: word.mongoId }));
}

async function ensureLevelSeeded(level) {
  const db = await getMongoDatabase();
  const stateId = `hsk-${level}`;
  const state = await db.collection(stateCollection).findOne({ _id: stateId });
  if (state?.seeded && state?.sourceVersion === WORD_SOURCE_VERSION) return;
  const now = new Date();
  const sourceWords = getHskWords(level).map((word, index) => ({
    ...word,
    level,
    order: Number(word.order || index + 1),
    updatedAt: now,
  }));
  if (sourceWords.length) {
    const operations = sourceWords.map((word) => {
      const { audio, ...sourceWord } = word;
      return {
        updateOne: {
          filter: { level, id: word.id },
          update: {
            $set: sourceWord,
            $setOnInsert: {
              audio,
              createdAt: now,
            },
          },
          upsert: true,
        },
      };
    });
    await db.collection(wordsCollection).bulkWrite(operations);
  }
  await db.collection(stateCollection).updateOne(
    { _id: stateId },
    {
      $set: {
        seeded: true,
        level,
        seededAt: state?.seededAt || now,
        sourceVersion: WORD_SOURCE_VERSION,
        sourceSyncedAt: now,
      },
    },
    { upsert: true },
  );
}

function normalizeWord(payload) {
  const level = Number(payload.level);
  if (!HSK_LEVELS.includes(level)) throw new Error("Invalid HSK level.");
  const id = String(payload.id || `hsk-${level}-${Date.now().toString(36)}`)
    .trim()
    .slice(0, 120);
  const hanzi = String(payload.hanzi || "").trim();
  if (!hanzi) throw new Error("Chinese word is required.");
  const example = {
    hanzi: String(payload.example?.hanzi || "").trim(),
    pinyin: String(payload.example?.pinyin || "").trim(),
    en: String(payload.example?.en || "").trim(),
    ar: String(payload.example?.ar || "").trim(),
  };
  const examples = normalizeExamples(payload.examples, example);
  return {
    level,
    id,
    order: Math.max(1, Number(payload.order) || 1),
    hanzi,
    pinyin: String(payload.pinyin || "").trim(),
    partOfSpeech: String(payload.partOfSpeech || "").trim() || "word",
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
    mongoId: String(word._id || ""),
    id: word.id,
    level: Number(word.level),
    order: Number(word.order || 0),
    hanzi: word.hanzi || "",
    pinyin: word.pinyin || "",
    partOfSpeech: word.partOfSpeech || "word",
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
