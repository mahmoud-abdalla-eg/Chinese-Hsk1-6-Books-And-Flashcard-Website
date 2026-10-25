import pypdf
import os
from PIL import Image

reader = pypdf.PdfReader("hsk 1/New Books And resources/hsk-course-1.pdf")
os.makedirs("hsk 1/extracted_pages", exist_ok=True)

# Extract pages 10 to 18 (Table of Contents / Lesson 1) as images
for p in range(10, 18):
    page = reader.pages[p]
    for count, image_file_object in enumerate(page.images):
        out_path = f"hsk 1/extracted_pages/page_{p+1}_{count}.png"
        with open(out_path, "wb") as fp:
            fp.write(image_file_object.data)
        print(f"Saved {out_path} ({image_file_object.name})")
