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
            if not example.get("hanzi") or not example.get("en"):
                example_rows.append(
                    {
                        "level": level,
                        "id": word.get("id", ""),
                        "hanzi": word.get("hanzi", ""),
                        "pinyin": word.get("pinyin", ""),
                        "meaning_en": word.get("meaning", {}).get("en", ""),
                        "example_hanzi": example.get("hanzi", ""),
                        "example_pinyin": example.get("pinyin", ""),
                        "example_en": example.get("en", ""),
                        "example_ar": example.get("ar", ""),
                    }
                )
    write_csv(OUT_DIR / "missing-arabic-words.csv", arabic_rows)
    write_csv(OUT_DIR / "missing-word-examples.csv", example_rows)
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


def write_csv(path, rows):
    with path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=rows[0].keys() if rows else [])
        if rows:
            writer.writeheader()
            writer.writerows(rows)


if __name__ == "__main__":
    main()
