"use client";

import { useMemo, useState } from "react";
import AudioButton from "@/components/audio/audio-button";
import { useLanguage } from "@/components/language/language-provider";
import CompletionToggle from "@/components/progress/completion-toggle";
import { Card, Pill } from "@/components/ui/card";

function groupDialogueByScene(dialogue) {
  const scenes = [];

  for (const [index, line] of dialogue.entries()) {
    const idMatch = String(line.id || "").match(/^\d+[-_:](\d+)[-_:]\d+$/);
    const sceneId = String(line.sceneId || idMatch?.[1] || "1");
    const currentScene = scenes[scenes.length - 1];

    if (!currentScene || currentScene.id !== sceneId) {
      scenes.push({ id: sceneId, lines: [] });
    }

    scenes[scenes.length - 1].lines.push({ ...line, displayIndex: index });
  }

  return scenes;
}

export default function ConversationLesson({
  conversation,
  words = [],
  targetWords: propTargetWords,
}) {
  const { lang, tr } = useLanguage();
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [showPinyin, setShowPinyin] = useState(true);
  const [showTranslation, setShowTranslation] = useState(true);

  const dialogue = Array.isArray(conversation.dialogue)
    ? conversation.dialogue
    : [];
  const scenes = useMemo(() => groupDialogueByScene(dialogue), [dialogue]);
  const speakers = useMemo(
    () => [...new Set(dialogue.map((line) => line.role).filter(Boolean))],
    [dialogue],
  );
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
    <Card className="space-y-6 overflow-hidden p-5 sm:p-7">
      <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Pill
              tone={
                conversation.status === "needs-authoring" ? "amber" : "green"
              }
            >
              {conversation.status === "needs-authoring"
                ? tr("comingSoon")
                : tr("ready")}
            </Pill>
            {conversation.curriculum === "hsk3" ||
            conversation.id?.includes("hsk3") ? (
              <Pill tone="blue">HSK 3.0</Pill>
            ) : (
              <Pill tone="slate">{tr("standardCurriculum")}</Pill>
            )}
            <button
              type="button"
              onClick={() =>
                setPlaybackRate((previous) => (previous === 1.0 ? 0.75 : 1.0))
              }
              className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold transition duration-200 active:scale-[0.98] ${
                playbackRate === 0.75
                  ? "border-teal-700 bg-teal-50 text-teal-950"
                  : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
              }`}
              title={tr("toggleSpeechRate")}
              aria-label={tr("toggleSpeechRate")}
            >
              <svg
                aria-hidden="true"
                className="size-3.5 shrink-0"
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
          <h2 className="mt-4 text-2xl font-black leading-tight tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
          {showZhSubtitle ? (
            <p
              lang="zh-Hans"
              className="mt-1 text-base font-semibold leading-7 text-slate-600"
            >
              {conversation.title.zh}
            </p>
          ) : null}
          {speakers.length ? (
            <p className="mt-3 text-sm font-medium text-slate-500">
              {speakers.join(" · ")}
            </p>
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
          <div className="min-w-24 rounded-xl bg-slate-50 px-3 py-2 text-center">
            <strong className="block font-mono text-xl font-black text-slate-900">
              {targetWords.length}
            </strong>
            <span className="text-[10px] font-black uppercase tracking-wide text-slate-500">
              {tr("targetWords")}
            </span>
          </div>
          <CompletionToggle
            id={conversation.id}
            label="conversation"
            type="conversation"
          />
        </div>
      </header>

      {conversation.audio ? (
        <div className="flex items-center justify-between gap-4 border-y border-slate-200 py-3">
          <div>
            <span className="text-xs font-black uppercase tracking-wide text-teal-800">
              {tr("fullDialogueAudio")}
            </span>
            <p className="mt-1 text-sm text-slate-600">
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

      {dialogue.length ? (
        <section aria-label={tr("dialogueTranscript")} className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-slate-700">
              {tr("dialogueTranscript")}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                aria-pressed={showPinyin}
                aria-label={showPinyin ? tr("hidePinyin") : tr("showPinyin")}
                onClick={() => setShowPinyin((visible) => !visible)}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition duration-200 active:scale-[0.98] ${
                  showPinyin
                    ? "border-teal-200 bg-teal-50 text-teal-950"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`size-1.5 rounded-full ${
                    showPinyin ? "bg-teal-700" : "bg-slate-300"
                  }`}
                />
                {tr("pinyinLabel")}
              </button>
              <button
                type="button"
                aria-pressed={showTranslation}
                aria-label={
                  showTranslation
                    ? tr("hideTranslation")
                    : tr("showTranslation")
                }
                onClick={() => setShowTranslation((visible) => !visible)}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold transition duration-200 active:scale-[0.98] ${
                  showTranslation
                    ? "border-teal-200 bg-teal-50 text-teal-950"
                    : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`size-1.5 rounded-full ${
                    showTranslation ? "bg-teal-700" : "bg-slate-300"
                  }`}
                />
                {tr("translationLabel")}
              </button>
            </div>
          </div>

          <div className="space-y-5" dir="ltr">
            {scenes.map((scene, sceneIndex) => (
              <div key={`${scene.id}-${sceneIndex}`} className="space-y-3">
                {scenes.length > 1 ? (
                  <div className="flex items-center gap-3 px-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                      {tr("scene")} {sceneIndex + 1}
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>
                ) : null}
                <div className="space-y-3">
                  {scene.lines.map((line) => {
                    const lineTranslation = isArabic
                      ? line.translation?.ar || ""
                      : line.translation?.en || "";
                    const speakerIndex = Math.max(
                      0,
                      speakers.indexOf(line.role),
                    );
                    const alignRight = speakerIndex % 2 === 1;

                    return (
                      <div
                        key={`${line.id || "line"}-${line.displayIndex}`}
                        className={`flex ${
                          alignRight ? "justify-end" : "justify-start"
                        }`}
                      >
                        <article
                          className={`w-full max-w-[42rem] rounded-2xl border px-4 py-3 sm:w-[92%] ${
                            alignRight
                              ? "border-teal-200 bg-teal-50/70"
                              : "border-slate-200 bg-slate-50"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <strong className="min-w-0 truncate text-xs font-bold text-slate-600">
                              {line.role}
                            </strong>
                            <AudioButton
                              src={line.audio}
                              text={line.hanzi}
                              playbackRate={playbackRate}
                            />
                          </div>
                          <p
                            lang="zh-Hans"
                            className="hanzi-display mt-2 text-xl font-bold leading-relaxed text-slate-950 sm:text-2xl"
                          >
                            {line.hanzi}
                          </p>
                          {showPinyin && line.pinyin ? (
                            <p className="mt-1 text-sm font-semibold leading-6 text-teal-800">
                              {line.pinyin}
                            </p>
                          ) : null}
                          {showTranslation && lineTranslation ? (
                            <p
                              lang={isArabic ? "ar" : "en"}
                              dir={isArabic ? "rtl" : "ltr"}
                              className="mt-1 text-sm leading-6 text-slate-700"
                            >
                              {lineTranslation}
                            </p>
                          ) : null}
                        </article>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-slate-800">
          <strong className="text-lg">{tr("dialogueComingSoon")}</strong>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            {tr("dialogueComingSoonDesc")}
          </p>
        </div>
      )}

      {targetWords.length ? (
        <section className="border-t border-slate-200 pt-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-sm font-black uppercase tracking-wide text-slate-700">
              {tr("targetVocabulary")}
            </h3>
            <span className="font-mono text-xs font-bold text-slate-400">
              {targetWords.length}
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {targetWords.slice(0, 100).map((word) => (
              <span
                key={word.id}
                className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-slate-700"
              >
                <span lang="zh-Hans">{word.hanzi}</span>
                {word.pinyin ? (
                  <span className="ms-1.5 text-xs font-medium text-slate-500">
                    {word.pinyin}
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </section>
      ) : null}
    </Card>
  );
}
