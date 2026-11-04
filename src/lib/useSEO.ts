import { useEffect } from "react";
import { SITE_URL } from "./env";
import { seo } from "../data/seo";
function meta(attr: "name" | "property", key: string, val: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute("content", val);
}
export function useSEO(path: string) {
  useEffect(() => {
    const d = seo[path] ?? seo["/404"];
    document.title = d.title;
    meta("name", "description", d.description);
    meta("property", "og:title", d.title);
    meta("property", "og:description", d.description);
    meta("name", "twitter:title", d.title);
    meta("name", "twitter:description", d.description);
    const l = document.head.querySelector('link[rel="canonical"]');
    if (path === "/404") { l?.remove(); return; }
    meta("property", "og:url", SITE_URL + path);
    const c = l || document.head.appendChild(Object.assign(document.createElement("link"), { rel: "canonical" }));
    c.setAttribute("href", SITE_URL + path);
  }, [path]);
}
