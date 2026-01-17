import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrums";
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
    title: "Abid Khan | Enterprise SEO Strategist & Frontend Developer",
    description: "Enterprise SEO strategist helping large sites scale organic traffic via technical SEO, site migrations, programmatic content, and performance optimization.",
    openGraph: {
        title: "Abid Khan | Enterprise SEO Strategist & Frontend Developer",
        description: "Enterprise SEO strategist helping large sites scale organic traffic via migrations, technical SEO, programmatic content, and performance optimization.",
        url: "https://abid-folio.vercel.app/",
        siteName: "Abid Khan Portfolio",
        images: [
            {
                url: "/seo.webp",
                width: 1200,
                height: 630,
                alt: "Abid Khan | Enterprise SEO Social Card",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Abid Khan | Enterprise SEO Strategist & Frontend Developer",
        description: "Enterprise SEO strategist for large sites - migrations, crawl budget, technical SEO, and data-driven growth.",
        creator: "@kaabid1557",
        images: ["/seo.webp"],
    },
    icons: {
        icon: "/favicon.ico",
    },
    other: {
        "msvalidate.01": "B406A713428734B7264507731D5DC69A",
        "google-site-verification": "ytfTCtnXBBd9JGVolRG9rVjjZ0nGgZEO0uEfnJQUFvY",
    },
    // Additional SEO Meta Tags
    keywords: "Enterprise SEO, Technical SEO, Site Migration, Programmatic SEO, Crawl Budget, Web Performance, Frontend Development, React, JavaScript",
    category: "technology",
    metadataBase: new URL("https://abid-folio.vercel.app"),
    alternates: {
        canonical: "./",
    },
};

export const viewport = {
    themeColor: "#0f172a",
    width: "device-width",
    initialScale: 1,
    colorScheme: "dark light",
};

export default function RootLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": "Abid Khan",
                "url": "https://abid-folio.vercel.app",
                "logo": "https://abid-folio.vercel.app/logo.png",
                "sameAs": [
                    "https://www.linkedin.com/in/abid-khan-coder/",
                    "https://github.com/00Abid",
                    "https://x.com/kaabid1557"
                ]
            },
            {
                "@type": "Person",
                "name": "Abid Khan",
                "url": "https://abid-folio.vercel.app",
                "image": "https://abid-folio.vercel.app/seo.webp",
                "jobTitle": "Enterprise SEO Strategist",
                "description": "Enterprise SEO strategist helping large sites scale organic traffic via technical SEO, site migrations, programmatic content, and performance optimization.",
                "sameAs": [
                    "https://www.linkedin.com/in/abid-khan-coder/",
                    "https://github.com/00Abid",
                    "https://x.com/kaabid1557"
                ]
            },
            {
                "@type": "WebSite",
                "url": "https://abid-folio.vercel.app/",
                "name": "Abid Khan Portfolio",
                "inLanguage": "en",
                "description": "Enterprise SEO strategist portfolio showcasing migrations, technical SEO, and case studies with measurable impact."
            },
            {
                "@type": "WebPage",
                "url": "https://abid-folio.vercel.app/",
                "name": "Abid Khan — Enterprise SEO Strategist & Frontend Developer",
                "inLanguage": "en",
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://abid-folio.vercel.app/seo.webp"
                },
                "description": "Enterprise SEO strategist helping large sites scale organic traffic via technical SEO, site migrations, programmatic content, and performance optimization.",
                "publisher": {
                    "@type": "Organization",
                    "name": "Abid Khan"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abid-folio.vercel.app/" },
                    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://abid-folio.vercel.app/#projects" },
                    { "@type": "ListItem", "position": 3, "name": "Skills", "item": "https://abid-folio.vercel.app/#skills" },
                    { "@type": "ListItem", "position": 4, "name": "Experience", "item": "https://abid-folio.vercel.app/#experience" },
                    { "@type": "ListItem", "position": 5, "name": "Blog", "item": "https://abid-folio.vercel.app/blog" },
                    { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://abid-folio.vercel.app/#contact" }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How long does enterprise SEO take to show results?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Enterprise SEO timelines vary: expect 3–12 months for measurable improvements depending on site size, technical debt, and content scale. Large migrations may take longer but provide lasting gains when executed well." }
                    },
                    {
                        "@type": "Question",
                        "name": "What is crawl budget and why does it matter for big sites?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Crawl budget is the number of URLs a search engine will crawl on your site in a given timeframe. For large sites, optimizing crawl budget (via robots, sitemaps, canonicalization and fixing thin pages) ensures important pages are indexed and reduces wasted crawl on low-value URLs." }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is site speed important for SEO?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Site speed (Core Web Vitals) impacts rankings and user engagement. Faster pages reduce bounce rate and improve crawl efficiency. Focus on LCP, CLS and interactivity improvements for significant impact." }
                    },
                    {
                        "@type": "Question",
                        "name": "What should I expect in a site migration?",
                        "acceptedAnswer": { "@type": "Answer", "text": "A migration requires planning: URL mapping, redirect strategy, canonical updates, sitemap and robots adjustments, monitoring, and rollback plans. Proper QA and post-launch monitoring minimize traffic risk." }
                    },
                    {
                        "@type": "Question",
                        "name": "How do you measure SEO success for enterprise sites?",
                        "acceptedAnswer": { "@type": "Answer", "text": "Measure organic traffic growth, visibility (impressions & clicks), conversions from organic, keyword movement, crawl coverage, Core Web Vitals improvements, and business KPIs like revenue or leads attributable to organic search." }
                    }
                ]
            }
        ]
    };

    return (
        <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <link rel="preconnect" href="https://www.clarity.ms" />
                <link rel="preconnect" href="https://www.googletagmanager.com" />
            </head>
            <body className="antialiased bg-[#050505] text-white">
                {/* BEST PRACTICE: GTM component handles head/body placement automatically */}
                <GoogleTagManager gtmId="GTM-555QRSRF" />

                {/* BEST PRACTICE: Clarity loads AFTER the page is functional */}
                <Script
                    id="clarity-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v2t4n7gp7x");
            `,
                    }}
                />
                <header role="banner" className="relative z-[110]">
                    <Navbar />
                    <Breadcrumbs />
                </header>

                {/* Main Content Area */}
                <div id="main-content" role="main" className="relative">
                    {children}
                </div>

                {/* Site Footer */}
                <Footer />
            </body>
        </html>
    );
}
