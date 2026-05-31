import { ObjectId } from "mongodb";
import { upsertManagedConversation } from "@/lib/admin/course-conversations";
import { upsertManagedGrammar } from "@/lib/admin/course-grammar";
import { upsertAudioRecord } from "@/lib/admin/course-settings";
import { upsertManagedWord } from "@/lib/admin/course-words";
import { getMongoDatabase } from "@/lib/db/mongodb";

const importsCollection = "content_import_queue";

export async function getImportQueue() {
  const db = await getMongoDatabase();
  const rows = await db
    .collection(importsCollection)
    .find({})
    .sort({ updatedAt: -1 })
    .toArray();
  return rows.map((row) => ({
    mongoId: String(row._id),
    type: row.type || "words",
    level: Number(row.level || 1),
    status: row.status || "pending-review",
    notes: row.notes || "",
    payload: row.payload || [],
    updatedAt: row.updatedAt?.toISOString?.() || "",
  }));
}

export async function upsertImportJob(payload) {
  const job = {
    type: String(payload.type || "words").trim(),
    level: Number(payload.level || 1),
    status: String(payload.status || "pending-review").trim(),
    notes: String(payload.notes || "").trim(),
    payload: parsePayload(payload.payload),
  };
  const db = await getMongoDatabase();
  const filter =
    payload.mongoId && ObjectId.isValid(payload.mongoId)
      ? { _id: new ObjectId(payload.mongoId) }
      : { type: job.type, level: job.level, notes: job.notes };
  const result = await db.collection(importsCollection).findOneAndUpdate(
    filter,
    {
      $set: { ...job, updatedAt: new Date() },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true, returnDocument: "after" },
  );
  return {
    mongoId: String(result._id),
    type: result.type,
    level: result.level,
    status: result.status,
    notes: result.notes,
    payload: result.payload || [],
  };
}

export async function deleteImportJob(jobId) {
  if (!ObjectId.isValid(jobId)) return false;
  const db = await getMongoDatabase();
  const result = await db
    .collection(importsCollection)
    .deleteOne({ _id: new ObjectId(jobId) });
  return result.deletedCount > 0;
}

export async function applyImportJob(jobId) {
  if (!ObjectId.isValid(jobId)) throw new Error("Invalid import id.");
  const db = await getMongoDatabase();
  const job = await db
    .collection(importsCollection)
    .findOne({ _id: new ObjectId(jobId) });
  if (!job) throw new Error("Import batch not found.");
  if (!["reviewed", "approved", "ready"].includes(job.status)) {
    throw new Error("Mark this batch as reviewed before applying it.");
  }
  const rows = Array.isArray(job.payload) ? job.payload : [];
  const applied = [];
  for (const row of rows) {
    const payload = { ...row, level: row.level || job.level };
    if (job.type === "words") applied.push(await upsertManagedWord(payload));
    else if (job.type === "grammar")
      applied.push(await upsertManagedGrammar(payload));
    else if (job.type === "conversations")
      applied.push(await upsertManagedConversation(payload));
    else if (job.type === "audio")
      applied.push(await upsertAudioRecord(payload));
    else throw new Error(`Unsupported import type: ${job.type}`);
  }
  await db.collection(importsCollection).updateOne(
    { _id: new ObjectId(jobId) },
    {
      $set: {
        status: "applied",
        appliedCount: applied.length,
        appliedAt: new Date(),
        updatedAt: new Date(),
      },
    },
  );
  return { appliedCount: applied.length, type: job.type };
}

function parsePayload(value) {
  if (Array.isArray(value)) return value;
  try {
    const parsed = JSON.parse(String(value || "[]"));
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
}
