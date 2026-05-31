import CrudManager from "@/components/admin/crud-manager";
import { Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseGrammarUnitsPage() {
  const admin = await getAdminUser();
  if (!admin)
    return <Surface className="p-7">Adminbase login required.</Surface>;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Grammar units</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Grammar unit controls
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Create manual HSK 1-6 grammar unit titles and ranges. Each unit
          includes grammar points whose order is between the start and end
          order, so you can rename, split, or regroup units by level.
        </p>
      </Surface>
      <CrudManager
        endpoint="/api/adminbase/grammar-units"
        collectionKey="units"
        levelFilter
        newLabel="Add unit"
        initialItem={{
          level: 1,
          id: 1,
          title: "",
          description: "",
          startOrder: 1,
          endOrder: 12,
        }}
        columns={[
          { key: "id", label: "Unit" },
          { key: "title", label: "Title" },
          { key: "startOrder", label: "Start" },
          { key: "endOrder", label: "End" },
        ]}
        fields={[
          { path: "level", label: "HSK level", type: "number" },
          { path: "id", label: "Unit number", type: "number" },
          { path: "title", label: "Unit title" },
          { path: "description", label: "Unit description", type: "textarea" },
          { path: "startOrder", label: "Start grammar order", type: "number" },
          { path: "endOrder", label: "End grammar order", type: "number" },
        ]}
      />
    </div>
  );
}
