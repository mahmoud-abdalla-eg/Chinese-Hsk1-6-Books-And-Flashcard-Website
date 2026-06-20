import json
import os
import re
from pathlib import Path
from urllib.request import urlretrieve

from pypdf import PdfReader


PROJECT_ROOT = Path(__file__).resolve().parents[1]
LOCAL_ROOT = Path(
    r"E:\Chinese Website\Chinese-Hsk1-5-Books-And-Flashcard-Website\Hsk Words For Each Level"
)
HSK6_CACHE = Path(os.environ.get("TEMP", PROJECT_ROOT)) / "hsk-6.json"
HSK6_URL = "https://chineselanguagehub.com/downloads/hsk/hsk-6.json"

PINYIN_CHARS = "A-Za-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüÜńňǹḿḾ"
PART_LABELS = [
    "Verb Object",
    "Measure word",
    "Time Word",
    "Noun/Verb",
    "Question Word",
    "Interjection",
    "Auxiliary",
    "Pronoun",
    "Particle",
    "Phrase",
    "Number",
    "Numeral",
    "Conj",
    "Prep",
    "Noun",
    "Verb",
    "Adj",
    "Adv",
    "Name",
]
PART_RE = "|".join(re.escape(part) for part in PART_LABELS)
RECORD_RE = re.compile(
    rf"(?m)^([\u3400-\u9fff]+)\s+([{PINYIN_CHARS}\s]+?)\s+({PART_RE})\b"
)
ZH_SENTENCE_RE = re.compile(
    r"(?:[A-Z]:\s*)?[\u3400-\u9fff][\u3400-\u9fffA-Za-z0-9，。？！：、；,.?!\s]*[。？！?!]"
)


PDF_SOURCES = {
    1: LOCAL_ROOT / "hsk-1" / "hsk 1.pdf",
    2: LOCAL_ROOT / "hsk-2" / "hsk-2-vocabulary-list-v2-(studyblog.org).pdf",
    3: LOCAL_ROOT / "hsk-3" / "hsk-3-vocabulary-list-v2-(studyblog.org).pdf",
    4: LOCAL_ROOT / "hsk-4" / "hsk-4-vocabulary-list-v2-(studyblog.org).pdf",
}


def clean_space(value):
    return re.sub(r"\s+", " ", (value or "").replace("\u00a0", " ")).strip()


def clean_hanzi(value):
    value = clean_space(value)
    value = re.sub(r"\s*([，。？！：、；,.?!])\s*", r"\1", value)
    value = re.sub(r"(?<=[\u3400-\u9fff])\s+(?=[\u3400-\u9fff])", "", value)
    return value.strip()


def normalize_part(value):
    value = clean_space(value)
    mapping = {
        "Adj": "adjective",
        "Adv": "adverb",
        "Conj": "conjunction",
        "Noun": "noun",
        "Noun/Verb": "noun / verb",
        "Phrase": "phrase",
        "Prep": "preposition",
        "Pronoun": "pronoun",
        "Verb": "verb",
        "Verb Object": "verb object",
    }
    return mapping.get(value, value.lower() or "word")


def read_pdf_text(pdf_path):
    reader = PdfReader(str(pdf_path))
    return "\n".join(page.extract_text() or "" for page in reader.pages)


def split_pinyin_and_english(value):
    value = clean_space(value)
    if not value:
        return "", ""
    match = re.search(r"([.?!])\s+", value)
    if not match:
        return value, ""
    pinyin = clean_space(value[: match.end(1)])
    english = clean_space(value[match.end() :])
    return pinyin, english


def extract_examples(block):
    matches = list(ZH_SENTENCE_RE.finditer(block))
    examples = []
    for index, match in enumerate(matches[:2]):
        hanzi = clean_hanzi(match.group(0))
        if len(re.sub(r"[^\u3400-\u9fff]", "", hanzi)) < 2:
            continue
        next_start = matches[index + 1].start() if index + 1 < len(matches) else len(block)
        tail = block[match.end() : next_start]
        pinyin, english = split_pinyin_and_english(tail)
        examples.append(
            {
                "hanzi": hanzi,
                "pinyin": pinyin,
                "en": english,
                "ar": "",
            }
        )
    return examples


