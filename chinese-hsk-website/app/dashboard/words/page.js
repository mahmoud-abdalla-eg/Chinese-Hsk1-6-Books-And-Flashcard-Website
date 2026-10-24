import { Suspense } from "react";
import VocabularyStudio from "@/components/dashboard/vocabulary-studio";
import {
  getManagedHskSummary,
  getManagedHskWords,
} from "@/lib/admin/course-words";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Vocabulary & Difficulty Studio | Mandarin Flow HSK",
  description:
    "Inspect vocabulary words by difficulty, listen to pronunciation, and generate custom mixed flashcard sessions.",
};

export default async function VocabularyWordsPage() {
  const summaries = await getManagedHskSummary();
  const levelWordsLists = await Promise.all(
    summaries.map(async (summary) => {
      const words = await getManagedHskWords(summary.level);
      return (words || []).map((word) => ({
        id: word.id,
        hanzi: word.hanzi,
        pinyin: word.pinyin,
        level: summary.level,
        meaning: word.meaning || { en: word.en || "", ar: word.ar || "" },
      }));
    }),
  );

  const allWords = levelWordsLists.flat();

  return (
    <Suspense
      fallback={
        <div className="py-16 text-center text-sm font-bold text-slate-500">
          Loading vocabulary...
        </div>
      }
    >
      <VocabularyStudio allWords={allWords} />
    </Suspense>
  );
}
