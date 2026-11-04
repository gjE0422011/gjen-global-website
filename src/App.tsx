import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer, BackToTop } from "./components/ui";
import { Home, About, Services, Solutions, Industries, Approach, Careers, Contact, Privacy, Terms, NotFound } from "./pages";

export default function App() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (<>
    <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
    <Navbar />
    <main id="main"><motion.div key={pathname} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}><Routes>
      <Route path="/" element={<Home />} /><Route path="/about" element={<About />} /><Route path="/services" element={<Services />} />
      <Route path="/solutions" element={<Solutions />} /><Route path="/industries" element={<Industries />} /><Route path="/approach" element={<Approach />} />
      <Route path="/careers" element={<Careers />} /><Route path="/contact" element={<Contact />} /><Route path="/privacy" element={<Privacy />} /><Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes></motion.div></main>
    <Footer /><BackToTop />
  </>);
}
