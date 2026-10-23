import GrammarView from "@/components/grammar/grammar-view";
import {
  getManagedGrammarLevels,
  getManagedGrammarPath,
} from "@/lib/admin/course-grammar";

export const revalidate = 300;

export default async function GrammarPage() {
  const grammarItems = await getManagedGrammarPath();
  const levels = await getManagedGrammarLevels();

  return (
    <GrammarView
      grammarItemsCount={grammarItems.length}
      levels={levels}
    />
  );
}
