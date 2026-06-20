"use client";

import { useState } from "react";

export default function PasswordChangeForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  async function changePassword(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const newPassword = String(formData.get("newPassword") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");
    setStatus("saving");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setStatus("error");
      setMessage("New passwords do not match.");
      return;
    }

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
      setStatus("error");
      setMessage(data.error || "Could not change password.");
      return;
    }
    form.reset();
    setStatus("success");
    setMessage("Password changed successfully.");
  }

  return (
    <form
      onSubmit={changePassword}
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-black text-slate-950">Change password</h2>
      <PasswordInput
        label="Current password"
        name="currentPassword"
        placeholder="Enter current password"
      />
      <PasswordInput
        label="New password"
        name="newPassword"
        placeholder="At least 8 characters"
      />
      <PasswordInput
        label="Confirm new password"
        name="confirmPassword"
        placeholder="Repeat new password"
      />
      {message ? (
        <p
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
        {status === "saving" ? "Saving..." : "Update password"}
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
