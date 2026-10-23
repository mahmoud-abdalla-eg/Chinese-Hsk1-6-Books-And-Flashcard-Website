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

  const learned = progress.learnedWords?.includes(word.id);
  const favorite = progress.favorites?.includes(word.id);
  const exampleText = word.example?.hanzi || word.examples?.[0]?.hanzi || "";

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        <AudioButton
          src={word.audio?.word}
          text={word.hanzi}
          label="Play word audio"
        />
        {exampleText ? (
          <AudioButton
            src={word.audio?.example}
            text={exampleText}
            label="Play example sentence"
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
          <span>{favorite ? "❤️" : "🤍"}</span>
          <span>{favorite ? "Favorited" : "Favorite"}</span>
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
          <span>{learned ? "✓" : "○"}</span>
          <span>{learned ? "Learned" : "Mark as learned"}</span>
        </button>
      </div>
    </div>
  );
}
