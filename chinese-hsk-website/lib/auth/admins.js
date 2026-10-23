import { hashPassword, verifyPassword } from "@/lib/auth/passwords";
import { getSupabaseAdmin } from "@/lib/db/supabase";

export async function createAdmin({ name, email, password }) {
  const cleanEmail = normalizeEmail(email);
  validateCredentials(cleanEmail, password);

  const supabase = getSupabaseAdmin();
  const { data: existing } = await supabase
    .from("admins")
    .select("id")
    .eq("email", cleanEmail)
    .maybeSingle();

  if (existing) throw new Error("Admin email already exists.");

  const now = new Date().toISOString();
  const passwordHash = await hashPassword(password);

  const { data, error } = await supabase
    .from("admins")
    .insert([
      {
        name: sanitizeName(name) || cleanEmail.split("@")[0],
        email: cleanEmail,
        password_hash: passwordHash,
        created_at: now,
        updated_at: now,
      },
    ])
    .select("id, name, email")
    .single();

  if (error || !data) {
    throw new Error(error?.message || "Failed to create admin.");
  }

  return adminPublic(data);
}

export async function authenticateAdmin({ email, password }) {
  const cleanEmail = normalizeEmail(email);
  const supabase = getSupabaseAdmin();

  const { data: admin, error } = await supabase
    .from("admins")
    .select("id, name, email, password_hash")
    .eq("email", cleanEmail)
    .maybeSingle();

  if (
    error ||
    !admin ||
    !(await verifyPassword(password, admin.password_hash))
  ) {
    throw new Error("Invalid admin email or password.");
  }

  return adminPublic(admin);
}

export async function getAdminById(adminId) {
  if (!isValidId(adminId)) return null;
  const supabase = getSupabaseAdmin();

  const { data: admin } = await supabase
    .from("admins")
    .select("id, name, email")
    .eq("id", adminId)
    .maybeSingle();

  return admin ? adminPublic(admin) : null;
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

function adminPublic(admin) {
  return {
    id: String(admin.id),
    name: admin.name,
    email: admin.email,
  };
}
