from __future__ import annotations

import collections
import json
import re
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
PDF_PATH = ROOT.parent / "HSK 1-6 Grammar.pdf"
GRAMMAR_PATH = ROOT / "source-data" / "grammar" / "learning-path.json"

ROW_MARKER = re.compile(r"(?<![\d.])([1-6])\s*([1-6]\.\d{2}\.\d)Lesson")
BAD_OLD_PATTERN = re.compile(r"Lesson|LessonStructure|\s[1-6]\s+[1-6]\.\d{2}\.\d")


def clean_row(text: str) -> str:
    text = re.sub(
        r"LessonStructure Pinyin English EquivalentExample Example Pinyin Example TranslationHSKCode",
        " ",
        text,
    )
    text = re.sub(r"HSKCode\s*Video lessons\s*from our courses!", " ", text)
    text = re.sub(r"LessonStructure.*?HSKCode", " ", text)
    return " ".join(text.split())


def main() -> None:
    old_items = json.loads(GRAMMAR_PATH.read_text(encoding="utf-8"))
    queues: dict[tuple[int, str], list[dict]] = collections.defaultdict(list)
    for item in old_items:
        queues[(int(item.get("hskLevel", 0)), item.get("lessonCode", ""))].append(
            item
        )

    text = "\n".join(page.extract_text() or "" for page in PdfReader(PDF_PATH).pages)
    matches = [
        match
        for match in ROW_MARKER.finditer(text)
        if match.group(1) == match.group(2)[0]
    ]

    occurrence: collections.Counter[tuple[int, str]] = collections.Counter()
    items: list[dict] = []
    for index, match in enumerate(matches):
        level = int(match.group(1))
        lesson_code = match.group(2)
        row_end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        details = clean_row(text[match.end() : row_end])
        occurrence[(level, lesson_code)] += 1

        old_item = None
        while queues[(level, lesson_code)]:
            candidate = queues[(level, lesson_code)].pop(0)
            if not BAD_OLD_PATTERN.search(candidate.get("pattern", "")):
                old_item = candidate
                break

        example = (
            old_item.get("example", {}) if old_item else {}
        )
        items.append(
            {
                "id": f"hsk-{level}-{lesson_code}-{occurrence[(level, lesson_code)]}",
                "hskLevel": level,
                "lessonCode": lesson_code,
                "pattern": (
                    old_item.get("pattern", "") if old_item else details[:180]
                ).strip(),
                "explanation": (
                    old_item.get("explanation", "") if old_item else ""
                ).strip(),
                "details": details,
                "example": {
                    "hanzi": str(example.get("hanzi", "")).strip(),
                    "pinyin": str(example.get("pinyin", "")).strip(),
                    "en": str(example.get("en", "")).strip(),
                    "ar": str(example.get("ar", "")).strip(),
                },
            }
        )

    GRAMMAR_PATH.write_text(
        json.dumps(items, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    counts = collections.Counter(item["hskLevel"] for item in items)
    print(f"Wrote {len(items)} grammar rows: {dict(sorted(counts.items()))}")


if __name__ == "__main__":
    main()
