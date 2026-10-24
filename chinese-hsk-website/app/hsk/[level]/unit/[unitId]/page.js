import Link from "next/link";
import ConversationLesson from "@/components/conversations/conversation-lesson";
import UnitHeroCard from "@/components/hsk/unit-hero-card";
import { Localized } from "@/components/language/language-provider";
import { Pill, Surface } from "@/components/ui/card";
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

  if (!unit) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-black text-slate-800">
          <Localized k="unitNotFound" />
        </h2>
        <Link
          href={`/hsk/${level}`}
          className="mt-4 inline-block text-sm font-bold text-teal-700 hover:underline"
        >
          <Localized k="returnToHskLevel" /> {level}
        </Link>
      </div>
    );
  }

  const wordMap = new Map(
    (allWords || []).map((w) => [
      w.id,
      { id: w.id, hanzi: w.hanzi, pinyin: w.pinyin },
    ]),
  );

  const conversationTargetWords = conversation
    ? (conversation.targetVocabularyIds || [])
        .map((id) => wordMap.get(id))
        .filter(Boolean)
    : [];

  return (
    <div className="space-y-8 sm:space-y-10 pb-12">
      {/* Unit Hero Banner */}
      <Surface className="relative overflow-hidden p-4 sm:p-7 lg:p-10 shadow-sm">
        <div
          className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
        />
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Pill>HSK {level}</Pill>
              <span className="text-xs font-bold text-slate-600">
                <Localized k="unit" /> {unit.id}
              </span>
            </div>
            <h1 className="mt-3.5 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 break-words tracking-tight">
              <Localized k="words" /> {unit.start}–{unit.end}
            </h1>
            <p className="mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base font-semibold leading-relaxed sm:leading-7 text-slate-600">
              <Localized k="unitStudyAllVocab" />
            </p>
          </div>

          <UnitHeroCard level={level} unit={unit} />
        </div>
      </Surface>

      {/* Full-width Learning Content */}
      <div className="space-y-12">
        <section id="vocabulary">
          <VocabularyList words={unit.words} level={level} />
        </section>

        {conversation
          ? <section id="conversation">
              <ConversationLesson
                conversation={conversation}
                targetWords={conversationTargetWords}
              />
            </section>
          : null}
      </div>
    </div>
  );
}
