import React from "react";
import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Aero Enterprises",
        subtitle: "Enterprise Technical Architecture",
        tech: ["Next.js", "Schema", "JSON-LD"],
        desc: "Owned the full-stack architecture. Rebuilt the site independently, eliminating crawl debt to secure 260+ high-intent conversions and contributing to ₹2.6M+ in verified client revenue.",
        image: "/ae.webp",
        link: "https://www.aeroenterprises.shop/",
        performance: "₹2.6M+ Revenue",
    },
    {
        id: 2,
        title: "Raja Buffing Works",
        subtitle: "Local & GEO Dominance",
        tech: ["Next.js", "Review Schema", "GSC"],
        desc: "Executed a zero-dependency strategy to secure Top 3 Local Pack rankings. Drove 284+ verified direction clicks, directly converting search intent into local customer revenue.",
        image: "/rbw.webp",
        link: "https://rajabuffing.shop/",
        performance: "Verified ROI",
    },
    {
        id: 3,
        title: "Titan SEO Auditor",
        subtitle: "Full-Stack Automation",
        tech: ["Python", "API", "NLP"],
        desc: "Engineered an automation engine to fix revenue-leaking errors 5x faster than manual audits. Currently scaling technical oversight for 5+ production environments.",
        image: "/titan.webp",
        link: "https://github.com/00Abid/ai-visibility-checker",
        performance: "Scalable Growth",
    },
    {
        id: 4,
        title: "AI Visibility Tracker",
        subtitle: "AEO & Brand Authority",
        tech: ["Python", "LLM API", "AEO"],
        desc: "Developed a proprietary AEO stack to track and capture brand authority in Perplexity and ChatGPT. Protects market share and revenue in AI-driven search environments.",
        image: "/ai.webp",
        link: "https://github.com/00Abid/ai-visibility-checker",
        performance: "Market Leadership",
    },
];

const ProjectCards = () => {
    return (
        <section id="projects" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-20">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-4">
                        Case Studies
                    </p>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        Revenue <br /> <span className="text-white/10 italic font-serif lowercase">Generated.</span>
                    </h2>
                </div>

                {/* PROJECTS BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={index === 0}
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute top-6 right-6">
                                    <div className="bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                                        <Zap size={12} className="text-cyan-500" />
                                        <span className="text-[10px] font-black text-white">{project.performance}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-1">
                                            {project.title}
                                        </h3>
                                        <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="p-4 bg-white/5 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all"
                                    >
                                        <ArrowUpRight size={20} />
                                    </a>
                                </div>

                                <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                                    {project.desc}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-slate-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCards;