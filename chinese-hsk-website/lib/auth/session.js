import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const sessionCookieName = "mandarin_flow_session";
const sessionMaxAge = 60 * 60 * 24 * 30;

export async function createSession(userId) {
  const tokenId = randomBytes(16).toString("hex");
  const issuedAt = Date.now();
  const payload = `${userId}.${tokenId}.${issuedAt}`;
  const value = `${payload}.${sign(payload)}`;
  const cookieStore = await cookies();
  cookieStore.set(sessionCookieName, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: sessionMaxAge,
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(sessionCookieName);
}

export async function getSessionUserId() {
  const cookieStore = await cookies();
  const value = cookieStore.get(sessionCookieName)?.value;
  return parseSession(value)?.userId || null;
}

export function parseSession(value) {
  const parts = String(value || "").split(".");
  if (parts.length !== 4) return null;
  const [userId, tokenId, issuedAt, signature] = parts;
  const payload = `${userId}.${tokenId}.${issuedAt}`;
  if (!safeEqual(signature, sign(payload))) return null;
  const age = Date.now() - Number(issuedAt);
  if (!Number.isFinite(age) || age > sessionMaxAge * 1000) return null;
  return { userId };
}

function sign(payload) {
  const secret = process.env.AUTH_SECRET || process.env.MONGODB_URI;
  if (!secret) throw new Error("AUTH_SECRET is not configured.");
  return createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEqual(a, b) {
  const left = Buffer.from(String(a || ""));
  const right = Buffer.from(String(b || ""));
  return left.length === right.length && timingSafeEqual(left, right);
}
