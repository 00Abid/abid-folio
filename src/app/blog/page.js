import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { blogs } from '@/lib/Blog-data';
import { Clock, User, Calendar, ArrowRight, Search } from 'lucide-react';

export const metadata = {
    title: "Insights | Abid Khan Technical SEO",
    description: "Technical SEO insights, AEO strategies, and high-performance frontend engineering logs.",
};

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white pt-10 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <header className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-px bg-cyan-500" />
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                            Technical Logs & AEO Insights
                        </p>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6">
                        The <span className="text-white/10 italic font-serif lowercase">Crawl.</span>
                    </h1>
                    <p className="max-w-xl text-slate-500 text-lg font-medium leading-relaxed">
                        Documenting the intersection of LLM-friendly architecture,
                        Core Web Vital surgeries, and search authority.
                    </p>
                </header>

                {/* SEARCH / FILTER BAR (Visual Only for now) */}
                <div className="mb-12 flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl max-w-md">
                    <Search size={18} className="text-slate-600" />
                    <input
                        type="text"
                        placeholder="Search index..."
                        className="bg-transparent border-none outline-none text-xs font-bold uppercase tracking-widest placeholder:text-slate-700 w-full"
                    />
                </div>

                {/* BLOG LIST: Engineered for Skimmability */}
                <div className="grid grid-cols-1 gap-4">
                    {blogs.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col lg:flex-row gap-8 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            {/* Image Preview */}
                            <div className="relative w-full lg:w-72 aspect-video lg:aspect-square overflow-hidden rounded-3xl shrink-0 transition-all duration-700">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority={index === 0}
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 1024px) 100vw, 300px"
                                />
                            </div>

                            {/* Meta & Content */}
                            <div className="flex-1 flex flex-col justify-between py-2">
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[9px] font-black uppercase tracking-widest rounded-md border border-cyan-500/20">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                                            <Calendar size={12} />
                                            {post.date}
                                        </div>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white group-hover:text-cyan-500 transition-colors mb-4 leading-none">
                                        {post.title}
                                    </h2>

                                    {/* AI SEO KEY: The Direct Answer Preview */}
                                    <div className="p-4 bg-white/5 rounded-xl border-l-2 border-cyan-500/50 mb-4">
                                        <p className="text-[11px] font-bold uppercase text-cyan-500/70 mb-1 tracking-widest">Quick Answer</p>
                                        <p className="text-slate-400 text-sm italic line-clamp-2">
                                            {post.directAnswer}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-cyan-500 transition-colors">
                                    Read Analysis <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}