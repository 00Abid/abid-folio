import React, { useEffect } from 'react'


const caseStudies = [
    {
        "id": "aero-enterprises-seo",
        "title": "Aero Enterprises - Better Search Rankings & Global Sales",
        "intro": "Aero Enterprises wanted more people to find them online, both in India and overseas. They needed a website redesign that would rank higher on Google and bring in more customer inquiries.",
        "image": "ae.webp",
        "keyActions": [
            "Built a fast, mobile-friendly website using React and Tailwind CSS so it loads quickly on all devices.",
            "Added special SEO code (schema markup) so Google understands exactly what the business sells.",
            "Researched and added the right keywords to product titles and descriptions to rank higher.",
            "Set up Google Search Console, Google Tag Manager, and Bing Webmaster to track visitor data.",
            "Improved page speed and technical health, resulting in 20% higher Google rankings."
        ],
        "results": "The website now ranks 20% higher on Google. It gets 1,017 profile views and 379 customer interactions per month, with 86% visitors from India and more from China.",
        "url": "https://aeroenterprises.shop"
    },
    {
        "id": "raja-buffing-local-seo",
        "title": "Raja Buffing Works - Attract More Local Customers",
        "intro": "Raja Buffing Works is a local business in Vasai that needed customers to find them online. The challenge was to show up higher in Google search for people looking for their services in the area.",
        "image": "rbw.webp",
        "keyActions": [
            "Created a mobile-friendly website that loads super fast on phones.",
            "Added local keywords like 'Utensil Buffing in Vasai' to get found by nearby customers.",
            "Improved image descriptions and content so Google understands what they do.",
            "Set up their Google Business Profile so people can easily find and contact them.",
            "Tracked results every week using Google Search Console."
        ],
        "results": "In just 2 months, they got 521 profile views and 245 customer inquiries. Local customers are now finding them easily on Google search.",
        "url": "https://rajabuffingworks.vercel.app"
    },
    {
        "id": "caloricurve-ai-seo",
        "title": "CaloriCurve - AI Nutrition Tracker That Ranks on Google",
        "intro": "CaloriCurve is an AI-powered app that helps people track meals and calories. The goal was to build it so it ranks high on Google and attracts health-conscious users.",
        "image": "/cc.webp",
        "keyActions": [
            "Built an AI nutrition tracker using Python and Google's AI (Gemini) so users can scan food and log nutrition automatically.",
            "Added secure login (Firebase) and data saving so users' information is safe.",
            "Optimized all titles, descriptions, and code for Google to easily understand what the app does.",
            "Made the website super fast and mobile-friendly so it ranks higher and loads quick.",
            "Improved user experience so more people use the app and stay longer."
        ],
        "results": "The app now gets good Google rankings, loads fast, and attracts health focused users. People easily find it when searching for nutrition and calorie tracking.",
        "url": "https://caloricurve.vercel.app"
    },
    {
        "id": "ammu-cosmetics-seo",
        "title": "Ammu Cosmetics - Beautiful Website That Sells More",
        "intro": "Ammu Cosmetics wanted a modern, attractive website that also ranks well on Google. They needed something that looks great and actually gets customers to find them online.",
        "image": "/am.webp",
        "keyActions": [
            "Designed a beautiful, fast-loading website using Next.js so it works perfectly on phones and computers.",
            "Added SEO code for products, company info, and descriptions so Google shows them in search results.",
            "Optimized website speed and mobile performance so it ranks higher and loads instantly.",
            "Wrote product descriptions with the right keywords so people searching for cosmetics find them.",
            "Made sure the website is easy for Google to read and understand."
        ],
        "results": "The website now ranks well for beauty related keywords. It loads fast, looks amazing, and attracts customers from local and national searches.",
        "url": "https://ammu-cosmetics.vercel.app"
    }
]


