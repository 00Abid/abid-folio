import React from "react";
import { BarChart3, Code2, Zap, Search, MapPin, ShieldCheck, Cpu } from "lucide-react";

const skillGroups = [
    {
        category: "Full-Stack Execution",
        icon: <Code2 size={16} />,
        items: ["Next.js", "React", "Python", "Tailwind CSS", "Vercel", "Git"]
    },
    {
        category: "Technical SEO & CWV",
        icon: <Zap size={16} />,
        items: ["Lighthouse (100/100)", "Schema Markup", "JSON-LD", "Crawl Budget", "Indexing"]
    },
    {
        category: "Growth & Analytics",
        icon: <BarChart3 size={16} />,
        items: ["GA4", "GTM", "GSC", "Ahrefs", "Screaming Frog", "Data Automation"]
    },
    {
        category: "Strategic SEO & AEO",
        icon: <Search size={16} />,
        items: ["AEO (Answer Engines)", "Programmatic SEO", "Content Clusters", "Entity SEO"]
    },
    {
        category: "Local & GEO Authority",
        icon: <MapPin size={16} />,
        items: ["GBP Optimization", "Review Schema", "Local Pack Ranking", "GEO Strategy"]
    },
    {
        category: "Independent Ops",
        icon: <Cpu size={16} />,
        items: ["Zero Dev Dependency", "API Automation", "Middleware SEO", "Full Ownership"]
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-24">
                    <div className="flex items-center gap-2 mb-4">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                            Core Competencies
                        </p>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        Revenue <br /><span className="text-white/50 italic font-serif lowercase">Stack.</span>
                    </h2>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillGroups.map((group, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-3 mb-8 text-cyan-500">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    {group.icon}
                                </div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">
                                    {group.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white transition-all"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* SEO ADVANTAGE BAR */}
                <div className="mt-4 p-8 rounded-[2rem] bg-cyan-500 text-black flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        <ShieldCheck size={32} strokeWidth={2.5} />
                        <div>
                            <p className="font-black uppercase text-sm tracking-tighter">Full-Stack Autonomy</p>
                            <p className="text-[10px] font-bold uppercase opacity-70">I ship SEO, schema, and performance code—no developer needed.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 border-2 border-black rounded-lg text-[10px] font-black uppercase">Revenue-First</div>
                        <div className="px-4 py-2 border-2 border-black rounded-lg text-[10px] font-black uppercase">Developer-Free</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;