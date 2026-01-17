import React from "react";
import Image from "next/image";
import { ArrowUpRight, Globe, Zap, ShieldCheck } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Aero Enterprises",
        subtitle: "Industrial Technical SEO & Next.js 16",
        tech: ["Next.js 16", "Schema", "GSC", "Perplexity AI"],
        desc: "Achieved 1,000+ views and 260 directions. Optimized for AI Overviews and Perplexity citations with 100% GSC indexing and 95+ Lighthouse scores.",
        image: "/ae.webp", 
        link: "https://www.aeroenterprises.shop/",
        performance: "95+ LHR",
        impact: "260 Directions"
    },
    {
        id: 2,
        title: "Raja Buffing Works",
        subtitle: "Local Pack Domination & Growth",
        tech: ["Next.js", "Local SEO", "Review Schema"],
        desc: "Secured Top 3 ranking for 'Buffing Vasai'. Drove 284 direction clicks in 5 months with a 5.2% CTR and GSC-verified Position 3.9.",
        image: "/rbw.webp",
        link: "https://rajabuffing.shop/",
        performance: "100% CWV",
        impact: "Top 3 Rank"
    },
    {
        id: 3,
        title: "Titan SEO Auditor",
        subtitle: "Python Automation & NLP",
        tech: ["Python", "PageSpeed API", "SpaCy NLP"],
        desc: "Built a custom SEO auditor that automates PageSpeed analysis and NLP-based content audits for 5+ client sites simultaneously.",
        image: "/titan.webp",
        link: "https://github.com/00Abid/ai-visibility-checker",
        performance: "Automation",
        impact: "5+ Site Audits"
    },
    {
        id: 4,
        title: "AI Visibility Checker",
        subtitle: "AEO (Answer Engine Optimization)",
        tech: ["HEEB API", "Python", "LLM Tracking"],
        desc: "Developed a tool to track brand mentions across ChatGPT and Perplexity, validating Answer Engine visibility for industrial brands.",
        image: "/ai.webp",
        link: "https://github.com/00Abid/ai-visibility-checker",
        performance: "AEO Ready",
        impact: "Brand Tracking"
    },
];

const ProjectCards = () => {
    return (
        <section id="projects" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-20">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-px bg-cyan-500" />
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                            Case Studies & Deployments
                        </p>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        Technical <br /> <span className="text-white/10 italic font-serif lowercase">Audit.</span>
                    </h2>
                </div>

                {/* PROJECTS BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/9] overflow-hidden  group-hover:transition-all duration-700">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 50vw"
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

                                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
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