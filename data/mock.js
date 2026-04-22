// ─── Stats ─────────────────────────────────────────────────────────────────
export const stats = [
  { value: "500+",  label: "Enterprise Clients" },
  { value: "94%",   label: "Cohort Completion Rate" },
  { value: "500+",  label: "Industry Mentors" },
  { value: "40%",   label: "Avg Team Productivity Gain" },
];

// ─── Features ──────────────────────────────────────────────────────────────
export const features = [
  {
    id: 1,
    icon: "BookOpen",
    title: "IIT & IIM Co-Designed Curriculum",
    description:
      "Programs co-designed with India's top academic institutions and global universities. Every course is rigorously structured for real-world applicability.",
  },
  {
    id: 2,
    icon: "BarChart2",
    title: "Real-Time Analytics Dashboard",
    description:
      "Monitor learner progress, engagement metrics, and ROI reporting — all in one command center. Track completion rates and skill-gain across your entire org.",
  },
  {
    id: 3,
    icon: "Users",
    title: "500+ Expert Mentors",
    description:
      "1:1 live mentorship sessions with industry practitioners across AI/ML, Data Science, Product Management, and Leadership.",
  },
  {
    id: 4,
    icon: "Award",
    title: "Cohort-Based Learning",
    description:
      "Structured cohorts foster collaboration, accountability, and peer learning — driving completion rates above 94%, far above industry average.",
  },
  {
    id: 5,
    icon: "Settings",
    title: "Fully Customizable Programs",
    description:
      "Tailor programs to your organisation's specific skill gaps, industry context, and strategic goals — from curriculum design to delivery cadence.",
  },
  {
    id: 6,
    icon: "Shield",
    title: "Verified Credentials",
    description:
      "Every program carries a credential from a top-tier institution. No fluff, no self-certification — credentials your team can proudly display.",
  },
];

// ─── Programs ──────────────────────────────────────────────────────────────
export const programs = [
  {
    id: 1,
    category: "AI & Machine Learning",
    title: "Executive Program in AI & ML",
    partner: "IIT Guwahati",
    duration: "6 Months",
    level: "Intermediate",
    badge: "Most Popular",
    topics: ["Deep Learning", "NLP", "MLOps", "AI Strategy"],
  },
  {
    id: 2,
    category: "Data Science",
    title: "Professional Certificate in Data Science",
    partner: "IIM Visakhapatnam",
    duration: "9 Months",
    level: "Beginner–Advanced",
    badge: "Best ROI",
    topics: ["Python", "Statistics", "Data Engineering", "Visualization"],
  },
  {
    id: 3,
    category: "Product Management",
    title: "Executive Program in Product Management",
    partner: "SP Jain School",
    duration: "8 Months",
    level: "Intermediate",
    badge: null,
    topics: ["Product Strategy", "Roadmapping", "OKRs", "Go-to-Market"],
  },
  {
    id: 4,
    category: "Leadership",
    title: "Senior Leadership Development Program",
    partner: "XLRI Jamshedpur",
    duration: "12 Months",
    level: "Senior",
    badge: "New",
    topics: ["Strategic Thinking", "Change Management", "Executive Presence"],
  },
  {
    id: 5,
    category: "Business Analytics",
    title: "Advanced Certificate in Business Analytics",
    partner: "IIT Delhi",
    duration: "6 Months",
    level: "Intermediate",
    badge: null,
    topics: ["SQL", "Power BI", "Forecasting", "Decision Science"],
  },
  {
    id: 6,
    category: "Cloud & DevOps",
    title: "Cloud Engineering & DevOps Program",
    partner: "Industry Partners",
    duration: "5 Months",
    level: "Beginner–Advanced",
    badge: "High Demand",
    topics: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  },
];

// ─── University Partners ────────────────────────────────────────────────────
export const partners = [
  { id: 1, name: "IIT Guwahati",       abbr: "IITG",  type: "IIT"  },
  { id: 2, name: "IIM Visakhapatnam",  abbr: "IIMV",  type: "IIM"  },
  { id: 3, name: "IIT Delhi",          abbr: "IITD",  type: "IIT"  },
  { id: 4, name: "SP Jain School",     abbr: "SPJ",   type: "B-School" },
  { id: 5, name: "XLRI Jamshedpur",    abbr: "XLRI",  type: "B-School" },
  { id: 6, name: "IIM Nagpur",         abbr: "IIMN",  type: "IIM"  },
  { id: 7, name: "IIT Roorkee",        abbr: "IITR",  type: "IIT"  },
  { id: 8, name: "Great Lakes",        abbr: "GL",    type: "B-School" },
];

// ─── Testimonials ──────────────────────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "CHRO",
    company: "Infosys BPM",
    avatar: "PS",
    quote:
      "Accredian Enterprise transformed how we think about talent development. Within 6 months, our data engineering team's velocity improved by 40%. The ROI is undeniable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Menon",
    title: "Head of L&D",
    company: "HDFC Bank",
    avatar: "RM",
    quote:
      "The combination of IIT-quality curriculum and live mentorship is unlike anything else in the market. Our engineers are now capable of leading ML projects independently.",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Desai",
    title: "VP – People & Culture",
    company: "Tata Consultancy",
    avatar: "AD",
    quote:
      "We onboarded 300 managers across three geographies simultaneously. The enterprise dashboard made tracking trivially easy. Completion rates hit 96% — unprecedented for us.",
    rating: 5,
  },
  {
    id: 4,
    name: "Vikram Singh",
    title: "CTO",
    company: "Freshworks",
    avatar: "VS",
    quote:
      "The cohort model built genuine community among our distributed teams. Post-program, we saw a measurable jump in cross-functional project ownership.",
    rating: 5,
  },
];

// ─── Navigation Links ───────────────────────────────────────────────────────
export const navLinks = [
  { label: "Why Accredian", href: "#features"     },
  { label: "Programs",      href: "#programs"     },
  { label: "Partners",      href: "#partners"     },
  { label: "Testimonials",  href: "#testimonials" },
  { label: "Contact Us",    href: "#lead-form"    },
];

// ─── Footer Links ───────────────────────────────────────────────────────────
export const footerLinks = {
  Company: [
    { label: "About Us",   href: "#" },
    { label: "Careers",    href: "#" },
    { label: "Blog",       href: "#" },
    { label: "Press",      href: "#" },
  ],
  Programs: [
    { label: "AI & ML",             href: "#programs" },
    { label: "Data Science",        href: "#programs" },
    { label: "Product Management",  href: "#programs" },
    { label: "Leadership",          href: "#programs" },
  ],
  Support: [
    { label: "Help Center",       href: "#" },
    { label: "Privacy Policy",    href: "#" },
    { label: "Terms of Service",  href: "#" },
    { label: "Cookie Policy",     href: "#" },
  ],
};
