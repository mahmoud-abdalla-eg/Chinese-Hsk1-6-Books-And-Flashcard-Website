import Link from "next/link";
import { Localized } from "@/components/language/language-provider";
import { Card, Pill, ProgressBar } from "@/components/ui/card";
import { levelThemes } from "@/lib/data/design";

export default function UnitCard({ unit }) {
  const theme = levelThemes[unit.level];
  return (
    <Card className="group relative overflow-hidden transition duration-300 hover:-translate-y-1">
      <div
        className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b ${theme.accent}`}
      />
      <div className="space-y-5 pl-2">
        <div className="flex items-center justify-between gap-3">
          <Pill tone="blue">
            <Localized k="unit" /> {unit.id}
          </Pill>
          <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
            {unit.wordCount} <Localized k="words" />
          </span>
        </div>
        <div>
          <h3 className="text-2xl font-black text-slate-950">
            <Localized k="words" /> {unit.start}-{unit.end}
          </h3>
          <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
            Study the words, review flashcards, practice conversation,
            listening, shadowing, and track your progress in one focused room.
          </p>
        </div>
        <ProgressBar value={0} />
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/hsk/${unit.level}/unit/${unit.id}`}
            className="rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white hover:bg-teal-800"
          >
            <Localized k="openUnit" />
          </Link>
          <Link
            href={`/flashcards/hsk/${unit.level}?unit=${unit.id}`}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-800"
          >
            <Localized k="flashcards" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
