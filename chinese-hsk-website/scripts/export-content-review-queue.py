import csv
import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "source-data" / "review-queues"


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    arabic_rows = []
    example_rows = []
    for level in range(1, 7):
        words = json.loads(
            (ROOT / "source-data" / "hsk" / f"hsk-{level}.json").read_text(
                encoding="utf-8"
            )
        )
        for word in words:
            if not word.get("meaning", {}).get("ar"):
                arabic_rows.append(
                    {
                        "level": level,
                        "id": word.get("id", ""),
                        "hanzi": word.get("hanzi", ""),
                        "pinyin": word.get("pinyin", ""),
                        "english": word.get("meaning", {}).get("en", ""),
                        "arabic": "",
                    }
                )
            example = word.get("example", {})
            issues = []
            example_provenance = word.get("generatedContent", {}).get(
                "examples", ""
            )
            if is_generated_placeholder(example.get("hanzi", "")):
                issues.append("synthetic_example")
            elif "placeholder removed" in example_provenance.lower():
                issues.append("placeholder_removed")
            if not example.get("hanzi"):
                issues.append("missing_hanzi")
            if not example.get("pinyin"):
                issues.append("missing_pinyin")
            if not example.get("en"):
                issues.append("missing_english")
            if not example.get("ar"):
                issues.append("missing_arabic")
            if issues:
                example_rows.append(
                    {
                        "level": level,
                        "id": word.get("id", ""),
                        "hanzi": word.get("hanzi", ""),
                        "pinyin": word.get("pinyin", ""),
                        "meaning_en": word.get("meaning", {}).get("en", ""),
                        "meaning_ar": word.get("meaning", {}).get("ar", ""),
                        "example_hanzi": example.get("hanzi", ""),
                        "example_pinyin": example.get("pinyin", ""),
                        "example_en": example.get("en", ""),
                        "example_ar": example.get("ar", ""),
                        "issues": ";".join(issues),
                    }
                )
    write_csv(
        OUT_DIR / "missing-arabic-words.csv",
        arabic_rows,
        [
            "level",
            "id",
            "hanzi",
            "pinyin",
            "english",
            "arabic",
        ],
    )
    write_csv(
        OUT_DIR / "missing-word-examples.csv",
        example_rows,
        [
            "level",
            "id",
            "hanzi",
            "pinyin",
            "meaning_en",
            "meaning_ar",
            "example_hanzi",
            "example_pinyin",
            "example_en",
            "example_ar",
            "issues",
        ],
    )
    print(
        json.dumps(
            {
                "arabicRows": len(arabic_rows),
                "exampleRows": len(example_rows),
                "output": str(OUT_DIR),
            },
            indent=2,
        )
    )


def is_generated_placeholder(hanzi):
    return hanzi.startswith("我今天学习“") and hanzi.endswith("”这个词。")


def write_csv(path, rows, fieldnames):
    with path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


if __name__ == "__main__":
    main()
