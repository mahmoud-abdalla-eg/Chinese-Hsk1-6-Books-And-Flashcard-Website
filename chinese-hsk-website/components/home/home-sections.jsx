"use client";

import Link from "next/link";
import { useState } from "react";
import LevelCard from "@/components/hsk/level-card";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, SectionHeading } from "@/components/ui/card";
import { courseHighlights, dailyTopics, studyModes } from "@/lib/data/design";

export default function HomeSections({ summaries = [] }) {
  const { lang, tr } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState(1);
  const startPath = [
    {
      labelKey: "startPathVocabulary",
      href: `/hsk/${selectedLevel}`,
    },
    {
      labelKey: "startPathConversations",
      href: `/conversations/hsk/${selectedLevel}`,
    },
    { labelKey: "startPathGrammar", href: `/grammar/hsk/${selectedLevel}` },
    {
      labelKey: "startPathFlashcards",
      href: `/flashcards/hsk/${selectedLevel}`,
    },
  ];

  return (
    <>
      <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="space-y-3">
          <Pill tone="green">{tr("startHere")}</Pill>
          <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            {tr("startHereTitle")}
          </h2>
          <p className="max-w-xl text-sm font-semibold leading-6 text-slate-600 sm:text-base sm:leading-7">
            {tr("startHereDesc")}
          </p>
          <fieldset className="flex flex-wrap gap-2 border-0 p-0 pt-1">
            <legend className="sr-only">{tr("chooseHskLevel")}</legend>
            {[1, 2, 3, 4, 5, 6].map((level) => (
              <button
                key={level}
                type="button"
                aria-pressed={selectedLevel === level}
                onClick={() => setSelectedLevel(level)}
                className={`min-h-11 min-w-11 rounded-xl border px-3 text-sm font-black transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 ${
                  selectedLevel === level
                    ? "border-teal-700 bg-teal-700 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-teal-50"
                }`}
              >
                {level}
              </button>
            ))}
          </fieldset>
        </div>
        <ol className="grid gap-2 sm:grid-cols-2">
          {startPath.map((step, index) => (
            <li key={step.labelKey}>
              <Link
                href={step.href}
                className="group flex min-h-16 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white text-xs font-black text-teal-800 ring-1 ring-slate-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-black uppercase tracking-[0.14em] text-slate-500">
                    {tr("hskLevelLabel")} {selectedLevel}
                  </span>
                  <span className="block text-sm font-black text-slate-950">
                    {tr(step.labelKey)}
                  </span>
                </span>
                <svg
                  className={`h-4 w-4 shrink-0 text-teal-700 transition ${
                    lang === "ar"
                      ? "rotate-180 group-hover:-translate-x-0.5"
                      : "group-hover:translate-x-0.5"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-7-7 7 7-7 7"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* Level Selection Section */}
      <section className="space-y-8">
        <SectionHeading
          eyebrow={tr("chooseYourLevel")}
          title={tr("sixLevelsRhythm")}
          text={tr("eachLevelSplit")}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {summaries.map((summary) => (
            <LevelCard key={summary.level} summary={summary} />
          ))}
        </div>
      </section>

      {/* Course Highlights */}
      <section className="grid gap-6 lg:grid-cols-3">
        {courseHighlights.map((item) => (
          <Card key={item.title} className="relative overflow-hidden">
            <Pill tone="green">{tr(item.label)}</Pill>
            <h3 className="mt-5 text-2xl font-black text-slate-950">
              {tr(item.title)}
            </h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              {tr(item.text)}
            </p>
          </Card>
        ))}
      </section>

      {/* Study Modes */}
      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow={tr("studyModesTitle")}
          title={tr("studyModesSubtitle")}
          text={tr("studyModesDesc")}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {studyModes.map((mode, index) => (
            <Card key={mode} className="flex items-center gap-4 p-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-700 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-black text-slate-950">{tr(mode)}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Daily Life Topics Coverage */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Pill tone="green">{tr("dailyLifeCoverage")}</Pill>
            <h2 className="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">
              {tr("dailyLifeCoverageDesc")}
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {dailyTopics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700"
              >
                {tr(topic)}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
