"use client";

import { useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";

export default function AccountForm({ error = "" }) {
  const { tr } = useLanguage();
  return (
    <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-6">
        {error ? (
          <p className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-bold text-rose-800">
            {error}
          </p>
        ) : null}
        <AccountPanel
          action="/api/auth/login"
          buttonLabel={tr("logIn")}
          title={tr("logIn")}
        />
        <AccountPanel
          action="/api/auth/register"
          buttonLabel={tr("createAccount")}
          showName
          title={tr("createAccount")}
        />
      </div>
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-black text-slate-950">
          {tr("whatGetsSaved")}
        </h2>
        <div className="mt-4 grid gap-3 text-sm font-semibold leading-6 text-slate-600">
          <p>{tr("accountIntro")}</p>
        </div>
      </div>
    </div>
  );
}

function AccountPanel({ action, buttonLabel, showName = false, title }) {
  const { tr } = useLanguage();
  const { login } = useAuth();
  const [submitting, setSubmitting] = useState(false);
  const [panelError, setPanelError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setPanelError("");

    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData.entries());
      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }
      if (data.user) {
        login(data.user);
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setPanelError(err.message || "An error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      action={action}
      method="post"
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-black text-slate-950">{title}</h2>
      {panelError ? (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-3.5 py-2.5 text-xs font-bold text-rose-800">
          {panelError}
        </p>
      ) : null}
      {showName ? (
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          {tr("name")}
          <input
            name="name"
            className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
            placeholder={tr("name")}
            disabled={submitting}
          />
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        {tr("email")}
        <input
          required
          name="email"
          type="email"
          className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
          placeholder="you@example.com"
          disabled={submitting}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        {tr("password")}
        <input
          required
          name="password"
          type="password"
          minLength={8}
          className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
          placeholder="••••••••"
          disabled={submitting}
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800 disabled:opacity-60 transition"
      >
        {submitting ? tr("saving") : buttonLabel}
      </button>
    </form>
  );
}