def parse_pdf_records(level, pdf_path):
    if not pdf_path.exists():
        return []
    text = read_pdf_text(pdf_path)
    matches = list(RECORD_RE.finditer(text))
    records = []
    for index, match in enumerate(matches):
        start = match.start()
        end = matches[index + 1].start() if index + 1 < len(matches) else len(text)
        block = text[start:end]
        hanzi = clean_hanzi(match.group(1))
        pinyin = clean_space(match.group(2))
        part = normalize_part(match.group(3))
        after_header = block[match.end() - start :]
        first_example = ZH_SENTENCE_RE.search(after_header)
        meaning = ""
        if first_example:
            meaning = clean_space(after_header[: first_example.start()])
        examples = extract_examples(after_header)
        records.append(
            {
                "hskLevel": level,
                "hanzi": hanzi,
                "pinyin": pinyin,
                "partOfSpeech": part,
                "meaning": {"en": meaning, "ar": ""},
                "examples": examples,
            }
        )
    return records


def load_hsk6_terms():
    if not HSK6_CACHE.exists():
        urlretrieve(HSK6_URL, HSK6_CACHE)
    payload = json.loads(HSK6_CACHE.read_text(encoding="utf-8"))
    return payload.get("terms", [])


def load_current_words(level):
    path = PROJECT_ROOT / "source-data" / "hsk" / f"hsk-{level}.json"
    return json.loads(path.read_text(encoding="utf-8"))


def default_example():
    return {"hanzi": "", "pinyin": "", "en": "", "ar": ""}


def normalize_word(word, level, order):
    example = word.get("example") or default_example()
    audio = word.get("audio") or {}
    meaning = word.get("meaning") or {}
    normalized = {
        "id": str(word.get("id") or f"hsk-{level}-{order:04d}"),
        "hskLevel": level,
        "order": order,
        "hanzi": clean_hanzi(word.get("hanzi", "")),
        "traditional": clean_hanzi(word.get("traditional", word.get("hanzi", ""))),
        "pinyin": clean_space(word.get("pinyin", "")),
        "meaning": {
            "en": clean_space(meaning.get("en", "")),
            "ar": clean_space(meaning.get("ar", "")),
        },
        "partOfSpeech": clean_space(word.get("partOfSpeech", "")) or "word",
        "example": {
            "hanzi": clean_hanzi(example.get("hanzi", "")),
            "pinyin": clean_space(example.get("pinyin", "")),
            "en": clean_space(example.get("en", "")),
            "ar": clean_space(example.get("ar", "")),
        },
        "audio": {
            "word": audio.get("word") or None,
            "example": audio.get("example") or None,
        },
        "tags": word.get("tags") if isinstance(word.get("tags"), list) else [],
    }
    examples = []
    for item in word.get("examples", []):
        if isinstance(item, dict) and item.get("hanzi"):
            examples.append(
                {
                    "hanzi": clean_hanzi(item.get("hanzi", "")),
                    "pinyin": clean_space(item.get("pinyin", "")),
                    "en": clean_space(item.get("en", "")),
                    "ar": clean_space(item.get("ar", "")),
                }
            )
    if normalized["example"]["hanzi"]:
        examples.insert(0, normalized["example"])
    normalized["examples"] = dedupe_examples(examples)
    if normalized["examples"]:
        normalized["example"] = normalized["examples"][0]
    return normalized


