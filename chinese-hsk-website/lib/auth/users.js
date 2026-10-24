import { hashPassword, verifyPassword } from "@/lib/auth/passwords";
import { getSupabaseAdmin } from "@/lib/db/supabase";

export async function createUser({ name, email, password }) {
  const cleanEmail = normalizeEmail(email);
  const cleanName = sanitizeName(name);
  validateCredentials(cleanEmail, password);

  const supabase = getSupabaseAdmin();
  const { data: existing } = await supabase
    .from("users")
    .select("id")
    .eq("email", cleanEmail)
    .maybeSingle();

  if (existing) {
    throw new Error("Email already registered.");
  }

  const now = new Date().toISOString();
  const passwordHash = await hashPassword(password);

  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        name: cleanName || cleanEmail.split("@")[0],
        email: cleanEmail,
        password_hash: passwordHash,
        token_version: 1,
        created_at: now,
        updated_at: now,
      },
    ])
    .select("id, name, email, token_version, created_at")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to create user account.");
  }

  return userPublic(data);
}

export async function authenticateUser({ email, password }) {
  const cleanEmail = normalizeEmail(email);
  const supabase = getSupabaseAdmin();

  const { data: user, error } = await supabase
    .from("users")
    .select("id, name, email, password_hash, token_version, created_at")
    .eq("email", cleanEmail)
    .maybeSingle();

  if (error || !user || !(await verifyPassword(password, user.password_hash))) {
    throw new Error("Invalid email or password.");
  }

  return userPublic(user);
}

export async function getUserById(userId) {
  if (!isValidId(userId)) return null;
  const supabase = getSupabaseAdmin();

  const { data: user } = await supabase
    .from("users")
    .select("id, name, email, token_version, created_at")
    .eq("id", userId)
    .maybeSingle();

  return user ? userPublic(user) : null;
}

export async function changeUserPassword({
  currentPassword,
  newPassword,
  userId,
}) {
  if (!isValidId(userId)) {
    throw new Error("Log in again before changing your password.");
  }
  if (String(newPassword || "").length < 8) {
    throw new Error("New password must be at least 8 characters.");
  }

  const supabase = getSupabaseAdmin();
  const { data: user } = await supabase
    .from("users")
    .select("id, password_hash, token_version")
    .eq("id", userId)
    .maybeSingle();

  if (!user || !(await verifyPassword(currentPassword, user.password_hash))) {
    throw new Error("Current password is incorrect.");
  }

  const nextVersion = Number(user.token_version || 1) + 1;
  const newHash = await hashPassword(newPassword);
  const { error } = await supabase
    .from("users")
    .update({
      password_hash: newHash,
      token_version: nextVersion,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId);

  if (error) {
    throw new Error(error.message || "Could not update password.");
  }

  return true;
}

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

function sanitizeName(name) {
  return String(name || "")
    .trim()
    .slice(0, 80);
}

function validateCredentials(email, password) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Enter a valid email.");
  }
  if (String(password || "").length < 8) {
    throw new Error("Password must be at least 8 characters.");
  }
}

function isValidId(id) {
  return typeof id === "string" && id.trim().length >= 8;
}

function userPublic(user) {
  return {
    id: String(user.id),
    name: user.name,
    email: user.email,
    tokenVersion: Number(user.token_version || 1),
    createdAt: user.created_at ? new Date(user.created_at).toISOString() : null,
  };
}
