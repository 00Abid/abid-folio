import React from "react";
import { Briefcase, MapPin, Calendar, Terminal, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        id: 1,
        company: "SENTARI AI",
        role: "Technical SEO & Frontend Engineer",
        period: "Sep 2025 - Nov 2025",
        location: "New York, USA",
        metrics: "20% Organic Lift",
        points: [
            "Engineered high-performance interfaces using Next.js and Tailwind, achieving 100/100 Core Web Vital scores.",
            "Performed deep-crawl technical audits to resolve indexing bottlenecks and rendering debt.",
            "Architected JSON-LD structured data strategy to capture rich result snippets in SERPs.",
            "Reduced LCP (Largest Contentful Paint) by 40% through advanced image optimization and code splitting.",
            "Aligned product roadmaps with search intent data to improve user retention and UX flow.",
            "Automated SEO reporting using Lighthouse CI and PageSpeed Insights API for continuous monitoring."
        ]
    }
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-12 h-px bg-cyan-500" />
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                                Career Logbook
                            </p>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            Professional <br /> <span className="text-white/10 italic font-serif lowercase">Experience</span>
                   
                     </h2>
                    </div>
                    <p className="text-slate-500 font-mono text-xs uppercase tracking-widest hidden md:block">
                        Ver: 1.0.4 // Last Sync: Jan 2026
                    </p>
                </div>

                {/* EXPERIENCE LIST */}
                <div className="space-y-12">
                    {experiences.map((exp) => (
                        <article
                            key={exp.id}
                            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-500"
                        >
                            {/* LEFT COL: Identity & Meta */}
                            <div className="lg:col-span-4 space-y-6">
                                <div>
                                    <h3 className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-cyan-500 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg font-serif italic text-slate-400 mt-1">{exp.company}</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <Calendar size={14} className="text-cyan-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-slate-500">
                                        <MapPin size={14} className="text-cyan-500" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{exp.location}</span>
                                    </div>
                                </div>

                                <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                                    <p className="text-[10px] font-black uppercase tracking-widest text-cyan-500">
                                        Impact: {exp.metrics}
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT COL: Technical Points */}
                            <div className="lg:col-span-8">
                                <div className="flex items-center gap-2 mb-6 text-slate-700">
                                    <Terminal size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Execution Logs</span>
                                </div>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start gap-4 group/item">
                                            <CheckCircle2 size={16} className="text-slate-800 group-hover/item:text-cyan-500 transition-colors shrink-0 mt-1" />
                                            <p className="text-sm text-slate-400 leading-relaxed font-medium">
                                                {point}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* ACCENT DECOR */}
                            <div className="absolute top-8 right-8 text-slate-900 font-black text-6xl select-none opacity-20 group-hover:opacity-40 transition-opacity">
                                0{exp.id}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;