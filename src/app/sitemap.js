import { blogs } from '@/lib/Blog-data'; // Ensure lowercase 'b' as discussed

export default function sitemap() {
    const baseUrl = 'https://abid-folio.vercel.app';

    // Helper to convert "Jan 12, 2026" to "2026-01-12" for Google
    const formatDate = (dateStr) => {
        try {
            return new Date(dateStr).toISOString().split('T')[0];
        } catch {
            return new Date().toISOString().split('T')[0];
        }
    };

    // 1. Static Routes: Priority and Frequency Tuning
    const routes = [
        { path: '', freq: 'weekly', priority: 1.0 },      // Home is high priority
        { path: '/blog', freq: 'daily', priority: 0.8 },  // Blog index updates often
    ].map((route) => ({
        url: `${baseUrl}${route.path}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: route.freq,
        priority: route.priority,
    }));

    // 2. Dynamic Blog Routes: Authentic Freshness
    const blogRoutes = blogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        // Using actual post date tells Google exactly when content was published
        lastModified: formatDate(post.date),
        changeFrequency: 'monthly', // Blogs don't change daily; monthly is more "honest"
        priority: 0.7, // Individual posts are lower priority than the Home page
    }));

    return [...routes, ...blogRoutes];
}