import DashboardClient from "@/components/dashboard/dashboard-client";
import {
  getManagedHskSummary,
  getManagedHskWords,
} from "@/lib/admin/course-words";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const summaries = await getManagedHskSummary();
  const levelWords = await Promise.all(
    summaries.map(async (summary) => {
      const words = await getManagedHskWords(summary.level);
      return {
        level: summary.level,
        wordCount: summary.wordCount,
        wordIds: words.map((word) => word.id),
        words: words.map((word) => ({
          hanzi: word.hanzi,
          id: word.id,
          meaning: word.meaning,
          pinyin: word.pinyin,
        })),
      };
    }),
  );
  return <DashboardClient levelWords={levelWords} summaries={summaries} />;
}
