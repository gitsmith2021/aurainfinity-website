# Aura Infinity — Website

> Building Intelligent Software Platforms.

The official public website for **Aura Infinity**. A single, premium landing
page presenting the company vision, the Aura product ecosystem, our guiding
philosophy, mission, technology and current status.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` configuration)
- **Framer Motion** — subtle, intentional motion
- **Lucide Icons**

Dark mode only. Fully responsive. SEO optimised.

## Design constitution

Before changing the UI, read **[`docs/DESIGN.md`](docs/DESIGN.md)** — the single
source of truth for the visual identity, color tokens, typography, spacing,
motion and copywriting rules. Every page and component must follow it. The
design tokens it defines live in [`app/globals.css`](app/globals.css) under
`@theme`; never hardcode colors or off-scale values in a component.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the development server      |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Lint the project                  |

## Project structure

```
app/
  layout.tsx        Root layout, fonts, global metadata
  page.tsx          Landing page composition + JSON-LD
  globals.css       Tailwind v4 theme + base styles
  robots.ts         Generates /robots.txt
  sitemap.ts        Generates /sitemap.xml
  manifest.ts       Web app manifest
  icon.svg          Favicon
components/          Reusable, single-purpose UI sections
lib/
  site.ts           Brand + site configuration
  data.ts           Products, principles, milestones, technologies
public/             Static assets
```

## SEO

- Open Graph + Twitter card metadata
- `Organization` JSON-LD structured data
- Generated `robots.txt` and `sitemap.xml`
- Canonical URL configured via `lib/site.ts`

> Update `siteConfig.url` and `siteConfig.email` in [`lib/site.ts`](lib/site.ts)
> to match the production domain before launch.

## Deployment

Optimised for [Vercel](https://vercel.com). Import the repository and deploy —
no environment variables are required.

---

© 2026 Aura Infinity.
