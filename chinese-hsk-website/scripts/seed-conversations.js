import { ProxyAgent, setGlobalDispatcher } from "undici";

const proxyUrl = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
if (proxyUrl) {
  console.log(`Routing requests via proxy: ${proxyUrl}`);
  setGlobalDispatcher(new ProxyAgent(proxyUrl));
}

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createClient } from "@supabase/supabase-js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// Load .env.local
const envPath = path.join(projectRoot, ".env.local");
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const [key, ...rest] = trimmed.split("=");
    if (key && rest.length > 0) {
      process.env[key.trim()] = rest.join("=").trim().replace(/^["']|["']$/g, "");
    }
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error("Missing Supabase credentials in .env.local");
  process.exit(1);
}

const supabase = createClient(url, key, {
  auth: { persistSession: false },
});

// Recursively find all json files
function getJsonFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of list) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      results = results.concat(getJsonFiles(fullPath));
    } else if (item.name.endsWith(".json")) {
      results.push(fullPath);
    }
  }
  return results;
}

async function withRetry(fn, maxAttempts = 5, delayMs = 1500) {
  let lastError = null;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      console.warn(`Attempt ${attempt}/${maxAttempts} failed: ${err.message}. Retrying in ${delayMs}ms...`);
      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        delayMs *= 1.5;
      }
    }
  }
  throw lastError;
}

async function seedAllConversations() {
  console.log("Seeding all course conversations into Supabase...");
  const baseConvDir = path.join(projectRoot, "source-data", "conversations");
  const levelDirs = fs
    .readdirSync(baseConvDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name.startsWith("hsk-"))
    .map((d) => d.name);

  let totalUpserted = 0;

  for (const lvlDir of levelDirs) {
    const match = lvlDir.match(/^hsk-(\d+)$/);
    const levelNum = match ? Number(match[1]) : 1;
    const dirPath = path.join(baseConvDir, lvlDir);
    const jsonFiles = getJsonFiles(dirPath);

    const records = [];
    for (const filePath of jsonFiles) {
      const raw = fs.readFileSync(filePath, "utf8");
      const conv = JSON.parse(raw);
      const isHsk3 =
        filePath.includes("hsk3") ||
        conv.curriculum === "hsk3" ||
        (conv.id && conv.id.includes("hsk3"));
      const unitId = Number(conv.unitId || 1);
      const id = conv.id || `hsk-${levelNum}-${isHsk3 ? "hsk3-" : ""}unit-${unitId}`;

      records.push({
        id,
        hsk_level: levelNum,
        unit_id: unitId,
        status: conv.status || "ready",
        title: conv.title || {},
        target_vocabulary_ids: Array.isArray(conv.targetVocabularyIds)
          ? conv.targetVocabularyIds
          : [],
        dialogue: Array.isArray(conv.dialogue) ? conv.dialogue : [],
        grammar_notes: Array.isArray(conv.grammarNotes) ? conv.grammarNotes : [],
        cultural_notes: Array.isArray(conv.culturalNotes) ? conv.culturalNotes : [],
        comprehension_questions: Array.isArray(conv.comprehensionQuestions)
          ? conv.comprehensionQuestions
          : [],
        shadowing_practice: conv.shadowingPractice || {
          enabled: true,
          mode: "line-by-line",
        },
        authoring_note: conv.authoringNote || "",
        updated_at: new Date().toISOString(),
      });
    }

    if (records.length > 0) {
      console.log(`Found ${records.length} lessons in ${lvlDir} (including subdirectories)...`);
      
      // Upsert in chunks of 15 to ensure stable HTTP payloads
      const chunkSize = 15;
      for (let i = 0; i < records.length; i += chunkSize) {
        const chunk = records.slice(i, i + chunkSize);
        await withRetry(async () => {
          const { error } = await supabase
            .from("course_conversations")
            .upsert(chunk, { onConflict: "id" });

          if (error) {
            throw new Error(`Error upserting ${lvlDir} chunk ${Math.floor(i / chunkSize) + 1}: ${error.message}`);
          }
        });
      }
      console.log(`✓ Successfully upserted ${records.length} lessons for ${lvlDir}`);
      totalUpserted += records.length;
    }
  }

  // Count total in Supabase
  await withRetry(async () => {
    const { count, error: countErr } = await supabase
      .from("course_conversations")
      .select("*", { count: "exact", head: true });

    if (countErr) {
      throw new Error(`Error checking total count: ${countErr.message}`);
    } else {
      console.log(`✓ Total course_conversations in Supabase: ${count} lessons`);
    }

    // Verify HSK 1 and HSK 2 counts
    for (const lvl of [1, 2]) {
      const { data: lvlRows, error: lvlErr } = await supabase
        .from("course_conversations")
        .select("id")
        .eq("hsk_level", lvl);
      if (!lvlErr && lvlRows) {
        const stdCount = lvlRows.filter((r) => !r.id.includes("hsk3")).length;
        const hsk3Count = lvlRows.filter((r) => r.id.includes("hsk3")).length;
        console.log(`  HSK ${lvl}: ${lvlRows.length} total (${stdCount} Standard + ${hsk3Count} HSK 3.0)`);
      }
    }
  });

  console.log(`\n🎉 All done! Upserted ${totalUpserted} lessons across all levels.`);
}

seedAllConversations().catch((err) => {
  console.error("Fatal error during seeding:", err);
  process.exit(1);
});
