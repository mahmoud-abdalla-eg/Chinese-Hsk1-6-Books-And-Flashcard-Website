"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import CompletionToggle from "@/components/progress/completion-toggle";
import { Card, ProgressBar } from "@/components/ui/card";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function UnitHeroCard({ level, unit }) {
  const { tr } = useLanguage();
  const { progress } = usePersistentProgress();
  const wordIds = unit?.words?.map((w) => w.id) || [];
  const learnedSet = new Set(progress?.learnedWords || []);
  const learnedCount = wordIds.filter((id) => learnedSet.has(id)).length;
  const totalCount = wordIds.length || 1;
  const progressPercent = Math.min(
    100,
    Math.round((learnedCount / totalCount) * 100),
  );

  return (
    <Card className="flex flex-col justify-between gap-5 p-6 shadow-sm">
      <div>
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.16em] text-slate-500">
          <span>{tr("unitProgress")}</span>
          <span className="text-teal-700 font-bold">{progressPercent}%</span>
        </div>
        <div className="mt-3">
          <ProgressBar value={progressPercent} />
        </div>
        <p className="mt-2 text-xs font-semibold text-slate-500">
          {learnedCount} {tr("wordsOf")} {unit?.words?.length || 0}{" "}
          {tr("wordsMastered")}
        </p>
      </div>

      <div className="space-y-3">
        <Link
          href={`/flashcards/hsk/${level}/unit/${unit.id}`}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-700 px-5 py-3.5 text-center text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-800"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m9 8 6 4-6 4Z" />
          </svg>
          {tr("practiceFlashcardsCount")} ({unit?.words?.length || 0}{" "}
          {tr("words")})
        </Link>

        <div className="grid grid-cols-2 gap-2 text-xs font-black">
          <a
            href="#vocabulary"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          >
            {tr("vocabularyList")}
          </a>
          <a
            href="#conversation"
            className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-slate-700 hover:border-slate-300 hover:bg-slate-50"
          >
            {tr("conversation")}
          </a>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-3">
        <CompletionToggle
          id={`hsk-${level}-unit-${unit.id}`}
          label="Unit"
          type="unit"
        />
      </div>
    </Card>
  );
}
