import { Card, Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseLoginPage({ searchParams }) {
  const admin = await getAdminUser();
  const params = await searchParams;
  return (
    <div className="mx-auto max-w-xl pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="slate">Adminbase</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950">Admin login</h1>
        <p className="mt-4 text-base font-semibold leading-7 text-slate-600">
          This area is separate from learner accounts and is only opened from
          the /adminbase URL.
        </p>
        {admin
          ? <Card className="mt-6 bg-teal-50">
              <p className="font-bold text-teal-950">
                You are already signed in as {admin.name}.
              </p>
              <a
                href="/adminbase"
                className="mt-4 inline-flex rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white"
              >
                Open adminbase
              </a>
            </Card>
          : <form
              action="/api/adminbase/auth/login"
              method="post"
              className="mt-8 grid gap-4"
            >
              {params?.error
                ? <p className="rounded-2xl bg-rose-50 p-4 text-sm font-bold text-rose-800">
                    {params.error}
                  </p>
                : null}
              <label className="grid gap-2 text-sm font-black text-slate-700">
                Email
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="admin@example.com"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
                />
              </label>
              <label className="grid gap-2 text-sm font-black text-slate-700">
                Password
                <input
                  required
                  type="password"
                  name="password"
                  className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
              >
                Log in to adminbase
              </button>
            </form>}
      </Surface>
    </div>
  );
}
