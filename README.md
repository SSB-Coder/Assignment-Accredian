# Accredian Enterprise — Next.js Clone

A partial clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with
**Next.js 14 (App Router)**, **Tailwind CSS**, and a **Next.js API route** for lead capture.

---

## 🔗 Links

| | |
|---|---|
| **Live Demo** | `https://your-project.vercel.app` _(replace after deploy)_ |
| **GitHub Repo** | `https://github.com/your-username/accredian-enterprise` |

---

## 📁 Project Structure

```
accredian-enterprise/
│
├── app/
│   ├── layout.js              ← Root layout + SEO metadata
│   ├── page.js                ← Main page — assembles all sections
│   ├── globals.css            ← Tailwind base + Inter Google Font
│   └── api/
│       └── leads/
│           └── route.js       ← POST /api/leads — lead capture API
│
├── components/
│   ├── Navbar.jsx             ← Sticky navbar with mobile hamburger menu
│   ├── Hero.jsx               ← Full-width hero with gradient background
│   ├── Stats.jsx              ← 4-stat banner (blue band)
│   ├── Features.jsx           ← 6 feature cards (Why Accredian section)
│   ├── Programs.jsx           ← Filter tabs + 6 program cards
│   ├── Partners.jsx           ← University partner grid
│   ├── Testimonials.jsx       ← 4 star-rated testimonial cards
│   ├── LeadForm.jsx           ← Lead capture form → POST /api/leads
│   └── Footer.jsx             ← Full footer with nav links + socials
│
├── data/
│   └── mock.js                ← All content data (stats, programs, testimonials…)
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### 1. Clone the repo
```bash
git clone https://github.com/your-username/accredian-enterprise.git
cd accredian-enterprise
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

### 5. Deploy to Vercel
```bash
npx vercel --prod
```
Or connect the GitHub repo directly in the [Vercel dashboard](https://vercel.com/new).

---

## 🧱 Approach Taken

### Architecture
- **Next.js 14 App Router** — all pages live in `app/`, API endpoints in `app/api/`
- **"use client" only where needed** — `Navbar`, `Programs`, and `LeadForm` are client components (they use state/events); all other components are server components
- **Data separation** — all mock content lives in `data/mock.js` so components are purely presentational and easy to swap with real API data

### Styling
- **Tailwind CSS** with a custom `brand` color palette defined in `tailwind.config.js`
- Mobile-first responsive design using `sm:` and `lg:` breakpoint prefixes throughout
- Hover animations and transitions on all interactive elements for a polished feel

### API
- `POST /api/leads` — validates required fields (name, email, company), stores the lead in memory, returns a confirmation
- `GET /api/leads` — returns all stored leads (demo use only — add auth in production)
- In production, replace the in-memory array with MongoDB Atlas, PlanetScale, or Supabase

### Sections Built
| Section | Description |
|---|---|
| Navbar | Sticky, transparent→shadow on scroll, mobile hamburger |
| Hero | Dark gradient, headline, sub-headline, dual CTA, mini stat strip |
| Stats | Blue band with 4 key metrics |
| Features | 6 cards explaining the platform's core value props |
| Programs | Filterable grid of 6 program cards with category tabs |
| Partners | 8 university partner cards with institution type badges |
| Testimonials | 4 star-rated quotes from L&D leaders + trust strip CTA |
| Lead Form | Full form with validation → `/api/leads` + success state |
| Footer | 4-column link grid + contact info + social icons |

---

## 🤖 AI Usage

**Claude (Anthropic)** was used throughout this project:

| Area | AI Help | Manual Improvement |
|---|---|---|
| Component scaffold | Generated initial JSX structure for each section | Rewrote styles for brand consistency and accessibility |
| Tailwind classes | Suggested utility class combinations | Tuned spacing, hover states, and dark background gradients manually |
| API route | Generated boilerplate POST/GET handler | Added UUID generation, proper error codes, in-memory store logic |
| Mock data | Generated realistic dummy content | Adjusted content to match actual Accredian Enterprise messaging |
| Form validation | Suggested email regex and required-field logic | Added spinner state, error display component, success state UI |

All code was reviewed, modified, and improved by hand before final submission.

---

## ⭐ Improvements with More Time

1. **Real database** — swap in-memory store with MongoDB Atlas or Supabase for persistent lead storage
2. **Framer Motion** — add scroll-triggered fade-up animations on each section for a premium feel
3. **Real images** — replace text-avatar placeholders with actual institutional logos via an image CDN
4. **CMS integration** — connect Sanity or Contentful so program/partner content can be updated without code changes
5. **Authentication for /api/leads** — protect the GET endpoint with an API key or admin session
6. **Email notification** — trigger a welcome email to the lead via SendGrid/Resend on form submission
7. **Unit + E2E tests** — add Jest + Testing Library for components, Playwright for form submission flow
8. **SEO improvements** — add JSON-LD structured data, sitemap.xml, and per-page Open Graph images
9. **Analytics** — integrate Vercel Analytics or Posthog for conversion tracking on the lead form
