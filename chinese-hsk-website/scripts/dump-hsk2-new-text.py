import pypdf
import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader("hsk 2/New Books And resources/hsk-course-2.pdf")
print("Total pages:", len(reader.pages))

# Dump text page by page to a text file for complete reference
with open("chinese-hsk-website/scripts/hsk2_new_book_raw.txt", "w", encoding="utf-8") as f:
    for i, p in enumerate(reader.pages):
        t = p.extract_text()
        if t:
            f.write(f"\n--- PAGE {i+1} ---\n")
            f.write(t)

print("Dumped HSK 2 raw text successfully!")
