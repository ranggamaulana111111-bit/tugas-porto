# Website Analysis — ranggamrw.my.id

## Source
- URL: https://ranggamrw.my.id
- Audited: 2026-11-22 via Playwright (snapshot/eval/screenshot) + web fetch
- Title: `Rangga Maulana Ramadhan Wiharto`

## Structure (single-page, anchor-based)
1. **Header/Nav** — fixed, pill-shaped, max-width ~896px. Brand `rangga.mrw`, links: Beranda, Tentang, Project, Perjalanan, Stack, Workspace, Pesan, Kontak, command button `⌘K`, CTA `Hubungi`.
2. **Hero (#home)** — kicker `SERANG, BANTEN · RANGGA.MRW`, H1 name split into two lines, role/location desc, “Project yang sedang saya bangun...”, CTAs (Lihat Project, Lihat CV), listening card (Mix Harian / Spotify).
3. **Currently (#now)** — 5 numbered items (Kuliah, Bangun, Jelajah, Dengar, Hidup).
4. **About (#about)** — 3 narrative paragraphs.
5. **Projects (#projects)** — 4 project cards: ALKONEK, Prodesa, AlkonekPlus, RabegLab. Each has category/year/status, role, description, tech tags, actions.
6. **Experience (#experience)** — vertical timeline 2021–2026.
7. **Education (#education)** — UNPAM and SMKN 4 Pandeglang.
8. **Skills (#skills)** — 6 categories (Bahasa, Framework, Basis Data, Infrastruktur, Jaringan, Alat).
9. **Learning (#learning)** — 4 domain cards.
10. **Outside (#outside)** — editorial personal note (Sep 2026).
11. **Journal (#journal)** — 3 note previews linking to /catatan/*.
12. **Workspace (#workspace)** — short section linking to /workspace.
13. **Messages (#messages)** — anonymous message UI.
14. **Contact (#contact)** — email/GitHub/LinkedIn/WhatsApp pills, location.
15. **Footer** — brand, tagline, CTA links, social/email, copyright.

## Observed Behavior
- Fixed nav with blur/shadowed white pill; active nav item accent-colored.
- Smooth anchor navigation; sections have generous vertical padding (~80px desktop).
- Command palette trigger (`⌘K`) in nav.
- Project cards show status dot (green for Produksi, muted for Dibangun).
- Footer has warm translucent background.
- No heavy imagery; typography and spacing carry the design.
- Responsive layout collapses nav/content at smaller widths (verified via viewport screenshots).

## Technical Notes
- Original site appears Next.js-built (footer text “Dibuat dengan Next.js & Clay” on reference).
- Fonts observed: `sans`/`display` custom OTF face + JetBrains Mono (Google/next font). Exact custom font file not publicly extractable from static assets; reconstruction uses Plus Jakarta Sans as close geometric sans + JetBrains Mono.
- Color tokens extracted from computed styles (see design-system.md).
