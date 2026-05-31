import ImportManager from "@/components/admin/import-manager";
import { Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseImportsPage() {
  const admin = await getAdminUser();
  if (!admin)
    return <Surface className="p-7">Adminbase login required.</Surface>;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="amber">Review workflow</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Data import queue
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Paste reviewed JSON from trusted learning material here first, mark it
          as reviewed, then copy approved rows into the relevant editor. This
          keeps missing Arabic, examples, and audio honest instead of fake.
        </p>
      </Surface>
      <ImportManager />
    </div>
  );
}
