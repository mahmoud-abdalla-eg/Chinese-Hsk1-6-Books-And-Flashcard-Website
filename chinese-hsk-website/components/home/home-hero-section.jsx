"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { Pill, Surface } from "@/components/ui/card";

export default function HomeHeroSection({ totalWords = 0, totalUnits = 0 }) {
  const { lang, tr } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section className="grid gap-10 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="animate-rise-in space-y-7">
        <Pill>{tr("homeHeroBadge")}</Pill>
        <h1 className="text-balance max-w-5xl text-5xl font-black leading-[0.95] text-slate-950 sm:text-7xl lg:text-8xl">
          {tr("homeHeroTitle")}
        </h1>
        <p className="max-w-2xl text-lg font-semibold leading-8 text-slate-600">
          {tr("homeHeroSubtitle")}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/hsk/1"
            className="rounded-full bg-teal-700 px-6 py-4 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-teal-800"
          >
            {tr("startHsk1")}
          </Link>
          <Link
            href="/flashcards"
            className="rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400"
          >
            {tr("reviewFlashcards")}
          </Link>
          <Link
            href="/grammar"
            className="rounded-full border border-blue-200 bg-blue-50 px-6 py-4 text-sm font-black text-blue-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-300"
          >
            {tr("grammarPath")}
          </Link>
        </div>
        <div className="grid max-w-md grid-cols-2 overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm">
          <div className="p-4">
            <strong className="block text-3xl font-black text-slate-950">
              {totalWords}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              {tr("words")}
            </span>
          </div>
          <div className="border-x border-slate-200 p-4">
            <strong className="block text-3xl font-black text-slate-950">
              {totalUnits}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              {tr("units")}
            </span>
          </div>
        </div>
      </div>

      <Surface className="p-5 lg:p-7">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-950">
          <div className="flex items-center justify-between gap-4">
            <Pill tone="green">{tr("liveLessonPreview")}</Pill>
            <span className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              {tr("shadowing")}
            </span>
          </div>

          <div className="mt-8 grid gap-4">
            {/* Teacher Card */}
            <div className="max-w-[85%] rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700">
                {tr("teacher")}
              </p>
              <p className="hanzi-display mt-2 text-4xl font-black" dir="ltr">
                <bdi>{"\u4f60\u4eca\u5929\u60f3\u5b66\u4ec0\u4e48\uff1f"}</bdi>
              </p>
              <p className="mt-2 font-semibold text-teal-700" dir="ltr">
                <bdi>Ni jintian xiang xue shenme?</bdi>
              </p>
              <p
                className="mt-2 text-sm text-slate-600 font-medium"
                dir={isArabic ? "rtl" : "ltr"}
              >
                {tr("previewTeacherLineTranslation")}
              </p>
            </div>

            {/* Student Card */}
            <div className="ml-auto max-w-[85%] rounded-2xl border border-blue-200 bg-blue-50 p-4 text-slate-950">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-blue-800">
                {tr("student")}
              </p>
              <p className="hanzi-display mt-2 text-4xl font-black" dir="ltr">
                <bdi>{"\u6211\u60f3\u7ec3\u4e60\u4f1a\u8bdd\u3002"}</bdi>
              </p>
              <p className="mt-2 font-semibold text-slate-700" dir="ltr">
                <bdi>Wo xiang lianxi huihua.</bdi>
              </p>
              <p
                className="mt-2 text-sm text-slate-700 font-medium"
                dir={isArabic ? "rtl" : "ltr"}
              >
                {tr("previewStudentLineTranslation")}
              </p>
            </div>
          </div>

          {/* Pronunciation Notice */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex items-center justify-between text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              <span>{tr("pronunciationPractice")}</span>
              <span>{tr("comingSoon")}</span>
            </div>
            <p className="text-sm font-semibold leading-6 text-slate-600">
              {tr("pronunciationNotice")}
            </p>
          </div>
        </div>
      </Surface>
    </section>
  );
}
