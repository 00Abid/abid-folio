import React from 'react'

const caseStudies = [
    {
        id: 'improve-ecom-lcp',
        title: 'E‑commerce LCP & Revenue uplift',
        summary: 'Reduced LCP by 65% and increased organic revenue by 42% through image optimization, critical CSS, and server-side cache rules.',
        url: '/case-studies/improve-ecom-lcp'
    },
    {
        id: 'migration-success',
        title: 'Large-scale migration with zero-index loss',
        summary: 'Planned and executed a 200k URL migration achieving +18% organic traffic within 3 months through redirects, canonical hygiene and crawl budget optimization.',
        url: '/case-studies/migration-success'
    },
    {
        id: 'programmatic-content',
        title: 'Programmatic content scaling for category pages',
        summary: 'Scaled programmatic landing pages and improved visibility by 120% by combining high-quality templates with entity-driven metadata.',
        url: '/case-studies/programmatic-content'
    }
]

export default function CaseStudies() {
    // Build JSON-LD for case studies as Articles (helps rich results)
    const site = 'https://abid-folio.vercel.app'
    const graph = caseStudies.map(cs => ({
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': cs.title,
        'description': cs.summary,
        'url': site + cs.url,
        'author': { '@type': 'Person', 'name': 'Abid Khan', 'url': site },
        'articleSection': 'Case Study'
    }))

    return (
        <div className="relative min-h-screen py-12 px-4 text-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
            <div className="max-w-4xl mx-auto relative z-10">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Case Studies — Measurable SEO Impact</h1>
                    <p className="text-gray-300 mt-2">Selected enterprise engagements with measurable outcomes.</p>
                </header>

                <div className="grid gap-6">
                    {caseStudies.map(cs => (
                        <article key={cs.id} className="bg-white/5 border border-white/6 rounded-lg p-6">
                            <h2 className="text-xl font-semibold">{cs.title}</h2>
                            <p className="text-gray-300 mt-2">{cs.summary}</p>
                            <a href={cs.url} className="inline-block mt-4 text-sm text-white/95 bg-white/6 px-3 py-1 rounded-md">Read case study</a>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
