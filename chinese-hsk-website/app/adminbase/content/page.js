import Link from "next/link";
import AdminStatCard from "@/components/admin/admin-stat-card";
import { Card, Pill, Surface } from "@/components/ui/card";
import { getContentGapReport } from "@/lib/admin/content-gaps";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseContentPage() {
  const admin = await getAdminUser();
  if (!admin) return <AdminLocked />;
  const report = getContentGapReport();
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Content review</Pill>
        <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
          Content gaps
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Review real missing audio, examples, translations, and conversation
          coverage. Nothing here is fake-filled.
        </p>
        <Link
          href="/adminbase/data-check"
          className="mt-6 inline-flex rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
        >
          Open full data check
        </Link>
      </Surface>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard
          label="review items"
          value={report.totals.reviewItems}
          tone="rose"
        />
        <AdminStatCard
          label="word audio"
          value={report.totals.wordAudio}
          tone="blue"
        />
        <AdminStatCard
          label="example audio"
          value={report.totals.exampleAudio}
          tone="teal"
        />
        <AdminStatCard
          label="arabic text"
          value={report.totals.arabic}
          tone="amber"
        />
      </section>
      <section className="grid gap-5">
        {report.levels.map((level) => (
          <Card key={level.level}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <Pill tone={level.totalReviewItems ? "rose" : "green"}>
                  HSK {level.level}
                </Pill>
                <h2 className="mt-4 text-3xl font-black text-slate-950">
                  {level.wordCount}/{level.expectedCount} words
                </h2>
              </div>
              <div className="grid min-w-full gap-3 sm:grid-cols-3 lg:min-w-[560px]">
                <Metric label="word audio" value={level.wordAudio.length} />
                <Metric label="examples" value={level.examples.length} />
                <Metric label="arabic" value={level.arabic.length} />
                <Metric
                  label="example audio"
                  value={level.exampleAudio.length}
                />
                <Metric
                  label="dialogue audio"
                  value={level.conversationAudio.length}
                />
                <Metric label="uncovered" value={level.uncoveredWords.length} />
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <strong className="block text-2xl font-black text-slate-950">
        {value}
      </strong>
      <span className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
        {label}
      </span>
    </div>
  );
}

function AdminLocked() {
  return (
    <Surface className="p-7 lg:p-10">
      <Pill tone="rose">Adminbase only</Pill>
      <h1 className="mt-5 text-5xl font-black text-slate-950">Content gaps</h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
        Log in with a separate admin account to review course content.
      </p>
      <Link
        href="/adminbase/login"
        className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white"
      >
        Admin login
      </Link>
    </Surface>
  );
}
