import Link from "next/link";
import GrammarCard from "@/components/grammar/grammar-card";
import { Card, Pill, Surface } from "@/components/ui/card";
import {
  getManagedGrammarUnit,
  getManagedGrammarUnitsForLevel,
} from "@/lib/admin/course-grammar";
import { getGrammarUnitsForLevel } from "@/lib/data/grammar";
import { HSK_LEVELS } from "@/lib/data/schema";

export const revalidate = 300;

export function generateStaticParams() {
  return HSK_LEVELS.flatMap((level) =>
    getGrammarUnitsForLevel(level).map((unit) => ({
      level: String(level),
      unitId: String(unit.id),
    })),
  );
}

export default async function GrammarUnitPage({ params }) {
  const { level, unitId } = await params;
  const unit = await getManagedGrammarUnit(level, unitId);
  if (!unit) return <Card>Grammar unit not found.</Card>;
  const units = await getManagedGrammarUnitsForLevel(level);
  const hasNext = Number(unitId) < units.length;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="relative overflow-hidden p-7 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-2 bg-teal-600" />
        <Pill>
          HSK {level} - Grammar unit {unit.id}
        </Pill>
        <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
          {unit.title || `Patterns ${unit.start}-${unit.end}`}
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          {unit.description ||
            "Read the pattern, say the example out loud, then make your own sentence before moving to the next card."}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/grammar/hsk/${level}`}
            className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-800"
          >
            Back to level
          </Link>
          {Number(unitId) > 1
            ? <Link
                href={`/grammar/hsk/${level}/unit/${Number(unitId) - 1}`}
                className="rounded-full bg-slate-700 px-5 py-3 text-sm font-black text-white hover:bg-slate-800"
              >
                Previous unit
              </Link>
            : null}
          {hasNext
            ? <Link
                href={`/grammar/hsk/${level}/unit/${Number(unitId) + 1}`}
                className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
              >
                Next unit
              </Link>
            : null}
        </div>
      </Surface>

      <div className="grid gap-4 lg:grid-cols-2">
        {unit.items.map((item, index) => (
          <GrammarCard key={`${item.id}-${index}`} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
