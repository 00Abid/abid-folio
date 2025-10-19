import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SITE_URL = 'https://abid-folio.vercel.app';
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = () => {
    const currentDate = getCurrentDate();

    const urls = [
        {
            loc: SITE_URL + '/',
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '1.0'
        },
        {
            loc: SITE_URL + '/#projects',
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: '0.8'
        },
        {
            loc: SITE_URL + '/#skills',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.7'
        },
        {
            loc: SITE_URL + '/#experience',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.7'
        },
        {
            loc: SITE_URL + '/#contact',
            lastmod: currentDate,
            changefreq: 'monthly',
            priority: '0.6'
        }
    ];

    const urlEntries = urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
};

// Write sitemap to file
const updateSitemap = () => {
    try {
        const sitemap = generateSitemap();
        fs.writeFileSync(SITEMAP_PATH, sitemap, 'utf8');
        console.log('✅ Sitemap updated successfully!');
        console.log(`📅 Last modified: ${getCurrentDate()}`);
    } catch (error) {
        console.error('❌ Error updating sitemap:', error);
        process.exit(1);
    }
};

// Run the update
updateSitemap();