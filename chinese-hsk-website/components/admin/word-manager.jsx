"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

const emptyWord = {
  level: 1,
  id: "",
  order: 1,
  hanzi: "",
  pinyin: "",
  partOfSpeech: "word",
  meaning: { en: "", ar: "" },
  example: { hanzi: "", pinyin: "", en: "", ar: "" },
  examples: [],
  audio: { word: "", example: "" },
  tags: [],
};

export default function WordManager() {
  const [level, setLevel] = useState(1);
  const [words, setWords] = useState([]);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("Loading words...");

  const loadWords = useCallback(async (nextLevel) => {
    setStatus("Loading words...");
    const response = await fetch(`/api/adminbase/words?level=${nextLevel}`, {
      cache: "no-store",
    });
    if (!response.ok) {
      setStatus("Could not load words. Log in to adminbase again.");
      return;
    }
    const data = await response.json();
    setWords(data.words || []);
    setSelected(null);
    setStatus(`${data.words?.length || 0} words loaded.`);
  }, []);

  useEffect(() => {
    loadWords(level);
  }, [level, loadWords]);

  const currentWord = selected || { ...emptyWord, level };
  const filteredWords = useMemo(
    () => words.slice().sort((a, b) => Number(a.order) - Number(b.order)),
    [words],
  );

  async function saveWord(event) {
    event.preventDefault();
    setStatus("Saving word...");
    const response = await fetch(
      currentWord.mongoId
        ? `/api/adminbase/words/${currentWord.mongoId}`
        : "/api/adminbase/words",
      {
        method: currentWord.mongoId ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(currentWord),
      },
    );
    const data = await response.json();
    if (!response.ok) {
      setStatus(data.error || "Could not save word.");
      return;
    }
    setSelected(data.word);
    await loadWords(level);
    setStatus("Word saved. Students will see the updated data.");
  }

  async function deleteWord(word) {
    if (!word.mongoId) return;
    const confirmed = window.confirm(`Delete ${word.hanzi}?`);
    if (!confirmed) return;
    setStatus("Deleting word...");
    await fetch(`/api/adminbase/words/${word.mongoId}`, { method: "DELETE" });
    await loadWords(level);
    setStatus("Word deleted.");
  }

  function update(path, value) {
    setSelected((word) => {
      const draft = word || { ...emptyWord, level };
      if (path.length === 1) return { ...draft, [path[0]]: value };
      return {
        ...draft,
        [path[0]]: {
          ...draft[path[0]],
          [path[1]]: value,
        },
      };
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_440px]">
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
              setSelected({
                ...emptyWord,
                level,
                order: filteredWords.length + 1,
              })
            }
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white hover:bg-teal-800"
          >
            Add word
          </button>
        </div>
        <p className="mt-4 text-sm font-bold text-slate-500">{status}</p>
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <tr>
                <th className="px-3 py-3">Order</th>
                <th className="px-3 py-3">Chinese</th>
                <th className="px-3 py-3">Pinyin</th>
                <th className="px-3 py-3">English</th>
                <th className="px-3 py-3">Audio</th>
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredWords.map((word) => (
                <tr key={word.mongoId || word.id} className="border-t">
                  <td className="px-3 py-3 font-bold text-slate-500">
                    {word.order}
                  </td>
                  <td className="px-3 py-3 text-xl font-black text-slate-950">
                    {word.hanzi}
                  </td>
                  <td className="px-3 py-3 font-semibold text-teal-700">
                    {word.pinyin}
                  </td>
                  <td className="px-3 py-3 font-semibold text-slate-700">
                    {word.meaning?.en || "Missing"}
                  </td>
                  <td className="px-3 py-3 font-semibold text-slate-500">
                    {word.audio?.word ? "Ready" : "Missing"}
                    <span className="block text-xs">
                      {word.examples?.length || 0} examples
                    </span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSelected(word)}
                        className="rounded-full bg-blue-50 px-3 py-2 text-xs font-black text-blue-900"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteWord(word)}
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

      <form
        onSubmit={saveWord}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-28 xl:self-start"
      >
        <h2 className="text-2xl font-black text-slate-950">
          {currentWord.mongoId ? "Edit word" : "Add word"}
        </h2>
        <div className="mt-5 grid gap-3">
          <Field
            label="ID"
            value={currentWord.id}
            onChange={(value) => update(["id"], value)}
            placeholder="auto if empty"
          />
          <div className="grid grid-cols-2 gap-3">
            <Field
              label="Order"
              type="number"
              value={currentWord.order}
              onChange={(value) => update(["order"], value)}
            />
            <Field
              label="Part of speech"
              value={currentWord.partOfSpeech}
              onChange={(value) => update(["partOfSpeech"], value)}
            />
          </div>
          <Field
            label="Chinese"
            value={currentWord.hanzi}
            onChange={(value) => update(["hanzi"], value)}
          />
          <Field
            label="Pinyin"
            value={currentWord.pinyin}
            onChange={(value) => update(["pinyin"], value)}
          />
          <Field
            label="English"
            value={currentWord.meaning?.en || ""}
            onChange={(value) => update(["meaning", "en"], value)}
          />
          <Field
            label="Arabic"
            value={currentWord.meaning?.ar || ""}
            onChange={(value) => update(["meaning", "ar"], value)}
            dir="rtl"
          />
          <Field
            label="Example Chinese"
            value={currentWord.example?.hanzi || ""}
            onChange={(value) => update(["example", "hanzi"], value)}
          />
          <Field
            label="Example pinyin"
            value={currentWord.example?.pinyin || ""}
            onChange={(value) => update(["example", "pinyin"], value)}
          />
          <Field
            label="Example English"
            value={currentWord.example?.en || ""}
            onChange={(value) => update(["example", "en"], value)}
          />
          <Field
            label="Example Arabic"
            value={currentWord.example?.ar || ""}
            onChange={(value) => update(["example", "ar"], value)}
            dir="rtl"
          />
          <Field
            label="All examples JSON"
            type="json"
            rows={8}
            value={currentWord.examples || []}
            onChange={(value) => update(["examples"], value)}
            helper="Optional. Keep reviewed examples as objects with hanzi, pinyin, en, and ar."
          />
          <Field
            label="Word audio path"
            value={currentWord.audio?.word || ""}
            onChange={(value) => update(["audio", "word"], value)}
            placeholder="/audio/words/hsk-1/word.mp3"
          />
          <Field
            label="Example audio path"
            value={currentWord.audio?.example || ""}
            onChange={(value) => update(["audio", "example"], value)}
            placeholder="/audio/sentences/hsk-1/example.mp3"
          />
          <button
            type="submit"
            className="mt-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
          >
            Save word
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  dir,
  helper,
  label,
  onChange,
  placeholder,
  rows = 5,
  type = "text",
  value,
}) {
  const common =
    "rounded-xl border border-slate-300 px-3 py-2 font-semibold text-slate-950 outline-none focus:border-teal-500";
  const fieldId = `word-${label.toLowerCase().replaceAll(" ", "-")}`;
  return (
    <div className="grid gap-1 text-sm font-black text-slate-700">
      <label htmlFor={fieldId}>{label}</label>
      {type === "textarea" || type === "json" ? (
        <textarea
          id={fieldId}
          rows={rows}
          value={type === "json" ? prettyJson(value) : value || ""}
          onChange={(event) =>
            onChange(
              type === "json"
                ? parseJson(event.target.value)
                : event.target.value,
            )
          }
          placeholder={placeholder}
          dir={dir}
          className={common}
        />
      ) : (
        <input
          id={fieldId}
          type={type}
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          dir={dir}
          className={common}
        />
      )}
      {helper ? (
        <span className="text-xs font-semibold leading-5 text-slate-500">
          {helper}
        </span>
      ) : null}
    </div>
  );
}

function prettyJson(value) {
  return JSON.stringify(value ?? [], null, 2);
}

function parseJson(value) {
  try {
    const parsed = JSON.parse(value || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return value;
  }
}
