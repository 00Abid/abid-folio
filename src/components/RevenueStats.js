import React from "react";
import { TrendingUp, Calendar, Target } from "lucide-react";

export default function RevenueStats() {
    return (
        <section className="py-16 md:py-20 px-4 md:px-6 bg-[#050505]">
            <div className="max-w-7xl mx-auto">
                
                {/* HEADER */}
                <div className="mb-12 md:mb-20">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500 mb-4">
                        Financial Impact
                    </p>
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter">
                        Verified <br /> <span className="text-white/50 italic font-serif lowercase">revenue.</span>
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-medium">
                        Proof of Revenue. I build custom SEO, AEO, and GEO systems that turn technical improvements into organic revenue and sales.
                    </p>
                </div>

                {/* MAIN PERFORMANCE CONTAINER */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    
                    {/* HERO STAT CARD */}
                    <div className="lg:col-span-2 p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 flex flex-col justify-between group">
                        <div>
                            <div className="flex items-center gap-3 mb-6 sm:mb-8 text-cyan-500">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    <TrendingUp size={16} />
                                </div>
                                <h3 className="text-[10px] font-black uppercase tracking-widest text-white">
                                    Primary Growth Metric
                                </h3>
                            </div>
                            
                            <div className="flex items-baseline gap-1 sm:gap-2 mb-2 flex-wrap">
                                <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white">
                                    ₹2.6M
                                </span>
                                <span className="text-3xl sm:text-4xl md:text-6xl font-black text-cyan-500">+</span>
                            </div>
                            <p className="text-sm md:text-base text-slate-400 font-medium max-w-lg mb-6 sm:mb-8">
                                Direct organic revenue generated for enterprise clients. I build SEO, AEO, and GEO systems that turn site structure into real money.
                            </p>
                        </div>

                        {/* Interactive Performance Bar */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                <span>Organic Funnel Efficiency</span>
                                <span className="text-cyan-500">100% Target Attained</span>
                            </div>
                            <div className="relative h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="absolute top-0 left-0 h-full bg-cyan-500 rounded-full animate-bar-fill shadow-[0_0_20px_rgba(6,182,212,0.5)]" />
                            </div>
                        </div>
                    </div>

                    {/* STATS BENTO GRID RIGHT COLUMN */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
                        
                        {/* Box 1 */}
                        <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4 text-cyan-500">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    <Calendar size={16} />
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Timeframe</h4>
                            </div>
                            <p className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">10 Months</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 font-mono">From audit to ranking and revenue</p>
                        </div>

                        {/* Box 2 */}
                        <div className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group">
                            <div className="flex items-center gap-3 mb-4 text-cyan-500">
                                <div className="p-2 bg-cyan-500/10 rounded-lg">
                                    <Target size={16} />
                                </div>
                                <h4 className="text-[10px] font-black uppercase tracking-widest text-white">Lead Growth</h4>
                            </div>
                            <p className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">260+ Leads</p>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1 font-mono">Verified High-Intent</p>
                        </div>

                    </div>
                </div>

                {/* EXTRA BOTTOM STAT DETAILS */}
                <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {[
                        { label: "Crawl Efficiency", val: "99.8%", desc: "Near-zero waste on search budget" },
                        { label: "Indexing Velocity", val: "5x Faster", desc: "API automated search indexing" },
                        { label: "Developer Dependency", val: "0.0%", desc: "Direct engineering & execution" }
                    ].map((stat, idx) => (
                        <div key={idx} className="p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                            <p className="text-[10px] text-cyan-500 uppercase tracking-[0.2em] font-black">{stat.label}</p>
                            <p className="text-xl sm:text-2xl font-black text-white mt-1">{stat.val}</p>
                            <p className="text-xs text-slate-500 mt-2 font-medium">{stat.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}