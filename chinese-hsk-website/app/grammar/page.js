import Link from "next/link";
import { Card, Pill, SectionHeading, Surface } from "@/components/ui/card";
import {
  getManagedGrammarLevels,
  getManagedGrammarPath,
} from "@/lib/admin/course-grammar";

const levelLabels = {
  1: "Sentence basics",
  2: "Daily patterns",
  3: "Longer ideas",
  4: "Connected speech",
  5: "Advanced flow",
  6: "Polished expression",
};

export const revalidate = 300;

export default async function GrammarPage() {
  const grammarItems = await getManagedGrammarPath();
  const levels = await getManagedGrammarLevels();
  return (
    <div className="space-y-10 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:p-10">
        <div>
          <Pill>Grammar path</Pill>
          <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
            Learn grammar in small, clear steps.
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            Choose an HSK level, open a unit, and practice sentence patterns
            with examples, pinyin, and short English explanations.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-slate-50 text-slate-950">
            <strong className="block text-5xl font-black">
              {grammarItems.length}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              cards
            </span>
          </Card>
          <Card className="bg-blue-50 text-blue-950">
            <strong className="block text-5xl font-black">
              {levels.length}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
              levels
            </span>
          </Card>
          <Card className="bg-teal-50 text-teal-950">
            <strong className="block text-5xl font-black">10</strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-teal-700">
              min
            </span>
          </Card>
        </div>
      </Surface>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Choose a level"
          title="Grammar levels"
          text="Each level is split into short units so the page stays easy to scan and practice."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {levels.map(({ level, entries }) => (
            <Link
              key={level}
              href={`/grammar/hsk/${level}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-teal-600" />
              <Pill>HSK {level}</Pill>
              <h2 className="mt-5 text-3xl font-black text-slate-950">
                {levelLabels[level] || `Level ${level}`}
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {entries.length} grammar points arranged into focused units.
              </p>
              <span className="mt-8 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white">
                Open level
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
