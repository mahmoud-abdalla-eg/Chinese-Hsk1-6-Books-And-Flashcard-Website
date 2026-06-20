"use client";

import { useMemo, useState } from "react";
import AudioButton from "@/components/audio/audio-button";
import { useLanguage } from "@/components/language/language-provider";
import { scoreReview } from "@/lib/progress/storage";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function FlashcardDeck({ words }) {
  const { lang, tr } = useLanguage();
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [againMarkedIds, setAgainMarkedIds] = useState([]);
  const { saveProgress } = usePersistentProgress();
  const word = words[index] || null;
  const due = useMemo(() => reviews.length, [reviews]);
  if (!word) return <p>{tr("noFlashcardsFound")}</p>;
  const isArabic = lang === "ar";
  const meaning = isArabic
    ? word.meaning.ar || tr("arabicTranslationComingSoon")
    : word.meaning.en || tr("englishTranslationComingSoon");
  const englishExampleFallback = word.meaning.en
    ? `${tr("exampleMeaning")}: ${word.meaning.en}`
    : tr("englishExampleComingSoon");
  const exampleTranslation = isArabic
    ? word.example.ar || tr("arabicExampleComingSoon")
    : word.example.en || englishExampleFallback;
  const rate = (quality) => {
    const alreadyMarkedAgain = againMarkedIds.includes(word.id);
    if (quality === "Again" && alreadyMarkedAgain) {
      setFlipped((value) => !value);
      return;
    }
    const reviewedAt = new Date().toISOString();
    const nextReviewAt = scoreReview(quality);
    const review = {
      hanzi: word.hanzi,
      level: word.level || word.hskLevel,
      meaningEn: word.meaning?.en || "",
      pinyin: word.pinyin,
      wordId: word.id,
      quality,
      nextReviewAt,
      reviewedAt,
    };
    if (quality === "Again") {
      setAgainMarkedIds((current) =>
        current.includes(word.id) ? current : [...current, word.id],
      );
    } else {
      setReviews((current) => [...current, review]);
    }
    saveProgress((current) => {
      const hardWords = new Set(current.hardWords);
      const learnedWords = new Set(current.learnedWords);
      if (quality === "Good" || quality === "Easy") {
        learnedWords.add(word.id);
      }
      quality === "Again" || quality === "Hard"
        ? hardWords.add(word.id)
        : hardWords.delete(word.id);
      const currentStats = current.wordStats[word.id] || {
        attempts: 0,
        hardReviews: 0,
      };
      return {
        ...current,
        hardWords: [...hardWords],
        learnedWords: [...learnedWords],
        lastStudiedDate: reviewedAt,
        reviewHistory: [...current.reviewHistory, review],
        wordStats: {
          ...current.wordStats,
          [word.id]: {
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
    if (quality === "Again") {
      setFlipped((value) => !value);
      return;
    }
    setFlipped(false);
    setIndex((current) => (current + 1) % words.length);
  };
  return (
    <div className="space-y-5" data-no-static-translate>
      <div className="rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm sm:p-8">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-teal-700">
          {tr("card")} {index + 1} / {words.length} - {tr("reviewsThisSession")}{" "}
          {due}
        </p>
        <button
          type="button"
          onClick={() => setFlipped((value) => !value)}
          className="mt-8 min-h-72 w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8"
        >
          {!flipped ? (
            <span className="hanzi-display block text-7xl font-black text-slate-950 sm:text-8xl">
              {word.hanzi}
            </span>
          ) : (
            <span
              className={`space-y-4 ${isArabic ? "text-right" : "text-left"}`}
            >
              <span
                className="block text-4xl font-black text-slate-950"
                dir="ltr"
              >
                {word.pinyin}
              </span>
              <span
                className="block text-xl font-bold text-slate-700"
                dir={isArabic ? "rtl" : "ltr"}
              >
                {meaning}
              </span>
              <span className="block rounded-2xl bg-white p-4 text-sm font-semibold text-slate-600">
                <span
                  className="hanzi-display block text-2xl font-black text-slate-950"
                  dir="ltr"
                >
                  {word.example.hanzi || tr("practiceSentenceComingSoon")}
                </span>
                <span className="mt-2 block" dir={isArabic ? "rtl" : "ltr"}>
                  {exampleTranslation}
                </span>
              </span>
            </span>
          )}
        </button>
        <div className="mt-5 flex justify-center">
          <AudioButton src={word.audio.word} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4" dir="ltr">
        {[
          [
            "Again",
            flipped ? "bg-slate-700" : "bg-indigo-700",
            flipped ? tr("hide") : tr("show"),
          ],
          ["Hard", "bg-amber-600"],
          ["Good", "bg-teal-700"],
          ["Easy", "bg-slate-950"],
        ].map(([quality, color, label]) => (
          <button
            key={quality}
            type="button"
            onClick={() => rate(quality)}
            className={`rounded-2xl px-4 py-4 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 ${color}`}
            dir={isArabic ? "rtl" : "ltr"}
          >
            {label || tr(quality.toLowerCase())}
          </button>
        ))}
      </div>
    </div>
  );
}
