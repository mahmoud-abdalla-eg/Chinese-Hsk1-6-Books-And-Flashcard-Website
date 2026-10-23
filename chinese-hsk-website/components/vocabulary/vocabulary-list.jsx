"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import AudioButton from "@/components/audio/audio-button";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";
import { getLocalizedMeaning } from "@/lib/i18n/dictionaries";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function VocabularyList({ words = [], level }) {
  const { lang, tr } = useLanguage();
  const { requestAuthAction } = useAuth();
  const [query, setQuery] = useState("");
  const { progress, saveProgress } = usePersistentProgress();

  const favoriteSet = useMemo(
    () => new Set(progress.favorites || []),
    [progress.favorites],
  );
  const learnedSet = useMemo(
    () => new Set(progress.learnedWords || []),
    [progress.learnedWords],
  );

  const toggle = (key, id) => {
    requestAuthAction({
      title: tr("saveProgressPromptTitle"),
      description: tr("saveProgressPromptDesc"),
      onContinue: () => {
        saveProgress((current) => {
          const set = new Set(current[key] || []);
          set.has(id) ? set.delete(id) : set.add(id);
          return { ...current, [key]: [...set] };
        });
      },
    });
  };

  const filteredWords = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return words;
    return words.filter((w) => {
      return (
        w.hanzi?.toLowerCase().includes(q) ||
        w.pinyin?.toLowerCase().includes(q) ||
        w.meaning?.en?.toLowerCase().includes(q) ||
        w.meaning?.ar?.toLowerCase().includes(q)
      );
    });
  }, [words, query]);

  return (
    <div className="space-y-4">
      {/* Search Input Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="relative min-w-[240px] flex-1">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tr("searchWordsPlaceholder")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-base sm:text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-hidden"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-3 top-2.5 text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              {tr("clear")}
            </button>
          ) : null}
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-600">
          {filteredWords.length} {tr("wordsOf")} {words.length} {tr("words")}
        </span>
      </div>

      {filteredWords.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm font-bold text-slate-500 shadow-sm">
          {tr("noWordsMatching")} &quot;{query}&quot;
        </div>
      ) : (
        <>
          {/* Mobile Card Layout (< sm) */}
          <div className="space-y-3 sm:hidden">
            {filteredWords.map((word) => {
              const isFav = favoriteSet.has(word.id);
              const isLearned = learnedSet.has(word.id);
              const localizedMeaning =
                getLocalizedMeaning(word.meaning, lang) ||
                (lang === "ar"
                  ? tr("arabicTranslationComingSoon")
                  : tr("englishTranslationComingSoon"));

              return (
                <div
                  key={`m-${word.id}`}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-2xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="grid h-7 w-7 place-items-center rounded-lg bg-slate-100 text-xs font-black text-slate-500 shrink-0">
                        {word.order}
                      </span>
                      <Link
                        href={`/hsk/${level}/word/${word.id}`}
                        className="group"
                      >
                        <span className="hanzi-display block text-3xl font-black text-slate-950 group-hover:text-teal-700">
                          {word.hanzi}
                        </span>
                        <span className="block text-sm font-bold text-teal-700">
                          {word.pinyin}
                        </span>
                      </Link>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => toggle("favorites", word.id)}
                        className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-400 hover:border-rose-300 hover:text-rose-600 transition"
                        title={isFav ? tr("favorited") : tr("addToFavorites")}
                        aria-label={
                          isFav ? tr("favorited") : tr("addToFavorites")
                        }
                      >
                        {isFav ? (
                          <svg
                            className="h-5 w-5 fill-rose-600 text-rose-600"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="h-5 w-5 fill-none text-slate-300 hover:text-rose-500"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                          </svg>
                        )}
                      </button>
                      <AudioButton src={word.audio?.word} text={word.hanzi} />
                    </div>
                  </div>

                  {/* Full-width meaning translation */}
                  <div className="rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm font-semibold text-slate-700">
                    <span dir={lang === "ar" ? "rtl" : "ltr"} className="block">
                      {localizedMeaning}
                    </span>
                  </div>

                  {/* Bottom Actions Row */}
                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={`/hsk/${level}/word/${word.id}`}
                      className="text-xs font-black text-teal-700 hover:underline"
                    >
                      {tr("wordDetails")} →
                    </Link>

                    <button
                      type="button"
                      onClick={() => toggle("learnedWords", word.id)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-black transition ${
                        isLearned
                          ? "bg-emerald-100 text-emerald-800"
                          : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                      }`}
                      title={
                        isLearned ? tr("markedLearned") : tr("markLearned")
                      }
                    >
                      {isLearned ? tr("markedLearned") : tr("learn")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Table View (sm+) */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-[64px_1.2fr_1fr_120px_100px] gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
              <span>#</span>
              <span>{tr("chinese")}</span>
              <span>{tr("meaning")}</span>
              <span>{tr("actions")}</span>
              <span className="text-right">{tr("audio")}</span>
            </div>

            {filteredWords.map((word) => {
              const isFav = favoriteSet.has(word.id);
              const isLearned = learnedSet.has(word.id);
              const localizedMeaning =
                getLocalizedMeaning(word.meaning, lang) ||
                (lang === "ar"
                  ? tr("arabicTranslationComingSoon")
                  : tr("englishTranslationComingSoon"));
              return (
                <div
                  key={word.id}
                  className="grid grid-cols-[64px_1.2fr_1fr_120px_100px] items-center gap-3 border-b border-slate-100 px-4 py-3.5 last:border-b-0"
                >
                  <span className="text-sm font-black text-slate-400">
                    {word.order}
                  </span>

                  <Link
                    href={`/hsk/${level}/word/${word.id}`}
                    className="group rounded-xl transition"
                  >
                    <span className="hanzi-display block text-3xl font-black text-slate-950 group-hover:text-teal-700">
                      {word.hanzi}
                    </span>
                    <span className="block text-sm font-bold text-teal-700">
                      {word.pinyin}
                    </span>
                  </Link>

                  <div className="text-sm font-semibold leading-5 text-slate-600">
                    <span dir={lang === "ar" ? "rtl" : "ltr"} className="block">
                      {localizedMeaning}
                    </span>
                  </div>

                  {/* Quick Action Badges */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => toggle("favorites", word.id)}
                      className="rounded-full p-1.5 transition hover:scale-110"
                      title={isFav ? tr("favorited") : tr("addToFavorites")}
                    >
                      {isFav ? (
                        <svg
                          className="h-4 w-4 fill-rose-600 text-rose-600"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-4 w-4 fill-none text-slate-300 hover:text-rose-500"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => toggle("learnedWords", word.id)}
                      className={`rounded-full px-2 py-0.5 text-xs font-black transition ${
                        isLearned
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                      title={
                        isLearned ? tr("markedLearned") : tr("markLearned")
                      }
                    >
                      {isLearned ? tr("markedLearned") : tr("learn")}
                    </button>
                  </div>

                  <div className="flex justify-end">
                    <AudioButton src={word.audio?.word} text={word.hanzi} />
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
