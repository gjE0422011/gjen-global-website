import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
const given = (process.env.VITE_SITE_URL || process.env.URL || "").replace(/\/$/, "");
if (!given) console.warn("WARNING: set VITE_SITE_URL, otherwise canonical and sitemap URLs use a placeholder domain.");
const site = given || "https://www.your-domain.com";
const { render, llmsTxt } = await import(pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href);
const tpl = fs.readFileSync("dist/index.html", "utf8");
const routes = ["/", "/about", "/services", "/solutions", "/industries", "/approach", "/careers", "/contact", "/privacy", "/terms"];
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
const page = (r) => { const o = render(r, site); return tpl.replace(/<title>.*?<\/title>/, `<title>${esc(o.title)}</title>`).replace("<!--head-->", o.head).replace('<div id="root"></div>', `<div id="root">${o.html}</div>`); };
for (const r of routes) { const f = r === "/" ? "dist/index.html" : `dist${r}/index.html`; fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, page(r)); }
fs.writeFileSync("dist/404.html", page("/404"));
const day = new Date().toISOString().slice(0, 10);
const map = { "/": 1.0, "/services": 0.9, "/about": 0.8, "/solutions": 0.8, "/industries": 0.7, "/approach": 0.7, "/careers": 0.6, "/contact": 0.8 };
fs.writeFileSync("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.entries(map).map(([p, w]) => `<url><loc>${site}${p}</loc><lastmod>${day}</lastmod><priority>${w}</priority></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync("dist/robots.txt", `User-agent: *\nAllow: /\n\n${["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"].map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n")}\nSitemap: ${site}/sitemap.xml\n`);
fs.writeFileSync("dist/llms.txt", llmsTxt(site));
console.log("Prerendered", routes.length, "routes + 404 for", site);
