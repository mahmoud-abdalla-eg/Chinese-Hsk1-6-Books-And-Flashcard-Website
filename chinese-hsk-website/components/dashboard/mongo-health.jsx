"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language/language-provider";

export default function MongoHealth() {
  const { tr } = useLanguage();
  const [status, setStatus] = useState(null);

  const check = async () => {
    setStatus(tr("checkingDatabase"));
    try {
      const response = await fetch("/api/health/mongodb", {
        cache: "no-store",
      });
      const data = await response.json();
      setStatus(
        data.ok ? `${tr("databaseOnline")}: ${data.database}` : data.error,
      );
    } catch {
      setStatus(tr("databaseUnreachable"));
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-2xl font-black text-slate-950">
        {tr("databaseStatus")}
      </h2>
      <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">
        {tr("databaseStatusHelp")}
      </p>
      <button
        type="button"
        onClick={check}
        className="mt-4 rounded-full bg-slate-800 px-4 py-2 text-sm font-black text-white hover:bg-slate-900"
      >
        {tr("checkMongoDb")}
      </button>
      {status ? (
        <p className="mt-3 rounded-xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
          {status}
        </p>
      ) : null}
    </div>
  );
}
