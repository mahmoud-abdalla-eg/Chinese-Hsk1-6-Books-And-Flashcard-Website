import ConversationCurriculumFilter from "@/components/conversations/conversation-curriculum-filter";
import ConversationLevelHero from "@/components/conversations/conversation-level-hero";
import { Card, Pill } from "@/components/ui/card";
import { getManagedConversationsForLevel } from "@/lib/admin/course-conversations";
import { getManagedHskWords } from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";
import { HSK_LEVELS } from "@/lib/data/schema";

export const revalidate = 300;

export function generateStaticParams() {
  return HSK_LEVELS.map((level) => ({ level: String(level) }));
}

export default async function LevelConversationsPage({ params }) {
  const { level } = await params;
  const conversations = await getManagedConversationsForLevel(level);
  const words = await getManagedHskWords(level);
  const theme = levelThemes[Number(level)];

  // Create lightweight lookup to avoid serializing large word datasets across all conversation components
  const wordMap = Object.fromEntries(
    (words || []).map((w) => [
      w.id,
      { id: w.id, hanzi: w.hanzi, pinyin: w.pinyin },
    ]),
  );

  return (
    <div className="space-y-8 pb-8">
      <ConversationLevelHero
        accent={theme.accent}
        level={level}
        conversationCount={conversations.length}
      />
      {conversations.length ? (
        <ConversationCurriculumFilter
          conversations={conversations}
          wordMap={wordMap}
          accent={theme.accent}
          level={level}
        />
      ) : (
        <Card>
          <Pill tone="blue">Conversation pending</Pill>
          <h2 className="mt-4 text-2xl font-black text-slate-950">
            HSK {level} conversation units can be added from adminbase.
          </h2>
          <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
            No placeholder dialogue was added for this level. Add reviewed
            lessons from the conversation manager when the content is ready.
          </p>
        </Card>
      )}
    </div>
  );
}
