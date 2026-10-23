import { notFound } from "next/navigation";
import HskLevelView from "@/components/hsk/hsk-level-view";
import {
  getManagedHskWords,
  getManagedUnitsForLevel,
} from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";
import { HSK_LEVELS } from "@/lib/data/schema";

export const revalidate = 300;

export function generateStaticParams() {
  return HSK_LEVELS.map((level) => ({ level: String(level) }));
}

export default async function HskLevelPage({ params }) {
  const { level } = await params;
  const numericLevel = Number(level);
  const words = await getManagedHskWords(level);
  const units = await getManagedUnitsForLevel(level);
  const theme = levelThemes[numericLevel];
  if (!theme) notFound();
  const firstWords = words.slice(0, 9);
  const hasVocabulary = words.length > 0;

  return (
    <HskLevelView
      level={level}
      words={words}
      units={units}
      theme={theme}
      firstWords={firstWords}
      hasVocabulary={hasVocabulary}
    />
  );
}
