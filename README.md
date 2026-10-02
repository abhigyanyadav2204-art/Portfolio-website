# Abhigyan Yadav — Portfolio

Personal portfolio for Abhigyan Yadav, final-year B.Tech Mechanical Engineering
student at NIT Manipur. Built around a brick-assembly visual system: the work
is literally shown as something built from parts.

## Stack

Vite 8 + React 19, plain JS, React Router 7. No Tailwind, no CSS-in-JS — the
styling is plain CSS with custom properties, because the brick/stud motif is
mostly pseudo-element geometry (gradients, layered `box-shadow`s, `color-mix()`)
that doesn't benefit from a utility framework.

## Scripts

```
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # eslint
```

## Where things live

```
src/
  data/
    projects.js     # the 4 case studies — the actual written content
    sidequests.js   # the 4 side-quest entries
    site.js         # identity, nav, socials, resume link — single source of truth
  components/        # Name.jsx + Name.css pairs, one concern each
  styles/
    tokens.css       # every colour/spacing/type/motion value as a CSS custom property
    reset.css        # normalisation + the global focus ring
    base.css         # element type rules + shared utilities (.container, .prose, .sr-only…)
    brick.css        # the shared brick/stud primitives used across components
    motion.css        # the scroll-reveal contract + reduced-motion kill switch
  pages/              # route-level components — render sections only, no header/footer
  hooks/              # useInView, useScrollProgress, usePrefersReducedMotion, etc.
```

Global stylesheets are imported once, from `src/main.jsx`, in cascade order.
Component stylesheets are imported from their own `.jsx` file and so always
load after the globals — component rules beat base rules without needing
`!important` or a specificity fight.

## Content model

**Case studies** (`src/data/projects.js`) are an object keyed by slug:

```js
"my-project": {
  order: 5,                 // controls homepage ordering
  status: "active",         // "active" | "shipped"
  tagline: "...",           // one-line hook, shown on the brick card
  brick: { color: "var(--brick-red)", ink: "var(--c-ink)", size: [2, 4] },
  links: [],                // [{ label, href }] — currently unused, reserved
  title, eyebrow, role, timeline, intro,
  metrics: [{ value, label }],
  sections: [{ heading, paragraphs: [...], image?, imageAlt? }],
}
```

**To add a project:** add an entry with the next `order` value and pick one of
the six `--brick-*` colours from `src/styles/tokens.css` (avoid reusing a
colour that's already assigned, and never use the yellow accent — that's
reserved for interactive elements). The homepage and `/work/:slug` route pick
it up automatically; no other file needs touching.

**Side quests** (`src/data/sidequests.js`) follow the same `brick` shape plus
`kind`, `role`, `blurb`, and an optional `image`/`imageAlt`.

## Activating the résumé

The résumé button exists everywhere (nav + contact) but renders disabled
(`aria-disabled`, with a "coming soon" label for screen readers) because
`site.resume.ready` is `false` in `src/data/site.js`. To activate it:

1. Drop the PDF at `public/abhigyan-yadav-resume.pdf` (matching
   `site.resume.href`/`filename` — change those instead if you want a
   different path).
2. Set `resume.ready` to `true` in `src/data/site.js`.

That's the entire change. A dev-only console message reminds you if the flag
is still `false`.

## Deploying

`vercel.json` rewrites every path to `index.html`, which is required for
client-side routing — without it, a hard refresh on `/work/handi-story` 404s
on any static host. Vercel serves existing static files before applying the
rewrite, so this doesn't interfere with asset loading.

One known limitation: the rewrite makes genuinely-missing URLs return
HTTP 200 with the app's own 404 UI rendered client-side, rather than a real
404 status. Fixing that needs server rendering or prerendering, which this
site doesn't do.

## Design notes

- **Palette:** near-black field, one yellow accent reserved for anything
  interactive, six secondary "brick" colours for project/side-quest cards.
- **Motion:** every scroll-reveal animation goes through the `<Reveal>`
  component and the `[data-reveal]` CSS contract in `motion.css`. A real
  `prefers-reduced-motion` path collapses all of it to an instant, static
  state — verified both via the React hook and independently via CSS, so
  reduced motion holds even if JS state lags.
- **Fonts:** Archivo / Archivo Black / IBM Plex Mono, self-hosted, each
  shipped as separate `latin` and `latin-ext` subset files. This matters:
  the case-study prose uses the ₹ sign, which only exists in `latin-ext` —
  a single "latin" subset would silently drop it mid-word.
