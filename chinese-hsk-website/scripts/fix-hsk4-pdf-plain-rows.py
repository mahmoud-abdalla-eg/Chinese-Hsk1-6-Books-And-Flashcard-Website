import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PATH = ROOT / "source-data" / "hsk" / "hsk-4.json"
FIXES = {
    "百分之": {
        "id": "baifenzhi",
        "pinyin": "bǎifēnzhī",
        "en": "percent",
        "partOfSpeech": "phrase",
    },
    "抽烟": {
        "id": "chouyan",
        "pinyin": "chōuyān",
        "en": "to smoke",
        "partOfSpeech": "verb",
    },
    "放暑假": {
        "id": "fang-shujia",
        "pinyin": "fàng shǔjià",
        "en": "to have summer vacation",
        "partOfSpeech": "verb phrase",
    },
    "弹钢琴": {
        "id": "tan-gangqin",
        "pinyin": "tán gāngqín",
        "en": "to play the piano",
        "partOfSpeech": "verb phrase",
    },
}


def main():
    words = json.loads(PATH.read_text(encoding="utf-8"))
    used_ids = {word["id"] for word in words}
    fixed = []
    for word in words:
        patch = FIXES.get(word.get("hanzi"))
        if not patch:
            continue
        used_ids.discard(word["id"])
        word["id"] = unique_id(patch["id"], used_ids)
        word["pinyin"] = patch["pinyin"]
        word["meaning"]["en"] = patch["en"]
        word["partOfSpeech"] = patch["partOfSpeech"]
        example = {
            "hanzi": f"我今天学习“{word['hanzi']}”这个词。",
            "pinyin": "",
            "en": f"Today I learned the word \"{word['hanzi']}\".",
            "ar": "",
        }
        word["example"] = example
        word["examples"] = [example]
        fixed.append(word["hanzi"])
    PATH.write_text(json.dumps(words, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"fixed": fixed}, ensure_ascii=False, indent=2))


def unique_id(base, used_ids):
    candidate = base
    index = 2
    while candidate in used_ids:
        candidate = f"{base}-{index}"
        index += 1
    used_ids.add(candidate)
    return candidate


if __name__ == "__main__":
    main()
