#!/usr/bin/env python3

from __future__ import annotations

import re
import textwrap
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
BLOG_DIR = ROOT / "src" / "content" / "blog"
OUTPUT_DIR = ROOT / "public" / "images" / "blog" / "title-cards"
WIDTH = 1200
HEIGHT = 630
FONT_BOLD = Path("/System/Library/Fonts/Supplemental/Arial Bold.ttf")

PALETTES = {
    "light": {
        "start": (248, 252, 255),
        "mid": (255, 247, 243),
        "end": (243, 252, 248),
        "text": (19, 32, 51),
        "icon_bg": (255, 255, 255),
        "icon_stroke": (71, 99, 135),
        "icon_border": (215, 226, 238),
    },
    "dark": {
        "start": (225, 233, 245),
        "mid": (237, 228, 246),
        "end": (221, 239, 241),
        "text": (17, 24, 39),
        "icon_bg": (246, 249, 253),
        "icon_stroke": (54, 76, 112),
        "icon_border": (198, 210, 226),
    },
}


def extract_title(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    match = re.search(r"^title:\s*['\"](.+?)['\"]\s*$", text, flags=re.MULTILINE)
    if not match:
        raise ValueError(f"Could not find title in {path}")
    return match.group(1)


def interpolate(a: int, b: int, t: float) -> int:
    return round(a + (b - a) * t)


def gradient(palette: dict[str, tuple[int, int, int]]) -> Image.Image:
    image = Image.new("RGB", (WIDTH, HEIGHT))
    pixels = image.load()
    for y in range(HEIGHT):
        vertical = y / (HEIGHT - 1)
        for x in range(WIDTH):
            horizontal = x / (WIDTH - 1)
            t = (horizontal * 0.72) + (vertical * 0.28)
            if t < 0.5:
                local = t / 0.5
                a = palette["start"]
                b = palette["mid"]
            else:
                local = (t - 0.5) / 0.5
                a = palette["mid"]
                b = palette["end"]
            pixels[x, y] = tuple(interpolate(a[i], b[i], local) for i in range(3))
    return image


def wrap_title(
    draw: ImageDraw.ImageDraw,
    title: str,
    font: ImageFont.FreeTypeFont,
    max_width: int,
) -> list[str]:
    words = title.split()
    lines: list[str] = []
    current: list[str] = []

    for word in words:
        candidate = " ".join([*current, word])
        bbox = draw.textbbox((0, 0), candidate, font=font)
        if bbox[2] - bbox[0] <= max_width:
            current.append(word)
        else:
            if current:
                lines.append(" ".join(current))
            current = [word]

    if current:
        lines.append(" ".join(current))

    return lines


def fit_title(
    draw: ImageDraw.ImageDraw,
    title: str,
) -> tuple[ImageFont.FreeTypeFont, list[str], int]:
    max_width = 820
    max_height = 330

    for size in range(68, 37, -2):
        font = ImageFont.truetype(str(FONT_BOLD), size=size)
        lines = wrap_title(draw, title, font, max_width)
        line_height = round(size * 1.16)
        total_height = line_height * len(lines)
        widest = max(
            (draw.textbbox((0, 0), line, font=font)[2] for line in lines),
            default=0,
        )
        if total_height <= max_height and widest <= max_width and len(lines) <= 4:
            return font, lines, line_height

    font = ImageFont.truetype(str(FONT_BOLD), size=40)
    lines = textwrap.wrap(title, width=28)
    return font, lines, 48


def draw_article_icon(
    draw: ImageDraw.ImageDraw,
    palette: dict[str, tuple[int, int, int]],
) -> None:
    x = 86
    y = 76
    size = 92
    radius = 24
    stroke = palette["icon_stroke"]

    draw.rounded_rectangle(
        (x, y, x + size, y + size),
        radius=radius,
        fill=palette["icon_bg"],
        outline=palette["icon_border"],
        width=2,
    )

    page_left = x + 30
    page_top = y + 23
    page_right = x + 62
    page_bottom = y + 69
    fold = 10

    draw.line((page_left, page_top, page_right - fold, page_top), fill=stroke, width=3)
    draw.line((page_right, page_top + fold, page_right, page_bottom), fill=stroke, width=3)
    draw.line((page_left, page_top, page_left, page_bottom), fill=stroke, width=3)
    draw.line((page_left, page_bottom, page_right, page_bottom), fill=stroke, width=3)
    draw.line((page_right - fold, page_top, page_right, page_top + fold), fill=stroke, width=3)
    draw.line((page_right - fold, page_top, page_right - fold, page_top + fold), fill=stroke, width=2)
    draw.line((page_right - fold, page_top + fold, page_right, page_top + fold), fill=stroke, width=2)

    for offset in (24, 34, 44):
        draw.line(
            (page_left + 7, page_top + offset, page_right - 7, page_top + offset),
            fill=stroke,
            width=3,
        )


def render_card(title: str, palette_name: str, output_path: Path) -> None:
    palette = PALETTES[palette_name]
    image = gradient(palette)
    draw = ImageDraw.Draw(image)
    draw_article_icon(draw, palette)
    font, lines, line_height = fit_title(draw, title)

    total_height = line_height * len(lines)
    right_margin = 88
    bottom_margin = 86
    y = HEIGHT - bottom_margin - total_height

    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        line_width = bbox[2] - bbox[0]
        x = WIDTH - right_margin - line_width
        draw.text((x, y), line, fill=palette["text"], font=font)
        y += line_height

    output_path.parent.mkdir(parents=True, exist_ok=True)
    image.save(output_path, "PNG", optimize=True)


def main() -> None:
    for path in sorted(BLOG_DIR.glob("*.mdx")):
        title = extract_title(path)
        slug = path.stem
        for palette_name in PALETTES:
            render_card(
                title,
                palette_name,
                OUTPUT_DIR / f"{slug}-{palette_name}.png",
            )


if __name__ == "__main__":
    main()
