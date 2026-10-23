import { Card } from "@/components/ui/card";
import WordDetailView from "@/components/vocabulary/word-detail-view";
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
  const examples = rawExamples.filter((ex) =>
    Boolean(ex?.hanzi || ex?.pinyin || ex?.en),
  );

  return (
    <WordDetailView
      word={word}
      level={level}
      unitId={unitId}
      prevWord={prevWord}
      nextWord={nextWord}
      examples={examples}
    />
  );
}
