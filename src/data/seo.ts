export type SeoEntry = { title: string; description: string; crumb: string };
export const seo: Record<string, SeoEntry> = {
  "/": { crumb: "Home", title: "AI Consulting Company in Chennai | GJen Global", description: "GJen Global is a Chennai-based consultancy for AI, machine learning, software engineering and data analytics, serving clients in India, the UAE, the UK and Europe." },
  "/about": { crumb: "About", title: "About GJen Global | AI & Data Consultancy, Chennai", description: "Meet GJen Global, an emerging AI and technology consultancy in Chennai. Read our vision, mission, founding philosophy, and the vision and message behind the company.." },
  "/services": { crumb: "Services", title: "AI, ML & Software Engineering Services in Chennai | GJen Global", description: "AI consultancy, machine learning, software engineering, data science, business intelligence and automation services from GJen Global in Chennai." },
  "/solutions": { crumb: "Solutions", title: "AI & Software Solutions for Business Problems | GJen Global", description: "Illustrative AI and software solutions: document processing, predictive analytics, process automation, computer vision and custom applications." },
  "/industries": { crumb: "Industries", title: "Industries We Serve: AI & Technology Applications | GJen Global", description: "Target industries and potential AI applications for GJen Global, including healthcare, finance, manufacturing, retail, logistics and education." },
  "/approach": { crumb: "Our Approach", title: "Our Consulting Approach, Discover to Support | GJen Global", description: "How GJen Global moves from a business challenge to a delivered solution in seven stages, with quality assurance built in." },
  "/careers": { crumb: "Careers", title: "Careers in AI & Data Science, Chennai | GJen Global", description: "Join the GJen Global talent community for future roles in AI, machine learning, software engineering and data science." },
  "/contact": { crumb: "Contact", title: "Contact GJen Global | AI Consulting in Chennai", description: "Discuss an AI, software or data project, a partnership or a career with GJen Global in Chennai, Tamil Nadu, India." },
  "/privacy": { crumb: "Privacy Policy", title: "Privacy Policy | GJen Global", description: "How GJen Global collects, uses and protects the details you share through its enquiry and talent community forms." },
  "/terms": { crumb: "Terms", title: "Terms and Conditions | GJen Global", description: "Terms for using the GJen Global website and for how proposals and illustrative use cases should be read." },
  "/404": { crumb: "Not found", title: "Page not found | GJen Global", description: "This page does not exist." },
};
