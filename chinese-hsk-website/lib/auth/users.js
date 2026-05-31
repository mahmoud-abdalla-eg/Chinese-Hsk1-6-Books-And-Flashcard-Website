import { ObjectId } from "mongodb";
import { hashPassword, verifyPassword } from "@/lib/auth/passwords";
import { getMongoDatabase } from "@/lib/db/mongodb";

const usersCollection = "users";

export async function createUser({ name, email, password }) {
  const cleanEmail = normalizeEmail(email);
  const cleanName = sanitizeName(name);
  validateCredentials(cleanEmail, password);
  const db = await getMongoDatabase();
  const existing = await db
    .collection(usersCollection)
    .findOne({ email: cleanEmail });
  if (existing) {
    throw new Error("Email already registered.");
  }
  const now = new Date();
  const result = await db.collection(usersCollection).insertOne({
    name: cleanName || cleanEmail.split("@")[0],
    email: cleanEmail,
    passwordHash: await hashPassword(password),
    createdAt: now,
    updatedAt: now,
  });
  return userPublic({
    _id: result.insertedId,
    name: cleanName || cleanEmail.split("@")[0],
    email: cleanEmail,
  });
}

export async function authenticateUser({ email, password }) {
  const cleanEmail = normalizeEmail(email);
  const db = await getMongoDatabase();
  const user = await db
    .collection(usersCollection)
    .findOne({ email: cleanEmail });
  if (!user || !(await verifyPassword(password, user.passwordHash))) {
    throw new Error("Invalid email or password.");
  }
  return userPublic(user);
}

export async function getUserById(userId) {
  if (!ObjectId.isValid(userId)) return null;
  const db = await getMongoDatabase();
  const user = await db
    .collection(usersCollection)
    .findOne({ _id: new ObjectId(userId) });
  return user ? userPublic(user) : null;
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

function userPublic(user) {
  return {
    id: String(user._id),
    name: user.name,
    email: user.email,
  };
}
