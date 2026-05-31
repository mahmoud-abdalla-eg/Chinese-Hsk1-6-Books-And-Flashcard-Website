import Link from "next/link";
import { Card, Pill, SectionHeading, Surface } from "@/components/ui/card";
import {
  getManagedGrammarItemsForLevel,
  getManagedGrammarUnitsForLevel,
} from "@/lib/admin/course-grammar";

export const dynamic = "force-dynamic";

export default async function GrammarLevelPage({ params }) {
  const { level } = await params;
  const items = await getManagedGrammarItemsForLevel(level);
  const units = await getManagedGrammarUnitsForLevel(level);
  if (!items.length) return <Card>Grammar level not found.</Card>;
  return (
    <div className="space-y-10 pb-8">
      <Surface className="relative overflow-hidden p-7 lg:p-10">
        <div className="absolute inset-x-0 top-0 h-2 bg-teal-600" />
        <Pill>HSK {level} grammar</Pill>
        <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
          Level {level} grammar units
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Work through {items.length} grammar points in short units. Each unit
          focuses on a small set of patterns so practice stays clear.
        </p>
      </Surface>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Units"
          title={`HSK ${level} grammar map`}
          text="Open a unit to study examples, pinyin, and explanations together."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {units.map((unit) => (
            <Card key={unit.id} className="relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1.5 bg-teal-600" />
              <Pill tone="blue">Unit {unit.id}</Pill>
              <h2 className="mt-5 text-3xl font-black text-slate-950">
                {unit.title || `Patterns ${unit.start}-${unit.end}`}
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {unit.description ||
                  `${unit.itemCount} short grammar cards for focused practice.`}
              </p>
              <Link
                href={`/grammar/hsk/${level}/unit/${unit.id}`}
                className="mt-8 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
              >
                Open unit
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
