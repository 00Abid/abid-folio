export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: 'https://abid-folio.vercel.app/sitemap.xml',
        host: 'https://abid-folio.vercel.app',
    };
}
