"use client";

import { useLanguage } from "@/components/language/language-provider";

export default function AudioButton({ src, label = "Play audio" }) {
  const { tr } = useLanguage();
  const play = () => {
    if (!src) return;
    new Audio(src).play();
  };
  const audioLabel = label === "Play audio" ? tr("playAudio") : label;
  return (
    <button
      type="button"
      onClick={play}
      disabled={!src}
      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-slate-900 shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45"
      title={src ? audioLabel : tr("audioMissing")}
    >
      {src ? tr("listen") : tr("audioComingSoon")}
    </button>
  );
}
