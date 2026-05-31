import { ObjectId } from "mongodb";
import { hashPassword, verifyPassword } from "@/lib/auth/passwords";
import { getMongoDatabase } from "@/lib/db/mongodb";

const adminsCollection = "admins";

export async function createAdmin({ name, email, password }) {
  const cleanEmail = normalizeEmail(email);
  validateCredentials(cleanEmail, password);
  const db = await getMongoDatabase();
  const existing = await db
    .collection(adminsCollection)
    .findOne({ email: cleanEmail });
  if (existing) throw new Error("Admin email already exists.");
  const now = new Date();
  const result = await db.collection(adminsCollection).insertOne({
    name: sanitizeName(name) || cleanEmail.split("@")[0],
    email: cleanEmail,
    passwordHash: await hashPassword(password),
    createdAt: now,
    updatedAt: now,
  });
  return adminPublic({
    _id: result.insertedId,
    name: sanitizeName(name) || cleanEmail.split("@")[0],
    email: cleanEmail,
  });
}

export async function authenticateAdmin({ email, password }) {
  const cleanEmail = normalizeEmail(email);
  const db = await getMongoDatabase();
  const admin = await db
    .collection(adminsCollection)
    .findOne({ email: cleanEmail });
  if (!admin || !(await verifyPassword(password, admin.passwordHash))) {
    throw new Error("Invalid admin email or password.");
  }
  return adminPublic(admin);
}

export async function getAdminById(adminId) {
  if (!ObjectId.isValid(adminId)) return null;
  const db = await getMongoDatabase();
  const admin = await db
    .collection(adminsCollection)
    .findOne({ _id: new ObjectId(adminId) });
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

function adminPublic(admin) {
  return {
    id: String(admin._id),
    name: admin.name,
    email: admin.email,
  };
}
