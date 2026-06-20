"use client";

import { useMemo } from "react";
import MongoHealth from "@/components/dashboard/mongo-health";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, ProgressBar, Surface } from "@/components/ui/card";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function DashboardClient({ summaries, levelWords = [] }) {
  const { lang, tr } = useLanguage();
  const { progress, syncStatus } = usePersistentProgress();
  const learnedSet = useMemo(
    () => new Set(progress.learnedWords),
    [progress.learnedWords],
  );
  const wordById = useMemo(() => {
    const map = new Map();
    for (const level of levelWords) {
      for (const word of level.words || []) map.set(word.id, word);
    }
    return map;
  }, [levelWords]);
  const totalWords = summaries.reduce((sum, item) => sum + item.wordCount, 0);
  const percent = totalWords
    ? Math.round((learnedSet.size / totalWords) * 100)
    : 0;
  const recent = progress.reviewHistory.slice(-5).reverse();
  const dailyActivity = buildDailyActivity(progress.reviewHistory);
  const streak = buildStreak(dailyActivity);
  const levelProgress = levelWords.map((summary) => {
    const words = summary.words || [];
    const hardIds = new Set(progress.hardWords);
    return {
      ...summary,
      easyWords: words.filter(
        (word) => progress.wordStats[word.id]?.lastQuality === "Easy",
      ),
      hardWords: words.filter((word) => hardIds.has(word.id)),
      learnedWords: words.filter((word) => learnedSet.has(word.id)),
    };
  });
  const weakWords = Object.entries(progress.wordStats)
    .map(([wordId, stats]) => ({
      wordId,
      word: wordById.get(wordId),
      attempts: stats.attempts || 0,
      hardReviews: stats.hardReviews || 0,
      lastQuality: stats.lastQuality || "",
    }))
    .sort((a, b) => b.hardReviews - a.hardReviews || b.attempts - a.attempts)
    .slice(0, 8);
  const qualityCounts = ["Again", "Hard", "Good", "Easy"].map((quality) => ({
    label: qualityLabel(quality, tr),
    value: progress.reviewHistory.filter((review) => review.quality === quality)
      .length,
  }));
  const maxDailyCount = Math.max(1, ...dailyActivity.map((day) => day.count));
  return (
    <div className="space-y-8 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
        <div>
          <Pill>
            {syncStatus === "synced" ? tr("savedProgress") : tr("progress")}
          </Pill>
          <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
            {tr("yourMandarinProgress")}
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            {tr("dashboardIntro")}
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

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Card>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl bg-slate-50 p-5 text-slate-950">
              <span className="text-4xl font-black">{learnedSet.size}</span>
              <p className="font-bold">{tr("wordsLearned")}</p>
            </div>
            <div className="rounded-2xl bg-blue-50 p-5 text-blue-950">
              <span className="text-4xl font-black">
                {progress.favorites.length}
              </span>
              <p className="font-bold">{tr("favorites")}</p>
            </div>
            <div className="rounded-2xl bg-teal-50 p-5 text-teal-950">
              <span className="text-4xl font-black">{totalWords}</span>
              <p className="font-bold">{tr("courseWords")}</p>
            </div>
            <div className="rounded-2xl bg-rose-50 p-5 text-rose-950">
              <span className="text-4xl font-black">
                {progress.hardWords.length}
              </span>
              <p className="font-bold">{tr("hardWords")}</p>
            </div>
          </div>
          <div className="mt-8 space-y-5">
            {levelProgress.map((summary) => {
              const learnedInLevel = summary.learnedWords.length;
              const levelPercent = summary.wordCount
                ? Math.round((learnedInLevel / summary.wordCount) * 100)
                : 0;
              return (
                <div key={summary.level}>
                  <div className="mb-2 flex justify-between text-sm font-black">
                    <span>HSK {summary.level}</span>
                    <span>
                      {learnedInLevel}/{summary.wordCount} - {levelPercent}%
                    </span>
                  </div>
                  <ProgressBar value={levelPercent} />
                </div>
              );
            })}
          </div>
        </Card>
        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-black text-slate-950">
              {tr("studySnapshot")}
            </h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
              {tr("completedUnits")}: {progress.completedUnits.length}.{" "}
              {tr("completedConversations")}:{" "}
              {progress.completedConversations.length}. {tr("reviews")}:{" "}
              {progress.reviewHistory.length}.
            </p>
          </Card>
          <MongoHealth />
          <Card>
            <h2 className="text-2xl font-black text-slate-950">
              {tr("studyStreak")}
            </h2>
            <div className="mt-3 text-5xl font-black text-teal-700">
              {streak} {tr("days")}
            </div>
            <p className="mt-2 text-sm font-semibold text-slate-600">
              {tr("streakHelp")}
            </p>
          </Card>
          <Card>
            <h2 className="text-2xl font-black text-slate-950">
              {tr("recentStudyActivity")}
            </h2>
            <div className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
              {recent.length ? (
                recent.map((item) => (
                  <span key={item.reviewedAt}>
                    {formatWord(wordById.get(item.wordId), lang) || item.wordId}{" "}
                    - {qualityLabel(item.quality, tr)}
                  </span>
                ))
              ) : (
                <span>{tr("noReviewHistory")}</span>
              )}
            </div>
          </Card>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <h2 className="text-2xl font-black text-slate-950">
            {tr("levelCompletion")}
          </h2>
          <div className="mt-4 grid gap-3">
            {levelProgress.map((level) => (
              <BarRow
                key={level.level}
                label={`HSK ${level.level}`}
                value={level.learnedWords.length}
                max={Math.max(1, level.wordCount)}
                detail={`${level.learnedWords.length}/${level.wordCount}`}
              />
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-black text-slate-950">
            {tr("reviewMix")}
          </h2>
          <div className="mt-4 grid gap-3">
            {qualityCounts.map((item) => (
              <BarRow
                key={item.label}
                label={item.label}
                value={item.value}
                max={Math.max(1, progress.reviewHistory.length)}
                detail={item.value}
              />
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-black text-slate-950">
            {tr("recentScores")}
          </h2>
          <div className="mt-4 grid gap-3 text-sm font-bold text-slate-600">
            {recent.length ? (
              recent.map((item) => (
                <div
                  key={`${item.wordId}-${item.reviewedAt}`}
                  className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3"
                >
                  <span>
                    {formatWord(wordById.get(item.wordId), lang) || item.wordId}
                  </span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-slate-950">
                    {qualityLabel(item.quality, tr)}
                  </span>
                </div>
              ))
            ) : (
              <span>{tr("noReviewHistory")}</span>
            )}
          </div>
        </Card>
      </div>
      <Card>
        <h2 className="text-2xl font-black text-slate-950">
          {tr("wordsByLevel")}
        </h2>
        <div className="mt-5 grid gap-5">
          {levelProgress.map((level) => (
            <div key={level.level} className="rounded-2xl bg-slate-50 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-black text-slate-950">
                  HSK {level.level}
                </h3>
                <span className="text-sm font-black text-slate-600">
                  {level.learnedWords.length}/{level.wordCount}
                </span>
              </div>
              <div className="mt-4 grid gap-4 lg:grid-cols-3">
                <WordGroup
                  lang={lang}
                  label={tr("learned")}
                  words={level.learnedWords}
                  empty={tr("noWordsYet")}
                />
                <WordGroup
                  lang={lang}
                  label={tr("hardWords")}
                  words={level.hardWords}
                  empty={tr("noWordsYet")}
                />
                <WordGroup
                  lang={lang}
                  label={tr("easyWords")}
                  words={level.easyWords}
                  empty={tr("noWordsYet")}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <h2 className="text-2xl font-black text-slate-950">
            {tr("weakWords")}
          </h2>
          <div className="mt-4 grid gap-3">
            {weakWords.length ? (
              weakWords.map((item) => (
                <div
                  key={item.wordId}
                  className="rounded-2xl bg-rose-50 p-4 text-sm font-bold text-rose-950"
                >
                  <strong>{formatWord(item.word, lang) || item.wordId}</strong>
                  <p>
                    {item.hardReviews} {tr("hard")} / {item.attempts}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm font-semibold text-slate-500">
                {tr("reviewFlashcardsForWeakWords")}
              </p>
            )}
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-black text-slate-950">
            {tr("hardCategories")}
          </h2>
          <div className="mt-4 grid gap-3">
            {[
              [tr("hardWords"), progress.hardWords.length],
              [tr("favorites"), progress.favorites.length],
              [tr("dueReviews"), dueReviewCount(progress.wordStats)],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between rounded-2xl bg-slate-50 p-4 text-sm font-black"
              >
                <span>{label}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-2xl font-black text-slate-950">
            {tr("dailyActivity")}
          </h2>
          <div className="mt-4 grid gap-3">
            {dailyActivity.slice(-7).map((day) => (
              <div key={day.day}>
                <div className="mb-1 flex justify-between text-xs font-black">
                  <span>{day.day}</span>
                  <span>{day.count}</span>
                </div>
                <ProgressBar value={(day.count / maxDailyCount) * 100} />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function BarRow({ detail, label, max, value }) {
  const percent = Math.min(100, Math.round((Number(value || 0) / max) * 100));
  return (
    <div>
      <div className="mb-1 flex justify-between text-xs font-black text-slate-600">
        <span>{label}</span>
        <span>{detail}</span>
      </div>
      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-teal-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

function WordGroup({ empty, label, lang, words }) {
  const shownWords = words.slice(0, 10);
  return (
    <div className="rounded-2xl bg-white p-4">
      <div className="mb-3 flex items-center justify-between gap-3">
        <h4 className="text-sm font-black uppercase tracking-[0.12em] text-slate-500">
          {label}
        </h4>
        <span className="text-sm font-black text-slate-950">
          {words.length}
        </span>
      </div>
      <div className="grid gap-2">
        {shownWords.length ? (
          shownWords.map((word) => (
            <span
              key={word.id}
              className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700"
            >
              {formatWord(word, lang)}
            </span>
          ))
        ) : (
          <span className="text-sm font-semibold text-slate-500">{empty}</span>
        )}
        {words.length > shownWords.length ? (
          <span className="text-xs font-black text-slate-500">
            +{words.length - shownWords.length}
          </span>
        ) : null}
      </div>
    </div>
  );
}

function formatWord(word, lang) {
  if (!word) return "";
  const meaning = lang === "ar" ? word.meaning?.ar : word.meaning?.en;
  return [word.hanzi, word.pinyin, meaning].filter(Boolean).join(" - ");
}

function qualityLabel(quality, tr) {
  const key = String(quality || "").toLowerCase();
  return ["again", "hard", "good", "easy"].includes(key) ? tr(key) : quality;
}

function buildDailyActivity(reviews) {
  const map = new Map();
  for (let index = 6; index >= 0; index--) {
    const date = new Date();
    date.setDate(date.getDate() - index);
    map.set(date.toISOString().slice(0, 10), 0);
  }
  for (const review of reviews) {
    const day = String(review.reviewedAt || "").slice(0, 10);
    if (map.has(day)) map.set(day, map.get(day) + 1);
  }
  return [...map.entries()].map(([day, count]) => ({ day, count }));
}

function buildStreak(days) {
  let streak = 0;
  for (const day of days.slice().reverse()) {
    if (day.count > 0) streak += 1;
    else if (streak > 0) break;
  }
  return streak;
}

function dueReviewCount(wordStats) {
  const now = Date.now();
  return Object.values(wordStats).filter(
    (stats) =>
      stats.nextReviewAt && new Date(stats.nextReviewAt).getTime() <= now,
  ).length;
}
