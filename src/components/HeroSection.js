import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Terminal } from "lucide-react";

const HeroSection = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] -z-10 opacity-30" />

            <div className="max-w-7xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <div className="lg:w-2/3 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">Available for new projects</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1]">
                            GROWTH <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                ENGINEER.
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
                            Enterprise SEO Strategist & Frontend Developer. I help large sites scale organic traffic through technical SEO, programmatic content, and high-performance Next.js architectures.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="/#contact"
                                className="px-8 py-4 bg-cyan-500 text-black rounded-full font-black uppercase tracking-widest hover:bg-cyan-400 transition-all flex items-center gap-2 group"
                            >
                                Start Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/Abid-Khan-Resume.pdf"
                                target="_blank"
                                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-black uppercase tracking-widest hover:bg-white/5 transition-all flex items-center gap-2"
                            >
                                Resume <Download size={18} />
                            </Link>
                        </div>

                        <div className="pt-12 flex items-center gap-8 text-sm text-slate-500 font-mono">
                            <div className="flex items-center gap-2">
                                <Terminal size={16} className="text-cyan-500" />
                                <span>Next.js Expert</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Terminal size={16} className="text-cyan-500" />
                                <span>Technical SEO</span>
                            </div>
                        </div>
                    </div>

                    {/* Optional: Hero Image or Graphic could go here */}
                    <div className="hidden lg:block lg:w-1/3">
                        {/* Abstract Code graphic or similar can be added here */}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
