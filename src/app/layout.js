import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrums";
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';

export const metadata = {
    title: "Abid Khan | SEO, AEO & GEO Specialist - Scaling Organic Revenue",
    description: "I build custom SEO, AEO, and GEO strategies that turn site architecture into organic revenue and sales. No developers needed, I write the code myself.",
    openGraph: {
        title: "Abid Khan | SEO, AEO & GEO Specialist - Scaling Organic Revenue",
        description: "I build custom SEO, AEO, and GEO strategies that turn site architecture into organic revenue and sales. No developers needed, I write the code myself.",
        url: "https://abid-folio.vercel.app",
        siteName: "Abid Khan Portfolio",
        images: [{ url: "/seo.webp", width: 1200, height: 630, alt: "Abid Khan | Revenue Growth SEO" }],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Abid Khan | SEO, AEO & GEO Specialist - Scaling Organic Revenue",
        description: "SEO, AEO, and GEO strategies turning site architecture into organic sales and revenue.",
        creator: "@kaabid1557",
        images: ["/seo.webp"],
    },
    metadataBase: new URL("https://abid-folio.vercel.app"),
    alternates: {
        canonical: "/",
    },
    keywords: "SEO, AEO, GEO, Revenue Growth, Programmatic SEO, B2B SEO, Performance Engineering, Enterprise SEO",
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
                "@id": "https://abid-folio.vercel.app/#organization",
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
                "@id": "https://abid-folio.vercel.app/#person",
                "name": "Abid Khan",
                "url": "https://abid-folio.vercel.app",
                "image": "https://abid-folio.vercel.app/seo.webp",
                "jobTitle": "SEO, AEO & GEO Specialist",
                "description": "SEO, AEO, and GEO specialist helping businesses scale organic sales and revenue via technical search optimization, schemas, and clean code setups.",
                "sameAs": [
                    "https://www.linkedin.com/in/abid-khan-coder/",
                    "https://github.com/00Abid",
                    "https://x.com/kaabid1557"
                ],
                "worksFor": {
                    "@id": "https://abid-folio.vercel.app/#organization"
                }
            },
            {
                "@type": "WebSite",
                "@id": "https://abid-folio.vercel.app/#website",
                "url": "https://abid-folio.vercel.app",
                "name": "Abid Khan Portfolio",
                "inLanguage": "en",
                "description": "SEO, AEO, and GEO specialist portfolio showcasing technical search optimization and case studies with measurable revenue impact.",
                "publisher": {
                    "@id": "https://abid-folio.vercel.app/#person"
                }
            },
            {
                "@type": "WebPage",
                "@id": "https://abid-folio.vercel.app/#webpage",
                "url": "https://abid-folio.vercel.app",
                "name": "Abid Khan - SEO, AEO & GEO Specialist",
                "inLanguage": "en",
                "isPartOf": {
                    "@id": "https://abid-folio.vercel.app/#website"
                },
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://abid-folio.vercel.app/seo.webp"
                },
                "description": "I build custom SEO, AEO, and GEO strategies that turn site architecture into organic revenue and sales.",
                "publisher": {
                    "@id": "https://abid-folio.vercel.app/#organization"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://abid-folio.vercel.app/#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://abid-folio.vercel.app" },
                    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://abid-folio.vercel.app/#projects" },
                    { "@type": "ListItem", "position": 3, "name": "Skills", "item": "https://abid-folio.vercel.app/#skills" },
                    { "@type": "ListItem", "position": 4, "name": "Experience", "item": "https://abid-folio.vercel.app/#experience" },
                    { "@type": "ListItem", "position": 5, "name": "Blog", "item": "https://abid-folio.vercel.app/blog" },
                    { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://abid-folio.vercel.app/#contact" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://abid-folio.vercel.app/#faq",
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
        <html lang="en" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased bg-[#050505] text-white">
                <GoogleTagManager gtmId="GTM-555QRSRF" />

                <Script
                    id="clarity-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(c,l,a,r,i,t,y){ c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt"; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "v2t4n7gp7x");`,
                    }}
                />

                <header role="banner" className="fixed w-full z-[110] bg-[#050505x]/80 backdrop-blur-md">
                    <Navbar />
                </header>

                <main role="main" className="pt-12">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}