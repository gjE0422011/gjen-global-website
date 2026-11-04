import { seo } from "../data/seo";
import { schemasFor } from "./schema";
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
export function headFor(path: string, site: string) {
  const d = seo[path] ?? seo["/404"];
  const url = site + path, img = `${site}/og-image.png`;
  const t = [`<meta name="description" content="${esc(d.description)}">`];
  if (path !== "/404") t.push(`<link rel="canonical" href="${url}">`, `<meta property="og:url" content="${url}">`);
  if (path === "/404") t.push(`<meta name="robots" content="noindex">`);
  t.push(`<meta property="og:type" content="website">`, `<meta property="og:site_name" content="GJen Global">`, `<meta property="og:title" content="${esc(d.title)}">`, `<meta property="og:description" content="${esc(d.description)}">`, `<meta property="og:image" content="${img}">`, `<meta property="og:image:width" content="1200">`, `<meta property="og:image:height" content="630">`, `<meta name="twitter:card" content="summary_large_image">`, `<meta name="twitter:title" content="${esc(d.title)}">`, `<meta name="twitter:description" content="${esc(d.description)}">`, `<meta name="twitter:image" content="${img}">`);
  schemasFor(path, site).forEach((s) => t.push(`<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`));
  return t.join("\n");
}
