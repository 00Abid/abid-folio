import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogs } from '@/lib/Blog-data';
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2 } from 'lucide-react';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogs.find((b) => b.slug === slug);
    if (!post) return;

    return {
        title: `${post.title} | Abid Khan`,
        description: post.directAnswer,
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.directAnswer,
            images: [
                {
                    url: post.image,
                },
            ],
        },
    };
}

// Generates static paths for better SSR performance
export async function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = blogs.find((b) => b.slug === slug);

    if (!post) notFound(); // Triggers your custom 404

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "author": {
            "@type": "Person",
            "name": post.author,
            "url": "https://abid-folio.vercel.app"
        },
        "genre": post.category,
        "keywords": "SEO, Next.js, Web Performance, " + post.category,
        "publisher": {
            "@type": "Organization",
            "name": "Abid Khan",
            "logo": {
                "@type": "ImageObject",
                "url": "https://abid-folio.vercel.app/logo.png"
            }
        },
        "url": `https://abid-folio.vercel.app/blog/${post.slug}`,
        "datePublished": "2026-01-01", // Ideally parse post.date
        "dateModified": new Date().toISOString().split('T')[0],
        "description": post.directAnswer,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://abid-folio.vercel.app/blog/${post.slug}`
        },
        "mainEntity": {
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": post.mainQuestion,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": post.directAnswer
                    }
                }
            ]
        }
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="max-w-4xl mx-auto">

                {/* HEADER: Template Title & Credibility */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[9px] font-black uppercase tracking-widest rounded-md border border-cyan-500/20">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                            <Clock size={12} /> {post.readTime}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-black text-black text-xs">
                            AK
                        </div>
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-white">{post.author}</p>
                            <p className="text-[9px] font-bold uppercase text-slate-500">Technical SEO • Verified: {post.date}</p>
                        </div>
                    </div>
                </header>

                {/* HERO IMAGE */}
                <div className="relative aspect-video md:w-[70%] rounded-[2.5rem] overflow-hidden border border-white/10 mb-16">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 70vw"
                    />
                </div>

                {/* TEMPLATE SECTION: MAIN QUESTION (AEO) */}
                <section className="mb-12 p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-4">Core Inquiry</h2>
                    <p className="text-2xl font-black uppercase tracking-tight text-white italic">
                        "{post.mainQuestion}"
                    </p>
                </section>

                {/* TEMPLATE SECTION: DIRECT ANSWER */}
                <section className="mb-12">
                    <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 size={16} className="text-cyan-500" />
                        <h3 className="text-xs font-black uppercase tracking-widest">Direct Resolution</h3>
                    </div>
                    <p className="text-xl text-slate-300 leading-relaxed font-medium bg-white/5 p-6 rounded-2xl border-l-4 border-cyan-500">
                        {post.directAnswer}
                    </p>
                </section>

                {/* TEMPLATE SECTION: TL;DR SUMMARY */}
                <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
                    <div>
                        <h3 className="text-xs font-black uppercase tracking-widest mb-4">TL;DR Summary</h3>
                        <ul className="space-y-3">
                            {post.tl_dr.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-400 font-medium">
                                    <span className="text-cyan-500 mt-1.5">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0">
                        <p className="text-[9px] font-mono text-slate-600 uppercase mb-2">Citable Content Ready</p>
                        <button className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-colors">
                            Share Insights <Share2 size={12} />
                        </button>
                    </div>
                </section>

                {/* TEMPLATE SECTION: FORMATTED CONTENT */}
                <div className="space-y-16 mb-20">
                    {post.contentSections.map((section, i) => (
                        <section key={i} className="max-w-3xl">
                            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6">
                                {section.heading}
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-medium">
                                {section.body}
                            </p>
                        </section>
                    ))}
                </div>

                {/* CTA SECTION */}
                <footer className="pt-12 border-t border-white/10 md:w-[70%] mx-auto">
                    <div className="p-10 bg-cyan-500 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
                        <h3 className="text-black text-2xl font-black uppercase tracking-tighter text-center md:text-left leading-none">
                            Need to Engineer <br /> Your Search Growth?
                        </h3>
                        <Link href="/#contact" className="md:w-[50%] px-10 py-5 bg-black text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-colors">
                            {post.cta}
                        </Link>
                    </div>
                </footer>

            </div>
        </main>
    );
}