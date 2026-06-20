import { ObjectId } from "mongodb";
import { unstable_cache } from "next/cache";
import {
  getAllConversations,
  getConversationsForLevel,
} from "@/lib/data/conversations";
import { HSK_LEVELS } from "@/lib/data/schema";
import { getMongoDatabase } from "@/lib/db/mongodb";

const conversationsCollection = "course_conversations";
const stateCollection = "course_data_state";
const PUBLIC_CACHE_SECONDS = 300;

export const getManagedConversationsForLevel = unstable_cache(
  async (level) => getManagedConversationsForLevelUncached(level),
  ["managed-conversations-level"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedConversationsForLevelUncached(level) {
  const numericLevel = Number(level);
  if (!HSK_LEVELS.includes(numericLevel)) return [];
  try {
    await ensureConversationsSeeded();
    const db = await getMongoDatabase();
    const conversations = await db
      .collection(conversationsCollection)
      .find({ hskLevel: numericLevel })
      .sort({ unitId: 1, id: 1 })
      .toArray();
    return conversations.map(fromDbConversation);
  } catch {
    return getConversationsForLevel(level);
  }
}

export const getManagedConversationForUnit = unstable_cache(
  async (level, unitId) => getManagedConversationForUnitUncached(level, unitId),
  ["managed-conversation-unit"],
  { revalidate: PUBLIC_CACHE_SECONDS },
);

async function getManagedConversationForUnitUncached(level, unitId) {
  const conversations = await getManagedConversationsForLevel(level);
  return conversations.find(
    (conversation) => Number(conversation.unitId) === Number(unitId),
  );
}

export async function upsertManagedConversation(payload) {
  const conversation = normalizeConversation(payload);
  await ensureConversationsSeeded();
  const db = await getMongoDatabase();
  const now = new Date();
  const result = await db.collection(conversationsCollection).findOneAndUpdate(
    { id: conversation.id },
    {
      $set: { ...conversation, updatedAt: now },
      $setOnInsert: { createdAt: now },
    },
    { returnDocument: "after", upsert: true },
  );
  return fromDbConversation(result);
}

export async function deleteManagedConversation(conversationId) {
  if (!ObjectId.isValid(conversationId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(conversationsCollection)
    .deleteOne({ _id: new ObjectId(conversationId) });
  return result.deletedCount > 0;
}

async function ensureConversationsSeeded() {
  const db = await getMongoDatabase();
  const state = await db
    .collection(stateCollection)
    .findOne({ _id: "conversations" });
  if (state?.seeded) return;
  const source = getAllConversations().map((conversation) => ({
    ...conversation,
    hskLevel: Number(conversation.hskLevel || 1),
    unitId: Number(conversation.unitId || 1),
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  if (source.length) {
    await db.collection(conversationsCollection).bulkWrite(
      source.map((conversation) => ({
        updateOne: {
          filter: { id: conversation.id },
          update: { $setOnInsert: conversation },
          upsert: true,
        },
      })),
    );
  }
  await db
    .collection(stateCollection)
    .updateOne(
      { _id: "conversations" },
      { $set: { seeded: true, seededAt: new Date() } },
      { upsert: true },
    );
}

function normalizeConversation(payload) {
  const hskLevel = Number(payload.hskLevel || payload.level || 1);
  const unitId = Number(payload.unitId || 1);
  return {
    id: String(
      payload.id || `hsk-${hskLevel}-unit-${unitId}-${Date.now().toString(36)}`,
    )
      .trim()
      .slice(0, 160),
    hskLevel,
    unitId,
    status: String(payload.status || "needs-authoring").trim(),
    title: {
      en: String(payload.title?.en || "").trim(),
      zh: String(payload.title?.zh || "").trim(),
      ar: String(payload.title?.ar || "").trim(),
    },
    targetVocabularyIds: arrayOfStrings(payload.targetVocabularyIds),
    dialogue: Array.isArray(payload.dialogue) ? payload.dialogue : [],
    grammarNotes: Array.isArray(payload.grammarNotes)
      ? payload.grammarNotes
      : [],
    culturalNotes: Array.isArray(payload.culturalNotes)
      ? payload.culturalNotes
      : [],
    comprehensionQuestions: Array.isArray(payload.comprehensionQuestions)
      ? payload.comprehensionQuestions
      : [],
    shadowingPractice:
      payload.shadowingPractice && typeof payload.shadowingPractice === "object"
        ? payload.shadowingPractice
        : { enabled: true, mode: "line-by-line" },
    authoringNote: String(payload.authoringNote || "").trim(),
  };
}

function fromDbConversation(conversation) {
  return {
    mongoId: String(conversation._id || ""),
    id: conversation.id || "",
    hskLevel: Number(conversation.hskLevel || 1),
    unitId: Number(conversation.unitId || 1),
    status: conversation.status || "needs-authoring",
    title: {
      en: conversation.title?.en || "",
      zh: conversation.title?.zh || "",
      ar: conversation.title?.ar || "",
    },
    targetVocabularyIds: arrayOfStrings(conversation.targetVocabularyIds),
    dialogue: Array.isArray(conversation.dialogue) ? conversation.dialogue : [],
    grammarNotes: Array.isArray(conversation.grammarNotes)
      ? conversation.grammarNotes
      : [],
    culturalNotes: Array.isArray(conversation.culturalNotes)
      ? conversation.culturalNotes
      : [],
    comprehensionQuestions: Array.isArray(conversation.comprehensionQuestions)
      ? conversation.comprehensionQuestions
      : [],
    shadowingPractice: conversation.shadowingPractice || {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: conversation.authoringNote || "",
  };
}

function arrayOfStrings(value) {
  return Array.isArray(value)
    ? value.map((item) => String(item).trim()).filter(Boolean)
    : String(value || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
}