const CaseStudies = () => {
    const site = 'https://abid-folio.vercel.app'

    // update document head for better SEO when this page is shown
    useEffect(() => {
        const title = 'Case Studies - Enterprise SEO Results | Abid Khan'
        const description = 'Enterprise SEO case studies showing measurable growth in organic visibility, traffic and conversions. Read results-driven engagements from Abid Khan.'

        document.title = title

        let desc = document.querySelector('meta[name="description"]')
        if (!desc) {
            desc = document.createElement('meta')
            desc.setAttribute('name', 'description')
            document.head.appendChild(desc)
        }
        desc.setAttribute('content', description)

        let canonical = document.querySelector('link[rel="canonical"]')
        if (!canonical) {
            canonical = document.createElement('link')
            canonical.setAttribute('rel', 'canonical')
            document.head.appendChild(canonical)
        }
        canonical.setAttribute('href', site + '/case-studies')

        // Open Graph fallback tags for social previews
        let ogTitle = document.querySelector('meta[property="og:title"]')
        if (!ogTitle) {
            ogTitle = document.createElement('meta')
            ogTitle.setAttribute('property', 'og:title')
            document.head.appendChild(ogTitle)
        }
        ogTitle.setAttribute('content', title)

        let ogDesc = document.querySelector('meta[property="og:description"]')
        if (!ogDesc) {
            ogDesc = document.createElement('meta')
            ogDesc.setAttribute('property', 'og:description')
            document.head.appendChild(ogDesc)
        }
        ogDesc.setAttribute('content', description)

        // set a default og:image / twitter:image using the first case study image if available
        const defaultImage = (caseStudies && caseStudies[0] && caseStudies[0].image) ? caseStudies[0].image : site + '/seo.webp'

        let ogImage = document.querySelector('meta[property="og:image"]')
        if (!ogImage) {
            ogImage = document.createElement('meta')
            ogImage.setAttribute('property', 'og:image')
            document.head.appendChild(ogImage)
        }
        ogImage.setAttribute('content', defaultImage)

        let twitterImage = document.querySelector('meta[name="twitter:image"]')
        if (!twitterImage) {
            twitterImage = document.createElement('meta')
            twitterImage.setAttribute('name', 'twitter:image')
            document.head.appendChild(twitterImage)
        }
        twitterImage.setAttribute('content', defaultImage)

        return () => {
            // keep cleanup minimal — leaving tags in place is fine for SPA UX
        }
    }, [])

    const graph = {
        '@context': 'https://schema.org',
        '@graph': caseStudies.map(cs => ({
            '@type': 'Article',
            'headline': cs.title,
            'description': cs.intro || cs.results || '',
            'image': cs.image || (site + '/og-image-case-studies.png'),
            'url': cs.url && cs.url.match(/^https?:\/\//i) ? cs.url : site + (cs.url || ''),
            'mainEntityOfPage': {
                '@type': 'WebPage',
                '@id': site + '/case-studies#' + cs.id
            },
            'author': { '@type': 'Person', 'name': 'Abid Khan', 'url': site },
            'publisher': { '@type': 'Organization', 'name': 'Abid Khan', 'url': site },
            'articleSection': 'Case Study'
        }))
    }

    return (
        <div className="relative min-h-screen py-12 px-4 text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
            <div className="max-w-4xl mx-auto relative z-10">
                <header className="mb-8 mt-10 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Case Studies - Real Results, Proven SEO Growth</h1>
                    <p className="text-gray-300 mt-2">A collection of projects that turned SEO strategy into measurable success.</p>
                </header>

                <div className="grid gap-6">
                    {caseStudies.map(cs => (
                        <article key={cs.id} className="bg-white/5 border border-white/6 rounded-lg p-6 backdrop-blur-sm">
                            <h2 className="text-xl font-semibold">{cs.title}</h2>
                            <p className="text-sm text-gray-300 mt-2">{cs.intro}</p>
                            <ul className="mt-3 list-disc list-inside text-gray-300 text-sm">
                                <p className="font-semibold">Key Actions:</p>
                                {cs.keyActions && cs.keyActions.slice(0, 4).map((a, i) => <li key={i}>{a}</li>)}
                            </ul>
                            <p className=" text-sm text-gray-300 mt-3"><strong>Results:</strong> {cs.results}</p>
                            <div className="mt-4">
                                <a href={cs.url} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-white/95 bg-white/6 px-3 py-1 rounded-md">Read case study</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default CaseStudies;