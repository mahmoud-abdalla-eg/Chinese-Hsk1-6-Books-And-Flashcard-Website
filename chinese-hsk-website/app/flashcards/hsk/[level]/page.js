import FlashcardDeck from "@/components/flashcards/flashcard-deck";
import FlashcardLevelHero from "@/components/flashcards/flashcard-level-hero";
import { Card } from "@/components/ui/card";
import { getManagedHskWords } from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";
import { HSK_LEVELS } from "@/lib/data/schema";

export const revalidate = 300;

export function generateStaticParams() {
  return HSK_LEVELS.map((level) => ({ level: String(level) }));
}

export default async function LevelFlashcardsPage({ params, searchParams }) {
  const { level } = await params;
  const query = searchParams ? await searchParams : {};
  const words = await getManagedHskWords(level);
  const theme = levelThemes[Number(level)];

  let deckWords = words;
  if (query.start && query.end) {
    const s = Math.max(0, Number(query.start) - 1);
    const e = Math.min(words.length, Number(query.end));
    if (s < e) {
      deckWords = words.slice(s, e);
    }
  } else if (query.unit) {
    const unitNum = Number(query.unit);
    const s = (unitNum - 1) * 50;
    const e = s + 50;
    if (s < words.length) {
      deckWords = words.slice(s, e);
    }
  }

  return (
    <div className="space-y-8 pb-8">
      <FlashcardLevelHero
        accent={theme.accent}
        level={level}
        wordCount={deckWords.length}
      />
      <Card className="p-4 sm:p-6">
        <FlashcardDeck words={deckWords} />
      </Card>
    </div>
  );
}
