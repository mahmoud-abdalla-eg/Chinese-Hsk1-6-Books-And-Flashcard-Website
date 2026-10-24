"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { useLanguage } from "@/components/language/language-provider";
import { Pill, Surface } from "@/components/ui/card";

const SUPPORT_EMAIL = "mahmouddesign01@gmail.com";

function ContactFormInner() {
  const { tr } = useLanguage();
  const searchParams = useSearchParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("suggestion");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // Sync initial topic from query param (e.g. /contact?topic=support or ?type=bug)
  useEffect(() => {
    const paramTopic = searchParams.get("topic") || searchParams.get("type");
    if (paramTopic) {
      const normalized = paramTopic.toLowerCase();
      if (
        [
          "general",
          "suggestion",
          "bug",
          "material",
          "support",
        ].includes(normalized)
      ) {
        setTopic(normalized);
      }
    }
  }, [searchParams]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
      const textarea = document.createElement("textarea");
      textarea.value = SUPPORT_EMAIL;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim() || !message.trim()) {
      setErrorMessage(tr("contactRequiredNotice"));
      return;
    }

    if (message.trim().length < 5) {
      setErrorMessage("Please enter a message with at least 5 characters.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          topic,
          message: message.trim(),
          hp_website: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || tr("contactErrorMessage"));
      }

      setSubmitted(true);
      setMessage("");
    } catch (err) {
      setErrorMessage(err.message || tr("contactErrorMessage"));
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setMessage("");
    setErrorMessage("");
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
      {/* Main Form Section */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
        {submitted ? (
          <div
            role="status"
            aria-live="polite"
            className="flex flex-col items-center text-center py-8"
          >
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-teal-100 text-teal-700 shadow-xs mb-6">
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              {tr("contactSuccessTitle")}
            </h2>
            <p className="mt-3 max-w-md text-sm sm:text-base font-semibold text-slate-600 leading-relaxed">
              {tr("contactSuccessMessage")}
            </p>
            <button
              type="button"
              onClick={handleResetForm}
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-black text-slate-800 transition hover:bg-slate-100 hover:border-slate-300 active:scale-95"
            >
              <svg
                className="h-4 w-4 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <span>{tr("contactSendAnother")}</span>
            </button>
          </div>
        ) : (
          <form
            action="/api/contact"
            method="POST"
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6"
          >
            {/* Honeypot field for bot protection (hidden from assistive tech & users) */}
            <input
              type="text"
              name="hp_website"
              id="hp_website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ display: "none" }}
            />

            {/* Error Banner */}
            {errorMessage && (
              <div
                role="alert"
                aria-live="assertive"
                className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm font-semibold text-rose-800"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-rose-600 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 8.25h.01"
                  />
                </svg>
                <p className="flex-1">{errorMessage}</p>
              </div>
            )}

            {/* Name & Email Group */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2"
                >
                  {tr("contactFormName")}
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={tr("contactNamePlaceholder")}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition focus:border-teal-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2"
                >
                  <span>{tr("contactFormEmail")}</span>
                  <span className="text-teal-600 ms-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={tr("contactEmailPlaceholder")}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition focus:border-teal-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-100"
                />
              </div>
            </div>

            {/* Topic Selection */}
            <div>
              <label
                htmlFor="contact-topic"
                className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2"
              >
                {tr("contactFormTopic")}
              </label>
              <div className="relative">
                <select
                  id="contact-topic"
                  name="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-900 transition focus:border-teal-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-100"
                >
                  <option value="suggestion">
                    {tr("contactTopicSuggestion")}
                  </option>
                  <option value="bug">{tr("contactTopicBug")}</option>
                  <option value="material">
                    {tr("contactTopicMaterial")}
                  </option>
                  <option value="support">{tr("contactTopicSupport")}</option>
                  <option value="general">{tr("contactTopicGeneral")}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center px-4 text-slate-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-black uppercase tracking-wider text-slate-700"
                >
                  <span>{tr("contactFormMessage")}</span>
                  <span className="text-teal-600 ms-1" aria-hidden="true">
                    *
                  </span>
                </label>
                <span className="text-xs font-semibold text-slate-400">
                  {message.length} / 5000 {tr("contactCharCount")}
                </span>
              </div>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={6}
                maxLength={5000}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={tr("contactMessagePlaceholder")}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-900 transition focus:border-teal-600 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-teal-100"
              />
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <span className="text-xs font-semibold text-slate-500">
                {tr("contactRequiredNotice")}
              </span>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-teal-700 px-7 py-3 text-sm font-black text-white shadow-sm transition hover:bg-teal-800 disabled:opacity-60 active:scale-95"
              >
                {submitting ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>{tr("contactSending")}</span>
                  </>
                ) : (
                  <>
                    <svg
                      className="h-4 w-4 text-teal-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span>{tr("contactSubmitButton")}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Helpful Info & Direct Email Copy Card */}
      <aside className="space-y-6">
        {/* Direct Email Card */}
        <div className="rounded-3xl border border-teal-200 bg-gradient-to-br from-teal-50 to-emerald-50/40 p-6 sm:p-7 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-teal-700 text-white shadow-2xs">
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-black text-slate-950">
                {tr("contactDirectOptionTitle")}
              </h3>
              <span className="text-xs font-semibold text-teal-800">
                {SUPPORT_EMAIL}
              </span>
            </div>
          </div>

          <p className="mt-4 text-xs font-semibold leading-relaxed text-slate-600">
            {tr("contactDirectOptionDesc")}
          </p>

          <button
            type="button"
            onClick={handleCopyEmail}
            className={`mt-5 flex w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-xs font-black transition active:scale-95 ${
              copied
                ? "bg-emerald-600 text-white shadow-xs"
                : "bg-teal-700 text-white shadow-xs hover:bg-teal-800"
            }`}
          >
            {copied ? (
              <>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span>{tr("copiedEmail")}</span>
              </>
            ) : (
              <>
                <svg
                  className="h-4 w-4 text-teal-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                  />
                </svg>
                <span>{tr("copyEmail")}</span>
              </>
            )}
          </button>
        </div>

        {/* Suggestion Topics Card */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm">
          <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">
            {tr("contactHelpTitle")}
          </h3>
          <ul className="mt-4 space-y-3 text-xs font-semibold text-slate-600">
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold">
                ✓
              </span>
              <span>{tr("contactHelpList1")}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold">
                ✓
              </span>
              <span>{tr("contactHelpList2")}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-teal-100 text-teal-800 text-[10px] font-bold">
                ✓
              </span>
              <span>{tr("contactHelpList3")}</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default function ContactView() {
  const { tr } = useLanguage();

  return (
    <div className="space-y-8 pb-16 pt-4">
      {/* Hero Header */}
      <Surface className="p-7 text-center sm:p-10">
        <Pill tone="green">{tr("contactNav")}</Pill>
        <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-5xl tracking-tight">
          {tr("contactTitle")}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-slate-600 sm:text-base leading-relaxed">
          {tr("contactSubtitle")}
        </p>
      </Surface>

      {/* Main Form Content wrapped in Suspense for useSearchParams */}
      <Suspense
        fallback={
          <div className="h-96 w-full animate-pulse rounded-3xl bg-slate-100" />
        }
      >
        <ContactFormInner />
      </Suspense>
    </div>
  );
}
