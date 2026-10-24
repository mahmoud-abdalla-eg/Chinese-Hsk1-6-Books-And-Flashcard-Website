import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const adminSessionCookieName = "mandarin_flow_admin_session";
const adminSessionMaxAge = 60 * 60 * 8; // 8 hours

export async function createAdminSession(adminId) {
  const tokenId = randomBytes(16).toString("hex");
  const issuedAt = Date.now();
  const payload = `${adminId}.${tokenId}.${issuedAt}`;
  const cookieStore = await cookies();
  cookieStore.set(adminSessionCookieName, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: adminSessionMaxAge,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(adminSessionCookieName);
}

export async function getAdminSessionId() {
  const cookieStore = await cookies();
  return parseAdminSession(cookieStore.get(adminSessionCookieName)?.value)
    ?.adminId;
}

function parseAdminSession(value) {
  const parts = String(value || "").split(".");
  if (parts.length !== 4) return null;
  const [adminId, tokenId, issuedAt, signature] = parts;
  const payload = `${adminId}.${tokenId}.${issuedAt}`;
  if (!safeEqual(signature, sign(payload))) return null;
  const age = Date.now() - Number(issuedAt);
  if (!Number.isFinite(age) || age > adminSessionMaxAge * 1000) return null;
  return { adminId };
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
