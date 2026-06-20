import Link from "next/link";
import { notFound } from "next/navigation";
import UnitCard from "@/components/hsk/unit-card";
import {
  Card,
  Pill,
  ProgressBar,
  SectionHeading,
  Surface,
} from "@/components/ui/card";
import {
  getManagedHskWords,
  getManagedUnitsForLevel,
} from "@/lib/admin/course-words";
import { levelThemes, studyModes } from "@/lib/data/design";
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
    <div className="space-y-10 pb-8">
      <Surface className="relative overflow-hidden p-7 lg:p-10">
        <div
          className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${theme.accent}`}
        />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <Pill>HSK {level}</Pill>
            <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
              {theme.scene}
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
              {theme.tone} This level is divided into focused units with
              vocabulary pages, flashcards, conversation practice, listening,
              grammar, and local progress tracking.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {units.length
                ? <Link
                    href={`/hsk/${level}/unit/1`}
                    className="rounded-full bg-teal-700 px-6 py-3 text-sm font-black text-white shadow-sm hover:bg-teal-800"
                  >
                    Start unit 1
                  </Link>
                : <Link
                    href={`/grammar/hsk/${level}`}
                    className="rounded-full bg-teal-700 px-6 py-3 text-sm font-black text-white shadow-sm hover:bg-teal-800"
                  >
                    Open HSK {level} grammar
                  </Link>}
              <Link
                href={`/flashcards/hsk/${level}`}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-black text-slate-900 hover:border-slate-400"
              >
                Review flashcards
              </Link>
            </div>
          </div>
          <Card className="bg-blue-50 text-slate-950">
            <div className="text-6xl font-black text-blue-900">
              {words.length}
            </div>
            <p className="mt-1 font-bold text-slate-700">words to learn</p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-white p-3">
                <strong className="block text-2xl">{units.length}</strong>
                units
              </div>
              <div className="rounded-2xl bg-white p-3">
                <strong className="block text-2xl">
                  {Math.min(3, units.length)}
                </strong>
                ways to practice
              </div>
            </div>
            <div className="mt-5">
              <ProgressBar value={0} />
            </div>
          </Card>
        </div>
      </Surface>

      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <Card>
            <h2 className="text-xl font-black text-slate-950">Level map</h2>
            <div className="mt-4 grid gap-2">
              {units.length
                ? units.map((unit) => (
                    <Link
                      key={unit.id}
                      href={`/hsk/${level}/unit/${unit.id}`}
                      className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3 text-sm font-black text-slate-700 transition hover:bg-teal-700 hover:text-white"
                    >
                      <span>Unit {unit.id}</span>
                      <span>
                        {unit.start}-{unit.end}
                      </span>
                    </Link>
                  ))
                : <p className="rounded-2xl bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-600">
                    Vocabulary units are empty for now. Use the admin word
                    manager to add reviewed HSK {level} vocabulary, or study the
                    grammar units that are already available.
                  </p>}
            </div>
          </Card>
          <Card>
            <h2 className="text-xl font-black text-slate-950">
              Practice modes
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {studyModes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                >
                  {mode}
                </span>
              ))}
            </div>
          </Card>
        </aside>
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Study units"
            title={`HSK ${level} units`}
            text="Each unit keeps the vocabulary load manageable while linking into flashcards, conversations, and listening practice."
          />
          {units.length
            ? <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {units.map((unit) => (
                  <UnitCard key={unit.id} unit={unit} />
                ))}
              </div>
            : <Card>
                <Pill tone="blue">Vocabulary pending</Pill>
                <h2 className="mt-4 text-2xl font-black text-slate-950">
                  HSK {level} vocabulary is ready for admin import.
                </h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-600">
                  No fake words were added. Add reviewed HSK {level} words from
                  the admin word manager when the real vocabulary source is
                  ready.
                </p>
                <Link
                  href={`/grammar/hsk/${level}`}
                  className="mt-5 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
                >
                  Study HSK {level} grammar
                </Link>
              </Card>}
          <Card>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Pill tone="green">Vocabulary preview</Pill>
                <h2 className="mt-3 text-2xl font-black text-slate-950">
                  First words in this level
                </h2>
              </div>
              <Link
                href={`/flashcards/hsk/${level}`}
                className="text-sm font-black text-teal-700 hover:text-teal-800"
              >
                Practice these words
              </Link>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {hasVocabulary
                ? firstWords.map((word) => (
                    <Link
                      key={word.id}
                      href={`/hsk/${level}/word/${word.id}`}
                      className="rounded-2xl bg-slate-50 p-4 transition hover:bg-teal-700 hover:text-white"
                    >
                      <span className="hanzi-display block text-3xl font-black">
                        {word.hanzi}
                      </span>
                      <span className="text-sm font-bold opacity-70">
                        {word.pinyin}
                      </span>
                    </Link>
                  ))
                : <p className="rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-7 text-slate-600 sm:col-span-3">
                    No reviewed vocabulary has been added for this level yet.
                  </p>}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
