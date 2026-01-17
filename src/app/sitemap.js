import { blogs } from '@/lib/Blog-data';

export default function sitemap() {
    const baseUrl = 'https://abid-folio.vercel.app';

    // Static routes
    const routes = [
        '',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic blog routes
    const blogRoutes = blogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date().toISOString().split('T')[0], // Ideally use post.date if formatted correctly
        changeFrequency: 'weekly',
        priority: 0.9,
    }));

    return [...routes, ...blogRoutes];
}
