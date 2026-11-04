import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { headFor } from "./lib/seoHead";
import { seo } from "./data/seo";
export { llmsTxt } from "./lib/schema";
export function render(url: string, site: string) {
  const html = renderToString(<MemoryRouter initialEntries={[url]}><App /></MemoryRouter>);
  return { html, head: headFor(url, site), title: (seo[url] ?? seo["/404"]).title };
}
