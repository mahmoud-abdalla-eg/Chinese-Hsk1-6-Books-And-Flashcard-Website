"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, SectionHeading, Surface } from "@/components/ui/card";
import { levelThemes } from "@/lib/data/design";

export default function ConversationsView({ summaries = [], lessonCount = 0 }) {
  const { tr } = useLanguage();

  return (
    <div className="space-y-10 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
        <div>
          <Pill>{tr("dialogueLearning")}</Pill>
          <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
            {tr("conversationLessonsByLevel")}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            {tr("conversationsHeroDesc")}
          </p>
        </div>
        <Card className="bg-blue-50 text-slate-950">
          <div className="text-6xl font-black text-blue-900">{lessonCount}</div>
          <p className="mt-1 font-bold text-slate-700">{tr("unitLessons")}</p>
          <p className="mt-4 text-sm font-semibold text-slate-600">
            {tr("followUnitsInOrder")}
          </p>
        </Card>
      </Surface>
      <section className="space-y-6">
        <SectionHeading
          eyebrow={tr("conversationLibrary")}
          title={tr("conversationLibrarySubtitle")}
          text={tr("conversationLibraryDesc")}
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {summaries.map((summary) => {
            const theme = levelThemes[summary.level] || {
              accent: "from-teal-400 to-emerald-500",
            };
            return (
              <Link
                key={summary.level}
                href={`/conversations/hsk/${summary.level}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
                />
                <span className="text-3xl font-black">HSK {summary.level}</span>
                <span className="mt-3 block text-sm font-bold text-slate-600">
                  {summary.conversationCount} {tr("unitLessons")}
                </span>
                <span className="mt-8 inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white">
                  {tr("openLibrary")}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
