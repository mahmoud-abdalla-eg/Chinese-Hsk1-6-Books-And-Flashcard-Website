import importlib.util
import json
import re
import unicodedata
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT.parent / "Hsk Words For Each Level"
REPORT_PATH = ROOT / "source-data" / "extracted" / "hsk-4-5-pdf-update-report.json"
VARIANT_EQUIVALENTS = {
    "着名": "著名",
    "报导": "报道",
    "仲介": "中介",
}
SKIP_V2_WORDS = {"分之"}


def main():
    import_parser = load_script("hsk_pdf_import", ROOT / "scripts" / "import-hsk-word-pdfs.py")
    update_helpers = load_script(
        "hsk_update_helpers",
        ROOT / "scripts" / "update-hsk2-hsk3-from-pdfs.py",
    )
    levels = {
        level: load_json(ROOT / "source-data" / "hsk" / f"hsk-{level}.json")
        for level in range(1, 7)
    }
    existing_ids = {word["id"] for words in levels.values() for word in words}
    all_hanzi = {word["hanzi"] for words in levels.values() for word in words}

    hsk4_report = update_hsk4(
        import_parser,
        update_helpers,
        levels,
        all_hanzi,
        existing_ids,
    )
    hsk5_report = inspect_hsk5_pdf()

    report = {"levels": {"4": hsk4_report, "5": hsk5_report}}
    write_json(REPORT_PATH, report)
    print(json.dumps(report, ensure_ascii=False, indent=2))


