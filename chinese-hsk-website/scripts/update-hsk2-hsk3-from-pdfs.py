import importlib.util
import json
import re
import unicodedata
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT.parent / "Hsk Words For Each Level"
REPORT_PATH = ROOT / "source-data" / "extracted" / "hsk-2-3-pdf-update-report.json"
PART_LABELS = [
    ("Measure word", "measure word"),
    ("Question Word", "question word"),
    ("Verb Object", "verb object"),
    ("Numeral", "numeral"),
    ("Pronoun", "pronoun"),
    ("Particle", "particle"),
    ("Phrase", "phrase"),
    ("Number", "number"),
    ("Conj", "conjunction"),
    ("Prep", "preposition"),
    ("Noun", "noun"),
    ("Verb", "verb"),
    ("Adj", "adjective"),
    ("Adv", "adverb"),
    ("Name", "name"),
    ("n.", "noun"),
    ("v.", "verb"),
    ("adj.", "adjective"),
    ("adv.", "adverb"),
    ("pron.", "pronoun"),
    ("num.", "number"),
    ("nm.", "measure word"),
    ("prep.", "preposition"),
]


def main():
    parser = load_import_parser()
    levels = load_levels()
    existing_ids = {word["id"] for words in levels.values() for word in words}
    report = {"levels": {}}

    for level in [2, 3]:
        all_hanzi = {word["hanzi"] for words in levels.values() for word in words}
        target = levels[level]
        v2_records = parser.parse_pdf_records(level, parser.PDF_SOURCES[level])
        plain_records = parse_plain_pdf(level)
        added = []
        skipped_plain_patterns = []
        seen_source_words = set()

        for record in v2_records:
            hanzi = clean_hanzi(record.get("hanzi", ""))
            if not hanzi or hanzi in seen_source_words:
                continue
            seen_source_words.add(hanzi)
            if hanzi not in all_hanzi:
                row = make_row(level, record, target, existing_ids, "source PDF examples cleaned where available")
                target.append(row)
                added.append(row)
                all_hanzi.add(hanzi)

        for record in plain_records:
            hanzi = clean_hanzi(record.get("hanzi", ""))
            if not hanzi or hanzi in seen_source_words or hanzi in all_hanzi:
                continue
            if is_grammar_pattern(hanzi):
                skipped_plain_patterns.append(hanzi)
                continue
            seen_source_words.add(hanzi)
            row = make_row(level, record, target, existing_ids, "source PDF list example cleaned where available")
            target.append(row)
            added.append(row)
            all_hanzi.add(hanzi)

        target.sort(key=lambda word: word.get("order", 0))
        write_json(ROOT / "source-data" / "hsk" / f"hsk-{level}.json", target)
        report["levels"][str(level)] = {
            "v2UniqueRows": len(seen_unique(v2_records)),
            "plainUniqueRows": len(seen_unique(plain_records)),
            "added": len(added),
            "newCount": len(target),
            "skippedPlainPatterns": skipped_plain_patterns,
            "addedWords": [
                {
                    "id": word["id"],
                    "hanzi": word["hanzi"],
                    "pinyin": word["pinyin"],
                    "meaningEn": word["meaning"]["en"],
                }
                for word in added
            ],
        }

    write_json(REPORT_PATH, report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


def load_import_parser():
    path = ROOT / "scripts" / "import-hsk-word-pdfs.py"
    spec = importlib.util.spec_from_file_location("hsk_pdf_import", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def load_levels():
    return {
        level: load_json(ROOT / "source-data" / "hsk" / f"hsk-{level}.json")
        for level in range(1, 7)
    }


def parse_plain_pdf(level):
    path = SOURCE_ROOT / f"hsk-{level}" / f"hsk-{level}-vocabulary-list-(studyblog.org).pdf"
    if not path.exists():
        return []
    text = "\n".join(page.extract_text() or "" for page in PdfReader(str(path)).pages)
    matches = list(re.finditer(r"【([^】]+)】", text))
    records = []
    for index, match in enumerate(matches):
        hanzi = normalize_bracket_word(match.group(1))
        if not hanzi:
            continue
        block_end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        block = text[match.end() : block_end]
        record = parse_plain_block(level, hanzi, block)
        if record:
            records.append(record)
    return records


def parse_plain_block(level, hanzi, block):
    block = clean_space(block)
    part_match = find_part_label(block)
    if not part_match:
        return {
            "hskLevel": level,
            "hanzi": hanzi,
            "pinyin": "",
            "partOfSpeech": "word",
            "meaning": {"en": word_fallback_meaning(hanzi), "ar": ""},
            "examples": fallback_examples(hanzi),
        }
    label, normalized_part, start, end = part_match
    pinyin = clean_pinyin(block[:start])
    rest = clean_space(block[end:])
    example_match = re.search(r"[\u3400-\u9fff～][\u3400-\u9fff～A-Za-z0-9，。？！：、；,.?!\s]*[。？！?!]", rest)
    meaning = rest
    examples = []
    if example_match:
        meaning = clean_english(rest[: example_match.start()])
        example_hanzi = clean_hanzi(example_match.group(0).replace("～", hanzi))
        examples.append(
            {
                "hanzi": example_hanzi,
                "pinyin": "",
                "en": "",
                "ar": "",
            }
        )
    return {
        "hskLevel": level,
        "hanzi": hanzi,
        "pinyin": pinyin,
        "partOfSpeech": normalized_part,
        "meaning": {"en": clean_meaning(meaning) or word_fallback_meaning(hanzi), "ar": ""},
        "examples": examples or fallback_examples(hanzi),
    }


def find_part_label(block):
    best = None
    for label, normalized in PART_LABELS:
        match = re.search(rf"(?:^|\s){re.escape(label)}(?:\s|$)", block)
        if not match:
            continue
        item = (label, normalized, match.start(), match.end())
        if best is None or item[2] < best[2]:
            best = item
    return best


def make_row(level, record, target, existing_ids, example_source):
    hanzi = clean_hanzi(record["hanzi"])
    pinyin = clean_pinyin(record.get("pinyin", ""))
    examples = build_examples(record, hanzi)
    return {
        "id": slugify(pinyin, hanzi, existing_ids),
        "hskLevel": level,
        "order": next_order(target),
        "hanzi": hanzi,
        "traditional": hanzi,
        "pinyin": pinyin,
        "meaning": {
            "en": clean_meaning(record.get("meaning", {}).get("en", "")) or word_fallback_meaning(hanzi),
            "ar": "",
        },
        "partOfSpeech": clean_space(record.get("partOfSpeech", "")) or "word",
        "example": examples[0],
        "audio": {"word": None, "example": None},
        "tags": [],
        "examples": examples,
        "generatedContent": {
            "arabic": "machine-generated translation, review recommended",
            "examples": example_source,
        },
    }


def next_order(words):
    return max((word.get("order", 0) for word in words), default=0) + 1


def build_examples(record, word_hanzi):
    cleaned = []
    seen = set()
    for example in record.get("examples", []):
        hanzi = clean_hanzi(example.get("hanzi", ""))
        if not hanzi or hanzi in seen:
            continue
        pinyin = clean_pinyin(example.get("pinyin", ""))
        english = clean_english(example.get("en", ""))
        seen.add(hanzi)
        cleaned.append({"hanzi": hanzi, "pinyin": pinyin, "en": english, "ar": ""})
    if cleaned:
        return cleaned
    return fallback_examples(word_hanzi)


def fallback_examples(hanzi):
    return [
        {
            "hanzi": f"我今天学习“{hanzi}”这个词。",
            "pinyin": "",
            "en": f'Today I learned the word "{hanzi}".',
            "ar": "",
        }
    ]


def normalize_bracket_word(value):
    value = clean_space(value)
    value = re.sub(r"（[^）]*）", "", value)
    return clean_hanzi(value)


def is_grammar_pattern(hanzi):
    return "…" in hanzi or "……" in hanzi


def seen_unique(records):
    seen = []
    for record in records:
        hanzi = clean_hanzi(record.get("hanzi", ""))
        if hanzi and hanzi not in seen:
            seen.append(hanzi)
    return seen


def clean_space(value):
    return re.sub(r"\s+", " ", str(value or "").replace("\u00a0", " ")).strip()


def clean_hanzi(value):
    value = clean_space(value)
    value = re.sub(r"\s*([，。？！：、；,.?!])\s*", r"\1", value)
    value = re.sub(r"(?<=[\u3400-\u9fff])\s+(?=[\u3400-\u9fff])", "", value)
    return value.strip()


def clean_pinyin(value):
    value = clean_space(value)
    value = value.replace("。", ".").replace("？", "?").replace("！", "!")
    value = re.sub(r"([A-Za-züÜ])\s+([\u0300-\u036f])", r"\1\2", value)
    value = unicodedata.normalize("NFC", value)
    value = re.split(
        r"\b(?:What|Which|Is|Are|Do|Does|I |He |She |They |We |My |The |There |This |That |Let|Please|Waiter|Long|You |It\b)",
        value,
        maxsplit=1,
    )[0].strip()
    return clean_space(value)


def clean_english(value):
    value = clean_space(value)
    value = value.replace("www.StudyBlog.org", "")
    value = value.replace(
        "Chinese Pinyin Part of Speech English Sentence 1 - Chinese Sentence 1 - Pinyin Sentence 1 - English Sentence 2 - Chinese Sentence 2 - Pinyin Sentence 2 - English",
        "",
    )
    value = re.split(r"[\u3400-\u9fff]", value, maxsplit=1)[0]
    value = clean_space(value)
    fixes = {
        "good to listen": "pleasant to hear",
        "a dark comedy type.": "a dark comedy.",
        "The yellow river is one of the longest rivers in China.": "The Yellow River is one of the longest rivers in China.",
        "An elephant has a long nose.": "An elephant has a long trunk.",
        "Where are you from? Your name is so special!": "Where are you from? Your name is so special!",
    }
    return fixes.get(value, value)


def clean_meaning(value):
    value = clean_english(value)
    value = re.split(r"\b(?:Měi|Wǒ|Nǐ|Tā|A:|B:)\b", value, maxsplit=1)[0]
    value = clean_space(value).strip(" ,.;")
    fixes = {
        "match, ball games": "ball game; match",
        "What time": "what time",
        "Wait a moment, later": "wait a moment; later",
        "how long..?": "how long",
    }
    return fixes.get(value, value)


def word_fallback_meaning(hanzi):
    fallback = {
        "电子邮件": "email",
        "熊猫": "panda",
        "照相机": "camera",
    }
    return fallback.get(hanzi, hanzi)


def slugify(pinyin, fallback, existing_ids):
    base = unicodedata.normalize("NFKD", pinyin or fallback)
    base = "".join(ch for ch in base if not unicodedata.combining(ch))
    base = base.replace("ü", "v").replace("Ü", "v")
    base = re.sub(r"[^A-Za-z0-9]+", "-", base).strip("-").lower() or "word"
    candidate = base
    index = 2
    while candidate in existing_ids:
        candidate = f"{base}-{index}"
        index += 1
    existing_ids.add(candidate)
    return candidate


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
