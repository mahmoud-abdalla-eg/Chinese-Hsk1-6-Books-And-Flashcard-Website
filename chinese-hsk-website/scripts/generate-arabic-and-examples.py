import argparse
import json
import time
from pathlib import Path
from urllib.parse import urlencode
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
CACHE_PATH = ROOT / "source-data" / "generated" / "translation-cache.json"
REPORT_PATH = ROOT / "source-data" / "generated" / "generated-content-report.json"
SEPARATOR = "§§MF_SPLIT§§"


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0)
    parser.add_argument("--sleep", type=float, default=0.08)
    args = parser.parse_args()

    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)
    cache = load_json(CACHE_PATH, {})
    report = {
        "wordArabicGenerated": 0,
        "exampleEnglishGenerated": 0,
        "exampleArabicGenerated": 0,
        "metaExamplesGenerated": 0,
        "levels": {},
    }
    remaining = args.limit
    for level in range(1, 7):
      path = ROOT / "source-data" / "hsk" / f"hsk-{level}.json"
      words = load_json(path, [])
      level_report = {
          "wordArabicGenerated": 0,
          "exampleEnglishGenerated": 0,
          "exampleArabicGenerated": 0,
          "metaExamplesGenerated": 0,
      }
      for word in words:
          if remaining == 0 and args.limit:
              break
          changed = enrich_word(word, cache, args.sleep, level_report)
          if changed and args.limit:
              remaining -= 1
      report["levels"][str(level)] = level_report
      for key, value in level_report.items():
          report[key] += value
      write_json(path, words)
      write_json(CACHE_PATH, cache)
      if remaining == 0 and args.limit:
          break
    write_json(CACHE_PATH, cache)
    write_json(REPORT_PATH, report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


def enrich_word(word, cache, sleep, report):
    changed = False
    meaning = word.setdefault("meaning", {"en": "", "ar": ""})
    example = word.setdefault("example", blank_example())
    examples = word.setdefault("examples", [])
    if meaning.get("en") and not meaning.get("ar"):
        meaning["ar"] = translate(meaning["en"], "en", "ar", cache, sleep)
        report["wordArabicGenerated"] += 1
        changed = True

    if not example.get("hanzi"):
        generated = generated_meta_example(word)
        word["example"] = generated
        example = word["example"]
        examples.insert(0, generated)
        report["metaExamplesGenerated"] += 1
        changed = True

    if example.get("hanzi") and not example.get("en"):
        example["en"] = translate(example["hanzi"], "zh-CN", "en", cache, sleep)
        report["exampleEnglishGenerated"] += 1
        changed = True
    if example.get("en") and not example.get("ar"):
        example["ar"] = translate(example["en"], "en", "ar", cache, sleep)
        report["exampleArabicGenerated"] += 1
        changed = True

    normalized_examples = []
    seen = set()
    for item in [example, *examples]:
        if not item.get("hanzi") or item["hanzi"] in seen:
            continue
        seen.add(item["hanzi"])
        if item.get("hanzi") and not item.get("en"):
            item["en"] = translate(item["hanzi"], "zh-CN", "en", cache, sleep)
            report["exampleEnglishGenerated"] += 1
            changed = True
        if item.get("en") and not item.get("ar"):
            item["ar"] = translate(item["en"], "en", "ar", cache, sleep)
            report["exampleArabicGenerated"] += 1
            changed = True
        normalized_examples.append(
            {
                "hanzi": item.get("hanzi", ""),
                "pinyin": item.get("pinyin", ""),
                "en": item.get("en", ""),
                "ar": item.get("ar", ""),
            }
        )
    word["examples"] = normalized_examples
    word["generatedContent"] = {
        "arabic": "machine-generated",
        "examples": "machine-generated where source examples were missing",
    }
    return changed


def generated_meta_example(word):
    hanzi = word.get("hanzi", "")
    return {
        "hanzi": f"我今天学习“{hanzi}”这个词。",
        "pinyin": "",
        "en": f'Today I learned the word "{hanzi}".',
        "ar": "",
    }


def translate(text, source, target, cache, sleep):
    text = clean(text)
    if not text:
        return ""
    key = f"{source}:{target}:{text}"
    if key in cache:
        return cache[key]
    translated = google_translate(text, source, target)
    cache[key] = translated
    if sleep:
        time.sleep(sleep)
    return translated


def google_translate(text, source, target):
    query = urlencode(
        {
            "client": "gtx",
            "sl": source,
            "tl": target,
            "dt": "t",
            "q": text,
        }
    )
    request = Request(
        f"https://translate.googleapis.com/translate_a/single?{query}",
        headers={"User-Agent": "Mozilla/5.0"},
    )
    with urlopen(request, timeout=20) as response:
        payload = json.loads(response.read().decode("utf-8"))
    return clean("".join(part[0] for part in payload[0] if part and part[0]))


def blank_example():
    return {"hanzi": "", "pinyin": "", "en": "", "ar": ""}


def clean(value):
    return " ".join(str(value or "").split())


def load_json(path, fallback):
    if not path.exists():
        return fallback
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
