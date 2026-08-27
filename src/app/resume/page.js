import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';
import PrintButton from '@/components/PrintButton';

export const metadata = {
    title: "Abid Khan | Resume | SEO, AEO & GEO Specialist",
    description: "Professional resume of Abid Khan, SEO & GEO Specialist. Over 2.6M+ client revenue generated via programmatic architectures, schemas, and performance engineering.",
    alternates: {
        canonical: "https://abid-folio.vercel.app/resume",
    },
    openGraph: {
        title: "Abid Khan | Resume | SEO, AEO & GEO Specialist",
        description: "Professional resume of Abid Khan, SEO & GEO Specialist. Over 2.6M+ client revenue generated via programmatic architectures, schemas, and performance engineering.",
        url: "https://abid-folio.vercel.app/resume",
        type: "profile",
        images: [{ url: "/seo.webp", width: 1200, height: 630, alt: "Abid Khan Resume" }],
    }
};

// Resume data in clean array/object format for easy editing
const resumeData = {
    personal: {
        name: "Abid Khan",
        title: "SEO Specialist | Technical SEO | AEO, GEO | Programmatic SEO | Next.js",
        email: "khanabid.dev@gmail.com",
        phone: "+919096105019",
        location: "Vasai, India",
        linkedin: "https://www.linkedin.com/in/abid-khan-coder/",
        github: "https://github.com/00Abid"
    },
    profileSummary: "SEO, AEO & GEO Specialist with hands-on experience across Programmatic SEO, Local SEO, and large-scale semantic content architecture. Currently leading SEO for Industrial Automation India, a B2B platform with 32,000+ subscribers, driving 24% click growth, 10% impression growth, 1,373% events growth, and 304% AI content growth. Designed programmatic SEO framework across 30+ city and country hubs and built a 15+ product PSEO system generating 2.6M+ in verified client revenue. Proven track record achieving Top 3 Local Pack rankings, Position 1.17 for high-intent local queries, and 95+ Lighthouse scores for live clients. Operates independently across the full SEO stack with minimal developer dependency.",
    experience: [
        {
            role: "Technical SEO Specialist",
            company: "Industrial Automation India",
            period: "Feb 2026 – Present",
            location: "Andheri, India (Remote)",
            bullets: [
                "Grew organic clicks 24% and impressions 10%; events section up 1,373% and AI content vertical up 304% in clicks.",
                "Conducted full GSC audit diagnosing 13,403 non-indexed pages across 14 issue categories; resolved 1,700+ broken URLs via pattern-based 301 redirects and Next.js middleware.",
                "Designed Hub-and-Spoke URL taxonomy for 30+ city and country hubs; directed developer implementation with JSON-LD ItemList schema and canonical rules; upgraded 5,000+ company entities from H6 to H3.",
                "Configured robots.txt and structured data for GPTBot, ClaudeBot, and Google-Extended; implemented Expert Person Schema and Data Propriety protocols to position platform as primary citation source for AI-driven industrial queries."
            ]
        },
        {
            role: "SEO Specialist",
            company: "Freelance",
            period: "Jun 2025 – Present",
            location: "Vasai, India",
            bullets: [
                "Managed SEO across 2 industrial B2B clients generating 2.6M+ in verified client revenue across 10 months.",
                "Achieved Top 3 Local Pack rankings with 2.6 - 5.2% CTR and Avg Position 3.9 - 5.2 on high intent keywords (GSC verified).",
                "Built 15+ product PSEO system via Next.js dynamic slug routing with canonical handling, JSON-LD Product schema, and internal linking; all pages GSC indexed.",
                "Deployed 5 Next.js sites to 95+ Lighthouse with 100% Core Web Vitals; 100% GSC indexing including domain migrations with zero errors."
            ]
        },
        {
            role: "SDE Intern",
            company: "SENTARI AI",
            period: "Sep 2025 – Nov 2025",
            location: "New York, USA (Remote)",
            bullets: [
                "Improved mobile Lighthouse from 70s to 95+ via code-splitting, lazy loading, and WebP optimization.",
                "Deployed JSON-LD and Open Graph tags site-wide; fixed crawl errors and indexing gaps.",
                "Built real-time notification system using Server-Sent Events; collaborated with distributed US engineering teams."
            ]
        }
    ],
    projects: [
        {
            name: "Aero Enterprises",
            type: "Programmatic SEO + Local SEO",
            bullets: [
                "Built 15+ product PSEO pages using Next.js dynamic slug routing fed by structured JS data objects; canonical tags, FAQ schema, Breadcrumb schema; all pages GSC indexed.",
                "Built site-wide JSON-LD schema system in React including reusable schema generators, validators, and error handlers; implemented 9 schema types across all pages.",
                "PSEO pages ranking across 100+ keywords with top product pages achieving 3.6-6.9% CTR at Avg Position 5.4-8.0 (GSC verified).",
                "Generated 2M+ in verified client revenue from organic and GBP traffic; 325 interactions, 260 direction clicks from 1,000+ GBP views (13 months).",
                "Avg Position 5.2, 2.6% CTR, #1 brand ranking; verified citations in Google AI Overviews and Perplexity AI."
            ]
        },
        {
            name: "Raja Buffing Works",
            type: "Local SEO",
            bullets: [
                "Ranking Position 1.17 for \"metal buffing near me\" and Top 3 for local buffing queries (GSC verified); homepage CTR 4.44% at Position 6.5.",
                "0.6M+ in verified client revenue within 11 months; 297 interactions, 284 direction clicks from 568 GBP views.",
                "FAQ and Review schema validated; verified Perplexity AI visibility for core service queries."
            ]
        },
        {
            name: "Python SEO Automation",
            type: "GitHub Live Projects",
            bullets: [
                "<strong>Titan SEO Auditor:</strong> PageSpeed API + SpaCy NLP pipeline auditing 5+ client sites programmatically.",
                "<strong>AI Visibility Checker:</strong> HEEB API integration tracking brand mentions across ChatGPT and Perplexity."
            ]
        }
    ],
    skills: {
        seo: "Technical SEO, Local SEO, Programmatic SEO, On-Page SEO, Keyword Research, Core Web Vitals, JSON-LD Schema Markup, Canonicalization, Indexation Management, Internal Linking, AEO, Content Clustering, Hub-and-Spoke Architecture",
        tools: "Google Search Console, GA4, Google Tag Manager, Ahrefs, SEMrush, Screaming Frog, PageSpeed Insights, Bing Webmaster Tools, GBP Everywhere, Google Business Profile, IndexNow, Microsoft Clarity",
        development: "Next.js, React, JavaScript, Python, Tailwind CSS, HTML/CSS, GitHub, Vercel, REST API Integration, JSON/CSV Data Processing"
    }
};

