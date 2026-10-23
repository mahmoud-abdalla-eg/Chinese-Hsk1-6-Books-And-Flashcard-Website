import { unstable_cache } from "next/cache";
import { getConversationsForLevel } from "@/lib/data/conversations";
import { HSK_LEVELS } from "@/lib/data/schema";
import { getSupabaseAdmin } from "@/lib/db/supabase";

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
    const supabase = getSupabaseAdmin();
    const { data: conversations, error } = await supabase
      .from("course_conversations")
      .select("*")
      .eq("hsk_level", numericLevel)
      .order("unit_id", { ascending: true });

    if (error || !conversations || conversations.length === 0) {
      return getConversationsForLevel(level);
    }
    return conversations.map(fromDbConversation);
  } catch {
    return getConversationsForLevel(level);
  }
}

export async function getManagedConversationForUnit(level, unitId) {
  const conversations = await getManagedConversationsForLevel(level);
  return (
    conversations.find(
      (conversation) => Number(conversation.unitId) === Number(unitId),
    ) || null
  );
}

export async function upsertManagedConversation(payload) {
  const conversation = normalizeConversation(payload);
  const supabase = getSupabaseAdmin();

  const record = {
    id: conversation.id,
    hsk_level: conversation.hskLevel,
    unit_id: conversation.unitId,
    status: conversation.status,
    title: conversation.title,
    target_vocabulary_ids: conversation.targetVocabularyIds,
    dialogue: conversation.dialogue,
    grammar_notes: conversation.grammarNotes,
    cultural_notes: conversation.culturalNotes,
    comprehension_questions: conversation.comprehensionQuestions,
    shadowing_practice: conversation.shadowingPractice,
    authoring_note: conversation.authoringNote,
    updated_at: new Date().toISOString(),
  };

  const { data, error } = await supabase
    .from("course_conversations")
    .upsert(record, { onConflict: "id" })
    .select("*")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to upsert conversation.");
  }

  return fromDbConversation(data);
}

export async function deleteManagedConversation(conversationId) {
  if (!conversationId) return false;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("course_conversations")
    .delete()
    .eq("id", conversationId);
  return !error;
}

function normalizeConversation(payload) {
  const hskLevel = Math.max(1, Math.min(6, Number(payload.hskLevel || 1)));
  const unitId = Math.max(1, Number(payload.unitId || 1));
  return {
    id: String(payload.id || `hsk-${hskLevel}-unit-${unitId}`).trim(),
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
    shadowingPractice: payload.shadowingPractice || {
      enabled: true,
      mode: "line-by-line",
    },
    authoringNote: String(payload.authoringNote || "").trim(),
  };
}

function fromDbConversation(conversation) {
  return {
    id: conversation.id || "",
    hskLevel: Number(conversation.hsk_level || conversation.hskLevel || 1),
    unitId: Number(conversation.unit_id || conversation.unitId || 1),
    status: conversation.status || "needs-authoring",
    title: {
      en: conversation.title?.en || "",
      zh: conversation.title?.zh || "",
      ar: conversation.title?.ar || "",
    },
    targetVocabularyIds: arrayOfStrings(
      conversation.target_vocabulary_ids || conversation.targetVocabularyIds,
    ),
    dialogue: Array.isArray(conversation.dialogue) ? conversation.dialogue : [],
    grammarNotes: Array.isArray(
      conversation.grammar_notes || conversation.grammarNotes,
    )
      ? conversation.grammar_notes || conversation.grammarNotes
      : [],
    culturalNotes: Array.isArray(
      conversation.cultural_notes || conversation.culturalNotes,
    )
      ? conversation.cultural_notes || conversation.culturalNotes
      : [],
    comprehensionQuestions: Array.isArray(
      conversation.comprehension_questions ||
        conversation.comprehensionQuestions,
    )
      ? conversation.comprehension_questions ||
        conversation.comprehensionQuestions
      : [],
    shadowingPractice: conversation.shadowing_practice ||
      conversation.shadowingPractice || {
        enabled: true,
        mode: "line-by-line",
      },
    authoringNote:
      conversation.authoring_note || conversation.authoringNote || "",
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
