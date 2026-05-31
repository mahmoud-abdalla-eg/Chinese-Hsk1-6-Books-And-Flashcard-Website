"use client";

import { useState } from "react";
import CrudManager from "@/components/admin/crud-manager";

export default function AudioManager() {
  const [level, setLevel] = useState(1);
  const [audioType, setAudioType] = useState("word");
  const [basePath, setBasePath] = useState("/audio/words/hsk-1");
  const [lines, setLines] = useState("");
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("");

  async function matchAudio(event) {
    event.preventDefault();
    setStatus("Matching audio files...");
    setResult(null);
    const response = await fetch("/api/adminbase/audio/bulk-match", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ level, audioType, basePath, lines }),
    });
    const data = await response.json();
    if (!response.ok) {
      setStatus(data.error || "Bulk match failed.");
      return;
    }
    setResult(data.result);
    setStatus(
      `Matched ${data.result.matched.length} of ${data.result.total} files.`,
    );
  }

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-2xl font-black text-slate-950">
          Bulk match word audio
        </h2>
        <p className="mt-2 text-sm font-semibold leading-7 text-slate-600">
          Paste one audio filename or path per line. The matcher uses the file
          name without extension and matches it to the word English meaning.
          Example: <span className="font-black">thank_you.mp3</span> can match a
          word whose English meaning is “thank you”.
        </p>
        <form onSubmit={matchAudio} className="mt-5 grid gap-4">
          <div className="grid gap-3 md:grid-cols-3">
            <label className="grid gap-1 text-sm font-black text-slate-700">
              HSK level
              <input
                type="number"
                min="1"
                max="5"
                value={level}
                onChange={(event) => {
                  const nextLevel = Number(event.target.value) || 1;
                  setLevel(nextLevel);
                  setBasePath(`/audio/words/hsk-${nextLevel}`);
                }}
                className="rounded-xl border border-slate-300 px-3 py-2 text-slate-950"
              />
            </label>
            <label className="grid gap-1 text-sm font-black text-slate-700">
              Audio field
              <select
                value={audioType}
                onChange={(event) => setAudioType(event.target.value)}
                className="rounded-xl border border-slate-300 px-3 py-2 text-slate-950"
              >
                <option value="word">Word audio</option>
                <option value="example">Example audio</option>
              </select>
            </label>
            <label className="grid gap-1 text-sm font-black text-slate-700">
              Base path
              <input
                value={basePath}
                onChange={(event) => setBasePath(event.target.value)}
                className="rounded-xl border border-slate-300 px-3 py-2 text-slate-950"
              />
            </label>
          </div>
          <label className="grid gap-1 text-sm font-black text-slate-700">
            Audio filenames or paths
            <textarea
              rows={8}
              value={lines}
              onChange={(event) => setLines(event.target.value)}
              placeholder={"hello.mp3\nthank_you.mp3\nnot_polite.mp3"}
              className="rounded-xl border border-slate-300 px-3 py-2 font-semibold text-slate-950 outline-none focus:border-teal-500"
            />
          </label>
          <button
            type="submit"
            className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
          >
            Match and save audio paths
          </button>
          {status ? (
            <p className="text-sm font-bold text-slate-600">{status}</p>
          ) : null}
        </form>
        {result ? <BulkResult result={result} /> : null}
      </section>
      <CrudManager
        endpoint="/api/adminbase/audio"
        collectionKey="records"
        newLabel="Add audio record"
        initialItem={{
          label: "",
          level: 1,
          type: "word",
          linkedId: "",
          path: "",
          status: "missing",
          notes: "",
        }}
        columns={[
          { key: "level", label: "Level" },
          { key: "type", label: "Type" },
          { key: "linkedId", label: "Linked ID" },
          { key: "status", label: "Status" },
          { key: "path", label: "Path" },
        ]}
        fields={[
          { path: "label", label: "Label" },
          { path: "level", label: "HSK level", type: "number" },
          { path: "type", label: "Type" },
          { path: "linkedId", label: "Linked word/conversation/line ID" },
          { path: "path", label: "Audio path" },
          { path: "status", label: "Status" },
          { path: "notes", label: "Notes", type: "textarea" },
        ]}
      />
    </div>
  );
}

function BulkResult({ result }) {
  return (
    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      <ResultList
        title={`Matched ${result.matched.length}`}
        rows={result.matched.map((item) => ({
          title: item.path,
          text: `${item.hanzi} - ${item.english}`,
        }))}
        empty="No matches yet."
        tone="teal"
      />
      <ResultList
        title={`Unmatched ${result.unmatched.length}`}
        rows={result.unmatched.map((item) => ({
          title: item.path,
          text: `No word found for "${item.key}"`,
        }))}
        empty="No unmatched files."
        tone="rose"
      />
      <ResultList
        title={`Ambiguous ${result.ambiguous.length}`}
        rows={result.ambiguous.map((item) => ({
          title: item.path,
          text: `${item.matches.length} possible words`,
        }))}
        empty="No ambiguous files."
        tone="amber"
      />
    </div>
  );
}

function ResultList({ title, rows, empty, tone }) {
  const tones = {
    teal: "bg-teal-50 text-teal-950",
    rose: "bg-rose-50 text-rose-950",
    amber: "bg-amber-50 text-amber-950",
  };
  return (
    <div className={`rounded-2xl p-4 ${tones[tone] || tones.teal}`}>
      <h3 className="font-black">{title}</h3>
      <div className="mt-3 grid gap-2 text-sm font-semibold">
        {rows.length ? (
          rows.slice(0, 10).map((row) => (
            <div
              key={`${row.title}-${row.text}`}
              className="rounded-xl bg-white/70 p-3"
            >
              <strong className="block">{row.title}</strong>
              <span>{row.text}</span>
            </div>
          ))
        ) : (
          <span>{empty}</span>
        )}
      </div>
    </div>
  );
}
