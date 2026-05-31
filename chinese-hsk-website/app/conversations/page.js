import Link from "next/link";
import { Card, Pill, SectionHeading, Surface } from "@/components/ui/card";
import { getManagedHskSummary } from "@/lib/admin/course-words";
import { levelThemes } from "@/lib/data/design";

export const dynamic = "force-dynamic";

export default async function ConversationsPage() {
  const summaries = await getManagedHskSummary();
  const lessonCount = summaries.reduce(
    (sum, summary) => sum + summary.conversationCount,
    0,
  );
  return (
    <div className="space-y-10 pb-8">
      <Surface className="grid gap-8 p-7 lg:grid-cols-[1fr_360px] lg:items-center lg:p-10">
        <div>
          <Pill>Dialogue learning</Pill>
          <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
            Conversation lessons by HSK level.
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            Use short dialogue lessons to connect vocabulary with real
            situations, then practice listening, shadowing, and comprehension.
          </p>
        </div>
        <Card className="bg-blue-50 text-slate-950">
          <div className="text-6xl font-black text-blue-900">{lessonCount}</div>
          <p className="mt-1 font-bold text-slate-700">unit lessons</p>
          <p className="mt-4 text-sm font-semibold text-slate-600">
            Follow the units in order or jump to the level you are studying now.
          </p>
        </Card>
      </Surface>
      <section className="space-y-6">
        <SectionHeading
          eyebrow="Conversation library"
          title="Practice useful dialogue one unit at a time."
          text="Each level is organized into small lessons so new words are easier to hear, repeat, and remember."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {summaries.map((summary) => {
            const theme = levelThemes[summary.level];
            return (
              <Link
                key={summary.level}
                href={`/conversations/hsk/${summary.level}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
                />
                <span className="text-3xl font-black">HSK {summary.level}</span>
                <span className="mt-3 block text-sm font-bold text-slate-600">
                  {summary.conversationCount} unit lessons
                </span>
                <span className="mt-8 inline-flex rounded-full bg-teal-700 px-4 py-2 text-sm font-black text-white">
                  Open library
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
