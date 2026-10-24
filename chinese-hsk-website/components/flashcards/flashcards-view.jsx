"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, SectionHeading, Surface } from "@/components/ui/card";
import { levelThemes } from "@/lib/data/design";

export default function FlashcardsView({ summaries = [], deckCount = 0 }) {
  const { tr } = useLanguage();

  return (
    <div className="space-y-10 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
        <div>
          <Pill>{tr("spacedRepetition")}</Pill>
          <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
            {tr("flashcardsHeroTitle")}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            {tr("flashcardsHeroDesc")}
          </p>
        </div>
        <Card className="bg-teal-50 text-slate-950">
          <div className="text-6xl font-black text-teal-900">{deckCount}</div>
          <p className="mt-1 font-bold text-slate-700">{tr("hskDecks")}</p>
          <p className="mt-4 text-sm font-semibold text-slate-600">
            {tr("pickLevelReviewQuick")}
          </p>
        </Card>
      </Surface>

      {/* Mixed Flashcard Builder Callout */}
      <div className="rounded-3xl border border-teal-200 bg-gradient-to-r from-teal-50 via-white to-emerald-50/60 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎴</span>
            <span className="text-xs font-black uppercase tracking-wider text-teal-800">
              {tr("deckMixerTitle")}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-950">
            {tr("mixedDeckBannerTitle")}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-slate-600 max-w-2xl">
            {tr("mixedDeckBannerDesc")}
          </p>
        </div>
        <Link
          href="/dashboard/words"
          className="rounded-full bg-teal-700 px-6 py-3 text-center text-xs sm:text-sm font-black text-white hover:bg-teal-800 shadow-xs transition shrink-0"
        >
          {tr("openMixedDeckBuilder")} &rarr;
        </Link>
      </div>

      <section className="space-y-6">
        <SectionHeading
          eyebrow={tr("pickADeck")}
          title={tr("studyByLevel")}
          text={tr("studyByLevelDesc")}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {summaries.map((summary) => {
            const theme = levelThemes[summary.level] || {
              accent: "from-teal-400 to-emerald-500",
            };
            return (
              <Link
                key={summary.level}
                href={`/flashcards/hsk/${summary.level}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
                />
                <span className="text-3xl font-black text-slate-950">
                  HSK {summary.level}
                </span>
                <span className="mt-3 block text-sm font-bold text-slate-500">
                  {summary.wordCount} {tr("cards")}
                </span>
                <span className="mt-8 inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white">
                  {tr("openDeck")}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
