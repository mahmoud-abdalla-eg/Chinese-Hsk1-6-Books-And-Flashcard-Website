"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const emptyConversation = {
  id: "",
  hskLevel: 1,
  unitId: 1,
  status: "needs-authoring",
  title: { en: "", zh: "", ar: "" },
  targetVocabularyIds: [],
  dialogue: [],
  grammarNotes: [],
  culturalNotes: [],
  comprehensionQuestions: [],
  shadowingPractice: { enabled: true, mode: "line-by-line" },
  authoringNote: "",
};

export default function ConversationManager() {
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("Loading conversations...");
  const current = selected || { ...emptyConversation, hskLevel: level };

  const loadItems = useCallback(async () => {
    setStatus("Loading conversations...");
    const response = await fetch(
      `/api/adminbase/conversations?level=${level}`,
      {
        cache: "no-store",
      },
    );
    if (!response.ok) {
      setStatus("Could not load conversations.");
      return;
    }
    const data = await response.json();
    setItems(data.conversations || []);
    setSelected(null);
    setStatus(`${data.conversations?.length || 0} conversations loaded.`);
  }, [level]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const sorted = useMemo(
    () => items.slice().sort((a, b) => Number(a.unitId) - Number(b.unitId)),
    [items],
  );

  async function save(event) {
    event.preventDefault();
    setStatus("Saving conversation...");
    const response = await fetch(
      current.mongoId
        ? `/api/adminbase/conversations/${current.mongoId}`
        : "/api/adminbase/conversations",
      {
        method: current.mongoId ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(current),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      setStatus(data.error || "Could not save conversation.");
      return;
    }
    await loadItems();
    setStatus("Conversation saved.");
  }

  async function remove(item) {
    if (!item.mongoId || !window.confirm("Delete this conversation?")) return;
    await fetch(`/api/adminbase/conversations/${item.mongoId}`, {
      method: "DELETE",
    });
    await loadItems();
    setStatus("Conversation deleted.");
  }

  function update(path, value) {
    setSelected((item) => setPath(item || current, path.split("."), value));
  }

  function updateLine(index, path, value) {
    setSelected((item) => {
      const next = structuredClone(item || current);
      next.dialogue = Array.isArray(next.dialogue) ? next.dialogue : [];
      next.dialogue[index] = setPath(
        next.dialogue[index] || newLine(index),
        path.split("."),
        value,
      );
      return next;
    });
  }

  function addLine() {
    setSelected((item) => {
      const next = structuredClone(item || current);
      next.dialogue = [
        ...(next.dialogue || []),
        newLine(next.dialogue?.length),
      ];
      return next;
    });
  }

  function removeLine(index) {
    setSelected((item) => {
      const next = structuredClone(item || current);
      next.dialogue = next.dialogue.filter(
        (_, lineIndex) => lineIndex !== index,
      );
      return next;
    });
  }

  function moveLine(index, direction) {
    setSelected((item) => {
      const next = structuredClone(item || current);
      const lines = [...(next.dialogue || [])];
      const target = index + direction;
      if (target < 0 || target >= lines.length) return next;
      [lines[index], lines[target]] = [lines[target], lines[index]];
      next.dialogue = lines;
      return next;
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_520px]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLevel(item)}
                className={`rounded-full px-4 py-2 text-sm font-black ${
                  item === level
                    ? "bg-teal-700 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                HSK {item}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              setSelected({ ...emptyConversation, hskLevel: level, unitId: 1 })
            }
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white"
          >
            Add conversation
          </button>
        </div>
        <p className="mt-4 text-sm font-bold text-slate-500">{status}</p>
        <div className="mt-5 grid gap-3">
          {sorted.map((item) => (
            <div
              key={item.mongoId || item.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 p-4"
            >
              <div>
                <strong className="text-lg text-slate-950">
                  Unit {item.unitId}: {item.title?.en || item.id}
                </strong>
                <p className="text-sm font-semibold text-slate-500">
                  {item.status} - {item.dialogue?.length || 0} lines
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black text-blue-900"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => remove(item)}
                  className="rounded-full bg-rose-50 px-3 py-2 text-xs font-black text-rose-800"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <form
        onSubmit={save}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-28 xl:self-start"
      >
        <h2 className="text-2xl font-black text-slate-950">
          Conversation editor
        </h2>
        <div className="mt-5 grid gap-3">
          <Field
            label="ID"
            value={current.id}
            onChange={(v) => update("id", v)}
          />
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="HSK level"
              type="number"
              value={current.hskLevel}
              onChange={(v) => update("hskLevel", Number(v))}
            />
            <Field
              label="Unit"
              type="number"
              value={current.unitId}
              onChange={(v) => update("unitId", Number(v))}
            />
          </div>
          <Field
            label="Status"
            value={current.status}
            onChange={(v) => update("status", v)}
          />
          <Field
            label="English title"
            value={current.title?.en}
            onChange={(v) => update("title.en", v)}
          />
          <Field
            label="Chinese title"
            value={current.title?.zh}
            onChange={(v) => update("title.zh", v)}
          />
          <Field
            label="Arabic title"
            value={current.title?.ar}
            onChange={(v) => update("title.ar", v)}
            dir="rtl"
          />
          <Field
            label="Target word IDs, comma separated"
            value={(current.targetVocabularyIds || []).join(", ")}
            onChange={(v) =>
              update(
                "targetVocabularyIds",
                v
                  .split(",")
                  .map((item) => item.trim())
                  .filter(Boolean),
              )
            }
          />
          <div className="rounded-2xl border border-slate-200 p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-black text-slate-950">Dialogue lines</h3>
              <button
                type="button"
                onClick={addLine}
                className="rounded-full bg-teal-700 px-3 py-2 text-xs font-black text-white"
              >
                Add line
              </button>
            </div>
            <div className="mt-4 grid gap-4">
              {(current.dialogue || []).map((line, index) => (
                <div
                  key={line.id || index}
                  className="rounded-xl bg-slate-50 p-3"
                >
                  <div className="mb-2 flex justify-between">
                    <strong className="text-sm">Line {index + 1}</strong>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => moveLine(index, -1)}
                        className="text-xs font-black text-slate-600"
                      >
                        Up
                      </button>
                      <button
                        type="button"
                        onClick={() => moveLine(index, 1)}
                        className="text-xs font-black text-slate-600"
                      >
                        Down
                      </button>
                      <button
                        type="button"
                        onClick={() => removeLine(index)}
                        className="text-xs font-black text-rose-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Field
                      label="Line ID"
                      value={line.id}
                      onChange={(v) => updateLine(index, "id", v)}
                    />
                    <Field
                      label="Speaker"
                      value={line.role}
                      onChange={(v) => updateLine(index, "role", v)}
                    />
                    <Field
                      label="Chinese"
                      value={line.hanzi}
                      onChange={(v) => updateLine(index, "hanzi", v)}
                      type="textarea"
                    />
                    <Field
                      label="Pinyin"
                      value={line.pinyin}
                      onChange={(v) => updateLine(index, "pinyin", v)}
                    />
                    <Field
                      label="English"
                      value={line.translation?.en}
                      onChange={(v) => updateLine(index, "translation.en", v)}
                      type="textarea"
                    />
                    <Field
                      label="Arabic"
                      value={line.translation?.ar}
                      onChange={(v) => updateLine(index, "translation.ar", v)}
                      dir="rtl"
                      type="textarea"
                    />
                    <Field
                      label="Audio path"
                      value={line.audio}
                      onChange={(v) => updateLine(index, "audio", v)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Field
            label="Admin note"
            value={current.authoringNote}
            onChange={(v) => update("authoringNote", v)}
          />
          <button
            type="submit"
            className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white"
          >
            Save conversation
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", dir }) {
  const id = `conversation-${label.toLowerCase().replaceAll(" ", "-")}`;
  const className =
    "rounded-xl border border-slate-300 px-3 py-2 font-semibold text-slate-950 outline-none focus:border-teal-500";
  return (
    <div className="grid gap-1 text-sm font-black text-slate-700">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={3}
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          dir={dir}
          className={className}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          dir={dir}
          className={className}
        />
      )}
    </div>
  );
}

function newLine(index = 0) {
  return {
    id: `line-${Number(index) + 1}`,
    role: "A",
    hanzi: "",
    pinyin: "",
    translation: { en: "", ar: "" },
    audio: "",
  };
}

function setPath(item, path, value) {
  const clone = structuredClone(item);
  let target = clone;
  for (const key of path.slice(0, -1)) {
    target[key] = target[key] || {};
    target = target[key];
  }
  target[path.at(-1)] = value;
  return clone;
}
