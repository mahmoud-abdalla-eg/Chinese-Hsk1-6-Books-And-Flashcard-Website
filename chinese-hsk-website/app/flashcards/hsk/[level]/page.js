import FlashcardDeck from "@/components/flashcards/flashcard-deck";
import FlashcardLevelHero from "@/components/flashcards/flashcard-level-hero";
import { Card } from "@/components/ui/card";
import { getManagedHskWords } from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";

export const dynamic = "force-dynamic";

export default async function LevelFlashcardsPage({ params }) {
  const { level } = await params;
  const words = await getManagedHskWords(level);
  const theme = levelThemes[Number(level)];
  return (
    <div className="space-y-8 pb-8">
      <FlashcardLevelHero
        accent={theme.accent}
        level={level}
        wordCount={words.length}
      />
      <Card className="p-4 sm:p-6">
        <FlashcardDeck words={words} />
      </Card>
    </div>
  );
}
