import CrudManager from "@/components/admin/crud-manager";
import { Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseSettingsPage() {
  const admin = await getAdminUser();
  if (!admin)
    return <Surface className="p-7">Adminbase login required.</Surface>;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Settings</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Flashcard settings
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Store flashcard behavior and review interval settings for the course.
        </p>
      </Surface>
      <CrudManager
        endpoint="/api/adminbase/settings"
        collectionKey="settings"
        newLabel="Add setting"
        initialItem={{ key: "flashcards", label: "", settings: {} }}
        columns={[
          { key: "key", label: "Key" },
          { key: "label", label: "Label" },
        ]}
        fields={[
          { path: "key", label: "Key" },
          { path: "label", label: "Label" },
          { path: "settings", label: "Settings JSON", type: "json", rows: 14 },
        ]}
      />
    </div>
  );
}