def dedupe_examples(examples):
    merged = []
    seen = set()
    for example in examples:
        hanzi = clean_hanzi(example.get("hanzi", ""))
        if not hanzi or hanzi in seen:
            continue
        seen.add(hanzi)
        merged.append(
            {
                "hanzi": hanzi,
                "pinyin": clean_space(example.get("pinyin", "")),
                "en": clean_space(example.get("en", "")),
                "ar": clean_space(example.get("ar", "")),
            }
        )
    return merged


def merge_pdf_record(word, record):
    if record.get("pinyin") and not word.get("pinyin"):
        word["pinyin"] = record["pinyin"]
    if record.get("partOfSpeech") and word.get("partOfSpeech") in {"", "word"}:
        word["partOfSpeech"] = record["partOfSpeech"]
    if record.get("meaning", {}).get("en") and not word.get("meaning", {}).get("en"):
        word["meaning"]["en"] = record["meaning"]["en"]
    imported = record.get("examples", [])
    if not imported:
        return False
    imported = dedupe_examples(imported)
    existing = word.get("examples", [])
    word["examples"] = dedupe_examples(imported + existing)
    if imported:
        word["example"] = imported[0]
    return True


def build_hsk6_words(seen_hanzi):
    words = []
    skipped = []
    local_seen = set()
    for term in load_hsk6_terms():
        hanzi = clean_hanzi(term.get("simplified", ""))
        if not hanzi:
            continue
        if hanzi in seen_hanzi or hanzi in local_seen:
            skipped.append(hanzi)
            continue
        local_seen.add(hanzi)
        order = len(words) + 1
        words.append(
            {
                "id": f"hsk-6-{order:04d}",
                "hskLevel": 6,
                "order": order,
                "hanzi": hanzi,
                "traditional": clean_hanzi(term.get("traditional", hanzi)),
                "pinyin": clean_space(term.get("pinyin", "")),
                "meaning": {"en": clean_space(term.get("english", "")), "ar": ""},
                "partOfSpeech": "word",
                "example": default_example(),
                "audio": {"word": None, "example": None},
                "tags": [],
                "examples": [],
            }
        )
    return words, skipped


def write_json(path, data):
    path.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def main():
    pdf_records = {
        level: {record["hanzi"]: record for record in parse_pdf_records(level, pdf_path)}
        for level, pdf_path in PDF_SOURCES.items()
    }
    report = {
        "pdfRecordCounts": {
            str(level): len(records) for level, records in pdf_records.items()
        },
        "matchedExampleRows": {},
        "levelCounts": {},
        "skippedDuplicates": {},
    }
    seen_hanzi = set()
    for level in range(1, 6):
        current = load_current_words(level)
        updated = []
        matched = 0
        skipped = []
        local_seen = set()
        for index, raw_word in enumerate(current, start=1):
            word = normalize_word(raw_word, level, index)
            if not word["hanzi"]:
                continue
            if word["hanzi"] in seen_hanzi or word["hanzi"] in local_seen:
                skipped.append(word["hanzi"])
                continue
            local_seen.add(word["hanzi"])
            record = pdf_records.get(level, {}).get(word["hanzi"])
            if record and merge_pdf_record(word, record):
                matched += 1
            word["order"] = len(updated) + 1
            updated.append(word)
        seen_hanzi.update(word["hanzi"] for word in updated)
        write_json(
            PROJECT_ROOT / "source-data" / "hsk" / f"hsk-{level}.json",
            updated,
        )
        report["matchedExampleRows"][str(level)] = matched
        report["levelCounts"][str(level)] = len(updated)
        report["skippedDuplicates"][str(level)] = skipped

    hsk6_words, hsk6_skipped = build_hsk6_words(seen_hanzi)
    write_json(PROJECT_ROOT / "source-data" / "hsk" / "hsk-6.json", hsk6_words)
    report["levelCounts"]["6"] = len(hsk6_words)
    report["skippedDuplicates"]["6"] = hsk6_skipped

    report_path = PROJECT_ROOT / "source-data" / "extracted" / "hsk-word-import-report.json"
    write_json(report_path, report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
