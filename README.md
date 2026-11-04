# GJen Global website

React + Vite + TypeScript + Tailwind + Framer Motion. Ten routes, Netlify ready.

## Run locally
    npm install
    cp .env.example .env
    npm run dev

## Deploy on Netlify
1. Push this folder to GitHub and import it in Netlify (or run `netlify deploy --prod`).
2. Build command `npm run build`, publish directory `dist` (already in netlify.toml, with the SPA redirect).
3. Add the environment variables below in Site settings > Environment variables.
4. After the first deploy, open Forms in the Netlify dashboard. `contact` and `talent` appear automatically. Add email notifications there.

## Environment variables
| Variable | Purpose |
|---|---|
| VITE_SITE_URL | Canonical and Open Graph URL |
| VITE_ZOHO_CAREERS_URL | Zoho Recruit hosted career site URL. Insert here once you have it |
| VITE_ZOHO_EMBED | `true` embeds the Zoho site on /careers, otherwise a link button shows |
| VITE_CONTACT_EMAIL | Shown in footer and contact page if set |
| VITE_LINKEDIN_URL | Shown in footer and contact page if set |

## Jobs and Zoho Recruit
Edit `src/data/content.tsx`. `jobs` is empty. Add an object with `active: true` and an `applyUrl` (the Zoho job link) to show a role. No Zoho API credentials are used. A future job API can feed the same `Job` type.

## Before going public
- Replace `www.your-domain.com` in `public/robots.txt` and `public/sitemap.xml`.
- Set the env variables above. Add a real business email and LinkedIn page.
- Replace the founder photo placeholder in `src/pages/index.tsx` (About).
- Have a lawyer review the Privacy Policy and Terms drafts.
- Confirm budget ranges and the Netlify form notification address.
- Convert `public/og-image.svg` to a 1200x630 PNG, since some social platforms ignore SVG.

## SEO and prerendering
`npm run build` builds the app, then prerenders every route to real HTML (`dist/<route>/index.html`) with its own title, description, canonical, Open Graph tags and JSON-LD. It also writes `404.html` (served with a real 404 status), `sitemap.xml`, `robots.txt` and `llms.txt`. Page titles and descriptions live in `src/data/seo.ts`. Structured data is generated from `src/data/content.tsx` in `src/lib/schema.ts`. Set `VITE_SITE_URL` to your final domain, then redeploy.
