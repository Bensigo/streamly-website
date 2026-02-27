// Generates sitemap.xml into public/ for static export
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://streamlydigital.com';

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
];

// Blog slugs (must match content/blog frontmatter)
const blogSlugs = [
  'ctv-ad-monetization-mea-publishers-playbook',
  'ctv-publishers-mea-ai-augmented-ad-ops',
  'ssp-adtech-vendor-guide-mea-ctv-publishers',
];

// Programmatic SEO: service × location (mirrors lib/programmatic-seo.ts)
const services = [
  'ctv-ad-monetization',
  'ai-augmented-ad-ops',
  'ctv-yield-optimization',
  'adtech-partnership-development',
  'programmatic-monetization-consulting',
];

const locations = [
  'mea', 'uae', 'dubai', 'saudi-arabia', 'riyadh',
  'egypt', 'qatar', 'kuwait', 'bahrain', 'oman',
  'jordan', 'morocco', 'tunisia', 'turkey', 'pakistan',
];

const today = new Date().toISOString().split('T')[0];

function url(path, priority = '0.5', changefreq = 'monthly') {
  return `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const urls = [
  // Static pages
  ...staticPages.map(p => url(p.path, p.priority, p.changefreq)),
  // Blog posts
  ...blogSlugs.map(slug => url(`/blog/${slug}`, '0.7', 'monthly')),
  // Programmatic SEO pages
  ...services.flatMap(svc =>
    locations.map(loc => url(`/s/${svc}-${loc}`, '0.6', 'monthly'))
  ),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

const outPath = join(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, sitemap, 'utf8');
console.log(`Sitemap generated: ${outPath} (${urls.length} URLs)`);
