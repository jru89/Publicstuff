"""Download official Belgian traffic sign icons referenced in signs-data.json
into assets/signs/<category>/<code>.png. These are small, standardized
government-mandated sign pictograms (not creative/literary content)."""
import json
import os
import time
import urllib.request

BASE_URL = "https://www.gratisrijbewijsonline.be/"
HERE = os.path.dirname(__file__)
DATA_PATH = os.path.join(HERE, "signs-data.json")
OUT_DIR = os.path.join(HERE, "..", "assets", "signs")

with open(DATA_PATH, encoding="utf-8") as f:
    data = json.load(f)

req_headers = {"User-Agent": "Mozilla/5.0"}

total = 0
failed = []
for category, items in data.items():
    cat_dir = os.path.join(OUT_DIR, category)
    os.makedirs(cat_dir, exist_ok=True)
    for item in items:
        url = BASE_URL + item["src"]
        ext = os.path.splitext(item["src"])[1] or ".png"
        dest = os.path.join(cat_dir, item["code"] + ext)
        if os.path.exists(dest):
            continue
        try:
            req = urllib.request.Request(url, headers=req_headers)
            with urllib.request.urlopen(req, timeout=15) as resp, open(dest, "wb") as out:
                out.write(resp.read())
            total += 1
            time.sleep(0.05)
        except Exception as e:
            failed.append((item["code"], url, str(e)))

print(f"Downloaded {total} new images.")
if failed:
    print(f"Failed: {len(failed)}")
    for code, url, err in failed:
        print(f"  {code}: {url} -> {err}")
