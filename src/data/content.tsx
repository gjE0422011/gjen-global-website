import { Brain, Cpu, Code2, BarChart3, Database, Workflow } from "lucide-react";
export const services = [
  { id: "ai", icon: Brain, title: "Artificial Intelligence Consultancy", problem: "Organizations are unsure where AI fits and whether it is worth the investment.", approach: "We assess feasibility against your data, workflows and goals, then recommend a realistic adoption path.", items: ["AI strategy and adoption consultancy", "AI feasibility assessments", "AI application development", "Generative AI solutions", "Intelligent automation", "AI integration into business workflows"], deliverables: ["Feasibility report", "Solution roadmap", "Working prototype"] },
  { id: "ml", icon: Cpu, title: "Machine Learning Solutions", problem: "Teams hold data but lack models that turn it into predictions and decisions.", approach: "We frame the problem, build and evaluate models, and prepare them for deployment.", items: ["Predictive modelling", "Classification and regression", "Model development and evaluation", "Computer vision", "Natural Language Processing", "Model optimization and deployment"], deliverables: ["Trained models", "Evaluation report", "Deployment guide"] },
  { id: "software", icon: Code2, title: "Software Engineering", problem: "Off-the-shelf tools often do not fit how an organization actually works.", approach: "We specify requirements, build in iterations and test before hand-over.", items: ["Custom software development", "Web application development", "Backend engineering", "API development and integration", "Enterprise software solutions", "Software testing and maintenance"], deliverables: ["Requirements specification", "Tested application", "Technical documentation"] },
  { id: "data", icon: BarChart3, title: "Data Science and Data Analytics", problem: "Decisions rely on instinct because data is scattered, unclean or unexplored.", approach: "We prepare and validate data, analyse it, and report findings in plain language.", items: ["Data collection and preprocessing", "Data cleaning and validation", "Exploratory data analysis", "Statistical analysis", "Predictive analytics", "Data visualization and reporting"], deliverables: ["Clean datasets", "Analysis report", "Visual dashboards"] },
  { id: "mining", icon: Database, title: "Data Mining and Business Intelligence", problem: "Useful patterns stay hidden in large volumes of operational data.", approach: "We extract, process and analyse data to surface trends that support decisions.", items: ["Pattern identification", "Data extraction and processing", "Trend analysis", "Business intelligence dashboards", "Decision-support systems", "Analytical reporting"], deliverables: ["BI dashboards", "Trend analysis", "Analytical reports"] },
  { id: "dt", icon: Workflow, title: "Digital Transformation and Automation", problem: "Manual, disconnected processes slow work down and add errors.", approach: "We map current workflows, then modernize and automate the steps that benefit most.", items: ["Business workflow assessment", "Process automation", "Intelligent document processing", "AI-enabled business applications", "Enterprise system integration", "Technology modernization"], deliverables: ["Workflow assessment", "Automation application", "Integration documentation"] },
];
export const solutions = [
  { title: "Intelligent Document Processing", problem: "Organizations process large volumes of documents manually.", solution: "AI-assisted extraction, classification, summarization and document workflows.", deliverables: ["Document processing application", "Data extraction pipeline", "Validation mechanism", "Summary report"] },
  { title: "Predictive Analytics", problem: "Businesses have historical data but struggle to identify future trends.", solution: "Machine learning models and predictive analytics.", deliverables: ["Data analysis", "Predictive models", "Performance evaluation", "Visualization dashboard"] },
  { title: "Business Process Automation", problem: "Repetitive operational activities consume time and resources.", solution: "Workflow automation and AI-assisted processes.", deliverables: ["Workflow assessment", "Automation application", "System integration", "Implementation documentation"] },
  { title: "Computer Vision", problem: "Organizations need to interpret and analyse visual data.", solution: "Computer vision and image-processing applications.", deliverables: ["Image classification", "Object detection", "Visual inspection prototypes", "Model performance reports"] },
  { title: "Custom AI and Software Applications", problem: "Organizations require technology applications tailored to their workflows.", solution: "Custom AI-enabled software development.", deliverables: ["Requirements specification", "Software prototype", "Tested application", "Technical documentation"] },
];
export const industries = [
  { name: "Information Technology and Software", challenges: "Legacy systems, release quality, scaling support.", apps: "Code and test automation, AI features in products, analytics.", services: "Software Engineering, AI Consultancy" },
  { name: "Healthcare and Medical Technology", challenges: "Heavy documentation, fragmented records, image review.", apps: "Document summarization, medical image analysis prototypes, data analytics.", services: "Machine Learning, Data Science" },
  { name: "Financial Services", challenges: "Manual document checks, risk review, reporting effort.", apps: "Document extraction, anomaly detection, predictive models.", services: "Document Processing, Predictive Analytics" },
  { name: "Manufacturing and Industrial Operations", challenges: "Inspection effort, downtime, process variation.", apps: "Visual inspection, predictive maintenance, process analytics.", services: "Computer Vision, Machine Learning" },
  { name: "Retail and E-commerce", challenges: "Demand uncertainty, customer understanding, catalogue quality.", apps: "Demand forecasting, recommendation, review analysis.", services: "Predictive Analytics, NLP" },
  { name: "Education and Research", challenges: "Large literature volumes, administrative workload, data handling.", apps: "Research data pipelines, content summarization, learning analytics.", services: "Data Science, Generative AI" },
  { name: "Logistics and Supply Chain", challenges: "Route and stock planning, paperwork, visibility.", apps: "Forecasting, document processing, tracking dashboards.", services: "Business Intelligence, Automation" },
  { name: "Professional and Business Services", challenges: "Repetitive reporting, knowledge retrieval, workflow handoffs.", apps: "Workflow automation, internal knowledge assistants, reporting.", services: "Digital Transformation, AI Consultancy" },
];
export const steps = [
  ["Discover", "Understand the client's problem and objectives."],
  ["Analyse", "Study requirements, workflows, available data and technical feasibility."],
  ["Strategize", "Recommend suitable technology and prepare a solution roadmap."],
  ["Develop", "Engage suitable technical professionals and build the proposed solution."],
  ["Validate", "Test software functionality, data quality, model performance and requirements."],
  ["Deliver", "Provide the agreed solution, technical documentation and summary reports."],
  ["Support", "Offer ongoing maintenance, monitoring and improvements where contracted."],
];
export const quality = ["Data verification", "Software testing", "Model evaluation", "Performance monitoring", "Documentation", "Client acceptance criteria"];
export const roles = ["AI/ML Engineer", "Software Engineer", "Data Analyst", "Data Scientist", "AI Research Associate", "Technical Consultant", "Business Development Executive"];
export type Job = { title: string; active: boolean; description: string; skills: string[]; qualifications: string; experience: string; type: string; location: string; pay: string; deadline?: string; applyUrl?: string };
// Only roles with active: true are shown as open positions. Empty until you post a real role.
export const jobs: Job[] = [];
export const SUMMARY = "GJen Global is a Chennai-based consultancy offering AI, machine learning, software engineering and data analytics services.";
export const faqs = [
  { q: "What does an AI feasibility assessment include?", a: "We review your problem, the data you hold, the technical options and the risks. You receive a short report that says whether AI is a good fit, which approach we suggest, and what a realistic first step would be." },
  { q: "How long does a machine learning project take?", a: "It depends on data quality and scope. A small proof of concept can take a few weeks, while larger builds take months. We give a timeline only after we have assessed your data and requirements." },
  { q: "Do you work with clients outside India?", a: "Yes. We are based in Chennai and are building relationships in India, the UAE, the wider Middle East, the UK and Europe. Most project work, such as workshops and delivery, can be done remotely." },
  { q: "What does an engagement cost?", a: "We do not publish fixed prices because every project differs. After an initial conversation and assessment, we send a written proposal covering scope, deliverables, timeline and fees for your approval." },
  { q: "Is GJen Global an established company?", a: "No. GJen Global is an emerging venture. We say so openly, we do not claim past clients or certifications, and we describe our solutions as capabilities and illustrative use cases." },
];
