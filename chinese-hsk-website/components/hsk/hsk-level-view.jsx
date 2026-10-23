"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import LevelUnitsView from "@/components/hsk/level-units-view";
import { Card, Pill, ProgressBar, SectionHeading, Surface } from "@/components/ui/card";
import { studyModes } from "@/lib/data/design";

export default function HskLevelView({
  level,
  words = [],
  units = [],
  theme,
  firstWords = [],
  hasVocabulary = false,
}) {
  const { tr } = useLanguage();

  return (
    <div className="space-y-10 pb-8">
      {/* Level Hero */}
      <Surface className="relative overflow-hidden p-7 lg:p-10">
        <div
          className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <Pill>HSK {level}</Pill>
            <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
              {tr(theme.scene)}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
              {tr(theme.tone)} {tr("hskLevelHeroOverview")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {units.length ? (
                <Link
                  href={`/hsk/${level}/unit/1`}
                  className="rounded-full bg-teal-700 px-6 py-3 text-sm font-black text-white shadow-sm hover:bg-teal-800"
                >
                  {tr("startUnit1")}
                </Link>
              ) : (
                <Link
                  href={`/grammar/hsk/${level}`}
                  className="rounded-full bg-teal-700 px-6 py-3 text-sm font-black text-white shadow-sm hover:bg-teal-800"
                >
                  {tr("grammarPath")} HSK {level}
                </Link>
              )}
              <Link
                href={`/flashcards/hsk/${level}`}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-900 hover:border-slate-400"
              >
                {tr("reviewFlashcards")}
              </Link>
            </div>
          </div>

          <Card className="bg-blue-50 text-slate-950">
            <div className="text-6xl font-black text-blue-900">
              {words.length}
            </div>
            <p className="mt-1 font-bold text-slate-700">{tr("wordsToLearn")}</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white p-3">
                <strong className="block text-2xl">{units.length}</strong>
                <span className="text-slate-500 font-bold">{tr("units")}</span>
              </div>
              <div className="rounded-2xl bg-white p-3">
                <strong className="block text-2xl">6</strong>
                <span className="text-slate-500 font-bold">{tr("waysToPractice")}</span>
              </div>
            </div>
            <div className="mt-5">
              <ProgressBar value={0} />
            </div>
          </Card>
        </div>
      </Surface>

      {/* Main Layout Grid */}
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="order-last lg:order-first space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Card>
            <h2 className="text-xl font-black text-slate-950">{tr("levelMap")}</h2>
            <div className="mt-4 grid gap-2">
              {units.length ? (
                units.map((unit) => (
                  <Link
                    key={unit.id}
                    href={`/hsk/${level}/unit/${unit.id}`}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-teal-700 hover:text-white"
                  >
                    <span>
                      {tr("unit")} {unit.id}
                    </span>
                    <span>
                      {unit.start}-{unit.end}
                    </span>
                  </Link>
                ))
              ) : (
                <p className="rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-600">
                  {tr("noWordsYet")}
                </p>
              )}
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-black text-slate-950">
              {tr("practiceModes")}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {studyModes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                >
                  {tr(mode)}
                </span>
              ))}
            </div>
          </Card>
        </aside>

        <section className="space-y-8">
          <SectionHeading
            eyebrow={tr("studyUnits")}
            title={`HSK ${level} ${tr("units")}`}
            text={tr("unitCardStudyDesc")}
          />
          <LevelUnitsView level={level} words={words} defaultUnits={units} />

          <Card>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Pill tone="green">{tr("vocabularyPreview")}</Pill>
                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  {tr("firstWordsInThisLevel")}
                </h2>
              </div>
              <Link
                href={`/flashcards/hsk/${level}`}
                className="text-sm font-black text-teal-700 hover:text-teal-800"
              >
                {tr("practiceTheseWords")}
              </Link>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {hasVocabulary ? (
                firstWords.map((word) => (
                  <Link
                    key={word.id}
                    href={`/hsk/${level}/word/${word.id}`}
                    className="rounded-2xl bg-slate-50 p-4 transition hover:bg-teal-700 hover:text-white"
                  >
                    <span className="hanzi-display block text-3xl font-black" dir="ltr">
                      <bdi>{word.hanzi}</bdi>
                    </span>
                    <span className="text-sm font-bold opacity-70" dir="ltr">
                      <bdi>{word.pinyin}</bdi>
                    </span>
                  </Link>
                ))
              ) : (
                <p className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-7 text-slate-600 sm:col-span-3">
                  {tr("noWordsYet")}
                </p>
              )}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
