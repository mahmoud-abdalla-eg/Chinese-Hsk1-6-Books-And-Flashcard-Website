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
      onContinue: (isAuthenticated) => {
        if (isAuthenticated) {
          saveProgress((current) => {
            const set = new Set(current[key] || []);
            set.has(id) ? set.delete(id) : set.add(id);
            return { ...current, [key]: [...set] };
          });
        }
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
    <div className="space-y-3">
      {/* Search Input Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="relative min-w-[260px] flex-1">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={tr("searchWordsPlaceholder")}
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-hidden"
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

      {/* Vocabulary Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-[56px_1fr] gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-slate-500 sm:grid-cols-[64px_1.2fr_1fr_120px_100px]">
          <span>#</span>
          <span>{tr("chinese")}</span>
          <span className="hidden sm:block">{tr("meaning")}</span>
          <span className="hidden sm:block">{tr("actions")}</span>
          <span className="hidden sm:block text-right">{tr("audio")}</span>
        </div>

        {filteredWords.length === 0 ? (
          <div className="p-8 text-center text-sm font-bold text-slate-500">
            {tr("noWordsMatching")} &quot;{query}&quot;
          </div>
        ) : (
          filteredWords.map((word) => {
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
                className="grid grid-cols-[56px_1fr] items-center gap-3 border-b border-slate-100 px-4 py-3.5 last:border-b-0 sm:grid-cols-[64px_1.2fr_1fr_120px_100px]"
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
                    className={`rounded-full p-1.5 text-sm transition hover:scale-110 ${
                      isFav ? "text-rose-600" : "text-slate-300 hover:text-slate-500"
                    }`}
                    title={isFav ? tr("favorited") : tr("addToFavorites")}
                  >
                    {isFav ? "❤️" : "🤍"}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggle("learnedWords", word.id)}
                    className={`rounded-full px-2 py-0.5 text-xs font-black transition ${
                      isLearned
                        ? "bg-emerald-100 text-emerald-800"
                        : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                    }`}
                    title={isLearned ? tr("markedLearned") : tr("markLearned")}
                  >
                    {isLearned ? tr("markedLearned") : tr("learn")}
                  </button>
                </div>

                <div className="flex justify-end">
                  <AudioButton src={word.audio?.word} text={word.hanzi} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
