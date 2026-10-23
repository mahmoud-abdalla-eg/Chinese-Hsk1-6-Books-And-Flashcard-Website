"use client";

import AudioButton from "@/components/audio/audio-button";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function WordStudyPanel({ word }) {
  const { tr } = useLanguage();
  const { requestAuthAction } = useAuth();
  const { progress, saveProgress } = usePersistentProgress();

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

  const learned = progress.learnedWords?.includes(word.id);
  const favorite = progress.favorites?.includes(word.id);
  const exampleText = word.example?.hanzi || word.examples?.[0]?.hanzi || "";

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        <AudioButton
          src={word.audio?.word}
          text={word.hanzi}
          label={tr("playWordAudio")}
        />
        {exampleText ? (
          <AudioButton
            src={word.audio?.example}
            text={exampleText}
            label={tr("playExampleAudio")}
          />
        ) : null}
        <button
          type="button"
          onClick={() => toggle("favorites", word.id)}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black transition ${
            favorite
              ? "border-rose-400 bg-rose-50 text-rose-700"
              : "border-slate-200 bg-white text-slate-700 hover:border-rose-200 hover:text-rose-600"
          }`}
        >
          {favorite ? (
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
              className="h-4 w-4 fill-none text-slate-400"
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
          <span>{favorite ? tr("favorited") : tr("favorite")}</span>
        </button>
        <button
          type="button"
          onClick={() => toggle("learnedWords", word.id)}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black transition ${
            learned
              ? "border-emerald-500 bg-emerald-50 text-emerald-800 ring-1 ring-emerald-300"
              : "border-slate-200 bg-white text-slate-700 hover:border-emerald-200 hover:text-emerald-700"
          }`}
        >
          {learned ? (
            <svg
              className="h-4 w-4 text-emerald-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <span className="inline-block h-3.5 w-3.5 rounded-full border-2 border-slate-300" />
          )}
          <span>{learned ? tr("markedLearned") : tr("markLearned")}</span>
        </button>
      </div>
    </div>
  );
}
