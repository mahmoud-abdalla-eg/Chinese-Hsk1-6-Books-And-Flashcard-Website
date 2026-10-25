import pypdf
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

def inspect_pdf(pdf_path, name):
    print(f"=== Inspecting {name}: {pdf_path} ===")
    if not os.path.exists(pdf_path):
        print(f"File not found: {pdf_path}")
        return
    reader = pypdf.PdfReader(pdf_path)
    print(f"Total pages: {len(reader.pages)}")
    
    for i in range(min(15, len(reader.pages))):
        text = reader.pages[i].extract_text()
        if text and any(k in text for k in ["目录", "Contents", "Lesson", "Unit", "第", "课"]):
            print(f"--- Page {i+1} ---")
            for line in text.splitlines()[:35]:
                if line.strip():
                    print("  ", line.strip())

inspect_pdf("hsk 1/New Books And resources/hsk-course-1.pdf", "HSK 1 New Book")
inspect_pdf("hsk 2/New Books And resources/hsk-course-2.pdf", "HSK 2 New Book")
