# Assets & Interaction Inventory

## Assets
| Asset | Source | Notes |
|---|---|---|
| `public/favicon.svg` | Existing Vite asset | Used as favicon |
| Google Fonts: Plus Jakarta Sans | fonts.googleapis.com | Display/sans fallback for original custom face |
| Google Fonts: JetBrains Mono | fonts.googleapis.com | Mono/meta text |
| No reference images | Observed | Reference site had no content images in audited DOM; design is typographic |

## Interactions
| Feature | Implementation |
|---|---|
| Sticky/fixed nav | `.site-header` fixed; pill nav |
| Mobile hamburger | `#nav-toggle` toggles `.nav.is-open` |
| Smooth anchor scroll | JS scroll with header offset; respects reduced motion |
| Active nav on scroll | `IntersectionObserver` on sections |
| Command palette | `Ctrl/Cmd+K`, search/filter, arrow keys, Enter, Esc |
| Project detail modal | `data-open-project` opens modal with focus management/Esc/overlay close |
| Copy email | Clipboard API with fallback; used in contact/footer/cmd |
| Back to top | appears after scroll, smooth scroll to top |
| Anonymous message | form validation, char count, localStorage feed simulation |
| Reveal animation | IntersectionObserver adds `.is-visible`; disabled for reduced motion |
| Three.js hero visual | lazy-loaded module, resize observer, pointer parallax, visibility pause, fallback, reduced-motion static render |

## External Links Preserved
- GitHub: https://github.com/ranggamaulana111111-bit
- LinkedIn: https://www.linkedin.com/in/rangga-maulana-ramadhan-wiharto-022077337/
- WhatsApp: https://wa.me/6285774138047
- Email: ranggamaulana111111@gmail.com
- Spotify: https://open.spotify.com/playlist/1dd0RgxyoiRiFLptOChO6e?si=02ad28709f664a86
- CV/Workspace/Stack/Catatan/Project detail: linked to original domain where static equivalent not built