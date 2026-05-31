import { ObjectId } from "mongodb";
import { getHskSummary, getHskWords } from "@/lib/data/hsk";
import { HSK_LEVELS, UNIT_SIZE } from "@/lib/data/schema";
import { getMongoDatabase } from "@/lib/db/mongodb";

const wordsCollection = "course_words";
const stateCollection = "course_data_state";

export async function getManagedHskWords(level) {
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

export async function getManagedHskSummary() {
  try {
    const summaries = await Promise.all(
      HSK_LEVELS.map(async (level) => {
        const words = await getManagedHskWords(level);
        return {
          level,
          wordCount: words.length,
          expectedCount: getHskSummary().find((item) => item.level === level)
            ?.expectedCount,
          unitCount: Math.ceil(words.length / UNIT_SIZE),
          conversationCount: Math.ceil(words.length / UNIT_SIZE),
          progress: 0,
        };
      }),
    );
    return summaries;
  } catch {
    return getHskSummary();
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
  const units = await getManagedUnitsForLevel(level);
  return units.find((unit) => unit.id === Number(unitId));
}

export async function getManagedWord(level, wordId) {
  const words = await getManagedHskWords(level);
  return words.find((word) => word.id === wordId);
}

export async function upsertManagedWord(payload) {
  const word = normalizeWord(payload);
  await ensureLevelSeeded(word.level);
  const db = await getMongoDatabase();
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

export async function deleteManagedWord(wordId) {
  if (!ObjectId.isValid(wordId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(wordsCollection)
    .deleteOne({ _id: new ObjectId(wordId) });
  return result.deletedCount > 0;
}

export async function getManagedWordsForAdmin(level) {
  const words = await getManagedHskWords(level);
  return words.map((word) => ({ ...word, mongoId: word.mongoId }));
}

async function ensureLevelSeeded(level) {
  const db = await getMongoDatabase();
  const stateId = `hsk-${level}`;
  const state = await db.collection(stateCollection).findOne({ _id: stateId });
  if (state?.seeded) return;
  const sourceWords = getHskWords(level).map((word, index) => ({
    ...word,
    level,
    order: Number(word.order || index + 1),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  if (sourceWords.length) {
    const operations = sourceWords.map((word) => ({
      updateOne: {
        filter: { level, id: word.id },
        update: { $setOnInsert: word },
        upsert: true,
      },
    }));
    await db.collection(wordsCollection).bulkWrite(operations);
  }
  await db
    .collection(stateCollection)
    .updateOne(
      { _id: stateId },
      { $set: { seeded: true, level, seededAt: new Date() } },
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
    example: {
      hanzi: String(payload.example?.hanzi || "").trim(),
      pinyin: String(payload.example?.pinyin || "").trim(),
      en: String(payload.example?.en || "").trim(),
      ar: String(payload.example?.ar || "").trim(),
    },
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
  };
}

function fromDbWord(word) {
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
  };
}
