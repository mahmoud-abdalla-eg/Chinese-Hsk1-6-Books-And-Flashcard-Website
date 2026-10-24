"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import AudioButton from "@/components/audio/audio-button";
import { useAuth } from "@/components/auth/auth-provider";
import MixedFlashcardBuilder from "@/components/dashboard/mixed-flashcard-builder";
import FlashcardDeck from "@/components/flashcards/flashcard-deck";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, Surface } from "@/components/ui/card";
import { getLocalizedMeaning } from "@/lib/i18n/dictionaries";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function VocabularyStudio({ allWords = [] }) {
  const { lang, tr } = useLanguage();
  const searchParams = useSearchParams();
  const { requestAuthAction } = useAuth();
  const { progress, saveProgress } = usePersistentProgress();

  // Mode: "browse" or "practice"
  const [viewMode, setViewMode] = useState("browse");
  const [activeDeck, setActiveDeck] = useState([]);

  // Word selection for custom staging
  const [selectedWordIds, setSelectedWordIds] = useState(new Set());

  // Search & Filter state in browse catalog
  const [searchQuery, setSearchQuery] = useState("");
  const [catalogTab, setCatalogTab] = useState("all"); // "all" | "hard" | "fav" | "mid" | "easy" | "due"
  const [catalogLevel, setCatalogLevel] = useState(0); // 0 = all, 1..5

  // Mixer criteria state
  const [mixerDifficulties, setMixerDifficulties] = useState({
    hard: true,
    fav: true,
    mid: false,
    easy: false,
    due: false,
  });
  const [mixerLevels, setMixerLevels] = useState([1, 2, 3, 4, 5]);
  const [mixerLimit, setMixerLimit] = useState(0); // 0 = All
  const [mixerShuffle, setMixerShuffle] = useState(true);

  // Initialize from searchParams on mount
  useEffect(() => {
    const diffParam = (
      searchParams.get("difficulty") ||
      searchParams.get("filter") ||
      ""
    ).toLowerCase();
    const levelParam = Number(searchParams.get("level") || 0);

    if (diffParam === "hard") {
      setCatalogTab("hard");
      setMixerDifficulties({
        hard: true,
        fav: false,
        mid: false,
        easy: false,
        due: false,
      });
    } else if (diffParam === "fav" || diffParam === "favorites") {
      setCatalogTab("fav");
      setMixerDifficulties({
        hard: false,
        fav: true,
        mid: false,
        easy: false,
        due: false,
      });
    } else if (diffParam === "easy") {
      setCatalogTab("easy");
      setMixerDifficulties({
        hard: false,
        fav: false,
        mid: false,
        easy: true,
        due: false,
      });
    } else if (diffParam === "mid" || diffParam === "good") {
      setCatalogTab("mid");
      setMixerDifficulties({
        hard: false,
        fav: false,
        mid: true,
        easy: false,
        due: false,
      });
    }

    if (levelParam >= 1 && levelParam <= 5) {
      setCatalogLevel(levelParam);
      setMixerLevels([levelParam]);
    }
  }, [searchParams]);

  // Derived sets from persistent progress
  const hardSet = useMemo(
    () => new Set(progress.hardWords || []),
    [progress.hardWords],
  );
  const favoriteSet = useMemo(
    () => new Set(progress.favorites || []),
    [progress.favorites],
  );
  const wordStats = progress.wordStats || {};

  // Check if a word is classified into difficulty categories
  const wordCategoryMap = useMemo(() => {
    const map = new Map();
    const now = Date.now();

    for (const word of allWords) {
      const stats = wordStats[word.id] || {};
      const isFav = favoriteSet.has(word.id);
      const isHard =
        hardSet.has(word.id) ||
        stats.lastQuality === "Hard" ||
        stats.lastQuality === "Again";
      const isMid = stats.lastQuality === "Good";
      const isEasy = stats.lastQuality === "Easy";
      const isDue =
        stats.nextReviewAt && new Date(stats.nextReviewAt).getTime() <= now;

      map.set(word.id, {
        isHard,
        isFav,
        isMid,
        isEasy,
        isDue,
        stats,
      });
    }
    return map;
  }, [allWords, hardSet, favoriteSet, wordStats]);

  // Difficulty counts across all loaded words
  const difficultyCounts = useMemo(() => {
    let hard = 0,
      fav = 0,
      mid = 0,
      easy = 0,
      due = 0;
    for (const word of allWords) {
      const cat = wordCategoryMap.get(word.id);
      if (!cat) continue;
      if (cat.isHard) hard++;
      if (cat.isFav) fav++;
      if (cat.isMid) mid++;
      if (cat.isEasy) easy++;
      if (cat.isDue) due++;
    }
    return { hard, fav, mid, easy, due };
  }, [allWords, wordCategoryMap]);

  // Mixer matching words calculation
  const mixerMatchingWords = useMemo(() => {
    const selectedKeys = Object.entries(mixerDifficulties)
      .filter(([, active]) => active)
      .map(([key]) => key);

    return allWords.filter((word) => {
      if (!mixerLevels.includes(word.level)) return false;
      if (selectedKeys.length === 0) return false;

      const cat = wordCategoryMap.get(word.id);
      if (!cat) return false;

      if (mixerDifficulties.hard && cat.isHard) return true;
      if (mixerDifficulties.fav && cat.isFav) return true;
      if (mixerDifficulties.mid && cat.isMid) return true;
      if (mixerDifficulties.easy && cat.isEasy) return true;
      if (mixerDifficulties.due && cat.isDue) return true;

      return false;
    });
  }, [allWords, mixerDifficulties, mixerLevels, wordCategoryMap]);

  // Words shown in the Explorer catalog based on active tab and search
  const catalogFilteredWords = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return allWords.filter((word) => {
      // Level filter
      if (catalogLevel !== 0 && word.level !== catalogLevel) return false;

      // Category tab filter
      const cat = wordCategoryMap.get(word.id);
      if (catalogTab === "hard" && !cat?.isHard) return false;
      if (catalogTab === "fav" && !cat?.isFav) return false;
      if (catalogTab === "mid" && !cat?.isMid) return false;
      if (catalogTab === "easy" && !cat?.isEasy) return false;
      if (catalogTab === "due" && !cat?.isDue) return false;

      // Text query
      if (q) {
        const hanziMatch = word.hanzi?.toLowerCase().includes(q);
        const pinyinMatch = word.pinyin?.toLowerCase().includes(q);
        const enMatch = word.meaning?.en?.toLowerCase().includes(q);
        const arMatch = word.meaning?.ar?.toLowerCase().includes(q);
        if (!hanziMatch && !pinyinMatch && !enMatch && !arMatch) return false;
      }

      return true;
    });
  }, [allWords, catalogLevel, catalogTab, searchQuery, wordCategoryMap]);

  // Mixer Toggle handlers
  const toggleMixerDifficulty = (key) => {
    setMixerDifficulties((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMixerLevel = (level) => {
    setMixerLevels((prev) =>
      prev.includes(level)
        ? prev.length > 1
          ? prev.filter((l) => l !== level)
          : prev
        : [...prev, level].sort((a, b) => a - b),
    );
  };

  // Launch Session from Mixer
  const handleStartMixerSession = () => {
    let deck = [...mixerMatchingWords];
    if (mixerShuffle) {
      deck.sort(() => Math.random() - 0.5);
    }
    if (mixerLimit > 0 && deck.length > mixerLimit) {
      deck = deck.slice(0, mixerLimit);
    }
    setActiveDeck(deck);
    setViewMode("practice");
  };

  // Launch Session from individual checkmarks
  const handleStartCustomSelected = () => {
    const selectedWords = allWords.filter((w) => selectedWordIds.has(w.id));
    if (mixerShuffle) {
      selectedWords.sort(() => Math.random() - 0.5);
    }
    setActiveDeck(selectedWords);
    setViewMode("practice");
  };

  const toggleWordSelection = (wordId) => {
    setSelectedWordIds((prev) => {
      const next = new Set(prev);
      next.has(wordId) ? next.delete(wordId) : next.add(wordId);
      return next;
    });
  };

  const toggleFavorite = (wordId) => {
    requestAuthAction({
      title: tr("saveProgressPromptTitle"),
      description: tr("saveProgressPromptDesc"),
      onContinue: () => {
        saveProgress((current) => {
          const set = new Set(current.favorites || []);
          set.has(wordId) ? set.delete(wordId) : set.add(wordId);
          return { ...current, favorites: [...set] };
        });
      },
    });
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Page Header */}
      <Surface className="p-4 sm:p-7 lg:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard"
              className="text-xs font-black text-teal-700 hover:text-teal-800 transition"
            >
              &larr; {tr("openDashboard")}
            </Link>
            <span className="text-slate-300">/</span>
            <Pill tone="teal">{tr("vocabulary")}</Pill>
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
            {tr("vocabularyStudioTitle")}
          </h1>
          <p className="mt-2 max-w-3xl text-sm sm:text-base font-semibold text-slate-600">
            {tr("vocabularyStudioDesc")}
          </p>
        </div>

        {/* Dual Mode Switcher Pill */}
        <div className="flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 self-start md:self-auto shrink-0 shadow-2xs">
          <button
            type="button"
            onClick={() => setViewMode("browse")}
            className={`px-4 py-2 text-xs sm:text-sm font-black rounded-xl transition ${
              viewMode === "browse"
                ? "bg-white text-teal-800 shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            📖 {tr("browseMode")}
          </button>
          <button
            type="button"
            disabled={activeDeck.length === 0}
            onClick={() => setViewMode("practice")}
            className={`px-4 py-2 text-xs sm:text-sm font-black rounded-xl transition flex items-center gap-1.5 ${
              viewMode === "practice"
                ? "bg-teal-700 text-white shadow-xs"
                : activeDeck.length === 0
                  ? "text-slate-400 cursor-not-allowed"
                  : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>🎴 {tr("practiceMode")}</span>
            {activeDeck.length > 0 ? (
              <span className="rounded-full bg-teal-800 text-white px-2 py-0.5 text-xs">
                {activeDeck.length}
              </span>
            ) : null}
          </button>
        </div>
      </Surface>

      {/* VIEW MODE 1: ACTIVE FLASHCARD PRACTICE */}
      {viewMode === "practice" ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between rounded-2xl bg-teal-50/80 border border-teal-200 px-5 py-3 text-teal-950">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎴</span>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-teal-700">
                  {tr("practiceMode")}
                </span>
                <p className="text-sm font-black">
                  {activeDeck.length} {tr("cardsSelected")}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setViewMode("browse")}
              className="rounded-full border border-teal-300 bg-white px-4 py-1.5 text-xs font-black text-teal-800 hover:bg-teal-50 shadow-2xs transition"
            >
              &larr; {tr("backToWordList")}
            </button>
          </div>

          <Card className="p-4 sm:p-6 shadow-sm">
            <FlashcardDeck words={activeDeck} />
          </Card>
        </div>
      ) : (
        /* VIEW MODE 2: BROWSE & MIX STUDIO */
        <div className="space-y-8">
          {/* Deck Mixer Card */}
          <MixedFlashcardBuilder
            difficulties={mixerDifficulties}
            onToggleDifficulty={toggleMixerDifficulty}
            levels={mixerLevels}
            onToggleLevel={toggleMixerLevel}
            cardLimit={mixerLimit}
            onChangeCardLimit={setMixerLimit}
            shuffle={mixerShuffle}
            onToggleShuffle={() => setMixerShuffle((prev) => !prev)}
            matchingCount={mixerMatchingWords.length}
            difficultyCounts={difficultyCounts}
            onStartSession={handleStartMixerSession}
            customSelectedCount={selectedWordIds.size}
            onStartCustomSelected={handleStartCustomSelected}
            onClearCustomSelection={() => setSelectedWordIds(new Set())}
          />

          {/* Word Explorer Section */}
          <Card className="space-y-6 p-5 sm:p-7 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  {tr("vocabulary")} ({catalogFilteredWords.length})
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-500">
                  {catalogTab === "all"
                    ? tr("categoryAll")
                    : catalogTab === "hard"
                      ? tr("categoryHard")
                      : catalogTab === "fav"
                        ? tr("categoryFavorites")
                        : catalogTab === "mid"
                          ? tr("categoryMid")
                          : catalogTab === "easy"
                            ? tr("categoryEasy")
                            : tr("categoryDue")}
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px] flex-1 max-w-md">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={tr("searchWordsPlaceholder")}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-hidden"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-2.5 text-xs font-bold text-slate-400 hover:text-slate-600"
                  >
                    {tr("clear")}
                  </button>
                ) : null}
              </div>
            </div>

            {/* Category Tabs & Level Rail */}
            <div className="flex flex-col gap-4 border-b border-slate-100 pb-5">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  {
                    key: "all",
                    label: tr("categoryAll"),
                    count: allWords.length,
                  },
                  {
                    key: "hard",
                    label: `🔥 ${tr("categoryHard")}`,
                    count: difficultyCounts.hard,
                  },
                  {
                    key: "fav",
                    label: `⭐ ${tr("categoryFavorites")}`,
                    count: difficultyCounts.fav,
                  },
                  {
                    key: "mid",
                    label: `⚡ ${tr("categoryMid")}`,
                    count: difficultyCounts.mid,
                  },
                  {
                    key: "easy",
                    label: `🌱 ${tr("categoryEasy")}`,
                    count: difficultyCounts.easy,
                  },
                  {
                    key: "due",
                    label: `⏰ ${tr("categoryDue")}`,
                    count: difficultyCounts.due,
                  },
                ].map((tab) => {
                  const active = catalogTab === tab.key;
                  return (
                    <button
                      type="button"
                      key={tab.key}
                      onClick={() => setCatalogTab(tab.key)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-black transition border flex items-center gap-1.5 ${
                        active
                          ? "border-teal-700 bg-teal-700 text-white shadow-2xs"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`rounded-full px-2 py-0.2 text-[11px] ${
                          active
                            ? "bg-teal-900/40 text-white"
                            : "bg-slate-200/80 text-slate-600"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* HSK Level Quick Filter */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                  {tr("level") || "Level"}:
                </span>
                <button
                  type="button"
                  onClick={() => setCatalogLevel(0)}
                  className={`rounded-xl px-3 py-1 text-xs font-black transition border ${
                    catalogLevel === 0
                      ? "border-slate-800 bg-slate-800 text-white shadow-2xs"
                      : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {tr("categoryAll")}
                </button>
                {[1, 2, 3, 4, 5].map((lvl) => (
                  <button
                    type="button"
                    key={lvl}
                    onClick={() => setCatalogLevel(lvl)}
                    className={`rounded-xl px-3 py-1 text-xs font-black transition border ${
                      catalogLevel === lvl
                        ? "border-slate-800 bg-slate-800 text-white shadow-2xs"
                        : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    HSK {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Word Catalog Items */}
            {catalogFilteredWords.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center text-sm font-bold text-slate-500">
                {tr("noWordsInSelection")}
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {catalogFilteredWords.slice(0, 150).map((word) => {
                  const cat = wordCategoryMap.get(word.id) || {};
                  const isChecked = selectedWordIds.has(word.id);
                  const isFav = cat.isFav;
                  const localizedMeaning =
                    getLocalizedMeaning(word.meaning, lang) ||
                    (lang === "ar" ? word.meaning?.ar : word.meaning?.en) ||
                    "-";

                  return (
                    <div
                      key={word.id}
                      className="py-3 sm:py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 rounded-xl px-2 transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Checkbox for custom staging */}
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleWordSelection(word.id)}
                          title="Select word for custom deck"
                          className="h-4 w-4 rounded accent-teal-600 shrink-0 cursor-pointer"
                        />

                        {/* Audio Button */}
                        <AudioButton
                          text={word.hanzi}
                          pinyin={word.pinyin}
                          size="sm"
                        />

                        {/* Word Info */}
                        <div className="min-w-0">
                          <div className="flex items-baseline gap-2">
                            <span
                              className="hanzi-display text-lg sm:text-xl font-black text-slate-950"
                              dir="ltr"
                            >
                              <bdi>{word.hanzi}</bdi>
                            </span>
                            <span
                              className="text-xs sm:text-sm font-bold text-slate-500"
                              dir="ltr"
                            >
                              <bdi>{word.pinyin}</bdi>
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-slate-600 truncate max-w-md">
                            {localizedMeaning}
                          </p>
                        </div>
                      </div>

                      {/* Badges & Actions */}
                      <div className="flex items-center gap-2.5 self-end sm:self-auto shrink-0">
                        <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-black text-slate-700">
                          HSK {word.level}
                        </span>

                        {cat.isHard ? (
                          <span className="rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-black text-rose-800">
                            {tr("hard")}
                          </span>
                        ) : cat.isMid ? (
                          <span className="rounded-md bg-teal-100 px-2 py-0.5 text-[11px] font-black text-teal-800">
                            {tr("good") || "Mid"}
                          </span>
                        ) : cat.isEasy ? (
                          <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[11px] font-black text-blue-800">
                            {tr("easy")}
                          </span>
                        ) : null}

                        {/* Favorite button */}
                        <button
                          type="button"
                          onClick={() => toggleFavorite(word.id)}
                          className={`text-base p-1 hover:scale-110 transition ${
                            isFav
                              ? "text-amber-500"
                              : "text-slate-300 hover:text-amber-400"
                          }`}
                          title={
                            isFav ? "Remove from Favorites" : "Add to Favorites"
                          }
                        >
                          {isFav ? "★" : "☆"}
                        </button>

                        {/* Link to detail page */}
                        <Link
                          href={`/hsk/${word.level}/word/${word.id}`}
                          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-bold text-slate-600 hover:border-teal-400 hover:text-teal-700 transition"
                        >
                          &rarr;
                        </Link>
                      </div>
                    </div>
                  );
                })}

                {catalogFilteredWords.length > 150 ? (
                  <div className="py-4 text-center text-xs font-bold text-slate-400">
                    Showing 150 of {catalogFilteredWords.length} words. Use
                    search or level filters to narrow down.
                  </div>
                ) : null}
              </div>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
