import React from "react";
import {
    BarChart3,
    Code2,
    Zap,
    Database,
    Search,
    MapPin,
    ShieldCheck
} from "lucide-react";

const skillGroups = [
    {
        category: "Development & Architecture",
        icon: <Code2 size={16} />,
        items: ["Next.js", "React", "Python", "Tailwind CSS", "GitHub", "Vercel"]
    },
    {
        category: "Technical SEO & Performance",
        icon: <Zap size={16} />,
        items: ["Lighthouse (CWV)", "Schema Markup", "IndexNow", "Bing Webmaster", "100% Indexing"]
    },
    {
        category: "Analytics & SEO Tools",
        icon: <BarChart3 size={16} />,
        items: ["GA4", "GTM", "GSC", "SEMrush", "Ahrefs", "Screaming Frog", "PageSpeed Insights"]
    },
    {
        category: "On-Page & AEO Strategy",
        icon: <Search size={16} />,
        items: ["Title Optimization", "Meta Tags", "H1-H6 Structure", "Internal Linking", "Content Clusters", "AEO"]
    },
    {
        category: "Local SEO & Optimization",
        icon: <MapPin size={16} />,
        items: ["GBP/GMB Optimization", "GBP Everywhere", "Local Citations", "Review Schema"]
    }
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 px-6 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-24">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-12 h-px bg-cyan-500" />
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                            Technical Stack
                        </p>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        Skill <span className="text-white/10 italic font-serif lowercase">Infrastructure.</span>
                    </h2>
                </div>

                {/* BENTO GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                                        className="px-4 py-2 bg-white/[0.03] border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-white group-hover:border-white/20 transition-all"
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
                            <p className="font-black uppercase text-sm tracking-tighter">Production Grade Standards</p>
                            <p className="text-[10px] font-bold uppercase opacity-70">All deployments optimized for indexability and speed.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 border-2 border-black rounded-lg text-[10px] font-black uppercase">CWV 100/100</div>
                        <div className="px-4 py-2 border-2 border-black rounded-lg text-[10px] font-black uppercase">SSR Native</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;