import Link from "next/link";
import { Card, Pill, SectionHeading, Surface } from "@/components/ui/card";
import { getManagedHskSummary } from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";

export const dynamic = "force-dynamic";

export default async function FlashcardsPage() {
  const summaries = await getManagedHskSummary();
  const deckCount = summaries.length;
  return (
    <div className="space-y-10 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
        <div>
          <Pill>Spaced repetition</Pill>
          <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
            Flashcards that keep the conversation moving.
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            Review Chinese on the front, then pinyin, English, Arabic, examples,
            and audio status on the back. The deck uses Again, Hard, Good, and
            Easy review choices.
          </p>
        </div>
        <Card className="bg-teal-50 text-slate-950">
          <div className="text-6xl font-black text-teal-900">{deckCount}</div>
          <p className="mt-1 font-bold text-slate-700">HSK decks</p>
          <p className="mt-4 text-sm font-semibold text-slate-600">
            Pick a level and review words in quick, focused sessions.
          </p>
        </Card>
      </Surface>
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Pick a deck"
          title="Study by level"
          text="Choose a deck, test yourself, and save difficult words for another round."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {summaries.map((summary) => {
            const theme = levelThemes[summary.level];
            return (
              <Link
                key={summary.level}
                href={`/flashcards/hsk/${summary.level}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
                />
                <span className="text-3xl font-black text-slate-950">
                  HSK {summary.level}
                </span>
                <span className="mt-3 block text-sm font-bold text-slate-500">
                  {summary.wordCount} cards
                </span>
                <span className="mt-8 inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white">
                  Open deck
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
