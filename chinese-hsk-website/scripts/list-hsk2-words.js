import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const p = path.join(projectRoot, "source-data", "hsk", "hsk-2.json");
const arr = JSON.parse(fs.readFileSync(p, "utf8"));

const summary = arr.map(w => `${w.hanzi}: ${w.id}`).join(", ");
console.log(`HSK 2 words (${arr.length}):`);
console.log(summary);
