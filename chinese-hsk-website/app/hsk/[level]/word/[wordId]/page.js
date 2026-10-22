import Link from "next/link";
import AudioButton from "@/components/audio/audio-button";
import { Card, Pill, Surface } from "@/components/ui/card";
import WordStudyPanel from "@/components/vocabulary/word-study-panel";
import { getManagedHskWords, getManagedWord } from "@/lib/admin/course-words";
import { getHskWords } from "@/lib/data/hsk";

export const revalidate = 300;
export const dynamicParams = true;

export function generateStaticParams() {
  return getHskWords(1)
    .slice(0, 30)
    .map((word) => ({
      level: "1",
      wordId: word.id,
    }));
}

export default async function WordPage({ params }) {
  const { level, wordId } = await params;
  const word = await getManagedWord(level, wordId);
  if (!word) return <Card>Word not found.</Card>;

  const allWords = await getManagedHskWords(level);
  const currentIndex = allWords.findIndex((w) => w.id === wordId);
  const prevWord = currentIndex > 0 ? allWords[currentIndex - 1] : null;
  const nextWord =
    currentIndex >= 0 && currentIndex < allWords.length - 1
      ? allWords[currentIndex + 1]
      : null;
  const unitId = Math.max(1, Math.ceil((word.order || 1) / 30));

  const rawExamples = word.examples?.length ? word.examples : [word.example];
  const examples = rawExamples.filter((ex) => Boolean(ex?.hanzi || ex?.pinyin || ex?.en));

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
            Unit {unitId}
          </Link>
          <Link
            href={`/flashcards/hsk/${level}`}
            className="rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-teal-800 hover:bg-teal-100"
          >
            Practice flashcards
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
                HSK {level} - word {word.order}
              </Pill>
              <AudioButton
                src={word.audio?.word}
                text={word.hanzi}
                label="Pronounce word"
              />
            </div>
            <h1 className="hanzi-display mt-8 text-8xl font-black leading-none text-slate-950 sm:text-9xl">
              {word.hanzi}
            </h1>
            <p className="mt-5 text-3xl font-black text-teal-700">
              {word.pinyin}
            </p>
            <p className="mt-4 text-xl font-bold text-slate-700">
              {word.meaning?.en || "English coming soon"}
            </p>
            <p className="mt-2 text-xl font-bold text-slate-500" dir="rtl">
              {word.meaning?.ar || "Arabic coming soon"}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {word.tags?.length
                ? word.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-600"
                    >
                      {tag}
                    </span>
                  ))
                : (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-600">
                    core word
                  </span>
                )}
            </div>
          </div>
        </Surface>

        <div className="space-y-6">
          <Card>
            <Pill tone="slate">{word.partOfSpeech || "word"}</Pill>
            <h2 className="mt-4 text-3xl font-black text-slate-950">
              Example sentences
            </h2>
            <div className="mt-4 space-y-4">
              {examples.length ? (
                examples.map((example, index) => (
                  <div
                    key={`${example.hanzi || "example"}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                        Example {index + 1}
                      </p>
                      {example.hanzi ? (
                        <AudioButton
                          src={word.audio?.example}
                          text={example.hanzi}
                          label="Play example sentence"
                        />
                      ) : null}
                    </div>
                    <p className="hanzi-display mt-2 text-3xl font-black text-slate-950">
                      {example.hanzi || "Practice sentence coming soon"}
                    </p>
                    <p className="mt-2 text-teal-700 font-bold">
                      {example.pinyin || "Pinyin coming soon"}
                    </p>
                    <p className="mt-2 text-slate-600 font-semibold">
                      {example.en || "English coming soon"}
                    </p>
                    {example.ar ? (
                      <p className="mt-2 text-slate-500 font-semibold" dir="rtl">
                        {example.ar}
                      </p>
                    ) : null}
                  </div>
                ))
              ) : (
                <p className="text-sm font-semibold text-slate-500">
                  Example sentence coming soon for this word.
                </p>
              )}
            </div>
          </Card>

          <Card>
            <h2 className="text-3xl font-black text-slate-950">
              Listen and save
            </h2>
            <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
              Listen to native pronunciation. Save words as learned or add them to
              favorites for quick review.
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
