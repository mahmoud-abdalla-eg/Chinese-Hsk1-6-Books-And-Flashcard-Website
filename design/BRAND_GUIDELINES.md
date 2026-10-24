# Mandarin Flow HSK — Brand Identity & Guidelines

Welcome to the brand identity guide for **Mandarin Flow HSK** (汉语学习平台).  
This document defines all design standards, color specifications, typography stacks, logo variations, vector assets, and Adobe Illustrator compatibility rules.

---

## 1. Brand Mark Anatomy & Symbolism

The Mandarin Flow HSK mark fuses authentic Chinese heritage with modern digital product aesthetics:

```
┌───────────────────────────────────────────────┐
│  (·) Imperial Gold Spark (#facc15 at 78%, 22%)│
│      Symbolizes fluency, spark of learning    │
│                                               │
│       ┌──────────────────────────────┐        │
│       │ Delicate Coral Inner Stroke  │        │
│       │ (#fee2e2 at 50% opacity)     │        │
│       │                              │        │
│       │            汉                │        │
│       │   (Chinese Hanzi: Hàn)       │        │
│       │   PingFang SC / YaHei Black  │        │
│       │   Dominant white glyph       │        │
│       │                              │        │
│       └──────────────────────────────┘        │
│                                               │
│  Imperial Scarlet Squircle (22% radius)       │
│  Gradient: #ef4444 -> #dc2626 -> #991b1b      │
└───────────────────────────────────────────────┘
```

1. **The Squircle Base (22% Radius)**: Smooth, iOS/macOS-inspired superellipse rounded tile providing immediate app-like familiarity.
2. **Imperial Scarlet Gradient (45° angle)**:
   - `#ef4444` (Vibrant Scarlet highlight)
   - `#dc2626` (Core Vermilion Seal Red)
   - `#991b1b` (Deep Imperial Lacquer shadow)
3. **Upper Gloss Sheen**: A soft 35% to 0% white linear fade curving across the top third, providing glassmorphic depth.
4. **Inner Coral Frame**: A subtle 2.5% inset border (`#fee2e2` at 50% alpha) referencing ancient Chinese carved jade/seal borders (印章).
5. **The Hero Glyph — `汉` (Hàn)**:
   - Centered with optical balance.
   - Scale: ~58% of total height.
   - Signifies 汉语 (Chinese Language) and HSK (Hànyǔ Shuǐpíng Kǎoshì).
6. **The Gold Flow Spark**:
   - Position: Top-right `(x: 78%, y: 22%)`.
   - Palette: Imperial Gold (`#facc15`) with semi-transparent white rim (`#ffffff`).
   - Represents the "Flow" in Mandarin Flow — effortless progression and learning mastery.

---

## 2. Color Palette & Specifications

### Primary Brand Palette (Imperial Scarlet)

| Name | Hex | RGB | HSL | CMYK (Print) | Pantone Match (Approx) | Tailwind |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Scarlet Light** | `#ef4444` | `239, 68, 68` | `0°, 84%, 60%` | `0, 85, 71, 0` | PMS 1795 C | `red-500` |
| **Vermilion Brand (Core)** | `#dc2626` | `220, 38, 38` | `0°, 72%, 51%` | `0, 95, 90, 0` | PMS 485 C | `red-600` |
| **Imperial Deep Red** | `#991b1b` | `153, 27, 27` | `0°, 70%, 35%` | `15, 100, 90, 40` | PMS 187 C | `red-800` |

### Accent Palette

| Name | Hex | RGB | HSL | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Gold Flow Spark** | `#facc15` | `250, 204, 21` | `48°, 96%, 53%` | Primary accent, achievement indicators, spark dot |
| **Gold Light** | `#fef08a` | `254, 240, 138` | `53°, 98%, 77%` | Spark glow, celebration badges |
| **Coral Frame** | `#fee2e2` | `254, 226, 226` | `0°, 93%, 94%` | Inner seal border (50% opacity) |

### Platform Secondary Palette (Heritage Teal)

| Name | Hex | Usage |
| :--- | :--- | :--- |
| **Platform Teal** | `#0f766e` | Navigation pills, grammar highlights, active tab states |
| **Teal Light** | `#14b8a6` | Interactive hover states, secondary badges |

