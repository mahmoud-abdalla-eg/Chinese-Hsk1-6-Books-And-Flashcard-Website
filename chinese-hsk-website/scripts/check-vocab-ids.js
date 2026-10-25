import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const levels = [1, 2, 3];
const allWords = new Map();

for (const lvl of levels) {
  const p = path.join(projectRoot, "source-data", "hsk", `hsk-${lvl}.json`);
  if (fs.existsSync(p)) {
    const arr = JSON.parse(fs.readFileSync(p, "utf8"));
    for (const w of arr) {
      allWords.set(w.hanzi, { level: lvl, id: w.id });
    }
  }
}

const testWords = [
  "旅游", "觉得", "最", "为什么", "也",
  "运动", "踢足球", "跑步", "生病", "起床", "身体", "出院", "药",
  "手表", "报纸", "送", "牛奶", "颜色", "红",
  "介绍", "帮助", "开始", "告诉",
  "件", "衣服", "鱼", "可能",
  "贵", "便宜", "离", "远", "近", "考试", "走路", "地铁",
  "让", "告诉", "等", "找", "事情",
  "题", "完", "错", "对", "懂",
  "别", "手机", "帮",
  "比", "高", "快", "慢",
  "穿", "得", "笑", "着",
  "过", "次", "玩", "长",
  "快要", "新年", "票", "欢迎"
];

for (const tw of testWords) {
  const found = allWords.get(tw);
  if (found) {
    console.log(`${tw}: HSK ${found.level} (id: ${found.id})`);
  } else {
    console.log(`${tw}: NOT in HSK 1-3`);
  }
}
