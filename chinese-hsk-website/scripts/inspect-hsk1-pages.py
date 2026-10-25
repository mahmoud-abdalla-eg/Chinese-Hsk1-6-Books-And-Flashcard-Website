import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader("hsk 1/New Books And resources/hsk-course-1.pdf")
print("Total pages:", len(reader.pages))

for i in range(15):
    text = reader.pages[i].extract_text()
    print(f"Page {i+1}: length={len(text) if text else 0}")
    if text and len(text.strip()) > 0:
        lines = [l.strip() for l in text.splitlines() if l.strip()]
        print("  First 5 lines:", lines[:5])
