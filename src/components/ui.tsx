import { useEffect, useState, ReactNode } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowUp, ArrowRight } from "lucide-react";
import { EMAIL, LINKEDIN } from "../lib/env";

export const links = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Solutions", "/solutions"], ["Industries", "/industries"], ["Approach", "/approach"], ["Careers", "/careers"], ["Contact", "/contact"]] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return <img src={light ? "/logo-light.svg" : "/logo.svg"} alt="GJen Global" className="h-9 w-auto" width={220} height={40} />;
}
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5 }}>{children}</motion.div>;
}
export function Section({ children, dark = false, tint = false, id }: { children: ReactNode; dark?: boolean; tint?: boolean; id?: string }) {
  return <section id={id} className={`py-20 ${dark ? "bg-midnight text-white" : tint ? "bg-mist" : ""}`}><div className="mx-auto max-w-6xl px-5">{children}</div></section>;
}
export function Heading({ title, sub, dark = false }: { title: string; sub?: string; dark?: boolean }) {
  return <div className="mb-10 max-w-2xl"><h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>{sub && <p className={`mt-3 ${dark ? "text-silver" : "text-charcoal/70"}`}>{sub}</p>}</div>;
}
export function CTA({ to, children, ghost = false }: { to: string; children: ReactNode; ghost?: boolean }) {
  return <Link to={to} className={`btn ${ghost ? "btn-ghost" : "btn-primary"}`}>{children}<ArrowRight size={16} aria-hidden /></Link>;
}
export function CTASection({ title = "Have a Business Challenge? Let's Discuss." }: { title?: string }) {
  return <Section dark><div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><h2 className="max-w-xl text-3xl font-bold">{title}</h2><CTA to="/contact">Discuss a Project</CTA></div></Section>;
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  useEffect(() => { setOpen(false); }, [loc.pathname]);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-midnight/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" aria-label="GJen Global home"><Logo light /></Link>
        <ul className="hidden items-center gap-6 text-sm text-silver xl:flex">
          {links.slice(1, 7).map(([n, p]) => <li key={p}><NavLink to={p} className={({ isActive }) => `hover:text-white ${isActive ? "text-white" : ""}`}>{n}</NavLink></li>)}
        </ul>
        <div className="hidden xl:block"><CTA to="/contact">Discuss a Project</CTA></div>
        <button className="text-white xl:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <ul className="border-t border-white/10 bg-midnight px-5 pb-5 text-silver xl:hidden">{links.map(([n, p]) => <li key={p}><NavLink to={p} className="block py-3 hover:text-white">{n}</NavLink></li>)}</ul>}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="bg-midnight text-silver">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-2"><Logo light /><p className="mt-4 max-w-sm text-sm">GJen Global Consulting &amp; Technologies is an emerging technology consultancy in Chennai, India. Intelligence. Innovation. Impact.</p></div>
        <div><h3 className="mb-3 text-sm font-semibold text-white">Company</h3><ul className="space-y-2 text-sm">{links.slice(1).map(([n, p]) => <li key={p}><Link to={p} className="hover:text-white">{n}</Link></li>)}</ul></div>
        <div><h3 className="mb-3 text-sm font-semibold text-white">Contact</h3><ul className="space-y-2 text-sm"><li>Chennai, Tamil Nadu, India</li>{EMAIL && <li><a className="hover:text-white" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>}{LINKEDIN && <li><a className="hover:text-white" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>}<li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li><li><Link to="/terms" className="hover:text-white">Terms and Conditions</Link></li></ul></div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} GJen Global Consulting &amp; Technologies. All rights reserved.</p>
    </footer>
  );
}
export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f); }, []);
  if (!show) return null;
  return <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-5 right-5 z-40 rounded-full bg-royal p-3 text-white shadow-lg hover:bg-electric"><ArrowUp size={18} /></button>;
}
