import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

const expectedFiles = [
  'index.html',
  'about/index.html',
  'services/index.html',
  'services/fire-alarm-systems/index.html',
  'services/fire-fighting-systems/index.html',
  'services/fire-extinguisher-supply-refilling/index.html',
  'services/electrical-systems/index.html',
  'services/cctv-systems/index.html',
  'services/amc-maintenance/index.html',
  'industries/index.html',
  'projects/index.html',
  'blog/index.html',
  'blog/how-to-choose-fire-extinguisher-commercial-property/index.html',
  'blog/fire-extinguisher-inspection-refilling-regulations-india/index.html',
  'blog/benefits-of-annual-maintenance-contract-fire-safety/index.html',
  'blog/what-to-consider-before-installing-fire-alarm-system/index.html',
  'contact/index.html',
  'faq/index.html',
  'privacy-policy/index.html',
  'terms/index.html',
  'locations/faridabad/index.html',
  'locations/delhi-ncr/index.html',
  'robots.txt',
  'sitemap.xml',
];

console.log('🧪 Verifying Static Site Build Integrity & Pre-rendered Pages...\n');

let passCount = 0;

for (const relPath of expectedFiles) {
  const fullPath = path.resolve(distDir, relPath);
  assert.ok(fs.existsSync(fullPath), `Missing required static file: ${relPath}`);

  const content = fs.readFileSync(fullPath, 'utf-8');
  assert.ok(content.length > 50, `File appears empty: ${relPath}`);

  if (relPath.endsWith('.html')) {
    assert.ok(content.includes('<title>'), `Missing <title> tag in ${relPath}`);
    assert.ok(content.includes('<meta name="description"'), `Missing meta description in ${relPath}`);
    assert.ok(content.includes('<link rel="canonical"'), `Missing canonical link in ${relPath}`);
    assert.ok(content.includes('<header'), `Missing pre-rendered header markup in ${relPath}`);
    assert.ok(content.includes('<footer'), `Missing pre-rendered footer markup in ${relPath}`);
  }

  console.log(`  ✓ Verified [OK]: ${relPath} (${content.length} bytes)`);
  passCount++;
}

console.log(`\n🎉 All ${passCount} static pages and assets verified successfully! 100% Static SEO Ready.`);
