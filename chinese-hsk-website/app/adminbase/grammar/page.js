import CrudManager from "@/components/admin/crud-manager";
import { Pill, Surface } from "@/components/ui/card";
import { getAdminUser } from "@/lib/auth/admin";

export const dynamic = "force-dynamic";

export default async function AdminbaseGrammarPage() {
  const admin = await getAdminUser();
  if (!admin) return <Locked />;
  return (
    <div className="space-y-8 pb-8">
      <Surface className="p-7 lg:p-10">
        <Pill tone="blue">Grammar CRUD</Pill>
        <h1 className="mt-5 text-5xl font-black text-slate-950 sm:text-7xl">
          Grammar manager
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
          Add, edit, delete, and reorder grammar points for HSK 1-6. Each point
          has an editable level, lesson part, pattern, explanation, and example.
          Units are controlled from the grammar unit page.
        </p>
      </Surface>
      <CrudManager
        endpoint="/api/adminbase/grammar"
        collectionKey="items"
        levelFilter
        newLabel="Add grammar"
        initialItem={{
          id: "",
          hskLevel: 1,
          order: 1,
          lessonCode: "",
          pattern: "",
          explanation: "",
          example: { hanzi: "", pinyin: "", en: "", ar: "" },
        }}
        columns={[
          { key: "order", label: "Order" },
          { key: "lessonCode", label: "Lesson" },
          { key: "pattern", label: "Pattern" },
          { key: "details", label: "Details" },
          { key: "example.en", label: "Example" },
        ]}
        fields={[
          { path: "id", label: "ID" },
          { path: "hskLevel", label: "HSK level", type: "number" },
          { path: "order", label: "Order", type: "number" },
          { path: "lessonCode", label: "Lesson part / code" },
          { path: "pattern", label: "Pattern / structure" },
          { path: "explanation", label: "Explanation", type: "textarea" },
          { path: "details", label: "Full row details", type: "textarea" },
          { path: "example.hanzi", label: "Example Chinese" },
          { path: "example.pinyin", label: "Example pinyin" },
          { path: "example.en", label: "Example English" },
          { path: "example.ar", label: "Example Arabic", dir: "rtl" },
        ]}
      />
    </div>
  );
}

function Locked() {
  return <Surface className="p-7">Adminbase login required.</Surface>;
}
