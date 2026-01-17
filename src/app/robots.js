export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/private/',     // Your private route
                    '/_next/',       // Prevents crawling of internal Next.js build files
                    '/api/',         // Prevents crawling of serverless functions
                    '/admin/',       // Potential future admin paths
                ],
            },
            {
                // Advanced: Instructions for AI Bots
                userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot'],
                allow: ['/', '/blog/'],
                disallow: ['/_next/', '/api/'],
            }
        ],
        sitemap: 'https://abid-folio.vercel.app/sitemap.xml',
    };
}