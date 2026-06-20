"use client";

import CrudManager from "@/components/admin/crud-manager";

export default function ImportManager() {
  return (
    <div className="grid gap-5">
      <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold leading-6 text-slate-600 shadow-sm lg:grid-cols-3">
        <GuideCard
          title="Arabic review"
          text="Use words or grammar rows with meaning.ar, example.ar, title.ar, or translation.ar after a human review pass."
        />
        <GuideCard
          title="HSK 5/6 examples"
          text="Use words rows with example and examples arrays. Empty audio and Arabic fields are allowed until real data exists."
        />
        <GuideCard
          title="Apply safely"
          text='Set status to "reviewed", "approved", or "ready", then use Apply. Pending batches will not change student data.'
        />
      </div>
      <CrudManager
        endpoint="/api/adminbase/imports"
        collectionKey="jobs"
        newLabel="Add import batch"
        initialItem={{
          type: "words",
          level: 1,
          status: "pending-review",
          notes: "",
          payload: [],
        }}
        columns={[
          { key: "type", label: "Type" },
          { key: "level", label: "Level" },
          { key: "status", label: "Status" },
          { key: "notes", label: "Notes" },
        ]}
        fields={[
          {
            path: "type",
            label: "Type",
            type: "select",
            options: ["words", "grammar", "conversations", "audio"],
          },
          { path: "level", label: "HSK level", type: "number" },
          {
            path: "status",
            label: "Status",
            type: "select",
            options: ["pending-review", "reviewed", "approved", "ready"],
            helper: "Only reviewed, approved, or ready batches can be applied.",
          },
          { path: "notes", label: "Review notes", type: "textarea" },
          {
            path: "payload",
            label: "Reviewed JSON payload",
            type: "json",
            rows: 18,
            helper:
              "Paste an array of reviewed rows. For words, include id or hanzi, meaning, example, examples, audio, and tags as needed.",
          },
        ]}
        rowActions={[
          {
            label: "Apply",
            tone: "green",
            action: async (item) => {
              const response = await fetch(
                `/api/adminbase/imports/${item.mongoId}/apply`,
                { method: "POST" },
              );
              const data = await response.json();
              if (!response.ok) throw new Error(data.error || "Apply failed.");
              return `Applied ${data.result.appliedCount} ${data.result.type} rows.`;
            },
          },
        ]}
      />
    </div>
  );
}

function GuideCard({ text, title }) {
  return (
    <div className="rounded-xl bg-slate-50 p-4">
      <h2 className="font-black text-slate-950">{title}</h2>
      <p className="mt-2">{text}</p>
    </div>
  );
}
