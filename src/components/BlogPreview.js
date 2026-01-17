import React from "react";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

import { blogs } from "@/lib/Blog-data";

const featuredPosts = blogs.slice(0, 2);

const BlogPreview = () => {
    return (
        <section id="blog-preview" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <div className="flex gap-2 mb-4">
                            <span className="w-12 h-px bg-cyan-500" />
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                                Knowledge Base
                            </p>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                            Insights & <br /> <span className="text-white/10 italic font-serif lowercase">Performance.</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium leading-relaxed">
                            Deep dives into Technical SEO architecture, Core Web Vital surgeries, and the future of Answer Engine Optimization.
                        </p>
                    </div>

                    <Link
                        href="/blog"
                        className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white border border-white/10 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
                    >
                        View All Blogs <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>

                {/* POSTS LIST */}
                <div className="space-y-4">
                    {featuredPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col md:flex-row justify-between p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[9px] font-black uppercase tracking-widest rounded-md border border-cyan-500/20">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </div>
                                </div>
                                <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-cyan-500 transition-colors">
                                    {post.title}
                                </h3>
                            </div>

                            <div className="mt-6 md:mt-0 flex flex-col items-start md:items-end gap-2">
                                <p className="text-[10px] font-mono text-slate-500 uppercase">{post.date}</p>
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-700 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;