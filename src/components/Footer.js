import Link from "next/link";
import { Terminal, ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react";

const footerLinks = [
    { name: "Projects", href: "/#projects" },
    { name: "Technical Skills", href: "/#skills" },
    { name: "Career Path", href: "/#experience" },
    { name: "SEO Insights", href: "/blog" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer role="contentinfo" className="bg-[#050505] border-t border-white/5 pt-24 pb-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* BRAND ARCHITECTURE */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-cyan-500 rounded flex items-center justify-center">
                                <Terminal size={14} className="text-black" />
                            </div>
                            <span className="font-black text-lg tracking-tighter uppercase">
                                Abid<span className="text-cyan-500 italic">.seo</span>
                            </span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
                            Developing high-performance digital architectures that dominate search results.
                            Specializing in Technical SEO and Next.js engineering.
                        </p>
                        <div className="flex gap-4 pt-2" data-gtm={link.label}>
                            <a href="https://github.com/00Abid" className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300" aria-label="GitHub">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/abid-khan-coder/" className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://x.com/kaabid1557" className="p-2 bg-white/5 rounded-lg hover:bg-cyan-500 hover:text-black transition-all duration-300" aria-label="Twitter">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* SITE MAPPING (SEO Internal Links) */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-8">Navigation</h4>
                        <ul className="space-y-4">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm font-bold text-slate-400 hover:text-white flex items-center group transition-colors"
                                    >
                                        {link.name}
                                        <ArrowUpRight size={14} className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* SYSTEM STATUS (Conversion Info) */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-8">Availability</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                                <p className="text-sm font-bold">Open for 2026 Projects</p>
                            </div>
                            <p className="text-xs text-slate-500 leading-relaxed font-medium">
                                Focusing on Programmatic SEO and Next.js performance auditing.
                            </p>
                            <a
                                href="mailto:kabid00000@gmail.com"
                                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white border-b border-cyan-500 pb-1 hover:text-cyan-500 transition-colors"
                            >
                                Start Technical Inquiry <Mail size={12} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM LEGAL STRIP */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">
                        © {currentYear} ALL RIGHTS RESERVED / BUILT FOR PERFORMANCE
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] font-mono text-slate-700 uppercase">Core Web Vitals: 100/100</span>
                        <span className="text-[10px] font-mono text-slate-700 uppercase">SSR: ACTIVE</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}