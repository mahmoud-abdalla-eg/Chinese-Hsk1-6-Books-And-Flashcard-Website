"use client";

import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill } from "@/components/ui/card";

export default function MixedFlashcardBuilder({
  difficulties = {},
  onToggleDifficulty,
  levels = [1, 2, 3, 4, 5],
  onToggleLevel,
  cardLimit = 0,
  onChangeCardLimit,
  shuffle = true,
  onToggleShuffle,
  matchingCount = 0,
  difficultyCounts = {},
  onStartSession,
  customSelectedCount = 0,
  onStartCustomSelected,
  onClearCustomSelection,
}) {
  const { tr } = useLanguage();

  const difficultyOptions = [
    {
      key: "hard",
      label: tr("categoryHard"),
      count: difficultyCounts.hard || 0,
      badgeClass:
        "border-rose-200 bg-rose-50/70 text-rose-900 hover:border-rose-400",
      accent: "accent-rose-600",
      icon: "🔥",
    },
    {
      key: "fav",
      label: tr("categoryFavorites"),
      count: difficultyCounts.fav || 0,
      badgeClass:
        "border-amber-200 bg-amber-50/70 text-amber-900 hover:border-amber-400",
      accent: "accent-amber-600",
      icon: "⭐",
    },
    {
      key: "mid",
      label: tr("categoryMid"),
      count: difficultyCounts.mid || 0,
      badgeClass:
        "border-teal-200 bg-teal-50/70 text-teal-900 hover:border-teal-400",
      accent: "accent-teal-600",
      icon: "⚡",
    },
    {
      key: "easy",
      label: tr("categoryEasy"),
      count: difficultyCounts.easy || 0,
      badgeClass:
        "border-blue-200 bg-blue-50/70 text-blue-900 hover:border-blue-400",
      accent: "accent-blue-600",
      icon: "🌱",
    },
    {
      key: "due",
      label: tr("categoryDue"),
      count: difficultyCounts.due || 0,
      badgeClass:
        "border-purple-200 bg-purple-50/70 text-purple-900 hover:border-purple-400",
      accent: "accent-purple-600",
      icon: "⏰",
    },
  ];

  return (
    <Card className="border-teal-200 bg-gradient-to-br from-teal-50/40 via-white to-slate-50/60 p-5 sm:p-7 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <Pill tone="teal">{tr("deckMixerTitle")}</Pill>
            {customSelectedCount > 0 ? (
              <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-black text-amber-900">
                {customSelectedCount} {tr("practiceCheckedWords")}
              </span>
            ) : null}
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-950">
            {tr("deckMixerTitle")}
          </h2>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
            {tr("deckMixerDesc")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {customSelectedCount > 0 ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onStartCustomSelected}
                className="rounded-full bg-amber-600 px-5 py-2.5 text-xs sm:text-sm font-black text-white hover:bg-amber-700 shadow-xs transition"
              >
                ▶ {tr("practiceCheckedWords")} ({customSelectedCount})
              </button>
              <button
                type="button"
                onClick={onClearCustomSelection}
                className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={matchingCount === 0}
              onClick={onStartSession}
              className={`rounded-full px-6 py-3 text-xs sm:text-sm font-black text-white shadow-sm transition flex items-center gap-2 ${
                matchingCount > 0
                  ? "bg-teal-700 hover:bg-teal-800"
                  : "bg-slate-300 cursor-not-allowed text-slate-500"
              }`}
            >
              <span>▶ {tr("startMixedSession")}</span>
              <span className="rounded-full bg-teal-900/40 px-2.5 py-0.5 text-xs">
                {cardLimit > 0
                  ? Math.min(cardLimit, matchingCount)
                  : matchingCount}
              </span>
            </button>
          )}
        </div>
      </div>

      <div className="mt-5 grid gap-6 md:grid-cols-12 items-start">
        {/* Step 1: Difficulty Selectors */}
        <div className="md:col-span-5 space-y-2.5">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-600">
            {tr("includeDifficulties")}
          </span>
          <div className="grid grid-cols-2 gap-2">
            {difficultyOptions.map((opt) => {
              const checked = Boolean(difficulties[opt.key]);
              return (
                <label
                  key={opt.key}
                  className={`flex items-center justify-between rounded-xl border p-2.5 text-xs font-bold transition cursor-pointer select-none ${
                    opt.badgeClass
                  } ${checked ? "ring-2 ring-teal-500/30 font-black" : "opacity-80"}`}
                >
                  <span className="flex items-center gap-2 truncate">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggleDifficulty(opt.key)}
                      className={`h-4 w-4 rounded ${opt.accent}`}
                    />
                    <span className="truncate">
                      {opt.icon} {opt.label}
                    </span>
                  </span>
                  <span className="ml-1 text-xs font-black opacity-80">
                    ({opt.count})
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Step 2: HSK Level Filters */}
        <div className="md:col-span-4 space-y-2.5">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-600">
            {tr("includeLevels")}
          </span>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((lvl) => {
              const active = levels.includes(lvl);
              return (
                <button
                  type="button"
                  key={lvl}
                  onClick={() => onToggleLevel(lvl)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-black transition border ${
                    active
                      ? "border-teal-700 bg-teal-700 text-white shadow-2xs"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  HSK {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Options (Limit & Shuffle) */}
        <div className="md:col-span-3 space-y-2.5">
          <span className="block text-xs font-black uppercase tracking-wider text-slate-600">
            {tr("sessionOptions")}
          </span>
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2 text-xs font-bold text-slate-700">
              <span>{tr("cardLimit")}:</span>
              <select
                value={cardLimit}
                onChange={(e) => onChangeCardLimit(Number(e.target.value))}
                className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold focus:border-teal-500 focus:outline-hidden"
              >
                <option value={0}>{tr("allMatchingCards")}</option>
                <option value={15}>15 cards</option>
                <option value={25}>25 cards</option>
                <option value={50}>50 cards</option>
              </select>
            </div>
            <label className="flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-bold text-slate-700 cursor-pointer">
              <span>{tr("shuffleDeck") || "Shuffle order"}</span>
              <input
                type="checkbox"
                checked={shuffle}
                onChange={onToggleShuffle}
                className="h-4 w-4 rounded accent-teal-600"
              />
            </label>
          </div>
        </div>
      </div>
    </Card>
  );
}