---

## 3. Typography System

### Latin / English (Wordmark & UI)
- **Primary Typeface**: `Inter`, `-apple-system`, `BlinkMacSystemFont`, `"Segoe UI"`, `Roboto`, `sans-serif`
- **Brand Title**: 900 Black weight, `-0.03em` tracking
- **Tagline**: 700 Bold weight, `+0.22em` uppercase tracking

### Chinese / Hanzi (Glyphs & Chinese UI)
- **Primary Chinese Typeface**:
  - macOS/iOS: `PingFang SC` (苹方)
  - Windows: `Microsoft YaHei` (微软雅黑)
  - Android/Linux: `Noto Sans SC` / `Source Han Sans CN` (思源黑体)
- **Logo Glyph**: 900 Black weight, centered, optical baseline alignment.

---

## 4. Logo Assets in `design/`

All production vectors are saved in this directory:

```
design/
├── BRAND_GUIDELINES.md          <-- This complete brand manual
├── brand-tokens.json            <-- Machine-readable design tokens
│
├── logo/                        <-- Production Vector Logos (AI / SVG)
│   ├── mandarin-flow-mark.svg                   (Square 512x512 Master Mark)
│   ├── mandarin-flow-logo-horizontal.svg        (Horizontal lockup with wordmark)
│   ├── mandarin-flow-logo-stacked.svg           (Vertical / stacked lockup)
│   ├── mandarin-flow-mark-monochrome-black.svg  (1-color black for print)
│   └── mandarin-flow-mark-monochrome-white.svg  (1-color white for dark overlays)
│
├── concepts/                    <-- Archive of all 5 explored concepts
│   ├── concept-1a-imperial-scarlet.svg          (Selected Hero)
│   ├── concept-1b-crimson-ruby.svg
│   ├── concept-1c-deep-carmine.svg
│   ├── concept-2-jade-book.svg
│   ├── concept-3-cinnabar-seal.svg
│   └── concept-teal-original.svg
│
└── favicon/                     <-- Production favicon & touch icons
    ├── icon.svg                                 (Modern SVG favicon)
    ├── favicon.ico                              (16, 32, 48px multi-resolution)
    └── apple-icon.png                           (180x180 Apple touch icon)
```

---

## 5. Adobe Illustrator (.ai) Compatibility Guide

The SVGs in `design/logo/` are authored specifically for full compatibility with **Adobe Illustrator CC 2020+**:

1. **Opening in Adobe Illustrator**:
   - Launch Adobe Illustrator.
   - Choose `File` → `Open...` and select any file from `design/logo/*.svg`.
   - Illustrator opens the file directly as an editable artboard preserving:
     - Exact vector coordinates and rounded rectangle properties (`rx`, `ry`).
     - Pure linear gradient ramps with exact stop percentages and hex values.
     - Named layers (`Layer_Background`, `Layer_Glyph`, `Layer_Flow_Spark`).
2. **Converting Text to Outlines in Illustrator**:
   - Select all (`Ctrl + A` or `Cmd + A`).
   - Press `Ctrl + Shift + O` (`Cmd + Shift + O`) or choose `Type` → `Create Outlines`.
   - This permanently converts the Chinese character `汉` into editable bezier anchor points, allowing you to export `.ai`, `.eps`, or PDF for any commercial print vendor without font dependency.
3. **Saving as Native .ai**:
   - Choose `File` → `Save As...` → Format: `Adobe Illustrator (*.AI)`.
   - Color Mode: Choose `RGB` for screen / digital applications, or `CMYK` using the values in Section 2 for offset printing.

---

## 6. Clear Space & Minimum Sizes

- **Clear Space**: Maintain a minimum exclusion zone of `0.5X` around the mark, where `X` is the width of the mark. No typography, buttons, or competing graphics should invade this zone.
- **Minimum Digital Sizes**:
  - Favicon: `16×16 px`
  - Header Navigation Icon: `32×32 px`
  - Mobile App Icon / Shortcut: `48×48 px`
- **Minimum Print Size**:
  - Full Logo: `25 mm` wide
  - Mark Alone: `8 mm` wide

---

*Mandarin Flow HSK Design System — 2026. All assets vector-scalable.*
