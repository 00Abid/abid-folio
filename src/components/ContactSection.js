import React from "react";
import { Github, Linkedin, Mail, FileText, Send, ArrowRight } from "lucide-react";

const socialLinks = [
    {
        id: 1,
        href: "mailto:kabid00000@gmail.com",
        icon: <Mail size={24} />,
        label: "Email",
        value: "kabid00000@gmail.com"
    },
    {
        id: 2,
        href: "https://github.com/00Abid",
        icon: <Github size={24} />,
        label: "GitHub",
        value: "@00Abid"
    },
    {
        id: 3,
        href: "https://www.linkedin.com/in/abid-khan-coder/",
        icon: <Linkedin size={24} />,
        label: "LinkedIn",
        value: "abid-khan-coder"
    },
    {
        id: 4,
        href: "/Abid-Khan-Resume.pdf",
        icon: <FileText size={24} />,
        label: "Resume",
        value: "Download PDF"
    },
];

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-[#050505] relative overflow-hidden">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                backgroundSize: '100px 100px'
            }} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* LEFT: SEO Conversion Pitch */}
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-12 h-px bg-cyan-500" />
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500">
                                Connection Portal
                            </p>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
                            Let's build <br />
                            <span className="text-white/10 italic font-serif lowercase">Authority.</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed">
                            Available for technical audits, Next.js migrations, and programmatic SEO consulting. Drop a message to start the synchronization.
                        </p>
                    </div>

                    {/* RIGHT: High-Speed Link Matrix */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                target={link.id === 1 ? "_self" : "_blank"}
                                rel="noopener noreferrer"
                                className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between min-h-[180px]"
                            >
                                <div className="text-cyan-500 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
                                    {link.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                                        {link.label}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {link.value}
                                        </span>
                                        <ArrowRight size={16} className="text-slate-700 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
                                    </div>
                                </div>
                            </a>
                        ))}

                        {/* DIRECT CTA BOX */}
                        <div className="sm:col-span-2 mt-4 p-8 rounded-[2rem] bg-cyan-500 flex flex-col md:flex-row items-center justify-between gap-6 group cursor-pointer transition-transform hover:scale-[1.01]">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-black rounded-2xl text-cyan-500">
                                    <Send size={24} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <p className="text-black font-black uppercase text-sm tracking-tighter leading-none">Instant Inquiry</p>
                                    <p className="text-black/60 text-[10px] font-bold uppercase tracking-widest mt-1">Average Response: &lt; 2 Hours</p>
                                </div>
                            </div>
                            <a href="mailto:kabid00000@gmail.com" className="w-full md:w-auto text-center px-10 py-4 bg-black text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-colors">
                                Send Message
                            </a>
                        </div>
                    </div>
                </div>

                {/* SEO Metadata Footer Tag */}
                <div className="mt-32 pt-12 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-slate-700 uppercase tracking-[0.3em]">
                    <span>Endpoint: Verified</span>
                    <span>Encrypted Submission Available</span>
                    <span className="hidden md:block italic">Crafting search dominance since 2023</span>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;