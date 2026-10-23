"use client";

import { useState } from "react";
import AudioButton from "@/components/audio/audio-button";
import { useLanguage } from "@/components/language/language-provider";
import CompletionToggle from "@/components/progress/completion-toggle";
import { Card, Pill } from "@/components/ui/card";

export default function ConversationLesson({
  conversation,
  words = [],
  targetWords: propTargetWords,
}) {
  const { lang, tr } = useLanguage();
  const [playbackRate, setPlaybackRate] = useState(1.0);

  const targetWords =
    propTargetWords ||
    words.filter((word) => conversation.targetVocabularyIds?.includes(word.id));

  const isArabic = lang === "ar";
  const title = isArabic
    ? conversation.title?.ar || conversation.title?.zh || ""
    : conversation.title?.en || conversation.title?.zh || "";
  const showZhSubtitle =
    Boolean(conversation.title?.zh) && conversation.title.zh !== title;

  return (
    <Card className="space-y-6 overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Pill
              tone={
                conversation.status === "needs-authoring" ? "amber" : "green"
              }
            >
              {conversation.status === "needs-authoring"
                ? tr("comingSoon")
                : tr("ready")}
            </Pill>
            <button
              type="button"
              onClick={() =>
                setPlaybackRate((prev) => (prev === 1.0 ? 0.75 : 1.0))
              }
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-bold transition ${
                playbackRate === 0.75
                  ? "border-teal-500 bg-teal-50 text-teal-900"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
              title={tr("toggleSpeechRate")}
            >
              <svg
                className="h-3.5 w-3.5 text-current shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"
                />
              </svg>
              <span className="font-mono text-[11px]">
                {playbackRate === 0.75 ? "0.75x" : "1.0x"}
              </span>
              <span>
                {playbackRate === 0.75 ? tr("slowAudio") : tr("normalAudio")}
              </span>
            </button>
          </div>
          <h2 className="mt-3 text-3xl font-black text-slate-950">{title}</h2>
          {showZhSubtitle ? (
            <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
              {conversation.title.zh}
            </p>
          ) : null}
        </div>
        <div className="space-y-3">
          <div className="rounded-2xl bg-blue-50 p-4 text-center text-blue-950">
            <strong className="block text-3xl font-black">
              {targetWords.length}
            </strong>
            <span className="text-xs font-black uppercase tracking-[0.16em] text-blue-700">
              {tr("targetWords")}
            </span>
          </div>
          <CompletionToggle
            id={conversation.id}
            label="conversation"
            type="conversation"
          />
        </div>
      </div>

      {conversation.audio ? (
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-teal-200 bg-teal-50/60 p-4">
          <div className="space-y-0.5">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
              {tr("fullDialogueAudio")}
            </span>
            <p className="text-sm font-semibold text-teal-950">
              {tr("fullDialogueAudioDesc")}
            </p>
          </div>
          <AudioButton
            src={conversation.audio}
            playbackRate={playbackRate}
            label={tr("playFullDialogue")}
          />
        </div>
      ) : null}

      {conversation.dialogue?.length ? (
        <div className="space-y-3">
          {conversation.dialogue.map((line) => {
            const lineTranslation = isArabic
              ? line.translation?.ar || ""
              : line.translation?.en || "";
            return (
              <div
                key={line.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-teal-200"
              >
                <div className="flex items-center justify-between gap-3">
                  <strong className="rounded-md bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
                    {line.role}
                  </strong>
                  <AudioButton
                    src={line.audio}
                    text={line.hanzi}
                    playbackRate={playbackRate}
                  />
                </div>
                <p className="hanzi-display mt-2 text-2xl font-black text-slate-950">
                  {line.hanzi}
                </p>
                <p className="font-semibold text-teal-700">{line.pinyin}</p>
                {lineTranslation ? (
                  <p
                    className="text-sm text-slate-700"
                    dir={isArabic ? "rtl" : "ltr"}
                  >
                    {lineTranslation}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-800 md:grid-cols-[1fr_260px]">
          <div>
            <strong className="text-lg">{tr("dialogueComingSoon")}</strong>
            <p className="mt-2 text-sm font-semibold leading-7">
              {tr("dialogueComingSoonDesc")}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-4 text-sm font-bold text-slate-700">
            {tr("dialogueWarmup")}
          </div>
        </div>
      )}

      <div>
        <h3 className="text-lg font-black text-slate-950">
          {tr("targetVocabulary")}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {targetWords.slice(0, 100).map((word) => (
            <span
              key={word.id}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700"
            >
              {word.hanzi} - {word.pinyin}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
