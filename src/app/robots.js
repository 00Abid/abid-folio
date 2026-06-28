export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/private/',     // Your private route
                    '/api/',         // Prevents crawling of serverless functions
                    '/admin/',       // Potential future admin paths
                ],
            },
            {
                // Advanced: Instructions for AI Bots
                userAgent: ['GPTBot', 'ChatGPT-User', 'PerplexityBot'],
                allow: ['/', '/blog/'],
                disallow: ['/api/'],
            }
        ],
        sitemap: 'https://abid-folio.vercel.app/sitemap.xml',
    };
}