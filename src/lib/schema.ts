import { services, faqs, jobs } from "../data/content";
import { seo } from "../data/seo";
import { EMAIL, LINKEDIN } from "./env";

const EMP: Record<string, string> = { "full-time": "FULL_TIME", "part-time": "PART_TIME", contract: "CONTRACTOR", internship: "INTERN", temporary: "TEMPORARY" };
const NAME = "GJen Global Consulting & Technologies";
export function schemasFor(path: string, site: string): object[] {
  const org: Record<string, unknown> = {
    "@context": "https://schema.org", "@type": ["Organization", "ProfessionalService"], "@id": `${site}/#organization`,
    name: NAME, alternateName: "GJen Global", url: `${site}/`, logo: `${site}/logo.svg`, image: `${site}/og-image.png`,
    description: seo["/"].description, slogan: "Intelligence. Innovation. Impact.",
    ChiefTechnologyOfficer : { "@type": "Person", name: "Gracia Jeniefer", jobTitle: "Chief Technology Officer" },
    address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
    areaServed: ["India", "United Arab Emirates", "Middle East", "United Kingdom", "Europe"],
    knowsAbout: ["Artificial intelligence", "Machine learning", "Software engineering", "Data science", "Data analytics", "Business intelligence", "Process automation"],
  };
  if (EMAIL) org.email = EMAIL;
  if (LINKEDIN) org.sameAs = [LINKEDIN];
  const out: object[] = [org];
  const ctx = "https://schema.org";
  if (path === "/") out.push({ "@context": ctx, "@type": "WebSite", name: "GJen Global", url: `${site}/`, publisher: { "@id": `${site}/#organization` } });
  if (path === "/about") out.push({ "@context": ctx, "@type": "Person", "@id": `${site}/#Chief Technology Officer`, name: "Gracia Jeniefer", jobTitle: "Chief Technology Officer", worksFor: { "@id": `${site}/#organization` } });
  if (path === "/services") services.forEach((s) => out.push({ "@context": ctx, "@type": "Service", name: s.title, serviceType: s.title, description: `${s.problem} ${s.approach}`, provider: { "@id": `${site}/#organization` }, areaServed: ["India", "United Arab Emirates", "United Kingdom", "Europe"] }));
  if (path === "/" || path === "/services") out.push({ "@context": ctx, "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) });
  if (path === "/careers") jobs.filter((j) => j.active).forEach((j) => out.push({ "@context": ctx, "@type": "JobPosting", title: j.title, description: j.description, datePosted: j.datePosted, ...(j.deadline && /^\d{4}-\d{2}-\d{2}/.test(j.deadline) ? { validThrough: j.deadline } : {}), ...(EMP[j.type.toLowerCase()] ? { employmentType: EMP[j.type.toLowerCase()] } : {}), skills: j.skills.join(", "), educationRequirements: j.qualifications, hiringOrganization: { "@type": "Organization", name: NAME, sameAs: `${site}/` }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: j.location, addressCountry: "IN" } } }));
  if (path !== "/" && path !== "/404") out.push({ "@context": ctx, "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${site}/` }, { "@type": "ListItem", position: 2, name: seo[path].crumb, item: `${site}${path}` }] });
  return out;
}
export function llmsTxt(site: string) {
  return `# ${NAME}\n\n> GJen Global is an emerging, Chennai-based consultancy for AI, machine learning, software engineering and data analytics. It is an early-stage venture and does not claim existing clients or certifications.\n\n## Services\n${services.map((s) => `- [${s.title}](${site}/services): ${s.problem}`).join("\n")}\n\n## Key pages\n${["/about", "/services", "/solutions", "/industries", "/approach", "/careers", "/contact"].map((p) => `- [${seo[p].crumb}](${site}${p}): ${seo[p].description}`).join("\n")}\n\n## Facts\n- Location: Chennai, Tamil Nadu, India\n- Founder and CTO: Gracia Jeniefer\n- Target markets: India, UAE, Middle East, UK, Europe\n`;
}
