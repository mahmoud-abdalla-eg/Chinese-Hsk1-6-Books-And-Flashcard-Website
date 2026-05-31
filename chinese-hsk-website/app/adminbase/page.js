import Link from "next/link";
import AdminStatCard from "@/components/admin/admin-stat-card";
import { Card, Pill, Surface } from "@/components/ui/card";
import { getAnalyticsStats } from "@/lib/admin/analytics";
import { getAdminDashboardStats } from "@/lib/admin/stats";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseDashboardPage() {
  const admin = await getAdminUser();
  if (!admin) return <AdminLocked />;
  const [stats, analytics] = await Promise.all([
    getAdminDashboardStats(),
    getAnalyticsStats(),
  ]);
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Pill tone="slate">Adminbase</Pill>
            <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
              Site control center
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
              Manage learner data, course words, content gaps, visits, and
              performance from a private admin area.
            </p>
          </div>
          <form action="/api/adminbase/auth/logout" method="post">
            <button
              type="submit"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Admin logout
            </button>
          </form>
        </div>
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

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <Card>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Pill tone={stats.database.ok ? "green" : "rose"}>
                {stats.database.ok ? "Database online" : "Database offline"}
              </Pill>
              <h2 className="mt-4 text-3xl font-black text-slate-950">
                Admin tools
              </h2>
              <p className="mt-2 max-w-2xl font-semibold leading-7 text-slate-600">
                Edit words, review content gaps, and check course data before
                students see it.
              </p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/adminbase/words"
              className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
            >
              Manage words
            </Link>
            <Link
              href="/adminbase/grammar"
              className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
            >
              Manage grammar
            </Link>
            <Link
              href="/adminbase/grammar-units"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Grammar units
            </Link>
            <Link
              href="/adminbase/conversations"
              className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
            >
              Manage conversations
            </Link>
            <Link
              href="/adminbase/audio"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Audio records
            </Link>
            <Link
              href="/adminbase/settings"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Flashcard settings
            </Link>
            <Link
              href="/adminbase/site-content"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Site text
            </Link>
            <Link
              href="/adminbase/analytics"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Analytics
            </Link>
            <Link
              href="/adminbase/learners"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Learners
            </Link>
            <Link
              href="/adminbase/imports"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Import queue
            </Link>
            <Link
              href="/adminbase/content"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Content gaps
            </Link>
            <Link
              href="/adminbase/data-check"
              className="rounded-full border border-slate-300 px-5 py-3 text-sm font-black text-slate-800 hover:border-teal-500"
            >
              Data check
            </Link>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-black text-slate-950">Course totals</h2>
          <div className="mt-4 grid gap-3">
            <AdminStatCard label="users" value={stats.database.users} />
            <AdminStatCard
              label="progress saves"
              value={stats.database.progressRecords}
              tone="teal"
            />
            <AdminStatCard
              label="course words"
              value={stats.course.words}
              tone="blue"
            />
          </div>
        </Card>
      </div>
    </div>
  );
}

function AdminLocked() {
  return (
    <div className="pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="rose">Adminbase only</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Adminbase
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Log in with a separate admin account to open this private area.
        </p>
        <Link
          href="/adminbase/login"
          className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
        >
          Admin login
        </Link>
      </Surface>
    </div>
  );
}
