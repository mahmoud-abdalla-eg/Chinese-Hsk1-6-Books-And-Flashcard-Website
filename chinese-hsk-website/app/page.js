import HomeHeroSection from "@/components/home/home-hero-section";
import HomeSections from "@/components/home/home-sections";
import { getManagedHskSummary } from "@/lib/admin/course-words";

export const revalidate = 300;

export default async function HomePage() {
  const summaries = await getManagedHskSummary();
  const totalWords = summaries.reduce((sum, item) => sum + item.wordCount, 0);
  const totalUnits = summaries.reduce((sum, item) => sum + item.unitCount, 0);

  return (
    <div className="space-y-20 pb-8">
      <HomeHeroSection totalWords={totalWords} totalUnits={totalUnits} />
      <HomeSections summaries={summaries} />
    </div>
  );
}
