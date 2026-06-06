# LIKENESS — The Game (promo site)

A premium 3D-scroll-animated landing page for **LIKENESS: THE GAME**, built with the
Apple-product-page "sticky canvas + frame sequence" technique. The "3D" is a
pre-rendered image sequence scrubbed by scroll position — no WebGL.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — section reveals
- **Lenis** — physics-based smooth scroll
- **Geist** font, **Phosphor** icons

## Run it

```bash
cd likeness-site
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## How the scroll engine works

`Hero.tsx` and `CinematicReveal.tsx` each:

1. Preload a frame sequence (loading bar shows progress).
2. Pin a `100vh` canvas inside a tall (`400vh`) section.
3. On scroll: `progress = -rect.top / scrollable`, `frame = floor(progress * COUNT)`,
   drawn cover-fit and DPR-aware, throttled with `requestAnimationFrame` + a ticking ref.
4. Fade text / toggle "beat" cards at scroll thresholds.

All tunables live in `src/lib/frames.ts` (frame counts, paths, beat-card copy).

## Swap in your own footage (the important part)

The current frames are **placeholder footage** sliced from the skill-pack demo clips.
To use real LIKENESS character renders:

1. Make a ~7s clip (Blender turntable / AI video like Runway/Kling) at 1920×1080.
2. Slice it to JPGs:
   ```bash
   ffmpeg -i your_clip.mp4 -vf scale=1920:1080 -q:v 4 public/frames/frame_%04d.jpg
   ```
   (use `public/frames2/` for the cinematic-reveal section)
3. Update `count` in `src/lib/frames.ts` to the number of frames produced.

## Deploy

Push to GitHub and import into [Vercel](https://vercel.com/new) — zero config.

## Customize

- **Copy / lore:** headlines in the section files, beat quotes in `src/lib/frames.ts`.
- **Theme:** colors and accents in `src/app/globals.css` (`--accent` cyan, `--accent-amber`).
- **Sections:** composed in `src/app/page.tsx`.
