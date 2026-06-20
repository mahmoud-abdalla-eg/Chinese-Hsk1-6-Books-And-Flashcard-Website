import importlib.util
import json
import re
import unicodedata
from pathlib import Path

from pypdf import PdfReader


ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = (
    ROOT.parent / "Hsk Words For Each Level" / "hsk-1"
)
MAIN_PDF = SOURCE_DIR / "hsk 1.pdf"
STUDYBLOG_PDF = SOURCE_DIR / "hsk-1-vocabulary-list-(studyblog.org).pdf"
REPORT_PATH = ROOT / "source-data" / "extracted" / "hsk-1-pdf-update-report.json"


def main():
    parser = load_import_parser()
    records = parser.parse_pdf_records(1, MAIN_PDF)
    studyblog_words = extract_studyblog_words()

    levels = {
        level: load_json(ROOT / "source-data" / "hsk" / f"hsk-{level}.json")
        for level in range(1, 7)
    }
    hsk1 = levels[1]
    all_hanzi = {word["hanzi"] for words in levels.values() for word in words}
    existing_ids = {word["id"] for words in levels.values() for word in words}

    seen_pdf = set()
    missing = []
    for record in records:
        hanzi = clean_hanzi(record.get("hanzi", ""))
        if not hanzi or hanzi in seen_pdf:
            continue
        seen_pdf.add(hanzi)
        if hanzi not in all_hanzi:
            missing.append(record)

    start_order = max(word.get("order", 0) for word in hsk1) + 1
    added = []
    for offset, record in enumerate(missing):
        hanzi = clean_hanzi(record["hanzi"])
        pinyin = clean_pinyin(record.get("pinyin", ""))
        examples = build_examples(record, hanzi)
        row = {
            "id": slugify(pinyin, hanzi, existing_ids),
            "hskLevel": 1,
            "order": start_order + offset,
            "hanzi": hanzi,
            "traditional": hanzi,
            "pinyin": pinyin,
            "meaning": {
                "en": clean_meaning(record.get("meaning", {}).get("en", "")),
                "ar": "",
            },
            "partOfSpeech": clean_space(record.get("partOfSpeech", "")) or "word",
            "example": examples[0],
            "audio": {"word": None, "example": None},
            "tags": [],
            "examples": examples,
            "generatedContent": {
                "arabic": "machine-generated translation, review recommended",
                "examples": "source PDF examples cleaned where available",
            },
        }
        added.append(row)

    hsk1.extend(added)
    write_json(ROOT / "source-data" / "hsk" / "hsk-1.json", hsk1)

    report = {
        "sourceFolder": str(SOURCE_DIR),
        "checkedPdfs": [MAIN_PDF.name, STUDYBLOG_PDF.name],
        "mainPdfUniqueRows": len(seen_pdf),
        "studyblogUniqueWords": len(studyblog_words),
        "addedToHsk1": len(added),
        "newHsk1Count": len(hsk1),
        "studyblogOnlyMissingGlobally": [
            word for word in studyblog_words if normalize_studyblog_word(word) not in all_hanzi
        ],
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


def extract_studyblog_words():
    if not STUDYBLOG_PDF.exists():
        return []
    text = "\n".join(page.extract_text() or "" for page in PdfReader(str(STUDYBLOG_PDF)).pages)
    words = []
    seen = set()
    for raw in re.findall(r"【([^】]+)】", text):
        normalized = normalize_studyblog_word(raw)
        if normalized and normalized not in seen:
            seen.add(normalized)
            words.append(normalized)
    return words


def normalize_studyblog_word(value):
    value = clean_space(value)
    value = value.replace("（那儿）", "").replace("（这儿）", "")
    return clean_hanzi(value)


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
        "Peking": "Beijing",
        "Meimei has there siblings.": "Meimei has three siblings.",
        "Which country are you from ?": "Which country are you from?",
        "Which country is he from ?": "Which country is he from?",
        "It is first time to see you. It is nice to meet you.": "This is the first time seeing you. It is nice to meet you.",
        "He is not a Japanese.": "He is not Japanese.",
        "My teacher is a Japanese.": "My teacher is Japanese.",
        "When are you going to watch movie?": "When are you going to watch a movie?",
        "He has dinner at twelve o'clock today.": "He eats at twelve o'clock today.",
        "The waiter/ waitress from this restaurant is very nice.": "The waiter at this restaurant is very nice.",
        "I like to wake up early to play the ball.": "I like to wake up early to play ball.",
        "The Chinese teacher teach us how to write words.": "The Chinese teacher teaches us how to write characters.",
        "This is a newly opened hotel.": "This is a newly opened restaurant.",
        "Train tickets in Chinese are very cheap.": "Transportation tickets in China are very cheap.",
        "How long does it takes from your house to the museum by subway?": "How long does it take to get from your house to the museum by subway?",
        "I want to go China and have fun there next year.": "I want to go to China for fun next year.",
        "Last time he was also late for watching a movie,.": "Last time, he was also late for the movie.",
    }
    return fixes.get(value, value)


def clean_meaning(value):
    value = clean_english(value)
    value = re.split(r"\b(?:Měi|Wǒ|Nǐ|Tā|A:|B:)\b", value, maxsplit=1)[0]
    value = clean_space(value).strip(" ,.;")
    fixes = {
        "a person of which country": "person from which country",
        "Wait a moment, later": "wait a moment; later",
        "how long..?": "how long",
        "long time, no see": "long time no see",
        "Peking": "Beijing",
        "shopping": "to go shopping",
        "cooking": "to cook",
    }
    return fixes.get(value, value)


def build_examples(record, word_hanzi):
    cleaned = []
    seen = set()
    for example in record.get("examples", []):
        hanzi = clean_hanzi(example.get("hanzi", ""))
        if not hanzi or hanzi in seen:
            continue
        pinyin = clean_pinyin(example.get("pinyin", ""))
        english = clean_english(example.get("en", ""))
        if not english or not pinyin:
            continue
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
