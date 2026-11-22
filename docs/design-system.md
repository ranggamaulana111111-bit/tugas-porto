# Design System (Extracted)

## Colors
| Token | Value | Use |
|---|---|---|
| `--bg` | `#FDFBF7` | Page background |
| `--bg-warm` | `#F6F0E8` | Warm surfaces/tags/footer tint |
| `--bg-card` | `#FFFFFF` | Cards, nav, pills |
| `--text` | `#1A1A1A` | Primary text/headings |
| `--text-muted` | `#4A4642` | Body copy |
| `--text-soft` | `#5E5A56` | Secondary/meta |
| `--text-faint` | `#6B6560` | Subtle labels |
| `--accent` | `#B55220` | Primary CTA/accent |
| `--accent-deep` | `#8E3E1A` | Accent text/hover |
| `--accent-soft` | `#FDF0E8` | Accent tint |
| `--border` | `#E2D9CF` | Borders/dividers |
| `--border-soft` | `#EBE4DB` | Subtle dividers |
| `--green` | `#1D7A5A` | Live/active status |

## Typography
- **Display/Sans**: Plus Jakarta Sans (reconstruction fallback for original custom `sans/display`); weights 400/500/600/700.
- **Mono**: JetBrains Mono 400/500 for eyebrow/meta/tags/commands.
- **H1**: ~52px/0.95, 700, -0.025em.
- **H2**: ~36px/1.1, 700, -0.025em.
- **H3/project name**: ~24–30px, 700.
- **Body**: 15–16px, 1.625–1.75, muted color.
- **Eyebrow**: 12px mono, uppercase, 0.05em tracking, soft color.

## Layout & Spacing
- Container: 768px content width; hero uses 1120px wide grid.
- Section padding: 80px vertical (64px mobile).
- Nav: fixed top, 24px inset, pill radius 9999px, border + soft shadow.
- Card/pill radius: 16px cards, 9999px pills/buttons/tags.
- Borders: 1px `--border`; section separators use top borders on list items.

## Components
- **Primary button**: accent bg, white text, pill, subtle shadow.
- **Secondary button**: white bg, border, dark text.
- **Tag**: warm bg, border, pill, 12px.
- **Status dot**: 6px circle, green for Produksi, muted for Dibangun.
- **Timeline**: left rule + small dot + year/title/text.
- **Command palette**: centered overlay, search input, keyboard nav.
- **Modal**: centered panel, backdrop blur, project detail.