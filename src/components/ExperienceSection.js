import React from "react";
import { Briefcase, MapPin, Calendar, Terminal, CheckCircle2 } from "lucide-react";

const experiences = [
    {
        id: 1,
        company: "Industrial Automation India",
        role: "Technical SEO Specialist",
        period: "Feb 2026 - Present",
        location: "Andheri, India (Remote)",
        metrics: "24% Click Growth",
        points: [
            "Led SEO for a B2B platform with 32,000+ subscribers, driving a 24% growth in organic clicks and 10% in impressions.",
            "Achieved 1,373% growth in events section traffic and 304% growth in AI content vertical clicks.",
            "Conducted full GSC audits diagnosing 13,403 non-indexed pages; resolved 1,700+ broken URLs via pattern-based 301 redirects and Next.js middleware.",
            "Designed a Hub-and-Spoke URL taxonomy for 145+ city and country hubs, directing developer implementation with JSON-LD ItemList schema[cite: 1].",
            "Upgraded 5,000+ company entities from H6 to H3 and configured robots.txt and structured data (Expert Person Schema) for GPTBot and ClaudeBot to position the platform as a primary AI citation source[cite: 1]."
        ]
    },
    {
        id: 2,
        company: "Freelance",
        role: "SEO Specialist",
        period: "Jun 2025 - Present",
        location: "Vasai, India",
        metrics: "₹2.6M+ Revenue Generated",
        points: [
            "Managed SEO for 2 industrial B2B clients, generating over ₹2.6M in verified revenue over 10 months[cite: 1].",
            "Built a 15+ product PSEO system using Next.js dynamic slug routing, resulting in 100% GSC indexing for all pages[cite: 1].",
            "Achieved Top 3 Local Pack rankings for high-intent local queries with verified 5.2% CTR and Avg Position 3.9[cite: 1].",
            "Deployed 5 Next.js sites achieving 95+ Lighthouse scores and 100% Core Web Vitals, including error-free domain migrations[cite: 1]."
        ]
    },
    {
        id: 3,
        company: "SENTARI AI",
        role: "SDE Intern",
        period: "Sep 2025 - Nov 2025",
        location: "New York, USA (Remote)",
        metrics: "95+ Lighthouse Score",
        points: [
            "Improved mobile Lighthouse performance from 70s to 95+ through strategic code-splitting, lazy loading, and WebP optimization[cite: 1].",
            "Deployed site-wide JSON-LD and Open Graph tags, successfully resolving critical crawl errors and indexing gaps[cite: 1].",
            "Built a real-time notification system using Server-Sent Events while collaborating with distributed US engineering teams[cite: 1]."
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
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                                Career Logbook
                            </p>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            Professional <br /> <span className="text-white/10 italic font-serif lowercase">Experience.</span>
                        </h2>
                    </div>
                </div>

                {/* EXPERIENCE LIST */}
                <div className="space-y-12">
                    {experiences.map((exp) => (
                        <article
                            key={exp.id}
                            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyan-500/20 transition-all duration-500"
                        >
                            {/* LEFT COL */}
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
                                        {exp.metrics}
                                    </p>
                                </div>
                            </div>

                            {/* RIGHT COL */}
                            <div className="lg:col-span-8">
                                <div className="flex items-center gap-2 mb-6 text-slate-700">
                                    <Terminal size={16} />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Execution Logs</span>
                                </div>

                                <ul className="grid grid-cols-1 gap-y-6">
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

                            {/* ACCENT */}
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