import pypdf
import sys

sys.stdout.reconfigure(encoding='utf-8')

reader = pypdf.PdfReader("hsk 2/New Books And resources/hsk-course-2.pdf")
print("Total pages:", len(reader.pages))

# Lesson 1 starts around page 16-25
for page_num in range(15, 25):
    t = reader.pages[page_num].extract_text()
    if t and ("课文" in t or "Lesson 1" in t or "烤鸭" in t or "请我们" in t):
        print(f"=== Page {page_num + 1} ===")
        print(t)
