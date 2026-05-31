import ConversationLesson from "@/components/conversations/conversation-lesson";
import { Card, Pill, Surface } from "@/components/ui/card";
import { getManagedConversationsForLevel } from "@/lib/admin/course-conversations";
import { getManagedHskWords } from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";

export const dynamic = "force-dynamic";

export default async function LevelConversationsPage({ params }) {
  const { level } = await params;
  const conversations = await getManagedConversationsForLevel(level);
  const words = await getManagedHskWords(level);
  const theme = levelThemes[Number(level)];
  return (
    <div className="space-y-8 pb-8">
      <Surface className="relative overflow-hidden p-7 lg:p-10">
        <div
          className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
        />
        <Pill>HSK {level}</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          HSK {level} conversations
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Practice {conversations.length} unit lessons with target vocabulary,
          simple dialogue, and listening support as content becomes available.
        </p>
      </Surface>
      <div className="grid gap-6">
        {conversations.length
          ? conversations.map((conversation) => (
              <ConversationLesson
                key={conversation.id}
                conversation={conversation}
                words={words}
              />
            ))
          : <Card>
              <Pill tone="blue">Conversation pending</Pill>
              <h2 className="mt-4 text-2xl font-black text-slate-950">
                HSK {level} conversation units can be added from adminbase.
              </h2>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                No placeholder dialogue was added for this level. Add reviewed
                lessons from the conversation manager when the content is ready.
              </p>
            </Card>}
      </div>
    </div>
  );
}
