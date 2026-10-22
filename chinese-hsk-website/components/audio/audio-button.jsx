"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language/language-provider";

export default function AudioButton({ src, text, label = "Play audio" }) {
  const { tr } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const speakText = (content) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setIsPlaying(false);
      return;
    }
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.lang = "zh-CN";
      utterance.rate = 0.85;
      const voices = window.speechSynthesis.getVoices();
      const zhVoice = voices.find(
        (v) =>
          v.lang === "zh-CN" ||
          v.lang === "zh" ||
          v.lang?.startsWith?.("zh-") ||
          v.lang?.startsWith?.("zh_"),
      );
      if (zhVoice) utterance.voice = zhVoice;
      setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsPlaying(false);
    }
  };

  const play = (event) => {
    event?.stopPropagation?.();
    if (src) {
      try {
        const audio = new Audio(src);
        setIsPlaying(true);
        audio.onended = () => setIsPlaying(false);
        audio.onerror = () => {
          if (text) speakText(text);
          else setIsPlaying(false);
        };
        audio.play().catch(() => {
          if (text) speakText(text);
          else setIsPlaying(false);
        });
        return;
      } catch {
        if (text) speakText(text);
        return;
      }
    }
    if (text) {
      speakText(text);
    }
  };

  const hasAudio = Boolean(src || text);
  const audioLabel = label === "Play audio" ? tr("playAudio") : label;

  return (
    <button
      type="button"
      onClick={play}
      disabled={!hasAudio}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-black shadow-sm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 ${
        isPlaying
          ? "border-teal-500 bg-teal-50 text-teal-800 ring-2 ring-teal-400/40"
          : "border-slate-200 bg-white text-slate-800 hover:border-teal-400 hover:text-teal-700"
      }`}
      title={hasAudio ? audioLabel : tr("audioMissing")}
      aria-label={audioLabel}
    >
      <svg
        className={`h-3.5 w-3.5 ${isPlaying ? "animate-pulse text-teal-600" : "text-slate-500"}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
      <span>{hasAudio ? tr("listen") : tr("audioComingSoon")}</span>
    </button>
  );
}
