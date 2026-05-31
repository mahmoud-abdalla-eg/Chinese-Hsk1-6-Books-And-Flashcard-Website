import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "mandarin_flow_hsk";

let clientPromise;

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
  return client.db(dbName);
}
