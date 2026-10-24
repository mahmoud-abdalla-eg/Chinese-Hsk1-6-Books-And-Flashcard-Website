import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const sessionCookieName = "mandarin_flow_session";
const sessionMaxAge = 60 * 60 * 24 * 30; // 30 days (hardened from 365)

export async function createSession(userId, tokenVersion = 1) {
  const tokenId = randomBytes(16).toString("hex");
  const issuedAt = Date.now();
  const safeVersion = Number(tokenVersion) || 1;
  const payload = `${userId}.${tokenId}.${issuedAt}.${safeVersion}`;
  const value = `${payload}.${sign(payload)}`;
  const cookieStore = await cookies();
  cookieStore.set(sessionCookieName, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionMaxAge,
    expires: new Date(Date.now() + sessionMaxAge * 1000),
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName);
}

export async function getSessionData() {
  const cookieStore = await cookies();
  const value = cookieStore.get(sessionCookieName)?.value;
  return parseSession(value);
}

export async function getSessionUserId() {
  const session = await getSessionData();
  if (!session?.userId) return null;

  try {
    const { getSupabaseAdmin } = await import("@/lib/db/supabase");
    const supabase = getSupabaseAdmin();
    const { data: user } = await supabase
      .from("users")
      .select("token_version")
      .eq("id", session.userId)
      .maybeSingle();

    if (!user) return null;
    const currentVersion = Number(user.token_version || 1);
    if (session.tokenVersion !== currentVersion) {
      return null;
    }
    return session.userId;
  } catch {
    // Fail-closed on database check exception
    return null;
  }
}

export function parseSession(value) {
  const parts = String(value || "").split(".");
  // 5-part versioned token: userId.tokenId.issuedAt.tokenVersion.signature
  if (parts.length === 5) {
    const [userId, tokenId, issuedAt, tokenVersion, signature] = parts;
    const payload = `${userId}.${tokenId}.${issuedAt}.${tokenVersion}`;
    if (!safeEqual(signature, sign(payload))) return null;
    const age = Date.now() - Number(issuedAt);
    if (!Number.isFinite(age) || age > sessionMaxAge * 1000) return null;
    return { userId, tokenVersion: Number(tokenVersion) };
  }
  // 4-part legacy token transition: userId.tokenId.issuedAt.signature
  if (parts.length === 4) {
    const [userId, tokenId, issuedAt, signature] = parts;
    const payload = `${userId}.${tokenId}.${issuedAt}`;
    if (!safeEqual(signature, sign(payload))) return null;
    const age = Date.now() - Number(issuedAt);
    if (!Number.isFinite(age) || age > sessionMaxAge * 1000) return null;
    return { userId, tokenVersion: 1 };
  }
  return null;
}

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET;
  if (!secret || typeof secret !== "string" || secret.trim().length === 0) {
    throw new Error(
      "AUTH_SECRET environment variable is missing or empty. Please set a secure random string in .env.local",
    );
  }
  return secret.trim();
}

function sign(payload) {
  const secret = getAuthSecret();
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""));
  const right = Buffer.from(String(b || ""));
  return left.length === right.length && timingSafeEqual(left, right);
}
