import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.resolve(distDir, 'index.html');
const serverEntryPath = path.resolve(distDir, 'server/entry-server.js');

const ROUTES = [
  {
    path: '/',
    title: 'Fire Safety and Protection Solutions in Faridabad & Delhi NCR | Elite Fire',
    description: 'Commercial fire alarm systems, fire fighting installations, fire extinguisher refilling, electrical maintenance, CCTV, and AMC services in Faridabad & Delhi NCR.',
  },
  {
    path: '/about',
    title: 'About Us | Elite Fire and Protection Services Faridabad',
    description: 'Learn about Elite Fire and Protection: our life-safety engineering mission, IS code compliance, preventative fire maintenance philosophy, and service across Faridabad & Delhi NCR.',
  },
  {
    path: '/services',
    title: 'Fire Protection & Safety Services in Faridabad & Delhi NCR | Elite Fire',
    description: 'Comprehensive life safety solutions: addressable fire alarm systems, fire hydrants, sprinkler networks, fire extinguisher supply & refilling, electrical maintenance, CCTV & AMC.',
  },
  {
    path: '/services/fire-alarm-systems',
    title: 'Fire Alarm System Installation & Maintenance in Faridabad | Elite Fire',
    description: 'Expert fire alarm installation, addressable control panels, smoke detectors, and routine loop testing in Faridabad and Delhi NCR. Adhering to IS 2189 and NBC norms.',
  },
  {
    path: '/services/fire-fighting-systems',
    title: 'Fire Fighting System Installation & Hydrant Maintenance Faridabad | Elite Fire',
    description: 'Industrial fire hydrant systems, automatic fire sprinklers, wet risers, and fire pump room installation in Faridabad & Delhi NCR. Engineered as per IS 3844 & IS 15105.',
  },
  {
    path: '/services/fire-extinguisher-supply-refilling',
    title: 'Fire Extinguisher Supply & Refilling in Faridabad | Elite Fire',
    description: 'Certified fire extinguisher refilling in Faridabad and Delhi NCR. ABC dry powder, CO2, clean agent, foam refilling and hydraulic pressure testing adhering to IS 2190.',
  },
  {
    path: '/services/electrical-systems',
    title: 'Electrical System Maintenance & Safety Audit Faridabad | Elite Fire',
    description: 'Commercial electrical safety audits, thermal imaging thermography, electrical panel maintenance, and earthing tests in Faridabad & Delhi NCR. Preventing electrical fires.',
  },
  {
    path: '/services/cctv-systems',
    title: 'Commercial CCTV Installation & AMC Faridabad | Elite Fire',
    description: 'Industrial CCTV installation and maintenance in Faridabad & Delhi NCR. High-definition IP cameras, NVR storage, night-vision perimeter monitoring, and remote phone viewing.',
  },
  {
    path: '/services/amc-maintenance',
    title: 'Fire Safety AMC in Faridabad & Delhi NCR | Elite Fire',
    description: 'Scheduled fire safety maintenance contracts (AMC) for factories, commercial buildings, and societies in Faridabad & Delhi NCR. Full system testing and audit readiness.',
  },
  {
    path: '/amc-maintenance',
    title: 'Fire Safety AMC in Faridabad & Delhi NCR | Elite Fire',
    description: 'Scheduled fire safety maintenance contracts (AMC) for factories, commercial buildings, and societies in Faridabad & Delhi NCR. Full system testing and audit readiness.',
  },
  {
    path: '/industries',
    title: 'Industries We Serve | Fire Safety Solutions Faridabad & NCR',
    description: 'Targeted life safety systems for factories, warehouses, corporate offices, high-rise societies, hospitals, schools, hotels & retail across Faridabad & Delhi NCR.',
  },
  {
    path: '/projects',
    title: 'Project Engineering Gallery & Layout Case Studies | Elite Fire',
    description: 'Explore sample life-safety system layout configurations and turnkey fire protection architectures for industrial, commercial, and residential facilities in Faridabad & NCR.',
  },
  {
    path: '/blog',
    title: 'Fire Safety Guides & Standards Resources | Elite Fire Blog',
    description: 'Educational guides on Indian Standards (IS 2190, IS 3844, IS 2189), fire extinguisher selection, NBC 2016 norms, and preventative AMC checklists.',
  },
  {
    path: '/blog/how-to-choose-fire-extinguisher-commercial-property',
    title: 'Choosing Fire Extinguishers for Commercial Facilities | IS 2190 Guide',
    description: 'Guide to selecting the right fire extinguisher (ABC, CO2, Foam, Clean Agent) for commercial buildings and factories in India as per IS 2190 standards.',
  },
  {
    path: '/blog/fire-extinguisher-inspection-refilling-regulations-india',
    title: 'Fire Extinguisher Refilling & Hydro-Testing Intervals | IS 2190 Norms',
    description: 'Learn the legal and safety inspection timelines for fire extinguishers in India. Quarterly visual checks, discharge refilling, and hydrostatic test mandates.',
  },
  {
    path: '/blog/benefits-of-annual-maintenance-contract-fire-safety',
    title: 'Benefits of Fire Safety AMC for Commercial & Industrial Facilities',
    description: 'Discover why an AMC is vital for fire pumps, hydrant lines, sprinkler networks, and alarm panels. Maintaining regulatory Fire NOC readiness in Faridabad and NCR.',
  },
  {
    path: '/blog/what-to-consider-before-installing-fire-alarm-system',
    title: 'Commercial Fire Alarm System Installation Considerations | IS 2189',
    description: 'Planning a fire alarm installation in Faridabad or Delhi NCR? Learn about addressable loops, detector placement, false alarm mitigation, and building interlocks.',
  },
  {
    path: '/contact',
    title: 'Contact Elite Fire and Protection | Faridabad & Delhi NCR',
    description: 'Get in touch with Elite Fire and Protection for fire alarm installation, hydrant systems, fire extinguisher refilling, and AMC services in Faridabad & Delhi NCR.',
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions (FAQ) | Elite Fire and Protection',
    description: 'Common questions about fire alarm systems, fire extinguisher refilling cycles, Indian Standards (IS 2190, IS 3844, NBC 2016), and fire safety AMC in Faridabad & NCR.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Elite Fire and Protection',
    description: 'Privacy policy detailing how Elite Fire and Protection collects, processes, and protects customer inquiry information and data.',
  },
  {
    path: '/terms',
    title: 'Terms of Service | Elite Fire and Protection',
    description: 'Terms and conditions governing quotation validity, installation scope, hydrostatic testing, and AMC service terms with Elite Fire and Protection.',
  },
  {
    path: '/locations/faridabad',
    title: 'Fire Safety & Protection Services in Faridabad | Elite Fire',
    description: 'Local fire alarm installation, fire hydrant systems, certified fire extinguisher refilling, and AMC services in Faridabad industrial areas (Sectors 58, 59, 24, 25, IMT).',
  },
  {
    path: '/locations/delhi-ncr',
    title: 'Fire Protection & Safety Services Delhi NCR | Elite Fire',
    description: 'Commercial fire alarm installation, automatic sprinkler networks, fire hydrant maintenance, and AMC services across Delhi NCR (Okhla, Gurugram, Noida).',
  },
];

