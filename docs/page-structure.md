# Page Structure

## HTML Outline
- `header.site-header > nav.nav`
  - `.brand`
  - `#nav-toggle` (mobile)
  - `.nav-menu > ul#nav-links + .nav-actions(cmd, hubungi)`
- `main`
  - `section#home.hero` — hero grid: copy + Three.js canvas visual
  - `section#now` — currently list
  - `section#about` — narrative paragraphs
  - `section#projects` — project cards rendered from JS data
  - `section#experience` — timeline
  - `section#education` — education list
  - `section#skills` — tech category grid
  - `section#learning` — learning domain cards
  - `section#outside` — personal editorial note
  - `section#journal` — note previews
  - `section#workspace` — workspace CTA
  - `section#messages` — anonymous message form + local feed
  - `section#contact` — contact pills + location
- `footer.site-footer` — brand/tagline/CTAs + links + copyright
- `#project-modal` — project detail dialog
- `#cmd-overlay` — command palette dialog
- `#back-top` — back to top button

## JS Modules
- `src/data/portfolio.js` — centralized content/data
- `src/js/render.js` — section rendering
- `src/js/navigation.js` — mobile nav, smooth scroll, active section observer
- `src/js/interactions.js` — reveal, modal, command palette, copy email, back-to-top, message form/localStorage
- `src/js/three-scene.js` — hero Three.js scene (lazy loaded)
- `src/js/utils.js` — helpers

## CSS Modules
- `variables.css` — tokens
- `layout.css` — base/reset/layout/nav/buttons
- `components*.css` — section/component styles
- `responsive.css` — breakpoints + reduced motion
- `main.css` — imports
