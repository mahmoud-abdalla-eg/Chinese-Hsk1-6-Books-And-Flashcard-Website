"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, SectionHeading, Surface } from "@/components/ui/card";
import { getGrammarLevelLabel } from "@/lib/i18n/dictionaries";

export default function GrammarView({ grammarItemsCount = 0, levels = [] }) {
  const { lang, tr } = useLanguage();

  return (
    <div className="space-y-10 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:p-10">
        <div>
          <Pill>{tr("grammarPath")}</Pill>
          <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
            {tr("grammarHeroTitle")}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            {tr("grammarHeroDesc")}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <Card className="bg-slate-50 text-slate-950">
            <strong className="block text-5xl font-black">
              {grammarItemsCount}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              {tr("cards")}
            </span>
          </Card>
          <Card className="bg-blue-50 text-blue-950">
            <strong className="block text-5xl font-black">
              {levels.length}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
              {tr("levels")}
            </span>
          </Card>
          <Card className="bg-teal-50 text-teal-950">
            <strong className="block text-5xl font-black">10</strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-teal-700">
              {tr("min")}
            </span>
          </Card>
        </div>
      </Surface>

      <section className="space-y-6">
        <SectionHeading
          eyebrow={tr("chooseALevel")}
          title={tr("grammarLevels")}
          text={tr("grammarLevelsDesc")}
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
                {getGrammarLevelLabel(level, lang) || `HSK ${level}`}
              </h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
                {entries.length} {tr("grammarPoints")}
              </p>
              <span className="mt-8 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white">
                {tr("openLevel")}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
