"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [isOpen]);

    return (
        <nav
            className={`fixed top-0 w-full z-100 transition-all duration-300 px-6 ${scrolled ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/10" : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">

                {/* LOGO */}
                <Link href="/" aria-label="Abid Khan SEO Portfolio" className="flex items-center gap-2 group relative z-110">
                    <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center transition-transform duration-500 group-hover:rotate-90">
                        <Terminal size={18} className="text-black" />
                    </div>
                    <span className="font-black text-xl tracking-tighter uppercase text-white">
                        Abid<span className="text-cyan-500 italic">.seo</span>
                    </span>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors rounded-full ${pathname === link.href ? "text-cyan-500" : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        className="ml-4 bg-white text-black px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-all flex items-center gap-2"
                    >
                        Inquiry <ArrowUpRight size={14} />
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative z-110 p-2 text-white"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE OVERLAY: Fixed Overflow and Visibility */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-background transition-all duration-500 ease-in-out z-100 flex flex-col justify-center px-10 lg:hidden ${isOpen ? "-translate-y-full opacity-100 visible" : "-translate-y-full opacity-0 invisible"
                    }`}
            >
                <div className="space-y-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-500 mb-8 opacity-50">Sitemap Index</p>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-4xl sm:text-5xl font-black uppercase tracking-tighter text-white hover:text-cyan-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-4xl sm:text-5xl font-black uppercase tracking-tighter text-cyan-500"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}