export default function ResumePage() {
    const lastUpdated = "July 2026";
    const { personal, profileSummary, experience, projects, skills } = resumeData;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfilePage",
                "@id": "https://abid-folio.vercel.app/resume/#webpage",
                "url": "https://abid-folio.vercel.app/resume",
                "name": "Abid Khan | Resume | SEO, AEO & GEO Specialist",
                "description": "Professional CV of Abid Khan detailing technical SEO experience, programmatic frameworks, and client revenue impact.",
                "isPartOf": {
                    "@id": "https://abid-folio.vercel.app/#website"
                },
                "mainEntity": {
                    "@type": "Person",
                    "@id": "https://abid-folio.vercel.app/#person",
                    "name": "Abid Khan",
                    "jobTitle": "SEO Specialist",
                    "email": "khanabid.dev@gmail.com",
                    "telephone": "+919096105019",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Vasai",
                        "addressCountry": "India"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/in/abid-khan-coder/",
                        "https://github.com/00Abid"
                    ]
                }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Main Content Area */}
            <div className="pt-32 print:pt-0 pb-24 print:pb-0 px-4 md:px-6 max-w-5xl mx-auto relative z-10">

                {/* Back to Home & Actions Row (Hidden on print) */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5 print:hidden">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} /> Back to Portfolio
                    </Link>

                    <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Calendar size={12} className="text-cyan-500" /> Last Updated: {lastUpdated}
                        </span>

                        <PrintButton />
                    </div>
                </div>

                {/* Printable Resume Container */}
                <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl print:bg-transparent print:border-none print:p-0 print:shadow-none print:text-black">

                    {/* Resume Header */}
                    <div className="pb-8 border-b border-white/10 print:border-slate-300">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-3 print:text-black">
                            {personal.name}
                        </h1>
                        <p className="text-sm md:text-base font-black uppercase tracking-widest text-cyan-500 print:text-cyan-600 mb-4">
                            {personal.title}
                        </p>

                        {/* Contacts Inline Row */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 font-mono print:text-slate-700">
                            <a href={`mailto:${personal.email}`} className="hover:text-white transition-colors">
                                {personal.email}
                            </a>
                            <span className="text-slate-600 print:text-slate-300">•</span>
                            <a href={`tel:${personal.phone}`} className="hover:text-white transition-colors">
                                {personal.phone}
                            </a>
                            <span className="text-slate-600 print:text-slate-300">•</span>
                            <span>{personal.location}</span>
                            <span className="text-slate-600 print:text-slate-300">•</span>
                            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
                                LinkedIn
                            </a>
                            <span className="text-slate-600 print:text-slate-300">•</span>
                            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline">
                                GitHub
                            </a>
                        </div>
                    </div>

                    {/* Resume Body */}
                    <div className="mt-8 space-y-10 print:space-y-8">

                        {/* Profile */}
                        <section className="space-y-3">
                            <h2 className="text-lg font-black uppercase tracking-widest text-white border-b border-white/5 pb-2 flex items-center gap-2 print:text-black print:border-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Profile Summary
                            </h2>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed font-medium print:text-slate-800">
                                {profileSummary}
                            </p>
                        </section>

                        {/* Experience */}
                        <section className="space-y-6">
                            <h2 className="text-lg font-black uppercase tracking-widest text-white border-b border-white/5 pb-2 flex items-center gap-2 print:text-black print:border-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Professional Experience
                            </h2>

                            <div className="space-y-6">
                                {experience.map((job, idx) => (
                                    <div key={idx} className="space-y-2.5">
                                        <div className="flex flex-wrap justify-between items-start gap-2">
                                            <div>
                                                <h3 className="font-bold text-white text-base print:text-black">
                                                    {job.role}
                                                </h3>
                                                <p className="text-xs font-bold text-cyan-500 uppercase tracking-wider">
                                                    {job.company}
                                                </p>
                                            </div>
                                            <div className="text-right text-xs text-slate-400 font-mono print:text-slate-700">
                                                <p className="font-bold text-white print:text-black">{job.period}</p>
                                                <p>{job.location}</p>
                                            </div>
                                        </div>
                                        <ul className="list-disc pl-4 text-xs md:text-sm text-slate-300 space-y-1.5 leading-relaxed print:text-slate-800">
                                            {job.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Projects */}
                        <section className="space-y-6">
                            <h2 className="text-lg font-black uppercase tracking-widest text-white border-b border-white/5 pb-2 flex items-center gap-2 print:text-black print:border-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Featured Projects
                            </h2>

                            <div className="space-y-6">
                                {projects.map((project, idx) => (
                                    <div key={idx} className="space-y-2">
                                        <h3 className="font-bold text-white text-base flex items-center gap-2 print:text-black">
                                            {project.name} <span className="text-[10px] font-mono font-normal tracking-normal text-slate-400 print:text-slate-700">| {project.type}</span>
                                        </h3>
                                        <ul className="list-disc pl-4 text-xs md:text-sm text-slate-300 space-y-1.5 leading-relaxed print:text-slate-800">
                                            {project.bullets.map((bullet, bIdx) => (
                                                <li key={bIdx} dangerouslySetInnerHTML={{ __html: bullet }} />
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Skills */}
                        <section className="space-y-4">
                            <h2 className="text-lg font-black uppercase tracking-widest text-white border-b border-white/5 pb-2 flex items-center gap-2 print:text-black print:border-slate-300">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /> Skills Matrix
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm print:text-black">
                                <div>
                                    <h4 className="font-black text-cyan-500 uppercase tracking-widest mb-2 print:text-cyan-600">SEO</h4>
                                    <p className="text-slate-300 leading-relaxed print:text-slate-800">{skills.seo}</p>
                                </div>
                                <div>
                                    <h4 className="font-black text-cyan-500 uppercase tracking-widest mb-2 print:text-cyan-600">SEO Tools</h4>
                                    <p className="text-slate-300 leading-relaxed print:text-slate-800">{skills.tools}</p>
                                </div>
                                <div>
                                    <h4 className="font-black text-cyan-500 uppercase tracking-widest mb-2 print:text-cyan-600">Development</h4>
                                    <p className="text-slate-300 leading-relaxed print:text-slate-800">{skills.development}</p>
                                </div>
                            </div>
                        </section>

                    </div>

                </div>

            </div>

        </main>
    );
}
