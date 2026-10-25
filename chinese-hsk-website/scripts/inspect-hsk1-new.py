import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader("hsk 1/New Books And resources/hsk-course-1.pdf")
print("Total pages in HSK 1 New Book:", len(reader.pages))

for i in range(25):
    text = reader.pages[i].extract_text()
    if text and ("目录" in text or "Contents" in text or "Lesson" in text or "课文" in text):
        print(f"=== Page {i+1} ===")
        for line in text.splitlines()[:40]:
            if line.strip():
                print("  ", line.strip())
