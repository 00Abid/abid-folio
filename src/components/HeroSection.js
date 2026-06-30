import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Cpu, Radio, Sparkles } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="home" className="relative pt-28 md:pt-36 pb-16 md:pb-20 px-4 md:px-6 min-h-screen flex items-center bg-[#050505] overflow-hidden">
            {/* Ambient Background Glows */}
            <div aria-hidden="true" className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] -z-10 opacity-40" />
            <div aria-hidden="true" className="absolute bottom-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-purple-500/10 rounded-full blur-[60px] md:blur-[100px] -z-10 opacity-20" />

            <div className="max-w-7xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* LEFT COLUMN: HERO INTRO & POSITIONING */}
                    <div className="lg:col-span-7 space-y-6 md:space-y-8">
                        
                        {/* Interactive Status Badge */}
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-[9px] font-black text-cyan-500 uppercase tracking-widest">
                                Live & Active: Taking Projects for 2026
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter leading-[0.95]">
                            SEO, AEO & GEO <br />
                            <span className="text-white/50 italic font-serif lowercase">Specialist.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm md:text-lg text-slate-400 max-w-xl leading-relaxed font-medium">
                            I build SEO, AEO, and GEO strategies that turn web traffic into sales and revenue. I write Next.js, Schema, and APIs myself without needing developers.
                        </p>

                        {/* Action buttons */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                            <Link
                                href="/#contact"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-cyan-500 text-black rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-cyan-400 transition-all flex items-center gap-2 group"
                            >
                                Hire Me <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <a
                                href="/Abid-Khan-Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-white/10 text-white rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-white/5 transition-all flex items-center gap-2"
                            >
                                Resume <Download size={14} />
                            </a>
                        </div>

                        {/* Core Features */}
                        <div className="pt-6 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-3 text-[9px] sm:text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                            <div className="flex items-center gap-2">
                                <Cpu size={14} className="text-cyan-500" />
                                <span>Zero Dev Dependency</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Sparkles size={14} className="text-cyan-500" />
                                <span>AI Overview Optimized</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: INTERACTIVE VISIBILITY DASHBOARD */}
                    <div className="lg:col-span-5 w-full">
                        <div className="relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-500 group">
                            
                            {/* Dashboard Top Navigation */}
                            <div className="flex justify-between items-center mb-6 sm:mb-8">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                                </div>
                                <div className="flex items-center gap-2 text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                                    <Radio size={12} className="text-cyan-500 animate-pulse" />
                                    <span>console.stream</span>
                                </div>
                            </div>

                            {/* Console Outputs */}
                            <div className="space-y-3 sm:space-y-4 font-mono text-[11px] sm:text-xs">
                                
                                <div className="p-3.5 sm:p-4 bg-white/[0.05] border border-white/5 rounded-xl">
                                    <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Indexation Status</p>
                                    <p className="text-white font-bold flex items-center justify-between gap-2">
                                        <span>Googlebot Crawl Rate</span>
                                        <span className="text-cyan-500 shrink-0">99.8% Perfect</span>
                                    </p>
                                </div>

                                <div className="p-3.5 sm:p-4 bg-white/[0.05] border border-white/5 rounded-xl">
                                    <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Answer Engine Visibility</p>
                                    <p className="text-white font-bold flex items-center justify-between gap-2">
                                        <span>Perplexity citations</span>
                                        <span className="text-purple-400 shrink-0">Captured (1st)</span>
                                    </p>
                                </div>

                                <div className="p-3.5 sm:p-4 bg-white/[0.05] border border-white/5 rounded-xl">
                                    <p className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Performance Benchmarks</p>
                                    <p className="text-white font-bold flex items-center justify-between gap-2">
                                        <span>Lighthouse Core Web Vitals</span>
                                        <span className="text-green-400 shrink-0">100 / 100</span>
                                    </p>
                                </div>

                            </div>

                            {/* Tiny Status Footer */}
                            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-600 uppercase tracking-wider">
                                <span>Engine: Next.js SSR</span>
                                <span>Status: Sync Active</span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;