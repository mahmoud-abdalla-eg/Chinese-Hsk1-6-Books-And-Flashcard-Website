import Link from "next/link";
import FlashcardDeck from "@/components/flashcards/flashcard-deck";
import { Card, Pill, Surface } from "@/components/ui/card";
import { getManagedUnit } from "@/lib/admin/course-words";
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

export default async function UnitFlashcardsPage({ params }) {
  const { level, unitId } = await params;
  const unit = await getManagedUnit(level, unitId);
  const theme = levelThemes[Number(level)];

  if (!unit) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-2xl font-black text-slate-800">Unit not found</h2>
        <Link
          href={`/hsk/${level}`}
          className="mt-4 inline-block text-sm font-bold text-teal-700 hover:underline"
        >
          Return to HSK {level}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Header with Breadcrumb */}
      <Surface className="relative overflow-hidden p-6 sm:p-8 shadow-sm">
        <div
          className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
        />
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Link
                href={`/hsk/${level}/unit/${unit.id}`}
                className="inline-flex items-center gap-1 text-xs font-black text-teal-700 hover:text-teal-800"
              >
                ← Back to Unit {unit.id} Vocabulary
              </Link>
            </div>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              HSK {level} · Unit {unit.id} Flashcards
            </h1>
            <p className="mt-1 text-sm font-semibold text-slate-600">
              Practice words {unit.start}–{unit.end} ({unit.words?.length || 0} words) with active recall and spaced repetition.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center">
            <Pill tone="blue">Unit {unit.id}</Pill>
            <Link
              href={`/flashcards/hsk/${level}`}
              className="rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-black text-slate-600 hover:border-slate-300 hover:text-slate-900"
            >
              All HSK {level} Cards →
            </Link>
          </div>
        </div>
      </Surface>

      {/* Focused Flashcard Deck Container */}
      <div className="mx-auto max-w-4xl">
        <Card className="p-4 sm:p-8 shadow-sm">
          <FlashcardDeck words={unit.words} />
        </Card>
      </div>
    </div>
  );
}
