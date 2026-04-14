# Mecha Chaotic Site

Next.js recreation of [mechachaotic.com](https://www.mechachaotic.com) — deployable on Vercel.

## Tech Stack
- **Next.js 14** (App Router, TypeScript strict)
- **Tailwind CSS** (dark theme with orange/red accents)
- **Framer Motion** (horizontal scroll, crossfade slider, fade-ins)
- No jQuery — pure React

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npx vercel
```

Or connect this repo to Vercel for automatic deployments.

## Structure

```
src/
  app/
    layout.tsx      — Root layout, fonts, meta tags
    page.tsx        — Home page composing all sections
    globals.css     — Tailwind + custom animations
  components/
    Navbar.tsx      — Sticky nav with mobile hamburger
    Hero.tsx        — Full-width hero with marketplace buttons
    About.tsx       — "Collaborate with Chaos" section
    BedlamSlider.tsx — Auto-playing crossfade PFP slider
    SymbolsOfPower.tsx — Horizontal scroll cards (400vh sticky)
    Team.tsx        — Team member cards
    FAQ.tsx         — Accordion FAQ
    Banner.tsx      — 1500x500 banner image
    Footer.tsx      — Early access + legal links
public/images/      — All downloaded assets
```
