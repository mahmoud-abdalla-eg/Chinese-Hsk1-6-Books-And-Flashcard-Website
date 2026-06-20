import { Card, Pill, Surface } from "@/components/ui/card";
import WordStudyPanel from "@/components/vocabulary/word-study-panel";
import { getManagedWord } from "@/lib/admin/course-words";
import { getHskWords } from "@/lib/data/hsk";
import { HSK_LEVELS } from "@/lib/data/schema";

export const revalidate = 300;

export function generateStaticParams() {
  return HSK_LEVELS.flatMap((level) =>
    getHskWords(level).map((word) => ({
      level: String(level),
      wordId: word.id,
    })),
  );
}

export default async function WordPage({ params }) {
  const { level, wordId } = await params;
  const word = await getManagedWord(level, wordId);
  if (!word) return <Card>Word not found.</Card>;
  const examples = word.examples?.length ? word.examples : [word.example];
  return (
    <div className="grid gap-8 pb-8 lg:grid-cols-[0.88fr_1.12fr]">
      <Surface className="text-center lg:sticky lg:top-28 lg:self-start">
        <div>
          <Pill>
            HSK {level} - word {word.order}
          </Pill>
          <h1 className="hanzi-display mt-8 text-8xl font-black leading-none text-slate-950 sm:text-9xl">
            {word.hanzi}
          </h1>
          <p className="mt-5 text-3xl font-black text-teal-700">
            {word.pinyin}
          </p>
          <p className="mt-4 text-xl font-bold text-slate-700">
            {word.meaning.en}
          </p>
          <p className="mt-2 text-xl font-bold text-slate-500" dir="rtl">
            {word.meaning.ar || "Arabic coming soon"}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {word.tags.length
              ? word.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-600"
                  >
                    {tag}
                  </span>
                ))
              : <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-600">
                  core word
                </span>}
          </div>
        </div>
      </Surface>
      <div className="space-y-6">
        <Card>
          <Pill tone="slate">{word.partOfSpeech}</Pill>
          <h2 className="mt-4 text-3xl font-black text-slate-950">
            Example sentences
          </h2>
          <div className="mt-4 space-y-4">
            {examples.map((example, index) => (
              <div
                key={`${example.hanzi || "example"}-${index}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                  Example {index + 1}
                </p>
                <p className="mt-2 text-3xl font-black text-slate-950">
                  {example.hanzi || "Practice sentence coming soon"}
                </p>
                <p className="mt-2 text-teal-700">
                  {example.pinyin || "Pinyin coming soon"}
                </p>
                <p className="mt-2 text-slate-600">
                  {example.en || "English coming soon"}
                </p>
                <p className="mt-2 text-slate-500" dir="rtl">
                  {example.ar || "Arabic coming soon"}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-3xl font-black text-slate-950">
            Listen and save
          </h2>
          <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
            Listen when audio is available. Save words as learned or add them to
            favorites for quick review.
          </p>
          <div className="mt-5">
            <WordStudyPanel word={word} />
          </div>
        </Card>
      </div>
    </div>
  );
}
