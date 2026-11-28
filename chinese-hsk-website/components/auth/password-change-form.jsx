"use client";

import { useState } from "react";
import { useLanguage } from "@/components/language/language-provider";

export default function PasswordChangeForm() {
  const { tr } = useLanguage();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  async function changePassword(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newPassword = String(formData.get("newPassword") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");

    if (newPassword !== confirmPassword) {
      setStatus("error");
      setMessage(tr("passwordsDoNotMatch"));
      return;
    }

    setStatus("saving");
    setMessage("");
    try {
      const response = await fetch("/api/auth/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: formData.get("currentPassword"),
          newPassword,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        const errorKey = {
          "Current password is incorrect.": "currentPasswordIncorrect",
          "Log in again before changing your password.":
            "passwordSessionExpired",
          "New password must be at least 8 characters.": "passwordTooShort",
        }[data.error];
        setStatus("error");
        setMessage(errorKey ? tr(errorKey) : tr("passwordChangeFailed"));
        return;
      }
      form.reset();
      setStatus("success");
      setMessage(tr("passwordChangedSuccessfully"));
    } catch {
      setStatus("error");
      setMessage(tr("passwordChangeNetworkError"));
    }
  }

  return (
    <form
      onSubmit={changePassword}
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-black text-slate-950">
        {tr("changePassword")}
      </h2>
      <PasswordInput
        label={tr("currentPassword")}
        name="currentPassword"
        placeholder={tr("currentPassword")}
      />
      <PasswordInput
        label={tr("newPassword")}
        name="newPassword"
        placeholder={tr("passwordPlaceholder")}
      />
      <PasswordInput
        label={tr("confirmNewPassword")}
        name="confirmPassword"
        placeholder={tr("confirmPasswordPlaceholder")}
      />
      {message ? (
        <p
          role={status === "error" ? "alert" : "status"}
          aria-atomic="true"
          className={`rounded-2xl p-4 text-sm font-bold ${
            status === "success"
              ? "bg-teal-50 text-teal-800"
              : "bg-rose-50 text-rose-800"
          }`}
        >
          {message}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "saving"}
        className="rounded-full bg-teal-700 px-5 py-3 text-sm font-black text-white hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {status === "saving" ? tr("saving") : tr("updatePassword")}
      </button>
    </form>
  );
}

function PasswordInput({ label, name, placeholder }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      <input
        required
        name={name}
        type="password"
        minLength={8}
        className="rounded-xl border border-slate-300 px-4 py-3 text-slate-950 outline-none focus:border-teal-500"
        placeholder={placeholder}
      />
    </label>
  );
}
