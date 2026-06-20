import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "mandarin_flow_hsk";

let clientPromise;
let _indexPromise;

export async function getMongoDatabase() {
  if (!uri) {
    throw new Error("MONGODB_URI is not configured.");
  }
  if (!clientPromise) {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    clientPromise = client.connect();
  }
  const client = await clientPromise;
  const db = client.db(dbName);
  warmMongoIndexes(db);
  return db;
}

function warmMongoIndexes(db) {
  _indexPromise ||= Promise.allSettled([
    db.collection("users").createIndex({ email: 1 }, { unique: true }),
    db.collection("user_progress").createIndex({ userId: 1 }, { unique: true }),
    db.collection("course_words").createIndex({ level: 1, order: 1 }),
    db
      .collection("course_words")
      .createIndex({ level: 1, id: 1 }, { unique: true }),
    db.collection("course_grammar").createIndex({ hskLevel: 1, order: 1 }),
    db
      .collection("course_conversations")
      .createIndex({ hskLevel: 1, unitId: 1 }),
    db.collection("site_content").createIndex({ key: 1 }, { unique: true }),
  ]).catch(() => null);
}
