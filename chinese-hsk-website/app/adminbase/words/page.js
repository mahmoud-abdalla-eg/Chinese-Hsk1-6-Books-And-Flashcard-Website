import Link from "next/link";
import WordManager from "@/components/admin/word-manager";
import { Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminWordsPage() {
  const admin = await getAdminUser();
  if (!admin) return <AdminLocked />;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Course data</Pill>
        <h1 className="mt-5 max-w-4xl text-5xl font-black text-slate-950 sm:text-7xl">
          Word manager
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          View words by HSK level, edit translations and examples, add audio
          paths when files are ready, create new words, or delete old records.
        </p>
      </Surface>
      <WordManager />
    </div>
  );
}

function AdminLocked() {
  return (
    <Surface className="p-7 lg:p-10">
      <Pill tone="rose">Adminbase only</Pill>
      <h1 className="mt-5 text-5xl font-black text-slate-950">Word manager</h1>
      <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
        Log in with an admin account to change course data.
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