async function prerender() {
  console.log('🚀 Starting Static Site Generation (SSG Prerender)...');

  if (!fs.existsSync(templatePath)) {
    console.error('Error: dist/index.html not found. Please run "vite build" first.');
    process.exit(1);
  }

  if (!fs.existsSync(serverEntryPath)) {
    console.error('Error: dist/server/entry-server.js not found. Please run "npm run build:server-entry" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const serverEntryUrl = pathToFileURL(serverEntryPath).href;
  const { render } = await import(serverEntryUrl);

  let renderedCount = 0;

  for (const route of ROUTES) {
    try {
      const appHtml = render(route.path);
      const canonicalUrl = `https://elitefireandprotection.in${route.path === '/' ? '' : route.path}`;

      // Replace title, description, canonical link, and inject pre-rendered HTML into #root
      let html = template
        .replace(
          /<title>.*?<\/title>/,
          `<title>${route.title}</title>`
        )
        .replace(
          /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
          `<meta name="description" content="${route.description}" />`
        )
        .replace(
          /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
          `<link rel="canonical" href="${canonicalUrl}" />`
        )
        .replace(
          '<div id="root"></div>',
          `<div id="root">${appHtml}</div>`
        );

      // Determine destination path
      let outPath;
      if (route.path === '/') {
        outPath = path.resolve(distDir, 'index.html');
      } else {
        const routeFolder = path.resolve(distDir, route.path.replace(/^\//, ''));
        if (!fs.existsSync(routeFolder)) {
          fs.mkdirSync(routeFolder, { recursive: true });
        }
        outPath = path.resolve(routeFolder, 'index.html');
      }

      fs.writeFileSync(outPath, html, 'utf-8');
      renderedCount++;
      console.log(`  ✓ Pre-rendered: ${route.path} -> ${path.relative(distDir, outPath)}`);
    } catch (err) {
      console.error(`  ✗ Failed to prerender ${route.path}:`, err);
    }
  }

  // Clean up temporary SSR bundle after SSG is complete
  const serverDir = path.resolve(distDir, 'server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
  }

  console.log(`\n🎉 SSG Prerendering complete! ${renderedCount} routes pre-rendered into clean static HTML.`);
}

prerender();
