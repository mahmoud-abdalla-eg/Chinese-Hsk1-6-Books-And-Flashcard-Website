import { randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scryptAsync = promisify(scrypt);
const keyLength = 64;

export async function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = await scryptAsync(password, salt, keyLength);
  return `${salt}:${derivedKey.toString("hex")}`;
}

export async function verifyPassword(password, passwordHash) {
  const [salt, key] = String(passwordHash || "").split(":");
  if (!salt || !key) return false;
  const derivedKey = await scryptAsync(password, salt, keyLength);
  const savedKey = Buffer.from(key, "hex");
  return (
    savedKey.length === derivedKey.length &&
    timingSafeEqual(savedKey, derivedKey)
  );
}
