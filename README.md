# Vijay Saharan — Portfolio

Fast, animated portfolio built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Framer Motion**. Optimized for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "init portfolio"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repo, and deploy. No env vars needed.

## Structure

- `app/` — App Router pages, layout, global styles
- `components/` — Hero, About, Experience, Projects, Skills, Contact, Navbar, FadeIn
- `tailwind.config.ts` — design tokens (colors, fonts, animations)

## Customize

- **Copy/content** lives directly in each `components/*.tsx` file.
- **Accent color** is `#7c5cff` in [tailwind.config.ts](tailwind.config.ts).
- **Fonts** (Inter + Space Grotesk) are loaded via `next/font` in [app/layout.tsx](app/layout.tsx).

## Performance notes

- All sections are server components except where motion needs `"use client"` (Hero, Navbar, FadeIn, Projects).
- Self-hosted Google Fonts via `next/font` (no external request, automatic subsetting).
- No images — purely CSS/SVG visuals so first paint is near-instant.
- `compress: true` and `poweredByHeader: false` set in `next.config.mjs`.
