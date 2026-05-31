import CrudManager from "@/components/admin/crud-manager";
import { Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseSiteContentPage() {
  const admin = await getAdminUser();
  if (!admin)
    return <Surface className="p-7">Adminbase login required.</Surface>;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Site text</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Site content manager
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Edit public-facing text blocks. The homepage hero reads from these
          records now.
        </p>
      </Surface>
      <CrudManager
        endpoint="/api/adminbase/site-content"
        collectionKey="rows"
        newLabel="Add text"
        initialItem={{ key: "", label: "", value: "" }}
        columns={[
          { key: "key", label: "Key" },
          { key: "label", label: "Label" },
          { key: "value", label: "Value" },
        ]}
        fields={[
          { path: "key", label: "Key" },
          { path: "label", label: "Label" },
          { path: "value", label: "Value", type: "textarea", rows: 8 },
        ]}
      />
    </div>
  );
}
