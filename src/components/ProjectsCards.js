import React from "react";
import Image from "next/image";
import { ArrowUpRight, Zap } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Aero Enterprises",
        subtitle: "Enterprise Technical Architecture",
        tech: ["Next.js", "Schema", "JSON-LD"],
        desc: (
            <>
                Owned the full-stack architecture. Rebuilt the site independently, eliminating crawl debt at{" "}
                <a href="https://www.aeroenterprises.shop/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
                    Aero Enterprises
                </a>{" "}
                to secure 260+ high-intent conversions and contributing to ₹2.6M+ in verified client revenue.
            </>
        ),
        image: "/ae.webp",
        link: "https://www.aeroenterprises.shop/",
        performance: "₹2.6M+ Revenue",
    },
    {
        id: 2,
        title: "Raja Buffing Works",
        subtitle: "Local & GEO Dominance",
        tech: ["Next.js", "Review Schema", "GSC"],
        desc: (
            <>
                Executed a zero-dependency strategy to secure Top 3 Local Pack rankings at{" "}
                <a href="https://rajabuffing.shop/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline">
                    Raja Buffing Works
                </a>
                . Drove 284+ verified direction clicks, directly converting search intent into local customer revenue.
            </>
        ),
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
        <section id="projects" className="py-16 md:py-20 px-4 md:px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-12 md:mb-16">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-4">
                        Case Studies
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        SEO <br /> <span className="text-white/50 italic font-serif lowercase">proof.</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-6 leading-relaxed font-medium">
                        Real results for real brands. I use SEO, AEO, and GEO to grow search traffic and make more money for clients.
                    </p>
                </div>

                {/* PROJECTS BENTO GRID (Compact Modern Feel) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className="group relative bg-white/[0.05] border border-white/5 rounded-[1.5rem] overflow-hidden hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between"
                        >
                            {/* Image & Performance Overlay */}
                            <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={index === 0}
                                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                                <div className="absolute top-3 right-3">
                                    <div className="bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                                        <Zap size={10} className="text-cyan-500 animate-pulse" />
                                        <span className="text-[8px] font-black text-white tracking-wide uppercase">{project.performance}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-6 flex flex-col justify-between flex-grow">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start gap-2">
                                        <div>
                                            <h3 className="text-lg font-black uppercase tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-[8px] font-bold text-cyan-500/80 uppercase tracking-widest mt-0.5">
                                                {project.subtitle}
                                            </p>
                                        </div>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2.5 bg-white/5 rounded-xl hover:bg-cyan-500 hover:text-black transition-all shrink-0"
                                        >
                                            <ArrowUpRight size={14} />
                                        </a>
                                    </div>

                                    <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-4">
                                        {project.desc}
                                    </p>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-6 mt-auto">
                                    {project.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[8px] font-black uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/5 rounded text-slate-400"
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