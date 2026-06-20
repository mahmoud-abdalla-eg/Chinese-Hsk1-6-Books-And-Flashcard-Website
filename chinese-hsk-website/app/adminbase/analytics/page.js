import AdminStatCard from "@/components/admin/admin-stat-card";
import { Card, Pill, Surface } from "@/components/ui/card";
import { getAnalyticsStats } from "@/lib/admin/analytics";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseAnalyticsPage() {
  const admin = await getAdminUser();
  if (!admin)
    return <Surface className="p-7">Adminbase login required.</Surface>;
  const analytics = await getAnalyticsStats();
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Analytics</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Visits and learning signals
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          See traffic, performance, active learners, studied levels, slow pages,
          and words learners repeatedly mark hard.
        </p>
      </Surface>
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <AdminStatCard label="visits" value={analytics.visits} tone="blue" />
        <AdminStatCard
          label="people studied"
          value={analytics.studiedUsers}
          tone="teal"
        />
        <AdminStatCard
          label="study records"
          value={analytics.activeStudyRecords}
        />
        <AdminStatCard
          label="avg load ms"
          value={analytics.performance.averageLoadMs}
          tone="amber"
        />
      </section>
      <div className="grid gap-6 lg:grid-cols-3">
        <ChartPanel
          title="Visits by day"
          rows={analytics.visitsByDay}
          labelKey="day"
          valueKey="count"
        />
        <ChartPanel
          title="Most studied HSK levels"
          rows={analytics.studiedLevels.map((item) => ({
            ...item,
            label: `HSK ${item.level}`,
          }))}
          labelKey="label"
          valueKey="count"
        />
        <ChartPanel
          title="Most failed or hard words"
          rows={analytics.hardWords.map((item) => ({
            ...item,
            label: item.level
              ? `HSK ${item.level} · ${item.word}`
              : item.word || item.wordId,
          }))}
          labelKey="label"
          valueKey="count"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <DataTable title="Visits by day" rows={analytics.visitsByDay} />
        <DataTable title="Top pages" rows={analytics.topPages} />
        <DataTable title="Slow pages" rows={analytics.slowPages} />
        <DataTable title="Active learners" rows={analytics.activeLearners} />
        <DataTable title="Studied HSK levels" rows={analytics.studiedLevels} />
        <DataTable title="Most difficult words" rows={analytics.hardWords} />
      </div>
    </div>
  );
}

function ChartPanel({ labelKey, rows, title, valueKey }) {
  const max = Math.max(1, ...rows.map((row) => Number(row[valueKey] || 0)));
  return (
    <Card>
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <div className="mt-5 grid gap-3">
        {rows.length
          ? rows.slice(0, 10).map((row) => {
              const value = Number(row[valueKey] || 0);
              return (
                <div key={`${title}-${row[labelKey]}`}>
                  <div className="mb-1 flex justify-between gap-3 text-xs font-black text-slate-600">
                    <span className="truncate">{row[labelKey]}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-teal-700"
                      style={{ width: `${Math.max(4, (value / max) * 100)}%` }}
                    />
                  </div>
                </div>
              );
            })
          : <p className="text-sm font-semibold text-slate-500">No data yet</p>}
      </div>
    </Card>
  );
}

function DataTable({ title, rows }) {
  const keys = Object.keys(rows[0] || { status: "No data yet" });
  return (
    <Card>
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
            <tr>
              {keys.map((key) => (
                <th key={key} className="px-3 py-3">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(rows.length ? rows : [{ status: "No data yet" }]).map((row) => (
              <tr key={`${title}-${JSON.stringify(row)}`} className="border-t">
                {keys.map((key) => (
                  <td key={key} className="px-3 py-3 font-semibold">
                    {String(row[key] || "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
