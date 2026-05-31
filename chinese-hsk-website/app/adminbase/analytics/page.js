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
