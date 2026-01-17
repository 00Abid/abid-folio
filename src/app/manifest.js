export default function manifest() {
    return {
        name: 'Abid Khan | Enterprise SEO & Frontend Engineer',
        short_name: 'Abid SEO',
        description: 'High-performance technical SEO and frontend engineering logs.',
        start_url: '/',
        display: 'standalone',
        background_color: '#050505',
        theme_color: '#050505',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any', // Tells the browser this file contains multiple sizes
                type: 'image/x-icon',
            },
            {
                src: '/favicon.ico',
                sizes: '192x192',
                type: 'image/x-icon',
                purpose: 'maskable',
            },
            {
                src: '/favicon.ico',
                sizes: '512x512',
                type: 'image/x-icon',
            },
        ],
    };
}