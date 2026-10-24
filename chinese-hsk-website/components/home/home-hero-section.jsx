"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { Pill, Surface } from "@/components/ui/card";

export default function HomeHeroSection({ totalWords = 0, totalUnits = 0 }) {
  const { lang, tr } = useLanguage();
  const isArabic = lang === "ar";

  return (
    <section className="grid gap-6 py-3 sm:py-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
      <div className="animate-rise-in space-y-4 sm:space-y-5">
        <h1 className="text-balance max-w-2xl text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.12] sm:leading-[1.08] text-slate-950 tracking-tight">
          {tr("homeHeroTitle")}
        </h1>
        <p className="max-w-xl text-sm sm:text-base font-semibold leading-relaxed text-slate-600">
          {tr("homeHeroSubtitle")}
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          <Link
            href="/hsk/1"
            className="rounded-full bg-teal-700 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black text-white shadow-xs transition hover:-translate-y-0.5 hover:bg-teal-800"
          >
            {tr("startHsk1")}
          </Link>
          <Link
            href="/flashcards"
            className="rounded-full border border-slate-300 bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black text-slate-900 shadow-xs transition hover:-translate-y-0.5 hover:border-slate-400"
          >
            {tr("reviewFlashcards")}
          </Link>
          <Link
            href="/grammar"
            className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-black text-blue-900 shadow-xs transition hover:-translate-y-0.5 hover:border-blue-300"
          >
            {tr("grammarPath")}
          </Link>
        </div>
        <div className="grid max-w-xs grid-cols-2 overflow-hidden rounded-xl border border-slate-200 bg-white text-center shadow-xs">
          <div className="p-2.5 sm:p-3">
            <strong className="block text-xl sm:text-2xl font-black text-slate-950">
              {totalWords}
            </strong>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] text-slate-500">
              {tr("words")}
            </span>
          </div>
          <div className="border-x border-slate-200 p-2.5 sm:p-3">
            <strong className="block text-xl sm:text-2xl font-black text-slate-950">
              {totalUnits}
            </strong>
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.14em] text-slate-500">
              {tr("units")}
            </span>
          </div>
        </div>
      </div>

      <Surface className="p-3 sm:p-4 lg:p-5">
        <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:p-4 text-slate-950">
          <div className="flex items-center justify-between gap-3">
            <Pill tone="green">{tr("liveLessonPreview")}</Pill>
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.18em] text-teal-700">
              {tr("shadowing")}
            </span>
          </div>

          <div className="mt-3.5 sm:mt-4 grid gap-2.5 sm:gap-3">
            {/* Teacher Card */}
            <div className="max-w-[88%] rounded-xl border border-slate-200 bg-white p-3 sm:p-3.5 shadow-2xs">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-teal-700">
                {tr("teacher")}
              </p>
              <p
                className="hanzi-display mt-1 text-xl sm:text-2xl font-black text-slate-950"
                dir="ltr"
              >
                <bdi>{"\u4f60\u4eca\u5929\u60f3\u5b66\u4ec0\u4e48\uff1f"}</bdi>
              </p>
              <p
                className="mt-1 text-xs sm:text-sm font-semibold text-teal-700"
                dir="ltr"
              >
                <bdi>Ni jintian xiang xue shenme?</bdi>
              </p>
              <p
                className="mt-1 text-xs text-slate-600 font-medium leading-snug"
                dir={isArabic ? "rtl" : "ltr"}
              >
                {tr("previewTeacherLineTranslation")}
              </p>
            </div>

            {/* Student Card */}
            <div className="ml-auto max-w-[88%] rounded-xl border border-blue-200 bg-blue-50 p-3 sm:p-3.5 text-slate-950 shadow-2xs">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-blue-800">
                {tr("student")}
              </p>
              <p
                className="hanzi-display mt-1 text-xl sm:text-2xl font-black text-slate-950"
                dir="ltr"
              >
                <bdi>{"\u6211\u60f3\u7ec3\u4e60\u4f1a\u8bdd\u3002"}</bdi>
              </p>
              <p
                className="mt-1 text-xs sm:text-sm font-semibold text-slate-700"
                dir="ltr"
              >
                <bdi>Wo xiang lianxi huihua.</bdi>
              </p>
              <p
                className="mt-1 text-xs text-slate-700 font-medium leading-snug"
                dir={isArabic ? "rtl" : "ltr"}
              >
                {tr("previewStudentLineTranslation")}
              </p>
            </div>
          </div>

          {/* Pronunciation Notice */}
          <div className="mt-3.5 sm:mt-4 rounded-xl border border-slate-200 bg-white p-3">
            <div className="mb-1.5 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
              <span>{tr("pronunciationPractice")}</span>
              <span>{tr("comingSoon")}</span>
            </div>
            <p className="text-xs font-semibold leading-relaxed text-slate-600">
              {tr("pronunciationNotice")}
            </p>
          </div>
        </div>
      </Surface>
    </section>
  );
}
