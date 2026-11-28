"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { Pill, Surface } from "@/components/ui/card";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function HomeHeroSection({ totalWords = 0, totalUnits = 0 }) {
  const { lang, tr } = useLanguage();
  const isArabic = lang === "ar";
  const { progress, syncStatus } = usePersistentProgress();
  const hasProgress =
    progress.learnedWords.length > 0 ||
    progress.favorites.length > 0 ||
    progress.reviewHistory.length > 0 ||
    progress.completedUnits.length > 0 ||
    progress.completedConversations.length > 0;
  const latestReview = [...progress.reviewHistory].reverse().find((review) => {
    const level = Number(review.level);
    return Number.isInteger(level) && level >= 1 && level <= 6;
  });
  const continueHref = latestReview
    ? `/flashcards/hsk/${Number(latestReview.level)}`
    : "/dashboard";
  const now = Date.now();
  const dueReviewCount = Object.values(progress.wordStats || {}).filter(
    (stats) =>
      stats?.nextReviewAt && new Date(stats.nextReviewAt).getTime() <= now,
  ).length;
  const isProgressLoading = syncStatus === "loading";

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
          {hasProgress ? (
            <>
              <Link
                href={continueHref}
                className="inline-flex min-h-11 items-center rounded-full bg-teal-700 px-5 py-2.5 text-xs font-black text-white shadow-xs transition hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm"
              >
                {tr("continueLearning")}
              </Link>
              {dueReviewCount > 0 ? (
                <Link
                  href="/dashboard/words?filter=due"
                  className="inline-flex min-h-11 items-center rounded-full border border-teal-200 bg-teal-50 px-5 py-2.5 text-xs font-black text-teal-900 shadow-xs transition hover:-translate-y-0.5 hover:border-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm"
                >
                  {tr("reviewDueCards")} ({dueReviewCount})
                </Link>
              ) : null}
            </>
          ) : isProgressLoading ? (
            <div
              aria-hidden="true"
              className="h-11 w-36 animate-pulse rounded-full bg-slate-200"
            />
          ) : (
            <Link
              href="/hsk/1"
              className="inline-flex min-h-11 items-center rounded-full bg-teal-700 px-5 py-2.5 text-xs font-black text-white shadow-xs transition hover:-translate-y-0.5 hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm"
            >
              {tr("startHsk1")}
            </Link>
          )}
          <Link
            href="/flashcards"
            className="inline-flex min-h-11 items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs font-black text-slate-900 shadow-xs transition hover:-translate-y-0.5 hover:border-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm"
          >
            {tr("reviewFlashcards")}
          </Link>
          <Link
            href="/grammar"
            className="inline-flex min-h-11 items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5 text-xs font-black text-blue-900 shadow-xs transition hover:-translate-y-0.5 hover:border-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-700 focus-visible:ring-offset-2 sm:px-6 sm:py-3 sm:text-sm"
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
          <div className="flex items-center gap-3">
            <Pill tone="green">{tr("sampleLesson")}</Pill>
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
            <div className="ms-auto max-w-[88%] rounded-xl border border-blue-200 bg-blue-50 p-3 sm:p-3.5 text-slate-950 shadow-2xs">
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

          <div className="mt-3.5 sm:mt-4 rounded-xl border border-slate-200 bg-white p-3">
            <div className="mb-1.5 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">
              <span>{tr("sampleDialogue")}</span>
              <span>{tr("sampleOnly")}</span>
            </div>
            <p className="text-xs font-semibold leading-relaxed text-slate-600">
              {tr("sampleLessonNote")}
            </p>
          </div>
        </div>
      </Surface>
    </section>
  );
}
