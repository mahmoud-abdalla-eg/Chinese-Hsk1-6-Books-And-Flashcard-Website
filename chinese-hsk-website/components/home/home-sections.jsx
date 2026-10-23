"use client";

import { useLanguage } from "@/components/language/language-provider";
import LevelCard from "@/components/hsk/level-card";
import { Card, Pill, SectionHeading } from "@/components/ui/card";
import { courseHighlights, dailyTopics, studyModes } from "@/lib/data/design";

export default function HomeSections({ summaries = [] }) {
  const { tr } = useLanguage();

  return (
    <>
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
