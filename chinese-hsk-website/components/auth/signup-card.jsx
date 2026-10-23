"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/components/auth/auth-provider";
import { useLanguage } from "@/components/language/language-provider";

export default function SignupCard({ initialError = "" }) {
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

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const password = String(formData.get("password") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");

    if (!email) {
      setErrorMessage(tr("enterValidEmail"));
      return;
    }

    if (password.length < 8) {
      setErrorMessage(tr("passwordTooShort"));
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage(tr("passwordsDoNotMatch"));
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Registration failed.");
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
          {tr("signupPageTitle")}
        </h2>
        <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-600">
          {tr("signupSubtitle")}
        </p>
      </div>

      {errorMessage ? (
        <div
          role="alert"
          className="mb-5 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs font-bold text-rose-800 leading-normal"
        >
          {errorMessage ===
          "Account service is temporarily unavailable. Please try again shortly or continue learning as a guest."
            ? tr("accountServiceUnavailable")
            : errorMessage === "This email is already registered."
              ? tr("emailAlreadyRegistered")
              : errorMessage === "Invalid email or password."
                ? tr("invalidCredentials")
                : errorMessage}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-1.5">
          <label
            htmlFor="signup-name"
            className="text-xs font-black uppercase tracking-wider text-slate-700"
          >
            {tr("name")}
          </label>
          <input
            id="signup-name"
            name="name"
            type="text"
            autoComplete="name"
            disabled={submitting}
            placeholder={tr("namePlaceholder")}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
          />
        </div>

        <div className="grid gap-1.5">
          <label
            htmlFor="signup-email"
            className="text-xs font-black uppercase tracking-wider text-slate-700"
          >
            {tr("email")}
          </label>
          <input
            id="signup-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={submitting}
            placeholder={tr("emailPlaceholder")}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
          />
        </div>

        <div className="grid gap-1.5">
          <div className="flex items-center justify-between">
            <label
              htmlFor="signup-password"
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
            id="signup-password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            autoComplete="new-password"
            disabled={submitting}
            placeholder={tr("passwordPlaceholder")}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
          />
        </div>

        <div className="grid gap-1.5">
          <label
            htmlFor="signup-confirm-password"
            className="text-xs font-black uppercase tracking-wider text-slate-700"
          >
            {tr("confirmPassword")}
          </label>
          <input
            id="signup-confirm-password"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            autoComplete="new-password"
            disabled={submitting}
            placeholder={tr("confirmPasswordPlaceholder")}
            className="rounded-2xl border border-slate-300 px-4 py-3 text-base sm:text-sm text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100 disabled:opacity-60"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="mt-2 w-full rounded-full bg-teal-700 py-3.5 text-sm font-black text-white hover:bg-teal-800 disabled:opacity-60 transition shadow-xs"
        >
          {submitting ? tr("creatingAccount") : tr("createAccount")}
        </button>
      </form>

      <div className="mt-7 border-t border-slate-100 pt-5 text-center text-sm font-semibold text-slate-600">
        <span>{tr("alreadyHaveAccount")} </span>
        <Link
          href={`/login${searchParams.get("redirect") ? `?redirect=${encodeURIComponent(searchParams.get("redirect"))}` : ""}`}
          className="font-black text-teal-700 hover:text-teal-800 underline underline-offset-4"
        >
          {tr("logIn")} &rarr;
        </Link>
      </div>
    </div>
  );
}
