"""Generate simple flat app icons for the PWA (no external assets needed)."""
from PIL import Image, ImageDraw, ImageFont
import os

BG = (15, 23, 42)       # matches --bg
ACCENT = (56, 189, 248)  # matches --accent
ACCENT_DARK = (2, 38, 58)

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "icons")
os.makedirs(OUT_DIR, exist_ok=True)

def make_icon(size):
    img = Image.new("RGB", (size, size), BG)
    draw = ImageDraw.Draw(img)

    # Rounded-square accent badge in the center
    margin = int(size * 0.14)
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=int(size * 0.18),
        fill=ACCENT,
    )

    # Letter "A" in the badge
    try:
        font = ImageFont.truetype("arialbd.ttf", int(size * 0.42))
    except Exception:
        font = ImageFont.load_default()

    text = "A"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        (size / 2 - tw / 2 - bbox[0], size / 2 - th / 2 - bbox[1]),
        text,
        font=font,
        fill=ACCENT_DARK,
    )

    # Small road stripe under the letter
    stripe_y = int(size * 0.70)
    stripe_w = int(size * 0.30)
    stripe_h = max(int(size * 0.035), 2)
    draw.rounded_rectangle(
        [size / 2 - stripe_w / 2, stripe_y, size / 2 + stripe_w / 2, stripe_y + stripe_h],
        radius=stripe_h // 2,
        fill=ACCENT_DARK,
    )

    return img

for size in [180, 192, 512]:
    icon = make_icon(size)
    path = os.path.join(OUT_DIR, f"icon-{size}.png")
    icon.save(path)
    print(f"Wrote {path}")
