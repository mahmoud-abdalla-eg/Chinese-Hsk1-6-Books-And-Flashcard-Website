"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

export default function CrudManager({
  endpoint,
  collectionKey,
  idKey = "mongoId",
  levelFilter = false,
  initialItem,
  columns,
  fields,
  newLabel = "Add item",
  savedLabel = "Saved.",
  rowActions = [],
}) {
  const [level, setLevel] = useState(1);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [status, setStatus] = useState("Loading...");
  const url = useMemo(
    () => (levelFilter ? `${endpoint}?level=${level}` : endpoint),
    [endpoint, level, levelFilter],
  );

  const loadItems = useCallback(async () => {
    setStatus("Loading...");
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      setStatus("Could not load data. Log in to adminbase again.");
      return;
    }
    const data = await response.json();
    setItems(data[collectionKey] || []);
    setSelected(null);
    setStatus(`${data[collectionKey]?.length || 0} records loaded.`);
  }, [collectionKey, url]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const current = selected || { ...initialItem, level, hskLevel: level };

  async function saveItem(event) {
    event.preventDefault();
    setStatus("Saving...");
    const itemId = current[idKey];
    const response = await fetch(itemId ? `${endpoint}/${itemId}` : endpoint, {
      method: itemId ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(current),
    });
    const data = await response.json();
    if (!response.ok) {
      setStatus(data.error || "Could not save.");
      return;
    }
    await loadItems();
    setStatus(savedLabel);
  }

  async function deleteItem(item) {
    const itemId = item[idKey];
    if (!itemId || !window.confirm("Delete this record?")) return;
    await fetch(`${endpoint}/${itemId}`, { method: "DELETE" });
    await loadItems();
    setStatus("Deleted.");
  }

  async function runRowAction(action, item) {
    try {
      setStatus("Working...");
      const message = await action.action(item);
      await loadItems();
      setStatus(message || "Done.");
    } catch (error) {
      setStatus(error.message || "Action failed.");
    }
  }

  function update(path, value) {
    setSelected((item) => setPath(item || current, path.split("."), value));
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_440px]">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {levelFilter ? (
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
          ) : (
            <span className="text-sm font-bold text-slate-500">{status}</span>
          )}
          <button
            type="button"
            onClick={() =>
              setSelected({ ...initialItem, level, hskLevel: level })
            }
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-black text-white hover:bg-teal-800"
          >
            {newLabel}
          </button>
        </div>
        {levelFilter ? (
          <p className="mt-4 text-sm font-bold text-slate-500">{status}</p>
        ) : null}
        <div className="mt-5 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-black uppercase tracking-[0.12em] text-slate-500">
              <tr>
                {columns.map((column) => (
                  <th key={column.key} className="px-3 py-3">
                    {column.label}
                  </th>
                ))}
                <th className="px-3 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item[idKey] || item.id || index} className="border-t">
                  {columns.map((column) => (
                    <td key={column.key} className="px-3 py-3 font-semibold">
                      {String(getPath(item, column.key) || "Missing").slice(
                        0,
                        80,
                      )}
                    </td>
                  ))}
                  <td className="px-3 py-3">
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
                        onClick={() => deleteItem(item)}
                        className="rounded-full bg-rose-50 px-3 py-2 text-xs font-black text-rose-800"
                      >
                        Delete
                      </button>
                      {rowActions.map((action) => (
                        <button
                          key={action.label}
                          type="button"
                          onClick={() => runRowAction(action, item)}
                          className={`rounded-full px-3 py-2 text-xs font-black ${
                            action.tone === "green"
                              ? "bg-teal-50 text-teal-800"
                              : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <form
        onSubmit={saveItem}
        className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:sticky xl:top-28 xl:self-start"
      >
        <h2 className="text-2xl font-black text-slate-950">Edit record</h2>
        <div className="mt-5 grid gap-3">
          {fields.map((field) => (
            <Field
              key={field.path}
              field={field}
              value={getPath(current, field.path)}
              onChange={(value) => update(field.path, value)}
            />
          ))}
          <button
            type="submit"
            className="mt-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ field, value, onChange }) {
  const common =
    "rounded-xl border border-slate-300 px-3 py-2 font-semibold text-slate-950 outline-none focus:border-teal-500";
  const fieldId = `field-${field.path.replaceAll(".", "-")}`;
  return (
    <div className="grid gap-1 text-sm font-black text-slate-700">
      <label htmlFor={fieldId}>{field.label}</label>
      {field.type === "select" ? (
        <select
          id={fieldId}
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          className={common}
        >
          {(field.options || []).map((option) => (
            <option key={option.value || option} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" || field.type === "json" ? (
        <textarea
          id={fieldId}
          rows={field.rows || 5}
          value={field.type === "json" ? prettyJson(value) : value || ""}
          onChange={(event) =>
            onChange(
              field.type === "json"
                ? parseJson(event.target.value)
                : event.target.value,
            )
          }
          dir={field.dir}
          className={common}
        />
      ) : (
        <input
          id={fieldId}
          type={field.type || "text"}
          value={value || ""}
          onChange={(event) => onChange(event.target.value)}
          dir={field.dir}
          className={common}
        />
      )}
      {field.helper ? (
        <span className="text-xs font-semibold leading-5 text-slate-500">
          {field.helper}
        </span>
      ) : null}
    </div>
  );
}

function getPath(item, path) {
  return String(path)
    .split(".")
    .reduce((value, key) => value?.[key], item);
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

function prettyJson(value) {
  return JSON.stringify(value ?? [], null, 2);
}

function parseJson(value) {
  try {
    return JSON.parse(value || "[]");
  } catch {
    return value;
  }
}
