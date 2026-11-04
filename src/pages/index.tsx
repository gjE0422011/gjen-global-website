import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, ExternalLink, UserRound } from "lucide-react";
import { useSEO } from "../lib/useSEO";
import { ZOHO_URL, ZOHO_EMBED, ZOHO_FORM_URL, EMAIL, LINKEDIN } from "../lib/env";
import { SUMMARY, faqs, services, solutions, industries, steps, quality, roles, jobs } from "../data/content";
import { Section, Heading, Reveal, CTA, CTASection } from "../components/ui";
import { NetlifyForm } from "../components/Forms";

function HeroArt() {
  const n = [[60, 80], [180, 40], [300, 110], [150, 190], [270, 240], [70, 270], [350, 30]];
  return (
    <svg viewBox="0 0 400 320" className="w-full max-w-md" role="img" aria-label="Abstract network of connected systems">
      <defs><radialGradient id="rg"><stop offset="0" stopColor="#5D8CFF" stopOpacity=".5" /><stop offset="1" stopColor="#5D8CFF" stopOpacity="0" /></radialGradient></defs>
      <circle cx="200" cy="160" r="150" fill="url(#rg)" />
      {n.map((a, i) => n.slice(i + 1).map((b, j) => (i + j) % 2 === 0 && <line key={`${i}-${j}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#5D8CFF" strokeOpacity=".35" />))}
      {n.map((a, i) => <circle key={i} cx={a[0]} cy={a[1]} r={i % 3 === 0 ? 9 : 5} fill={i % 2 ? "#315EF7" : "#5D8CFF"} />)}
    </svg>
  );
}

function Faq() {
  return <Section tint><Heading title="Frequently asked questions" /><dl className="grid gap-6 md:grid-cols-2">{faqs.map((f) => <div key={f.q}><dt className="font-bold">{f.q}</dt><dd className="mt-1 text-charcoal/70">{f.a}</dd></div>)}</dl></Section>;
}

export function Home() {
  useSEO("/");
  return <>
    <section className="bg-midnight text-white"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-24 md:grid-cols-2">
      <div>
        <p className="mb-4 text-sm text-electric">Intelligence. Innovation. Impact.</p>
        <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Transforming Business Challenges into Intelligent Solutions.</h1>
        <p className="mt-5 max-w-lg text-silver">GJen Global Consulting &amp; Technologies helps organizations explore, develop and implement practical technology solutions through Artificial Intelligence, Machine Learning, Software Engineering and Data Intelligence.</p>
        <div className="mt-8 flex flex-wrap gap-3"><CTA to="/contact">Discuss a Project</CTA><CTA to="/services" ghost>Explore Our Services</CTA></div>
      </div>
      <div className="flex justify-center"><HeroArt /></div>
    </div></section>
    <Section><Heading title="About GJen Global" sub={SUMMARY + " We are an emerging venture focused on helping organizations understand, adopt and implement intelligent technologies, and we are open about it."} /><CTA to="/about" ghost>Read our story</CTA></Section>
    <Section tint><Heading title="Our core expertise" /><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{services.map((s) => <div key={s.id} className="flex items-center gap-3 rounded-md bg-white p-4"><s.icon className="text-royal" size={20} aria-hidden />{s.title}</div>)}</div></Section>
    <Section><Heading title="Services" sub="Six areas, each scoped to your situation after an initial assessment." /><div className="grid gap-5 md:grid-cols-3">{services.map((s) => <Reveal key={s.id}><div className="h-full rounded-lg border border-silver/40 p-6"><s.icon className="text-royal" aria-hidden /><h3 className="mt-3 font-bold">{s.title}</h3><p className="mt-2 text-sm text-charcoal/70">{s.problem}</p></div></Reveal>)}</div><div className="mt-8"><CTA to="/services">All services</CTA></div></Section>
    <Section tint><Heading title="Business challenges we address" /><ul className="grid gap-3 md:grid-cols-2">{solutions.map((s) => <li key={s.title} className="rounded-md bg-white p-4"><b>{s.title}.</b> <span className="text-charcoal/70">{s.problem}</span></li>)}</ul></Section>
    <Section><Heading title="Industries we serve" sub="Target industries where we see potential applications." /><div className="flex flex-wrap gap-2">{industries.map((i) => <Link key={i.name} to="/industries" className="rounded-full border border-silver/50 px-4 py-2 text-sm hover:border-electric">{i.name}</Link>)}</div></Section>
    <Section dark><Heading dark title="Our consulting methodology" sub="Seven stages from first conversation to ongoing support." /><ol className="grid gap-4 md:grid-cols-4">{steps.map(([t], i) => <li key={t} className="rounded-md bg-charcoal p-4"><span className="text-electric">{i + 1}</span> {t}</li>)}</ol></Section>
    <Section><Heading title="Why work with us?" /><div className="grid gap-5 md:grid-cols-2">{[["Problem first", "We start with the business problem, then choose the technology."], ["Honest scoping", "No outcome is promised before a client-specific assessment."], ["Qualified delivery", "We engage suitably skilled professionals for each solution."], ["Verified results", "Data, software and models are tested against agreed criteria."]].map(([t, d]) => <div key={t}><h3 className="font-bold">{t}</h3><p className="text-charcoal/70">{d}</p></div>)}</div></Section>
    <Section tint><Heading title="Technology insights" sub="Short notes on how we think about applied technology." /><div className="grid gap-5 md:grid-cols-3">{[["Start with feasibility", "Many AI ideas fail on data readiness, not on algorithms. Check the data first."], ["Automation needs a map", "Understand a workflow end to end before automating any step of it."], ["Evaluate honestly", "A model is only useful if it is tested on data it has never seen."]].map(([t, d]) => <article key={t} className="rounded-md bg-white p-6"><h3 className="font-bold">{t}</h3><p className="mt-2 text-sm text-charcoal/70">{d}</p></article>)}</div></Section>
    <Faq />
    <CTASection />
  </>;
}

export function About() {
  useSEO("/about");
  return <>
    <Section dark><h1 className="text-4xl font-extrabold">About GJen Global</h1><p className="mt-5 max-w-2xl text-silver">GJen Global Consulting &amp; Technologies is an emerging technology consultancy and solutions venture focused on helping organizations understand, adopt and implement intelligent technologies. Our approach combines analytical thinking, technical expertise and business understanding to address real-world challenges through AI, software engineering and data-driven solutions.</p></Section>
    <Section><div className="grid gap-10 md:grid-cols-2"><div><h2 className="text-2xl font-bold">Our vision</h2><p className="mt-3 text-charcoal/70">To develop into a trusted international technology consultancy delivering intelligent, scalable and practical solutions to organizations across industries.</p></div><div><h2 className="text-2xl font-bold">Our mission</h2><p className="mt-3 text-charcoal/70">To empower organizations through innovative technologies, qualified professionals and measurable technology-driven outcomes.</p></div></div></Section>
    <Section tint><Heading title="Every successful solution begins with understanding the right problem." sub="Our founding philosophy" /><ul className="grid gap-3 md:grid-cols-2">{["An idea must become an executable plan.", "A real business problem must be identified.", "The correct technology must be selected.", "Qualified and knowledgeable professionals must execute the solution.", "Results must be tested and verified.", "Deliverables must provide meaningful business value."].map((t) => <li key={t} className="flex gap-2 rounded-md bg-white p-4"><Check className="shrink-0 text-royal" size={18} aria-hidden />{t}</li>)}</ul></Section>
    <Section><div className="grid gap-10 md:grid-cols-3"><div className="flex aspect-square items-center justify-center rounded-lg bg-mist text-silver" role="img" aria-label="Founder photo placeholder"><UserRound size={72} /></div>
      <div className="space-y-4 md:col-span-2"><h2 className="text-2xl font-bold">Vision and Message</h2>
        <p>GJen Global was envisioned by Gracia Jeniefer with the belief that technology should address meaningful challenges and create measurable value.</p>
        <p>The team's professional background in Computer Science, Artificial Intelligence, Machine Learning, Data Analytics and Software Engineering has shaped GJen Global's focus on intelligent technology applications.</p>
        <p>With the advice and encouragement of mentors, including professional technocrats and experienced engineering minds, the vision evolved beyond simply developing a technology business into establishing a consultancy focused on identifying real industrial requirements, engaging qualified professionals and delivering practical solutions.</p>
        <p>GJen Global's journey begins with a commitment to continuous learning, technical excellence, collaboration and responsible innovation.</p>
        <p className="font-semibold">Gracia Jeniefer<br /><span className="font-normal text-charcoal/70">Founder &amp; Chief Technology Officer (CTO)</span></p></div></div></Section>
    <CTASection title="Let's talk about your project." />
  </>;
}

export function Services() {
  useSEO("/services");
  return <>
    <Section dark><h1 className="text-4xl font-extrabold">AI, Machine Learning and Software Engineering Services</h1><p className="mt-4 max-w-2xl text-silver">{SUMMARY} Outcomes depend on your data and context, so we scope every engagement after a client-specific assessment.</p></Section>
    {services.map((s, i) => <Section key={s.id} tint={i % 2 === 1} id={s.id}><div className="grid gap-8 md:grid-cols-3">
      <div><s.icon className="text-royal" size={32} aria-hidden /><h2 className="mt-3 text-2xl font-bold">{s.title}</h2></div>
      <div className="space-y-3 text-sm"><p><b>Problem:</b> {s.problem}</p><p><b>Approach:</b> {s.approach}</p><p><b>Possible deliverables:</b> {s.deliverables.join(", ")}.</p><Link to="/contact" className="btn btn-primary">Discuss this service</Link></div>
      <ul className="space-y-2 text-sm">{s.items.map((t) => <li key={t} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-royal" aria-hidden />{t}</li>)}</ul></div></Section>)}
    <Faq />
  </>;
}

export function Solutions() {
  useSEO("/solutions");
  return <>
    <Section dark><h1 className="text-4xl font-extrabold">AI and Software Solutions for Real Business Problems</h1><p className="mt-4 max-w-2xl text-silver">{SUMMARY} The following are solution capabilities and illustrative use cases. They are not completed customer projects.</p></Section>
    <Section><div className="grid gap-6">{solutions.map((s) => <Reveal key={s.title}><article className="grid gap-4 rounded-lg border border-silver/40 p-6 md:grid-cols-3"><h2 className="text-xl font-bold">{s.title}</h2><div className="space-y-2 text-sm"><p><b>Problem:</b> {s.problem}</p><p><b>Potential solution:</b> {s.solution}</p></div><div><p className="mb-1 text-sm font-semibold">Possible deliverables</p><ul className="list-disc pl-5 text-sm">{s.deliverables.map((d) => <li key={d}>{d}</li>)}</ul></div></article></Reveal>)}</div></Section>
    <CTASection />
  </>;
}

export function Industries() {
  useSEO("/industries");
  return <>
    <Section dark><h1 className="text-4xl font-extrabold">Industries We Serve with AI and Technology Solutions</h1><p className="mt-4 max-w-2xl text-silver">{SUMMARY} These are target industries and potential applications.</p></Section>
    <Section><div className="grid gap-5 md:grid-cols-2">{industries.map((i) => <article key={i.name} className="rounded-lg border border-silver/40 p-6"><h2 className="text-lg font-bold">{i.name}</h2><dl className="mt-3 space-y-2 text-sm"><div><dt className="font-semibold">Common challenges</dt><dd className="text-charcoal/70">{i.challenges}</dd></div><div><dt className="font-semibold">Potential applications</dt><dd className="text-charcoal/70">{i.apps}</dd></div><div><dt className="font-semibold">Relevant services</dt><dd className="text-charcoal/70">{i.services}</dd></div></dl></article>)}</div></Section>
    <CTASection />
  </>;
}

export function Approach() {
  useSEO("/approach");
  return <>
    <Section dark><h1 className="text-4xl font-extrabold">From Business Challenges to Intelligent Solutions.</h1></Section>
    <Section><ol className="relative space-y-8 border-l-2 border-royal/30 pl-8">{steps.map(([t, d], i) => <li key={t} className="relative"><span className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full bg-royal text-sm text-white">{i + 1}</span><h2 className="text-xl font-bold">{t}</h2><p className="text-charcoal/70">{d}</p></li>)}</ol></Section>
    <Section tint><Heading title="Quality assurance" /><ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{quality.map((q) => <li key={q} className="flex gap-2 rounded-md bg-white p-4"><Check className="text-royal" size={18} aria-hidden />{q}</li>)}</ul></Section>
    <CTASection />
  </>;
}

function ZohoFrame({ src, title, cls }: { src: string; title: string; cls: string }) {
  return <div className="overflow-x-auto rounded-md border border-silver/40"><iframe title={title} src={src} loading="lazy" className={`w-full min-w-[900px] ${cls}`} /></div>;
}

export function Careers() {
  useSEO("/careers");
  const open = jobs.filter((j) => j.active);
  const hosted = Boolean(ZOHO_URL) && ZOHO_EMBED;
  return <>
    <Section dark><h1 className="text-4xl font-extrabold">Build the Future of Intelligent Technology With Us.</h1><p className="mt-4 max-w-2xl text-silver">We are interested in connecting with talented professionals who are passionate about Artificial Intelligence, Machine Learning, Software Engineering and Data Science.</p></Section>
    <Section><div className="mb-10 flex flex-wrap items-end justify-between gap-4"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">Open positions</h2><a href="#talent" className="btn btn-ghost">Join the talent community</a></div>
      {hosted ? <>
        <p className="mb-4 text-sm text-charcoal/70">Live openings from our recruitment platform. If the list is hard to read on your device, <a className="text-royal underline" href={ZOHO_URL} target="_blank" rel="noopener noreferrer">open the full career site</a>.</p>
        <ZohoFrame src={ZOHO_URL} title="GJen Global open positions" cls="h-[800px]" />
      </> : <>
        {open.length === 0 && <p className="rounded-md bg-mist p-5">There are no open positions right now. Join the talent community below and we will contact you when a suitable role opens.</p>}
        <div className="grid gap-5">{open.map((j) => <article key={j.title} className="rounded-lg border border-silver/40 p-6"><h3 className="text-lg font-bold">{j.title}</h3><p className="mt-2 text-sm">{j.description}</p><ul className="mt-3 space-y-1 text-sm"><li><b>Skills:</b> {j.skills.join(", ")}</li><li><b>Qualifications:</b> {j.qualifications}</li><li><b>Experience:</b> {j.experience}</li><li><b>Type:</b> {j.type}</li><li><b>Location:</b> {j.location}</li><li><b>Pay:</b> {j.pay}</li>{j.deadline && <li><b>Deadline:</b> {j.deadline}</li>}</ul>{(j.applyUrl || ZOHO_URL) ? <a className="btn btn-primary mt-4" href={j.applyUrl || ZOHO_URL} target="_blank" rel="noopener noreferrer">Apply Now</a> : <Link className="btn btn-primary mt-4" to="/contact">Apply Now</Link>}</article>)}</div>
        {ZOHO_URL && <a href={ZOHO_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6">View all roles on our career site <ExternalLink size={16} /></a>}
      </>}
      <p className="mt-8 max-w-3xl text-xs text-charcoal/60">Candidate notice: by applying or sharing your profile, you consent to GJen Global storing and using your details to assess your suitability for current and future roles.{(ZOHO_URL || ZOHO_FORM_URL) ? " Applications are handled through Zoho Recruit, a third-party recruitment platform." : ""} You can ask us to access or delete your data at any time. See our <Link to="/privacy" className="underline">Privacy Policy</Link>.</p>
    </Section>
    <Section tint><Heading title="Areas we are interested in" sub="These are interest areas, not active vacancies." /><ul className="flex flex-wrap gap-2">{roles.map((r) => <li key={r} className="rounded-full bg-white px-4 py-2 text-sm">{r}</li>)}</ul></Section>
    <Section id="talent"><Heading title="Talent community" sub="Share your profile for future opportunities." />{ZOHO_FORM_URL ? <ZohoFrame src={ZOHO_FORM_URL} title="GJen Global talent community form" cls="h-[900px]" /> : <NetlifyForm formName="talent" />}</Section>
  </>;
}

export function Contact() {
  useSEO("/contact");
  return <>
    <Section dark><h1 className="text-4xl font-extrabold">Contact Us</h1><p className="mt-4 max-w-2xl text-silver">Tell us about your challenge. We will reply to discuss the next step.</p></Section>
    <Section><div className="grid gap-10 md:grid-cols-3"><div className="space-y-5 text-sm">{[["Business enquiries", "AI consultancy, software development and technology solutions."], ["Project consultation", "Discuss a business or technical challenge."], ["Partnerships", "Technology providers, consultants and implementation partners."], ["Careers", "Professionals interested in working with GJen Global."]].map(([t, d]) => <div key={t}><h2 className="font-bold">{t}</h2><p className="text-charcoal/70">{d}</p></div>)}<p>Chennai, Tamil Nadu, India</p>{EMAIL && <p><a className="text-royal" href={`mailto:${EMAIL}`}>{EMAIL}</a></p>}{LINKEDIN && <p><a className="text-royal" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>}</div>
      <div className="md:col-span-2"><NetlifyForm formName="contact" /></div></div></Section>
  </>;
}

const legal = (title: string, path: string, paras: string[]) => () => {
  useSEO(path);
  return <Section><h1 className="text-4xl font-extrabold">{title}</h1><p className="mt-3 rounded-md bg-mist p-4 text-sm">Draft text. Have it reviewed by a qualified legal professional before launch.</p><div className="mt-6 max-w-2xl space-y-4">{paras.map((p) => <p key={p}>{p}</p>)}</div></Section>;
};
export const Privacy = legal("Privacy Policy", "/privacy", ["We collect only the details you submit through our forms, such as name, email, company and message.", "We use them to respond to enquiries and, if you join the talent community, to contact you about future roles.", "Forms are processed through our hosting provider. Career applications may be handled by a third-party recruitment platform such as Zoho Recruit.", "You may ask us to access, correct or delete your data at any time using the contact details on this site."]);
export const Terms = legal("Terms and Conditions", "/terms", ["The content on this site is general information about GJen Global, an emerging consultancy, and is not a binding offer.", "Solutions and outcomes are scoped and agreed in writing after a client-specific assessment.", "Illustrative use cases describe capabilities, not completed customer projects."]);

export function NotFound() {
  useSEO("/404");
  useEffect(() => { const m = document.createElement("meta"); m.name = "robots"; m.content = "noindex"; document.head.appendChild(m); return () => { m.remove(); }; }, []);
  return <Section><h1 className="text-4xl font-extrabold">Page not found</h1><p className="mt-3 text-charcoal/70">The page you asked for does not exist.</p><div className="mt-6 flex gap-3"><CTA to="/">Go to home</CTA><CTA to="/contact" ghost>Contact us</CTA></div></Section>;
}
