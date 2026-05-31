"use client";

import { useCallback, useEffect, useState } from "react";

export default function LearnerManager() {
  const [learners, setLearners] = useState([]);
  const [status, setStatus] = useState("Loading learners...");

  const loadLearners = useCallback(async () => {
    setStatus("Loading learners...");
    const response = await fetch("/api/adminbase/learners", {
      cache: "no-store",
    });
    if (!response.ok) {
      setStatus("Could not load learners.");
      return;
    }
    const data = await response.json();
    setLearners(data.learners || []);
    setStatus(`${data.learners?.length || 0} learners loaded.`);
  }, []);

  useEffect(() => {
    loadLearners();
  }, [loadLearners]);

  async function resetProgress(learner) {
    if (!window.confirm(`Reset progress for ${learner.email}?`)) return;
    await fetch(`/api/adminbase/learners/${learner.id}/reset`, {
      method: "POST",
    });
    await loadLearners();
    setStatus("Learner progress reset.");
  }

  async function deleteLearner(learner) {
    if (!window.confirm(`Delete learner ${learner.email} and their progress?`))
      return;
    await fetch(`/api/adminbase/learners/${learner.id}`, { method: "DELETE" });
    await loadLearners();
    setStatus("Learner deleted.");
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-bold text-slate-500">{status}</p>
      <div className="mt-5 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
            <tr>
              <th className="px-3 py-3">Learner</th>
              <th className="px-3 py-3">Learned</th>
              <th className="px-3 py-3">Hard</th>
              <th className="px-3 py-3">Reviews</th>
              <th className="px-3 py-3">Units</th>
              <th className="px-3 py-3">Last studied</th>
              <th className="px-3 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {learners.map((learner) => (
              <tr key={learner.id} className="border-t">
                <td className="px-3 py-3">
                  <strong className="block text-slate-950">
                    {learner.name || "Learner"}
                  </strong>
                  <span className="text-slate-500">{learner.email}</span>
                </td>
                <td className="px-3 py-3 font-black">{learner.learnedWords}</td>
                <td className="px-3 py-3 font-black">{learner.hardWords}</td>
                <td className="px-3 py-3 font-black">{learner.reviews}</td>
                <td className="px-3 py-3 font-black">
                  {learner.completedUnits}
                </td>
                <td className="px-3 py-3 font-semibold text-slate-500">
                  {learner.lastStudiedDate || "Not started"}
                </td>
                <td className="px-3 py-3">
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`/api/adminbase/learners/${learner.id}/export`}
                      className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black text-blue-900"
                    >
                      Export
                    </a>
                    <button
                      type="button"
                      onClick={() => resetProgress(learner)}
                      className="rounded-full bg-amber-50 px-3 py-2 text-xs font-black text-amber-900"
                    >
                      Reset
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteLearner(learner)}
                      className="rounded-full bg-rose-50 px-3 py-2 text-xs font-black text-rose-800"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
