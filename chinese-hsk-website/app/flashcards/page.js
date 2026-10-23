import FlashcardsView from "@/components/flashcards/flashcards-view";
import { getManagedHskSummary } from "@/lib/admin/course-words";

export const revalidate = 300;

export default async function FlashcardsPage() {
  const summaries = await getManagedHskSummary();
  const deckCount = summaries.length;

  return (
    <FlashcardsView summaries={summaries} deckCount={deckCount} />
  );
}
