# Elite Fire and Protection — Production Static Website

> **High-Performance Static Website with Build-Time SSG Prerendering & Local SEO for Faridabad & Delhi NCR, India.**

Designed and built for **Elite Fire and Protection**, an industrial and commercial life-safety, fire alarm, hydrant, sprinkler, fire extinguisher, and AMC maintenance service provider.

---

## 🌟 Key Highlights & Architecture

- **100% Static & Blazing Fast:** Built with React 18, TypeScript, Tailwind CSS, and Vite. Every single page is pre-rendered at build time into an autonomous `index.html` file using `react-dom/server`.
- **Zero Server Overhead:** Requires **no backend server or database** in production. Host for ₹0 on Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any shared hosting cPanel.
- **Unbeatable Technical SEO:** Googlebot, Bingbot, and WhatsApp preview bots receive 100% complete semantic HTML payloads (H1, text paragraphs, equipment tables, internal links) directly in the initial HTTP response.
- **Schema.org Structured Data (JSON-LD):** Pre-baked into every page (`LocalBusiness`, `Service`, `BreadcrumbList`, `FAQPage`).
- **High-Converting Lead Generation:**
  - Official WhatsApp click-to-chat links with prefilled service inquiries.
  - Mobile-friendly `tel:` click-to-call links.
  - Interactive Quote Form with live Zod validation, honeypot anti-spam protection, and direct WhatsApp quote dispatch.
  - Local Inquiry Log & Admin Viewer (`/admin/leads`) with one-click CSV export.

---

## 📁 Repository Structure

```
d:\Elite/
├── client/
│   ├── public/
│   │   ├── robots.txt              # Search engine crawler instructions
│   │   └── sitemap.xml             # Complete canonical XML sitemap (24 URLs)
│   ├── src/
│   │   ├── components/             # Reusable UI components
│   │   │   ├── Header.tsx          # Responsive navigation & call/WhatsApp topbar
│   │   │   ├── Footer.tsx          # Comprehensive footer with legal & NAP info
│   │   │   ├── QuoteForm.tsx       # Zod-validated lead capture with WhatsApp dispatch
│   │   │   ├── QuoteModal.tsx      # Global popup quote request modal
│   │   │   ├── Breadcrumbs.tsx     # Semantic breadcrumbs with JSON-LD schema
│   │   │   ├── WhatsAppFloatingButton.tsx # Sticky bottom-right chat widget
│   │   │   └── PhoneCTA.tsx        # Mobile sticky quick-call & chat bar
│   │   ├── config/
│   │   │   └── businessConfig.ts   # Centralized phone, WhatsApp, email, hours, address
│   │   ├── data/
│   │   │   ├── servicesData.ts     # In-depth technical data for all 6 core services
│   │   │   ├── industriesData.ts   # 8 target facility hazard profiles & solutions
│   │   │   ├── projectsData.ts     # Sample layout architecture case studies
│   │   │   ├── faqData.ts          # Comprehensive compliance and technical FAQs
│   │   │   └── blogData.ts         # Educational guides on IS codes & NBC norms
│   │   ├── pages/
│   │   │   ├── HomePage.tsx        # Hero, services, trust pillars, process, FAQs
│   │   │   ├── AboutPage.tsx       # Mission, vision, IS/NBC standards adherence
│   │   │   ├── ServicesPage.tsx    # Services directory hub
│   │   │   ├── services/           # 6 Dedicated Service Pages
│   │   │   │   ├── FireAlarmSystemsPage.tsx
│   │   │   │   ├── FireFightingSystemsPage.tsx
│   │   │   │   ├── FireExtinguisherPage.tsx
│   │   │   │   ├── ElectricalSystemsPage.tsx
│   │   │   │   ├── CctvSystemsPage.tsx
│   │   │   │   └── AmcMaintenancePage.tsx
│   │   │   ├── IndustriesPage.tsx  # Factories, Warehouses, Offices, High-Rises, etc.
│   │   │   ├── ProjectsPage.tsx    # System layout architecture gallery
│   │   │   ├── BlogPage.tsx        # Technical articles directory
│   │   │   ├── BlogPostPage.tsx    # Full article reader with WhatsApp sharing
│   │   │   ├── ContactPage.tsx     # Direct phone, WhatsApp, email, office details
│   │   │   ├── FaqPage.tsx         # Categorized FAQ accordions
│   │   │   ├── PrivacyPolicyPage.tsx
│   │   │   ├── TermsPage.tsx
│   │   │   ├── locations/          # Local SEO service-area pages
│   │   │   │   ├── FaridabadLocationPage.tsx # Primary operational hub
│   │   │   │   └── DelhiNcrLocationPage.tsx  # Regional commercial corridor
│   │   │   ├── AdminLeadsPage.tsx  # Local lead records viewer with CSV export
│   │   │   └── NotFoundPage.tsx    # 404 handler
│   │   ├── seo/
│   │   │   ├── MetaTags.tsx        # Dynamic title, description, canonical, OG tags
│   │   │   └── StructuredData.tsx  # Schema.org JSON-LD injector
│   │   ├── utils/
│   │   │   ├── analytics.ts        # GA4 and GTM conversion event tracker
│   │   │   └── whatsapp.ts         # Contextual WhatsApp URL builder
│   │   ├── App.tsx                 # Client router configuration
│   │   ├── main.tsx                # Client mount / hydration entry point
│   │   └── entry-server.tsx        # Static SSR prerender renderer
│   ├── scripts/
│   │   ├── prerender.js            # Build-time SSG script generating 24 static pages
│   │   └── test-static-routes.js   # Automated static build integrity test
│   ├── dist/                       # Production output (pre-rendered static site)
│   ├── tailwind.config.js          # Design system & color tokens
│   ├── vite.config.ts              # Vite bundler configuration
│   └── package.json
├── docs/                           # Master Documentation & Strategy Guides
│   ├── LOCAL_SEO_STRATEGY.md       # Keyword map & local intent strategy
│   ├── GOOGLE_BUSINESS_PROFILE_CHECKLIST.md # Owner GBP setup checklist
│   ├── STATIC_HOSTING_DEPLOYMENT_GUIDE.md   # Vercel / Netlify / cPanel deployment
│   ├── ANALYTICS_CONVERSION_TRACKING.md     # GA4 & GSC conversion tracking
│   └── TEST_REPORT.md              # Verified test results across all 24 pages
├── package.json                    # Root build and preview commands
└── README.md
```

