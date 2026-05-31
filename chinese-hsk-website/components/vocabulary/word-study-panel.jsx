"use client";

import AudioButton from "@/components/audio/audio-button";
import { usePersistentProgress } from "@/lib/progress/use-progress";

export default function WordStudyPanel({ word }) {
  const { progress, saveProgress } = usePersistentProgress();
  const toggle = (key, id) => {
    saveProgress((current) => {
      const set = new Set(current[key]);
      set.has(id) ? set.delete(id) : set.add(id);
      return { ...current, [key]: [...set] };
    });
  };
  const learned = progress.learnedWords.includes(word.id);
  const favorite = progress.favorites.includes(word.id);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-3">
        <AudioButton src={word.audio.word} label="Play word audio" />
        <AudioButton src={word.audio.example} label="Play example sentence" />
        <button
          type="button"
          onClick={() => toggle("favorites", word.id)}
          className="rounded-full border border-rose-200 bg-white px-4 py-2 text-sm font-black text-rose-700 hover:bg-rose-50"
        >
          {favorite ? "Saved to favorites" : "Save to favorites"}
        </button>
        <button
          type="button"
          onClick={() => toggle("learnedWords", word.id)}
          className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-black text-emerald-700 hover:bg-emerald-50"
        >
          {learned ? "Learned" : "Mark as learned"}
        </button>
      </div>
    </div>
  );
}
