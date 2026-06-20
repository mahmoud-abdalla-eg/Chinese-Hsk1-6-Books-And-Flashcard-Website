import ConversationLesson from "@/components/conversations/conversation-lesson";
import FlashcardDeck from "@/components/flashcards/flashcard-deck";
import CompletionToggle from "@/components/progress/completion-toggle";
import { Card, Pill, ProgressBar, Surface } from "@/components/ui/card";
import VocabularyList from "@/components/vocabulary/vocabulary-list";
import { getManagedConversationForUnit } from "@/lib/admin/course-conversations";
import { getManagedHskWords, getManagedUnit } from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";
import { getUnitsForLevel } from "@/lib/data/hsk";
import { HSK_LEVELS } from "@/lib/data/schema";

export const revalidate = 300;

export function generateStaticParams() {
  return HSK_LEVELS.flatMap((level) =>
    getUnitsForLevel(level).map((unit) => ({
      level: String(level),
      unitId: String(unit.id),
    })),
  );
}

export default async function UnitPage({ params }) {
  const { level, unitId } = await params;
  const unit = await getManagedUnit(level, unitId);
  const allWords = await getManagedHskWords(level);
  const conversation = await getManagedConversationForUnit(level, unitId);
  const theme = levelThemes[Number(level)];
  if (!unit) return <Card>Unit not found.</Card>;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="relative overflow-hidden p-7 lg:p-10">
        <div
          className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Pill tone="blue">
              HSK {level} - Unit {unit.id}
            </Pill>
            <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
              Words {unit.start}-{unit.end}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
              A complete study room with vocabulary, flashcards, conversation
              coverage, listening practice, and local progress.
            </p>
          </div>
          <Card>
            <div className="flex justify-between text-sm font-black uppercase tracking-[0.16em] text-slate-500">
              <span>Unit progress</span>
              <span>0%</span>
            </div>
            <div className="mt-4">
              <ProgressBar value={0} />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <a
                href="#vocabulary"
                className="rounded-2xl bg-teal-700 px-4 py-3 text-center font-black text-white hover:bg-teal-800"
              >
                Vocabulary
              </a>
              <a
                href="#conversation"
                className="rounded-2xl bg-blue-50 px-4 py-3 text-center font-black text-blue-950 hover:bg-blue-100"
              >
                Conversation
              </a>
            </div>
            <div className="mt-5">
              <CompletionToggle
                id={`hsk-${level}-unit-${unit.id}`}
                label="unit"
                type="unit"
              />
            </div>
          </Card>
        </div>
      </Surface>
      <section className="grid gap-8 xl:grid-cols-[1fr_430px]">
        <div className="space-y-8">
          <div id="vocabulary">
            <VocabularyList words={unit.words} level={level} />
          </div>
          <div id="conversation">
            {conversation
              ? <ConversationLesson
                  conversation={conversation}
                  words={allWords}
                />
              : null}
          </div>
        </div>
        <div className="xl:sticky xl:top-28 xl:self-start">
          <FlashcardDeck words={unit.words} />
        </div>
      </section>
    </div>
  );
}
