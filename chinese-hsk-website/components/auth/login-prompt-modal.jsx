"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";

export default function LoginPromptModal() {
  const { tr } = useLanguage();
  const { loginPromptState, closeLoginPrompt } = useAuth();
  const [rememberChoice, setRememberChoice] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!loginPromptState?.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeLoginPrompt(true, rememberChoice);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loginPromptState?.isOpen, closeLoginPrompt, rememberChoice]);

  if (!loginPromptState?.isOpen) return null;

  const title = loginPromptState.title || tr("saveProgressPromptTitle");
  const description =
    loginPromptState.description || tr("saveProgressPromptDesc");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-200 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeLoginPrompt(true, rememberChoice);
        }
      }}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl transition-all duration-200 sm:p-8">
        {/* Close icon button */}
        <button
          type="button"
          onClick={() => closeLoginPrompt(true, rememberChoice)}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Icon & Title */}
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-50 text-2xl text-teal-700 shadow-inner">
            🔐
          </div>
          <div>
            <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-black text-amber-900">
              {tr("guestMode")}
            </span>
            <h2 className="mt-1 text-xl font-black text-slate-950">{title}</h2>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm font-semibold leading-relaxed text-slate-600">
          {description}
        </p>

        {/* Don't ask again checkbox */}
        <label className="mt-5 flex cursor-pointer items-center gap-2.5 text-xs font-bold text-slate-600 select-none">
          <input
            type="checkbox"
            checked={rememberChoice}
            onChange={(e) => setRememberChoice(e.target.checked)}
            className="h-4 w-4 rounded border-slate-300 text-teal-700 accent-teal-700 focus:ring-teal-500"
          />
          <span>{tr("dontAskAgainSession")}</span>
        </label>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => closeLoginPrompt(true, rememberChoice)}
            className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-xs font-black text-slate-700 hover:border-slate-300 hover:bg-slate-100 transition"
          >
            {tr("continueAsGuest")}
          </button>
          <Link
            href="/account"
            onClick={() => closeLoginPrompt(false, false)}
            className="rounded-full bg-teal-700 px-6 py-2.5 text-center text-xs font-black text-white hover:bg-teal-800 shadow-sm transition"
          >
            {tr("logInOrSignUp")}
          </Link>
        </div>
      </div>
    </div>
  );
}
