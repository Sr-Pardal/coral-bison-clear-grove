#!/usr/bin/env python3
"""Compose Zalúria's 1200×630 share card from existing brand art."""
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path("/workspace")
CITY = ROOT / "public/images/city.jpg"
CREST = ROOT / "public/images/crest.jpg"
FONT = ROOT / ".grok/fonts/Cinzel-SemiBold.ttf"
OUT = ROOT / ".grok/og.jpg.tmp"
W, H = 1200, 630
TITANIUM = (200, 208, 216, 255)
EMERALD = (42, 157, 110, 255)
COSMOS = (7, 20, 34)


def cover_crop(im: Image.Image, w: int, h: int) -> Image.Image:
    src_w, src_h = im.size
    scale = max(w / src_w, h / src_h)
    nw, nh = round(src_w * scale), round(src_h * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = (nh - h) // 2
    return im.crop((left, top, left + w, top + h))


def radial_vignette(size: tuple[int, int], inner: float = 0.22, outer: float = 0.78) -> Image.Image:
    w, h = size
    mask = Image.new("L", (w, h), 0)
    px = mask.load()
    cx, cy = w / 2, h / 2
    max_r = (cx**2 + cy**2) ** 0.5
    for y in range(h):
        for x in range(w):
            r = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5 / max_r
            if r <= inner:
                a = 0
            elif r >= outer:
                a = 140
            else:
                t = (r - inner) / (outer - inner)
                a = int(140 * t * t)
            px[x, y] = a
    overlay = Image.new("RGB", size, COSMOS)
    overlay.putalpha(mask)
    return overlay


def circle_crest(path: Path, diameter: int) -> Image.Image:
    im = Image.open(path).convert("RGBA")
    im = im.resize((diameter, diameter), Image.Resampling.LANCZOS)
    mask = Image.new("L", (diameter, diameter), 0)
    ImageDraw.Draw(mask).ellipse((1, 1, diameter - 2, diameter - 2), fill=255)
    im.putalpha(mask)
    return im


def load_cinzel(size: int, weight: int = 650) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONT), size)
    try:
        font.set_variation_by_axes([weight])
    except Exception:
        pass
    return font


def tracked_width(text: str, font: ImageFont.FreeTypeFont, tracking: float) -> int:
    if not text:
        return 0
    total = 0
    for i, ch in enumerate(text):
        bbox = font.getbbox(ch)
        total += bbox[2] - bbox[0]
        if i < len(text) - 1:
            total += tracking
    return int(total)


def draw_tracked(base: Image.Image, text: str, y: int, font: ImageFont.FreeTypeFont, fill, tracking: float, glow=None):
    width = tracked_width(text, font, tracking)
    x = (base.width - width) / 2
    if glow:
        glow_layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
        gd = ImageDraw.Draw(glow_layer)
        gx = x
        for i, ch in enumerate(text):
            gd.text((gx, y), ch, font=font, fill=glow)
            gx += font.getbbox(ch)[2] - font.getbbox(ch)[0] + tracking
        glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(8))
        base.alpha_composite(glow_layer)
    d = ImageDraw.Draw(base)
    for i, ch in enumerate(text):
        d.text((x, y), ch, font=font, fill=fill)
        x += font.getbbox(ch)[2] - font.getbbox(ch)[0] + tracking


def main() -> None:
    city = cover_crop(Image.open(CITY).convert("RGB"), W, H)
    card = city.convert("RGBA")

    dim = Image.new("RGBA", (W, H), (7, 20, 34, 58))
    card.alpha_composite(dim)
    card.alpha_composite(radial_vignette((W, H)))

    # Center scrim behind the lockup so type stays readable.
    scrim = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    sd = ImageDraw.Draw(scrim)
    sd.ellipse((260, 70, 940, 560), fill=(7, 20, 34, 88))
    scrim = scrim.filter(ImageFilter.GaussianBlur(48))
    card.alpha_composite(scrim)

    crest = circle_crest(CREST, 168)
    # Emerald ring
    ring = Image.new("RGBA", (188, 188), (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.ellipse((0, 0, 187, 187), outline=(42, 157, 110, 230), width=3)
    rd.ellipse((5, 5, 182, 182), outline=(200, 208, 216, 70), width=1)
    card.alpha_composite(ring, ((W - 188) // 2, 86))
    card.alpha_composite(crest, ((W - 168) // 2, 96))

    title_font = load_cinzel(136, 700)
    tag_font = load_cinzel(22, 500)

    # Title sits in the vertical middle of the frame.
    draw_tracked(
        card,
        "Zalúria",
        y=292,
        font=title_font,
        fill=TITANIUM,
        tracking=8,
        glow=(42, 157, 110, 150),
    )

    tag = "FEDERAÇÃO PRAGMÁTICA"
    draw_tracked(
        card,
        tag,
        y=440,
        font=tag_font,
        fill=(42, 157, 110, 230),
        tracking=8,
    )

    # Hairline under the title, above the tagline.
    line = ImageDraw.Draw(card)
    line.line((470, 426, 730, 426), fill=(200, 208, 216, 90), width=1)

    rgb = card.convert("RGB")
    rgb.save(OUT, "JPEG", quality=88, optimize=True, subsampling=1)
    print(f"wrote {OUT} {rgb.size} {OUT.stat().st_size // 1024} KB")
    print("title_width", tracked_width("Zalúria", title_font, 6), f"/ {W}")


if __name__ == "__main__":
    main()
