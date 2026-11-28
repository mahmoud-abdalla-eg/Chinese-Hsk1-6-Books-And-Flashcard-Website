"use client";

import PasswordChangeForm from "@/components/auth/password-change-form";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, ProgressBar, Surface } from "@/components/ui/card";
import { defaultProgress, sanitizeProgress } from "@/lib/progress/storage";

export default function AccountProfile({
  user,
  progress: savedProgress,
  progressUpdatedAt,
  levels,
}) {
  const { lang, tr } = useLanguage();
  const progress = sanitizeProgress(savedProgress || defaultProgress());
  const courseWordIds = new Set(levels.flatMap((level) => level.wordIds));
  const learnedWordIds = new Set(
    progress.learnedWords.filter((wordId) => courseWordIds.has(wordId)),
  );
  const totalWords = levels.reduce((sum, level) => sum + level.wordCount, 0);
  const learnedCount = learnedWordIds.size;
  const percent = totalWords
    ? Math.round((learnedCount / totalWords) * 100)
    : 0;
  const profileStats = [
    [tr("wordsLearned"), learnedCount],
    [tr("favorites"), progress.favorites.length],
    [tr("hardWords"), progress.hardWords.length],
    [tr("reviews"), progress.reviewHistory.length],
    [tr("completedUnits"), progress.completedUnits.length],
    [tr("completedConversations"), progress.completedConversations.length],
  ];

  return (
    <div className="space-y-8 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
        <div>
          <Pill>{tr("profile")}</Pill>
          <h1 className="mt-5 max-w-4xl break-words text-4xl font-black text-slate-950 sm:text-6xl">
            {user.name}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            {tr("accountProfileIntro")}
          </p>
        </div>
        <Card className="bg-blue-50 text-slate-950">
          <div className="text-6xl font-black text-blue-900">{percent}%</div>
          <p className="mt-1 font-bold text-slate-700">
            {tr("overallCourseProgress")}
          </p>
          <div className="mt-5">
            <ProgressBar value={percent} />
          </div>
        </Card>
      </Surface>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <Card>
            <Pill tone="blue">{tr("accountInformation")}</Pill>
            <div className="mt-5 grid gap-4 text-sm font-bold text-slate-700">
              <InfoRow label={tr("accountName")} value={user.name} />
              <InfoRow label={tr("accountEmail")} value={user.email} />
              <InfoRow
                label={tr("memberSince")}
                value={formatDate(user.createdAt, lang, tr("notAvailable"))}
              />
              <InfoRow
                label={tr("progressLastSynced")}
                value={formatDate(progressUpdatedAt, lang, tr("notAvailable"))}
              />
            </div>
          </Card>
          <PasswordChangeForm />
        </div>

        <Card>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Pill tone="green">{tr("savedProgress")}</Pill>
              <h2 className="mt-4 text-3xl font-black text-slate-950">
                {tr("studySnapshot")}
              </h2>
            </div>
            <span className="text-sm font-black text-slate-500">
              {learnedCount}/{totalWords} {tr("courseWords")}
            </span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {profileStats.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <strong className="block text-4xl font-black text-slate-950">
                  {value}
                </strong>
                <span className="mt-1 block text-sm font-bold text-slate-600">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 space-y-4">
            {levels.map((level) => {
              const learnedInLevel = progress.learnedWords.filter(
                (wordId) =>
                  learnedWordIds.has(wordId) && level.wordIds.includes(wordId),
              ).length;
              const levelPercent = level.wordCount
                ? Math.round((learnedInLevel / level.wordCount) * 100)
                : 0;
              return (
                <div key={level.level}>
                  <div className="mb-2 flex justify-between text-sm font-black text-slate-700">
                    <span>HSK {level.level}</span>
                    <span>
                      {learnedInLevel}/{level.wordCount}
                    </span>
                  </div>
                  <ProgressBar value={levelPercent} />
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <span className="block text-xs font-black uppercase tracking-[0.14em] text-slate-500">
        {label}
      </span>
      <span className="mt-1 block text-base text-slate-950">{value}</span>
    </div>
  );
}

function formatDate(value, lang, fallback) {
  if (!value) return fallback;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return fallback;
  const locale = { en: "en-US", zh: "zh-CN", ar: "ar" }[lang] || "en-US";
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date);
}
