"use client";

import CrudManager from "@/components/admin/crud-manager";

export default function ImportManager() {
  return (
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
        { path: "type", label: "Type" },
        { path: "level", label: "HSK level", type: "number" },
        { path: "status", label: "Status" },
        { path: "notes", label: "Review notes", type: "textarea" },
        {
          path: "payload",
          label: "Reviewed JSON payload",
          type: "json",
          rows: 16,
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
  );
}