---

## 💻 Local Windows Setup & Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher; tested on v24.19.0)
- Git

### 1. Install Dependencies
```powershell
npm install
```

### 2. Run Local Development Server
```powershell
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. Any edits in `client/src/` will hot-reload instantly.

### 3. Build Static Site for Production
```powershell
npm run build
```
This runs Vite compilation followed by the automated SSG Prerender engine. It generates 24 pre-rendered static HTML files in `client/dist/`.

### 4. Preview the Production Build Locally
```powershell
npm run preview
```
Serves the generated static files locally at [http://localhost:4173](http://localhost:4173) to verify pre-rendered HTML behavior before deployment.

### 5. Run Automated Build & SEO Verification Tests
```powershell
npm test
```
Verifies that all 24 static routes, HTML headers, meta tags, and sitemaps exist on disk with valid content.

---

## 📞 Centralized Business Contact Configuration

All phone numbers, WhatsApp numbers, email addresses, operating hours, and service areas are centrally configured in:
`client/src/config/businessConfig.ts`

When official phone or address details are finalized, edit this single file and run `npm run build` to update the entire static website.

---

## 🚀 One-Click Production Deployment

Because the site is 100% static, you can deploy it to:
1. **Vercel / Netlify:** Connect your GitHub repository, set Build Command to `npm run build`, and Output Directory to `client/dist`.
2. **Cloudflare Pages:** Connect Git, set Build Command to `npm run build`, and Output to `client/dist`.
3. **cPanel / Traditional Apache / Nginx:** Run `npm run build` and upload the contents of `client/dist/` to your `public_html/` folder.

See [`docs/STATIC_HOSTING_DEPLOYMENT_GUIDE.md`](file:///d:/Elite/docs/STATIC_HOSTING_DEPLOYMENT_GUIDE.md) for full DNS and custom domain setup.
