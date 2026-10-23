"use client";

import Link from "next/link";
import AudioButton from "@/components/audio/audio-button";
import { useLanguage } from "@/components/language/language-provider";
import { Card, Pill, Surface } from "@/components/ui/card";
import WordStudyPanel from "@/components/vocabulary/word-study-panel";
import {
  getLocalizedExample,
  getLocalizedMeaning,
} from "@/lib/i18n/dictionaries";

export default function WordDetailView({
  word,
  level,
  unitId,
  prevWord,
  nextWord,
  examples = [],
}) {
  const { lang, tr } = useLanguage();
  const isArabic = lang === "ar";

  const localizedMeaning =
    getLocalizedMeaning(word.meaning, lang) ||
    (isArabic
      ? tr("arabicTranslationComingSoon")
      : tr("englishTranslationComingSoon"));

  return (
    <div className="space-y-6 pb-8">
      {/* Breadcrumb & Word Pagination */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm font-black">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={`/hsk/${level}`}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:border-teal-400 hover:text-teal-700"
          >
            ← HSK {level}
          </Link>
          <Link
            href={`/hsk/${level}/unit/${unitId}`}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700 hover:border-teal-400 hover:text-teal-700"
          >
            {tr("unit")} {unitId}
          </Link>
          <Link
            href={`/flashcards/hsk/${level}`}
            className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-teal-800 hover:bg-teal-100"
          >
            {tr("flashcards")}
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {prevWord ? (
            <Link
              href={`/hsk/${level}/word/${prevWord.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-2xs hover:border-teal-400 hover:text-teal-700"
            >
              <span>←</span>
              <span className="hanzi-display font-black">{prevWord.hanzi}</span>
            </Link>
          ) : null}
          {nextWord ? (
            <Link
              href={`/hsk/${level}/word/${nextWord.id}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-2xs hover:border-teal-400 hover:text-teal-700"
            >
              <span className="hanzi-display font-black">{nextWord.hanzi}</span>
              <span>→</span>
            </Link>
          ) : null}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <Surface className="text-center lg:sticky lg:top-28 lg:self-start">
          <div>
            <div className="flex items-center justify-center gap-2">
              <Pill>
                HSK {level} - #{word.order}
              </Pill>
              <AudioButton
                src={word.audio?.word}
                text={word.hanzi}
                label={tr("pronounceWord")}
              />
            </div>
            <h1 className="hanzi-display mt-8 text-8xl font-black leading-none text-slate-950 sm:text-9xl">
              {word.hanzi}
            </h1>
            <p className="mt-5 text-3xl font-black text-teal-700">
              {word.pinyin}
            </p>
            <p
              className="mt-4 text-xl font-bold text-slate-700"
              dir={isArabic ? "rtl" : "ltr"}
            >
              {localizedMeaning}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {word.tags?.length ? (
                word.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-600"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-600">
                  {tr("coreWord")}
                </span>
              )}
            </div>
          </div>
        </Surface>

        <div className="space-y-6">
          <Card>
            <Pill tone="slate">{word.partOfSpeech || "word"}</Pill>
            <h2 className="mt-4 text-3xl font-black text-slate-950">
              {tr("exampleSentences")}
            </h2>
            <div className="mt-4 space-y-4">
              {examples.length ? (
                examples.map((example, index) => {
                  const exampleTranslation =
                    getLocalizedExample(example, lang) ||
                    (isArabic
                      ? tr("arabicExampleComingSoon")
                      : tr("englishExampleComingSoon"));
                  return (
                    <div
                      key={`${example.hanzi || "example"}-${index}`}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                          {tr("example")} {index + 1}
                        </p>
                        {example.hanzi ? (
                          <AudioButton
                            src={word.audio?.example}
                            text={example.hanzi}
                            label={tr("playExampleAudio")}
                          />
                        ) : null}
                      </div>
                      <p className="hanzi-display mt-2 text-3xl font-black text-slate-950">
                        {example.hanzi || tr("practiceSentenceComingSoon")}
                      </p>
                      <p className="mt-2 text-teal-700 font-bold">
                        {example.pinyin || "Pinyin coming soon"}
                      </p>
                      <p
                        className="mt-2 text-slate-600 font-semibold"
                        dir={isArabic ? "rtl" : "ltr"}
                      >
                        {exampleTranslation}
                      </p>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm font-semibold text-slate-500">
                  {tr("exampleComingSoon")}
                </p>
              )}
            </div>
          </Card>

          <Card>
            <h2 className="text-3xl font-black text-slate-950">
              {tr("listenAndSave")}
            </h2>
            <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
              {tr("listenAndSaveDesc")}
            </p>
            <div className="mt-5">
              <WordStudyPanel word={word} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
