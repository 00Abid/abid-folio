import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/lib/Blog-data';
import { Clock, Calendar, ArrowRight, Zap, BarChart3, ShieldCheck, Mail } from 'lucide-react';

export const metadata = {
    title: "SEO Insights & AEO | GEO Strategy Blog | Abid Khan",
    description: "Deep-dives into AEO, technical audits, site architecture, and automation. Learn how to scale organic traffic with Python, Next.js, and modern SEO workflows.",
    alternates: {
        canonical: "https://abid-folio.vercel.app/blog",
    },
};

export default function BlogPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://abid-folio.vercel.app/blog",
                "url": "https://abid-folio.vercel.app/blog",
                "name": "SEO Insights & AEO Strategy Blog | Abid Khan",
                "description": "Deep-dives into AEO, technical audits, site architecture, and automation. Learn how to scale organic traffic with Python, Next.js, and modern SEO workflows.",
                "publisher": {
                    "@type": "Person",
                    "name": "Abid Khan",
                    "url": "https://abid-folio.vercel.app"
                }
            },
            {
                "@type": "Blog",
                "@id": "https://abid-folio.vercel.app/blog#blog",
                "name": "SEO Insights & AEO Strategy Blog",
                "description": "Deep-dives into AEO, technical audits, site architecture, and automation.",
                "publisher": {
                    "@type": "Person",
                    "name": "Abid Khan"
                },
                "blogPost": blogs.map((post) => ({
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "url": `https://abid-folio.vercel.app/blog/${post.slug}`,
                    "datePublished": "2026-01-01",
                    "description": post.directAnswer,
                    "author": {
                        "@type": "Person",
                        "name": post.author
                    }
                }))
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-30 pb-20 px-6">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <header className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                            Master SEO
                        </p>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                        SEO <span className="text-white/10 italic font-serif lowercase">Blogs.</span>
                    </h1>
                    <p className="max-w-2xl text-slate-400 text-lg font-medium leading-relaxed">
                        Strategic frameworks for <Link href="/#skills" className="text-cyan-500 hover:underline">SEO</Link> and <Link href="/#projects" className="text-cyan-500 hover:underline">Next.js performance</Link>.
                        Every post is engineered to turn technical architecture into long-term organic revenue.
                    </p>
                </header>

                {/* SEO METHODOLOGY SECTION */}
                <section className="mb-24 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "Technical Audits", icon: <ShieldCheck size={20} />, desc: "Diagnostic-first approach to crawl depth, indexation control, and rendering." },
                        { title: "Growth Engineering", icon: <Zap size={20} />, desc: "Leveraging Next.js and programmatic systems to scale organic visibility." },
                        { title: "Revenue Automation", icon: <BarChart3 size={20} />, desc: "Aligning search signals with high-intent landing pages for maximum ROI." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all">
                            <div className="text-cyan-500 mb-6">{item.icon}</div>
                            <h3 className="font-black uppercase tracking-widest text-[10px] mb-2">{item.title}</h3>
                            <p className="text-[12px] text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </section>

                {/* BLOG LIST */}
                <div className="grid grid-cols-1 gap-6 mb-24">
                    {blogs.map((post, index) => (
                        <article
                            key={post.id}
                            className="group flex flex-col lg:flex-row gap-8 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
                        >
                            <div className="relative w-full lg:w-72 aspect-video lg:aspect-square overflow-hidden rounded-3xl shrink-0">
                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between py-2">
                                <div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[9px] font-black uppercase tracking-widest rounded-md border border-cyan-500/20">{post.category}</span>
                                        <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{post.readTime}</span>
                                    </div>
                                    <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-4 leading-none">{post.title}</h2>
                                    <p className="text-slate-400 text-sm italic mb-6">{post.directAnswer}</p>
                                </div>
                                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white hover:text-cyan-500 transition-colors">
                                    Read Full Analysis <ArrowRight size={14} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA SECTION - Compact Design */}
                <section className="mt-20 p-8 rounded-[2rem] bg-cyan-500 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-black mb-1">
                            Need a technical audit?
                        </h2>
                        <p className="font-bold uppercase tracking-[0.2em] text-[9px] text-black/70">
                            Stop losing revenue to performance issues.
                        </p>
                    </div>

                    <Link
                        href="/#contact"
                        className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-[1.25rem] font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shrink-0"
                    >
                        Start Growth Partnership <Mail size={14} />
                    </Link>
                </section>
            </div>
        </main>
    );
}