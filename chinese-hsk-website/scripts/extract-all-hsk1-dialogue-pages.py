import pypdf
import os

reader = pypdf.PdfReader("hsk 1/New Books And resources/hsk-course-1.pdf")
os.makedirs("hsk 1/extracted_pages/lesson_pages", exist_ok=True)

# Lesson start pages in PDF (index = book_page + 15):
# Lesson 1: book p1 (PDF index 15) -> 16
# Lesson 2: book p5 (PDF index 19) -> 20
# Lesson 3: book p10 (PDF index 24) -> 25
# Lesson 4: book p18 (PDF index 32) -> 33
# Lesson 5: book p27 (PDF index 41) -> 42
# Lesson 6: book p35 (PDF index 49) -> 50
# Lesson 7: book p45 (PDF index 59) -> 60
# Lesson 8: book p54 (PDF index 68) -> 69
# Lesson 9: book p61 (PDF index 75) -> 76
# Lesson 10: book p70 (PDF index 84) -> 85
# Lesson 11: book p78 (PDF index 92) -> 93
# Lesson 12: book p86 (PDF index 100) -> 101
# Lesson 13: book p95 (PDF index 109) -> 110
# Lesson 14: book p103 (PDF index 117) -> 118
# Lesson 15: book p112 (PDF index 126) -> 127

lesson_starts = [
    (1, 15), (2, 19), (3, 24), (4, 32), (5, 41),
    (6, 49), (7, 59), (8, 68), (9, 75), (10, 84),
    (11, 92), (12, 100), (13, 109), (14, 117), (15, 126)
]

for lesson_num, start_idx in lesson_starts:
    # Save 3 pages per lesson (start_idx, start_idx+1, start_idx+2)
    for offset in range(3):
        p_idx = start_idx + offset
        if p_idx < len(reader.pages):
            page = reader.pages[p_idx]
            if page.images:
                img = page.images[0]
                out_name = f"hsk 1/extracted_pages/lesson_pages/L{lesson_num:02d}_p{offset+1}.png"
                with open(out_name, "wb") as f:
                    f.write(img.data)
                print(f"Extracted Lesson {lesson_num} page {offset+1} -> {out_name}")

print("Done extracting lesson dialogue pages!")