def update_hsk4(import_parser, helpers, levels, all_hanzi, existing_ids):
    target = levels[4]
    v2_records = import_parser.parse_pdf_records(4, import_parser.PDF_SOURCES[4])
    plain_records = helpers.parse_plain_pdf(4)
    added = []
    skipped_variants = []
    skipped_patterns = []
    skipped_fragments = []
    seen_source_words = set()

    for record in v2_records:
        hanzi = helpers.clean_hanzi(record.get("hanzi", ""))
        if not hanzi or hanzi in seen_source_words:
            continue
        seen_source_words.add(hanzi)
        if hanzi in SKIP_V2_WORDS:
            skipped_fragments.append(hanzi)
            continue
        equivalent = VARIANT_EQUIVALENTS.get(hanzi)
        if equivalent and equivalent in all_hanzi:
            skipped_variants.append({"source": hanzi, "existing": equivalent})
            continue
        if hanzi not in all_hanzi:
            row = make_row(
                4,
                record,
                target,
                existing_ids,
                "source PDF examples cleaned where available",
                helpers,
            )
            target.append(row)
            added.append(row)
            all_hanzi.add(hanzi)

    for record in plain_records:
        hanzi = helpers.clean_hanzi(record.get("hanzi", ""))
        if not hanzi or hanzi in seen_source_words or hanzi in all_hanzi:
            continue
        if helpers.is_grammar_pattern(hanzi):
            skipped_patterns.append(hanzi)
            continue
        equivalent = VARIANT_EQUIVALENTS.get(hanzi)
        if equivalent and equivalent in all_hanzi:
            skipped_variants.append({"source": hanzi, "existing": equivalent})
            continue
        seen_source_words.add(hanzi)
        row = make_row(
            4,
            record,
            target,
            existing_ids,
            "source PDF list example cleaned where available",
            helpers,
        )
        target.append(row)
        added.append(row)
        all_hanzi.add(hanzi)

    target.sort(key=lambda word: word.get("order", 0))
    write_json(ROOT / "source-data" / "hsk" / "hsk-4.json", target)
    return {
        "v2UniqueRows": len(seen_unique(v2_records, helpers)),
        "plainUniqueRows": len(seen_unique(plain_records, helpers)),
        "added": len(added),
        "newCount": len(target),
        "skippedPlainPatterns": skipped_patterns,
        "skippedDuplicateVariants": skipped_variants,
        "skippedFragments": skipped_fragments,
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


def inspect_hsk5_pdf():
    path = SOURCE_ROOT / "hsk-5" / "hsk-5-vocabulary-list-(studyblog.org).pdf"
    if not path.exists():
        return {"added": 0, "newCount": None, "status": "missing PDF"}
    text = "\n".join(page.extract_text() or "" for page in PdfReader(str(path)).pages[:3])
    cjk_count = len(re.findall(r"[\u3400-\u9fff]", text))
    sample_glyphs = re.findall(r"\b\d+\s+(\S+)\s+[a-züÜāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜǹňḿḾ]+", text)
    return {
        "added": 0,
        "newCount": len(load_json(ROOT / "source-data" / "hsk" / "hsk-5.json")),
        "status": "not imported",
        "reason": "The local HSK 5 PDF extracts Chinese words as unreadable embedded-font glyphs, so importing it would corrupt vocabulary data.",
        "readableChineseCharactersInSample": cjk_count,
        "sampleExtractedWordGlyphs": sample_glyphs[:12],
    }


def make_row(level, record, target, existing_ids, example_source, helpers):
    hanzi = helpers.clean_hanzi(record["hanzi"])
    pinyin = helpers.clean_pinyin(record.get("pinyin", ""))
    examples = build_examples(record, hanzi, helpers)
    return {
        "id": helpers.slugify(pinyin, hanzi, existing_ids),
        "hskLevel": level,
        "order": next_order(target),
        "hanzi": hanzi,
        "traditional": hanzi,
        "pinyin": pinyin,
        "meaning": {
            "en": clean_meaning(record.get("meaning", {}).get("en", ""), helpers),
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


def build_examples(record, word_hanzi, helpers):
    cleaned = []
    seen = set()
    for example in record.get("examples", []):
        hanzi = helpers.clean_hanzi(example.get("hanzi", ""))
        if not hanzi or hanzi in seen:
            continue
        pinyin = helpers.clean_pinyin(example.get("pinyin", ""))
        english = clean_english(example.get("en", ""), helpers)
        seen.add(hanzi)
        cleaned.append({"hanzi": hanzi, "pinyin": pinyin, "en": english, "ar": ""})
    if cleaned:
        return cleaned
    return [
        {
            "hanzi": f"我今天学习“{word_hanzi}”这个词。",
            "pinyin": "",
            "en": f'Today I learned the word "{word_hanzi}".',
            "ar": "",
        }
    ]


def clean_english(value, helpers):
    value = helpers.clean_english(value)
    fixes = {
        "I just started, I'm a little but unfamiliar with the lifestyle here.": "I just started, so I am still a little unused to life here.",
        "In order to have be healthy, I want to change my work and rest habits.": "In order to be healthy, I want to change my work and rest habits.",
        "Eating on time and sleeping on time are a good habits.": "Eating on time and sleeping on time are good habits.",
        "One-fifth of the people are here Latino.": "One-fifth of the people here are Latino.",
        "In this respect, my ability is insufficient, I hope we can found someone else to take over.": "In this area, my ability is not enough, so I hope we can find someone else to take over.",
        "She's a little cold toward my attitude.": "Her attitude toward me is a little cold.",
    }
    return fixes.get(value, value)


def clean_meaning(value, helpers):
    value = helpers.clean_meaning(value)
    fixes = {
        "habit,get used to": "habit; to get used to",
        "how fraction being said in Chinese": "fraction marker in Chinese",
    }
    return fixes.get(value, value) or "word"


def next_order(words):
    return max((word.get("order", 0) for word in words), default=0) + 1


def seen_unique(records, helpers):
    seen = []
    for record in records:
        hanzi = helpers.clean_hanzi(record.get("hanzi", ""))
        if hanzi and hanzi not in seen:
            seen.append(hanzi)
    return seen


def clean_space(value):
    return re.sub(r"\s+", " ", str(value or "").replace("\u00a0", " ")).strip()


def load_script(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def load_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
