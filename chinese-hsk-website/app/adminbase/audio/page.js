import AudioManager from "@/components/admin/audio-manager";
import { Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseAudioPage() {
  const admin = await getAdminUser();
  if (!admin)
    return <Surface className="p-7">Adminbase login required.</Surface>;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Audio records</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Audio manager
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Track audio paths and status for words, examples, and conversations.
          Add real paths only after files exist.
        </p>
      </Surface>
      <AudioManager />
    </div>
  );
}
