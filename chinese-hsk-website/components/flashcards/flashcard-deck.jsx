"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import AudioButton from "@/components/audio/audio-button";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";
import { scoreReview } from "@/lib/progress/storage";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function FlashcardDeck({ words = [] }) {
  const { lang, tr } = useLanguage();
  const { user, isGuest, requestAuthAction, loginPromptState } = useAuth();
  const [filterMode, setFilterMode] = useState("all");
  const [studyMode, setStudyMode] = useState("recognition"); // "recognition" | "recall"
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [deck, setDeck] = useState(words);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviews, setReviews] = useState([]);
  const { progress, saveProgress } = usePersistentProgress();

  // Load study mode and audio speed preferences from localStorage
  useEffect(() => {
    try {
      const savedMode = window.localStorage.getItem("mandarin_flow_study_mode");
      if (savedMode === "recall" || savedMode === "recognition") {
        setStudyMode(savedMode);
      }
      const savedRate = window.localStorage.getItem("mandarin_flow_audio_rate");
      if (savedRate === "0.75" || savedRate === "1") {
        setPlaybackRate(Number(savedRate));
      }
    } catch {}
  }, []);

  // Re-sync deck when words prop changes
  useEffect(() => {
    setDeck(words);
    setIndex(0);
    setFlipped(false);
  }, [words]);

  const favoriteSet = useMemo(
    () => new Set(progress.favorites || []),
    [progress.favorites],
  );
  const hardSet = useMemo(
    () => new Set(progress.hardWords || []),
    [progress.hardWords],
  );
  const learnedSet = useMemo(
    () => new Set(progress.learnedWords || []),
    [progress.learnedWords],
  );

  const filteredWords = useMemo(() => {
    if (filterMode === "favorites") {
      return deck.filter((w) => favoriteSet.has(w.id));
    }
    if (filterMode === "hard") {
      return deck.filter((w) => hardSet.has(w.id));
    }
    if (filterMode === "unlearned") {
      return deck.filter((w) => !learnedSet.has(w.id));
    }
    return deck;
  }, [deck, filterMode, favoriteSet, hardSet, learnedSet]);

  const activeIndex = Math.min(
    index,
    Math.max(0, (filteredWords.length || 1) - 1),
  );
  const word = filteredWords[activeIndex] || null;

  const shuffleDeck = () => {
    setDeck((current) => [...current].sort(() => Math.random() - 0.5));
    setIndex(0);
    setFlipped(false);
  };

  const handleModeChange = (mode) => {
    setStudyMode(mode);
    setFlipped(false);
    try {
      window.localStorage.setItem("mandarin_flow_study_mode", mode);
    } catch {}
  };

  const handleRateToggle = () => {
    setPlaybackRate((prev) => {
      const next = prev === 1.0 ? 0.75 : 1.0;
      try {
        window.localStorage.setItem("mandarin_flow_audio_rate", String(next));
      } catch {}
      return next;
    });
  };

  const toggleFavorite = (wordId) => {
    requestAuthAction({
      title: tr("saveProgressPromptTitle"),
      description: tr("saveProgressPromptDesc"),
      onContinue: (isAuthenticated) => {
        if (isAuthenticated) {
          saveProgress((current) => {
            const set = new Set(current.favorites || []);
            set.has(wordId) ? set.delete(wordId) : set.add(wordId);
            return { ...current, favorites: [...set] };
          });
        }
      },
    });
  };

  const performAuthenticatedRating = (quality, currentWord) => {
    const reviewedAt = new Date().toISOString();
    const nextReviewAt = scoreReview(quality);
    const review = {
      hanzi: currentWord.hanzi,
      level: currentWord.level || currentWord.hskLevel,
      meaningEn: currentWord.meaning?.en || "",
      pinyin: currentWord.pinyin,
      wordId: currentWord.id,
      quality,
      nextReviewAt,
      reviewedAt,
    };

    setReviews((current) => [...current, review]);

    saveProgress((current) => {
      const hardWords = new Set(current.hardWords);
      const learnedWords = new Set(current.learnedWords);
      if (quality === "Good" || quality === "Easy") {
        learnedWords.add(currentWord.id);
      }
      if (quality === "Again" || quality === "Hard") {
        hardWords.add(currentWord.id);
      } else {
        hardWords.delete(currentWord.id);
      }
      const currentStats = current.wordStats?.[currentWord.id] || {
        attempts: 0,
        hardReviews: 0,
      };
      return {
        ...current,
        hardWords: [...hardWords],
        learnedWords: [...learnedWords],
        lastStudiedDate: reviewedAt,
        reviewHistory: [...(current.reviewHistory || []), review],
        wordStats: {
          ...(current.wordStats || {}),
          [currentWord.id]: {
            ...currentStats,
            attempts: currentStats.attempts + 1,
            hardReviews:
              currentStats.hardReviews +
              (quality === "Again" || quality === "Hard" ? 1 : 0),
            lastQuality: quality,
            lastReviewedAt: reviewedAt,
            nextReviewAt,
          },
        },
      };
    });

    setFlipped(false);
    setIndex((current) => (current + 1) % filteredWords.length);
  };

  const rate = (quality) => {
    if (!word) return;

    requestAuthAction({
      title: tr("saveProgressPromptTitle"),
      description: tr("saveProgressPromptDesc"),
      onContinue: (isAuthenticated) => {
        if (isAuthenticated) {
          performAuthenticatedRating(quality, word);
        } else {
          // Guest mode: cannot save to hard or easy, cannot have a streak!
          // Smoothly advance card so user can continue practicing freely.
          setFlipped(false);
          setIndex((current) => (current + 1) % filteredWords.length);
        }
      },
    });
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (loginPromptState?.isOpen) return;
      const tag = e.target?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea") return;

      if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        setFlipped(false);
        if (filteredWords.length) {
          setIndex((i) => (i + 1) % filteredWords.length);
        }
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        setFlipped(false);
        if (filteredWords.length) {
          setIndex((i) => (i - 1 + filteredWords.length) % filteredWords.length);
        }
      } else if (e.key === "1") {
        e.preventDefault();
        rate("Again");
      } else if (e.key === "2") {
        e.preventDefault();
        rate("Hard");
      } else if (e.key === "3") {
        e.preventDefault();
        rate("Good");
      } else if (e.key === "4") {
        e.preventDefault();
        rate("Easy");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredWords.length, word, loginPromptState?.isOpen]);

  // Empty deck state (e.g. filtered by hard or favorites when none exist)
  if (!word || filteredWords.length === 0) {
    return (
      <div className="space-y-6" data-no-static-translate>
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-black">
          <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 p-1">
            <button
              type="button"
              onClick={() => {
                setFilterMode("all");
                setIndex(0);
                setFlipped(false);
              }}
              className={`rounded-full px-3 py-1.5 transition ${
                filterMode === "all"
                  ? "bg-teal-700 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All ({deck.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterMode("hard");
                setIndex(0);
                setFlipped(false);
              }}
              className={`rounded-full px-3 py-1.5 transition ${
                filterMode === "hard"
                  ? "bg-amber-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Hard ({deck.filter((w) => hardSet.has(w.id)).length})
            </button>
            <button
              type="button"
              onClick={() => {
                setFilterMode("favorites");
                setIndex(0);
                setFlipped(false);
              }}
              className={`rounded-full px-3 py-1.5 transition ${
                filterMode === "favorites"
                  ? "bg-rose-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Favorites ({deck.filter((w) => favoriteSet.has(w.id)).length})
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-xs">
          <span className="text-5xl">📖</span>
          <h3 className="mt-4 text-xl font-black text-slate-900">
            {filterMode === "hard"
              ? tr("noHardWordsGuest")
              : filterMode === "favorites"
                ? tr("noFavoritesGuest")
                : tr("noFlashcardsFound")}
          </h3>
          <p className="mt-2 text-sm font-semibold text-slate-500 max-w-md mx-auto">
            {isGuest
              ? tr("guestBannerDesc")
              : "Review more flashcards or mark words as hard/favorite to build your study queue."}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setFilterMode("all")}
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-black text-slate-800 hover:bg-slate-100"
            >
              {tr("switchToAll")}
            </button>
            {isGuest ? (
              <Link
                href="/login"
                className="rounded-full bg-teal-700 px-5 py-2.5 text-xs font-black text-white hover:bg-teal-800 shadow-xs"
              >
                {tr("logInOrSignUp")}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  const isArabic = lang === "ar";
  const meaning = isArabic
    ? word.meaning?.ar || tr("arabicTranslationComingSoon")
    : word.meaning?.en || tr("englishTranslationComingSoon");
  const englishExampleFallback = word.meaning?.en
    ? `${tr("exampleMeaning")}: ${word.meaning.en}`
    : tr("englishExampleComingSoon");
  const exampleTranslation = isArabic
    ? word.example?.ar || tr("arabicExampleComingSoon")
    : word.example?.en || englishExampleFallback;
  const isFav = favoriteSet.has(word.id);
  const isLearned = learnedSet.has(word.id);
  const progressPercent = Math.round(
    ((activeIndex + 1) / filteredWords.length) * 100,
  );

  return (
    <div className="space-y-6" data-no-static-translate>
      {/* Top Filter & Deck Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-black">
        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => {
              setFilterMode("all");
              setIndex(0);
              setFlipped(false);
            }}
            className={`rounded-full px-3 py-1.5 transition ${
              filterMode === "all"
                ? "bg-teal-700 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            All ({deck.length})
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterMode("hard");
              setIndex(0);
              setFlipped(false);
            }}
            className={`rounded-full px-3 py-1.5 transition ${
              filterMode === "hard"
                ? "bg-amber-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Hard ({deck.filter((w) => hardSet.has(w.id)).length})
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterMode("favorites");
              setIndex(0);
              setFlipped(false);
            }}
            className={`rounded-full px-3 py-1.5 transition ${
              filterMode === "favorites"
                ? "bg-rose-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Favorites ({deck.filter((w) => favoriteSet.has(w.id)).length})
          </button>
          <button
            type="button"
            onClick={() => {
              setFilterMode("unlearned");
              setIndex(0);
              setFlipped(false);
            }}
            className={`rounded-full px-3 py-1.5 transition ${
              filterMode === "unlearned"
                ? "bg-slate-800 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Unlearned ({deck.filter((w) => !learnedSet.has(w.id)).length})
          </button>
        </div>

        {/* Study Mode, Audio Speed & Shuffle Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher: Recognition vs Recall */}
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 p-1 text-xs font-black">
            <button
              type="button"
              onClick={() => handleModeChange("recognition")}
              className={`rounded-full px-3 py-1 transition ${
                studyMode === "recognition"
                  ? "bg-teal-700 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tr("recognitionMode")}
            </button>
            <button
              type="button"
              onClick={() => handleModeChange("recall")}
              className={`rounded-full px-3 py-1 transition ${
                studyMode === "recall"
                  ? "bg-teal-700 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {tr("recallMode")}
            </button>
          </div>

          {/* Audio Speed Pill */}
          <button
            type="button"
            onClick={handleRateToggle}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-black shadow-xs transition ${
              playbackRate === 0.75
                ? "border-teal-500 bg-teal-50 text-teal-900 ring-1 ring-teal-400"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
            title="Toggle audio speed (1.0x / 0.75x)"
          >
            <span>{playbackRate === 0.75 ? "🐢" : "⚡"}</span>
            <span>
              {playbackRate === 0.75 ? tr("slowAudio") : tr("normalAudio")}
            </span>
          </button>

          {isGuest ? (
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900">
              {tr("guestMode")}
            </span>
          ) : null}

          <button
            type="button"
            onClick={shuffleDeck}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-black text-slate-700 shadow-xs hover:border-slate-300"
            title="Shuffle deck order"
          >
            🔀 Shuffle
          </button>
        </div>
      </div>

      {/* Main Flashcard Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-8">
        {/* Progress bar line */}
        <div className="absolute inset-x-0 top-0 h-1.5 bg-slate-100">
          <div
            className="h-full bg-teal-600 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Card Header */}
        <div className="flex items-center justify-between gap-4 pt-1 text-xs font-black text-slate-400">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
              {tr("card")} {activeIndex + 1} / {filteredWords.length}
            </span>
            {isLearned ? (
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700">
                ✓ Learned
              </span>
            ) : null}
            <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-black uppercase text-slate-500">
              {studyMode === "recall" ? tr("recallMode") : tr("recognitionMode")}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(word.id)}
              className="rounded-full p-2 text-base transition hover:scale-110"
              title={
                isGuest
                  ? tr("logInToSaveWords")
                  : isFav
                    ? "Remove from favorites"
                    : "Save to favorites"
              }
            >
              {isFav ? "❤️" : "🤍"}
            </button>
            <span className="text-teal-700">
              {reviews.length} {tr("reviewsThisSession")}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <button
          type="button"
          onClick={() => setFlipped((value) => !value)}
          className="group relative mt-6 min-h-80 w-full cursor-pointer rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/80 p-8 text-center transition hover:border-teal-400 hover:bg-slate-50 focus:outline-hidden"
          title="Click to flip (Space)"
        >
          <span className="absolute top-4 right-4 text-xs font-bold text-slate-400 opacity-60 group-hover:opacity-100">
            {flipped ? "Click to see front" : "Click to flip ↷"}
          </span>

          {/* Mode 1: RECOGNITION (Hanzi front -> Meaning back) */}
          {studyMode === "recognition" ? (
            !flipped ? (
              <div className="flex min-h-64 flex-col items-center justify-center space-y-4">
                <span className="hanzi-display block text-7xl font-black text-slate-950 sm:text-8xl">
                  {word.hanzi}
                </span>
                <span className="text-sm font-bold text-slate-400">
                  (Tap or press Space to flip)
                </span>
              </div>
            ) : (
              <div
                className={`space-y-4 py-2 ${isArabic ? "text-right" : "text-left"}`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <span className="text-4xl font-black text-slate-950" dir="ltr">
                    {word.pinyin}
                  </span>
                  <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-black uppercase text-slate-700">
                    {word.partOfSpeech || "word"}
                  </span>
                </div>
                <span
                  className="block text-2xl font-bold text-slate-800"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {meaning}
                </span>
                {word.example?.hanzi ? (
                  <div className="rounded-2xl bg-white p-4 shadow-2xs">
                    <span
                      className="hanzi-display block text-2xl font-black text-slate-950"
                      dir="ltr"
                    >
                      {word.example.hanzi}
                    </span>
                    <span
                      className="mt-1 block text-sm font-bold text-teal-700"
                      dir="ltr"
                    >
                      {word.example.pinyin}
                    </span>
                    <span
                      className="mt-2 block text-sm font-semibold text-slate-600"
                      dir={isArabic ? "rtl" : "ltr"}
                    >
                      {exampleTranslation}
                    </span>
                  </div>
                ) : null}
              </div>
            )
          ) : (
            /* Mode 2: RECALL (Meaning front -> Hanzi & Pinyin back) */
            !flipped ? (
              <div className="flex min-h-64 flex-col items-center justify-center space-y-4 px-4 text-center">
                <span
                  className="block text-3xl sm:text-4xl font-black text-slate-900 leading-tight"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {meaning}
                </span>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  {word.partOfSpeech || "word"}
                </span>
                <span className="text-sm font-bold text-slate-400">
                  {tr("tapToRevealHanzi")}
                </span>
              </div>
            ) : (
              <div
                className={`space-y-4 py-2 ${isArabic ? "text-right" : "text-left"}`}
              >
                <div className="flex flex-col items-center justify-center gap-1 border-b border-slate-200 pb-4 text-center">
                  <span className="hanzi-display block text-7xl font-black text-slate-950 sm:text-8xl">
                    {word.hanzi}
                  </span>
                  <span className="text-3xl font-black text-teal-700 mt-2" dir="ltr">
                    {word.pinyin}
                  </span>
                </div>
                <span
                  className="block text-xl font-bold text-slate-700"
                  dir={isArabic ? "rtl" : "ltr"}
                >
                  {meaning}
                </span>
                {word.example?.hanzi ? (
                  <div className="rounded-2xl bg-white p-4 shadow-2xs">
                    <span
                      className="hanzi-display block text-2xl font-black text-slate-950"
                      dir="ltr"
                    >
                      {word.example.hanzi}
                    </span>
                    <span
                      className="mt-1 block text-sm font-bold text-teal-700"
                      dir="ltr"
                    >
                      {word.example.pinyin}
                    </span>
                    <span
                      className="mt-2 block text-sm font-semibold text-slate-600"
                      dir={isArabic ? "rtl" : "ltr"}
                    >
                      {exampleTranslation}
                    </span>
                  </div>
                ) : null}
              </div>
            )
          )}
        </button>

        {/* Audio Bar & Flip Toggle */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <AudioButton
            src={word.audio?.word}
            text={word.hanzi}
            playbackRate={playbackRate}
            label="Play word pronunciation"
          />
          {flipped && word.example?.hanzi ? (
            <AudioButton
              src={word.audio?.example}
              text={word.example.hanzi}
              playbackRate={playbackRate}
              label="Play example sentence"
            />
          ) : null}
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-black text-slate-700 hover:bg-slate-100"
          >
            {flipped ? "Show front ↺" : "Show answer ↷ (Space)"}
          </button>
        </div>

        {/* Previous / Next Browsing buttons */}
        <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
          <button
            type="button"
            onClick={() => {
              setFlipped(false);
              setIndex(
                (i) => (i - 1 + filteredWords.length) % filteredWords.length,
              );
            }}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-slate-100"
          >
            ← Previous card
          </button>
          <span className="text-[11px] text-slate-400">
            Keys: Space = flip · 1-4 = rate · Arrows = prev/next
          </span>
          <button
            type="button"
            onClick={() => {
              setFlipped(false);
              setIndex((i) => (i + 1) % filteredWords.length);
            }}
            className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 hover:bg-slate-100"
          >
            Next card →
          </button>
        </div>
      </div>

      {/* SRS Rating Buttons */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" dir="ltr">
        {[
          ["Again", "bg-rose-600 hover:bg-rose-700", "1", "Repeat soon"],
          ["Hard", "bg-amber-600 hover:bg-amber-700", "2", "Difficult"],
          ["Good", "bg-teal-700 hover:bg-teal-800", "3", "Remembered"],
          ["Easy", "bg-slate-900 hover:bg-slate-950", "4", "Mastered"],
        ].map(([quality, color, keyHint, subtext]) => (
          <button
            key={quality}
            type="button"
            onClick={() => rate(quality)}
            className={`group rounded-2xl px-4 py-3.5 text-center text-white shadow-md transition hover:-translate-y-0.5 active:translate-y-0 ${color}`}
            dir={isArabic ? "rtl" : "ltr"}
          >
            <div className="flex items-center justify-center gap-1.5 text-sm font-black">
              <span>{tr(quality.toLowerCase())}</span>
              <span className="rounded-md bg-white/20 px-1.5 py-0.5 text-[10px] font-bold opacity-80 group-hover:opacity-100">
                [{keyHint}]
              </span>
            </div>
            <span className="block text-[11px] font-medium opacity-80">
              {subtext}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
