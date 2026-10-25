import pypdf
import os

reader = pypdf.PdfReader("hsk 1/New Books And resources/hsk-course-1.pdf")
os.makedirs("hsk 1/extracted_pages/units1_5", exist_ok=True)

# Page 15 is around Lesson 1, let's extract pages 14 to 35
for p in range(14, 36):
    page = reader.pages[p]
    for count, image_file_object in enumerate(page.images):
        out_path = f"hsk 1/extracted_pages/units1_5/p{p+1}.png"
        with open(out_path, "wb") as fp:
            fp.write(image_file_object.data)
        print(f"Saved {out_path}")
