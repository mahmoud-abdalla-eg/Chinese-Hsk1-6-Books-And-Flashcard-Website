"use client";

import Link from "next/link";
import { Localized } from "@/components/language/language-provider";
import { Card, Pill, ProgressBar } from "@/components/ui/card";
import { levelThemes } from "@/lib/data/design";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function UnitCard({ unit, isCustom = false }) {
  const theme = levelThemes[unit.level];
  const { progress } = usePersistentProgress();
  const wordIds = unit.words?.map((w) => w.id) || [];
  const learnedSet = new Set(progress?.learnedWords || []);
  const learnedCount = wordIds.filter((id) => learnedSet.has(id)).length;
  const totalCount = unit.wordCount || wordIds.length || 1;
  const percent = Math.min(100, Math.round((learnedCount / totalCount) * 100));

  const unitHref = isCustom
    ? `/flashcards/hsk/${unit.level}?start=${unit.start}&end=${unit.end}`
    : `/hsk/${unit.level}/unit/${unit.id}`;

  const flashcardsHref = isCustom
    ? `/flashcards/hsk/${unit.level}?start=${unit.start}&end=${unit.end}`
    : `/flashcards/hsk/${unit.level}/unit/${unit.id}`;

  return (
    <Card className="group relative overflow-hidden transition duration-300 hover:-translate-y-1 shadow-xs">
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
            <Localized k="unitCardStudyDesc" />
          </p>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs font-bold">
            <span className="text-slate-500"><Localized k="unitMastery" /></span>
            <span className="text-teal-700">{learnedCount} / {totalCount} ({percent}%)</span>
          </div>
          <ProgressBar value={percent} />
        </div>

        <div className="flex flex-wrap gap-2.5">
          {!isCustom ? (
            <Link
              href={unitHref}
              className="rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white hover:bg-teal-800 transition"
            >
              <Localized k="openUnit" />
            </Link>
          ) : null}
          <Link
            href={flashcardsHref}
            className={`rounded-full px-4 py-2 text-sm font-black transition ${
              isCustom
                ? "bg-teal-700 text-white hover:bg-teal-800"
                : "border border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <Localized k="flashcards" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
