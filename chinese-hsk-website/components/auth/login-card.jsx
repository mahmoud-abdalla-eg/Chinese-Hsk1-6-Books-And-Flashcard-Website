"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";

export default function LoginCard({ initialError = "" }) {
  const { tr } = useLanguage();
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(initialError);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const email = String(formData.get("email") || "").trim();
      const password = String(formData.get("password") || "");

      if (!email || !password) {
        throw new Error(tr("enterValidEmail"));
      }

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      if (data.user) {
        login(data.user);
        const redirectUrl = searchParams.get("redirect") || "/dashboard";
        router.push(redirectUrl);
        router.refresh();
      }
    } catch (err) {
      setErrorMessage(err.message || "An error occurred.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
      <div className="mb-6">
        <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
          {tr("welcomeBack")}
        </h2>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
          {tr("loginSubtitle")}
        </p>
      </div>

      {errorMessage ? (
        <div
          role="alert"
          className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs font-bold text-rose-800 leading-normal"
        >
          {errorMessage}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-1.5">
          <label
            htmlFor="login-email"
            className="text-xs font-black uppercase tracking-wider text-slate-700"
          >
            {tr("email")}
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={submitting}
            placeholder={tr("emailPlaceholder")}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
          />
        </div>

        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="login-password"
              className="text-xs font-black uppercase tracking-wider text-slate-700"
            >
              {tr("password")}
            </label>
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
              className="text-xs font-bold text-teal-700 hover:text-teal-800"
            >
              {showPassword ? tr("hide") : tr("show")}
            </button>
          </div>
          <input
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            disabled={submitting}
            placeholder={tr("passwordPlaceholder")}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full rounded-full bg-teal-700 py-3.5 text-sm font-black text-white hover:bg-teal-800 disabled:opacity-60 transition shadow-xs"
        >
          {submitting ? tr("loggingIn") : tr("logIn")}
        </button>
      </form>

      <div className="mt-7 border-t border-slate-100 pt-5 text-center text-sm font-semibold text-slate-600">
        <span>{tr("dontHaveAccount")} </span>
        <Link
          href={`/signup${searchParams.get("redirect") ? `?redirect=${encodeURIComponent(searchParams.get("redirect"))}` : ""}`}
          className="font-black text-teal-700 hover:text-teal-800 underline underline-offset-4"
        >
          {tr("signUp")} &rarr;
        </Link>
      </div>
    </div>
  );
}
