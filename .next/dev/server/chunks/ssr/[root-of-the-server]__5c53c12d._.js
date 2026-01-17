module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/Blog-data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogs",
    ()=>blogs
]);
const blogs = [
    {
        id: 1,
        slug: "mastering-aeo-2026",
        title: "Mastering AEO: How to Rank in Perplexity and Google AI Overviews",
        date: "Jan 1, 2026",
        author: "Abid Khan",
        category: "Technical SEO",
        readTime: "6 min",
        mainQuestion: "What is the best strategy for AI Visibility (AEO) in 2026?",
        directAnswer: "The most effective AEO strategy involves deploying validated JSON-LD schema markup combined with high-density 'Direct Answer' blocks at the top of every page.",
        tl_dr: [
            "Prioritize information density over word count.",
            "Use 'Answer-First' formatting for LLM parsing.",
            "Validate structured data for AI agents using IndexNow.",
            "Focus on becoming a 'cite-worthy' source for LLMs."
        ],
        contentSections: [
            {
                heading: "The Shift from Keywords to Natural Questions",
                body: "Stop chasing high-volume keywords and start answering natural language queries. I used NLP to identify these patterns in my Titan SEO Auditor project."
            }
        ],
        cta: "Want to audit your site for AI Visibility? Check my Titan SEO Auditor on GitHub.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200&h=630"
    },
    {
        id: 2,
        slug: "nextjs-16-seo-performance",
        title: "Next.js 16 Performance: Sub-500ms LCP for Industrial Brands",
        date: "Jan 05, 2026",
        author: "Abid Khan",
        category: "Engineering",
        readTime: "5 min",
        mainQuestion: "How does Next.js 16 impact technical SEO rankings?",
        directAnswer: "Next.js 16 improves SEO by minimizing Total Blocking Time (TBT) through advanced Server-Sent Events (SSE) and enhanced partial prerendering.",
        tl_dr: [
            "Partial Prerendering (PPR) reduces initial server response time.",
            "100/100 Lighthouse scores correlate with 20% organic traffic lifts.",
            "Minimize 3rd party JS to protect Interaction to Next Paint (INP).",
            "WebP/AVIF delivery through Next/Image is mandatory."
        ],
        contentSections: [
            {
                heading: "Eliminating Layout Shifts (CLS)",
                body: "For the Raja Buffing Works project, we achieved a 100% Core Web Vitals pass rate by defining strict aspect ratios."
            }
        ],
        cta: "Hire me to optimize your Next.js performance for 2026.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=630"
    },
    {
        id: 3,
        slug: "programmatic-seo-python-automation",
        title: "Scaling with Programmatic SEO: Python and Next.js Workflows",
        date: "Jan 10, 2026",
        author: "Abid Khan",
        category: "Automation",
        readTime: "7 min",
        mainQuestion: "Can Python automation replace manual SEO auditing?",
        directAnswer: "Python automation significantly accelerates auditing by handling bulk PageSpeed API calls and NLP analysis, allowing an SEO Specialist to manage 10x more pages.",
        tl_dr: [
            "Use Python for bulk GSC indexing requests.",
            "Automate keyword gap analysis with SpaCy NLP.",
            "Deploy programmatic landing pages via Next.js Dynamic Routes.",
            "Monitor SERP volatility with custom tracking scripts."
        ],
        contentSections: [
            {
                heading: "Python for Crawl Management",
                body: "My Titan SEO Auditor handles bulk diagnostics to find indexing errors before Google does, which is essential for large-scale site management."
            }
        ],
        cta: "Explore my Python SEO Automation tools on GitHub.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200&h=630"
    },
    {
        id: 4,
        slug: "local-seo-gbp-optimization",
        title: "Dominating the Local Pack: 2026 GBP Optimization Guide",
        date: "Jan 11, 2026",
        author: "Abid Khan",
        category: "Local SEO",
        readTime: "4 min",
        mainQuestion: "How do you achieve a Top 3 ranking in the Google Local Pack?",
        directAnswer: "Dominating the Local Pack requires frequent GBP updates, geo-targeted citations, and a fast-loading website that mirrors your service locations.",
        tl_dr: [
            "Optimize GBP posts with local keywords and high-res images.",
            "Maintain a 4.8+ rating with consistent review schema.",
            "Sync website location pages with GBP 'Service Areas'.",
            "Track 'Direction Clicks' as your primary conversion metric."
        ],
        contentSections: [
            {
                heading: "Results-Driven Local SEO",
                body: "For Raja Buffing Works, we achieved Top 3 status for 'Buffing Vasai', driving 284 direction clicks in just 5 months."
            }
        ],
        cta: "Ready to dominate your local market? Let's talk.",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200&h=630"
    },
    {
        id: 5,
        slug: "schema-markup-the-hidden-ranking-factor",
        title: "Advanced Schema Markup: Talking to AI and Search Engines",
        date: "Jan 12, 2026",
        author: "Abid Khan",
        category: "Technical SEO",
        readTime: "5 min",
        mainQuestion: "Why is Schema Markup essential for AI Visibility?",
        directAnswer: "Schema markup serves as a 'translator' for AI models like Perplexity, providing structured facts that increase your brand's authority and chance for citation.",
        tl_dr: [
            "Use FAQSchema to capture more SERP real estate.",
            "Implement Organization and LocalBusiness schema for brand trust.",
            "Validate schema with the Rich Results Test and GSC.",
            "Breadcrumb schema is vital for clear site hierarchy mapping."
        ],
        contentSections: [
            {
                heading: "E-E-A-T through Structured Data",
                body: "I implemented Author and ProfessionalService schema across all Aero Enterprises service pages to reinforce Experience and Trustworthiness."
            }
        ],
        cta: "Contact me for a full Technical SEO and Schema audit.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=1200&h=630"
    }
];
}),
"[project]/src/app/blog/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Blog$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/Blog-data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-rsc] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-rsc] (ecmascript) <export default as Search>");
;
;
;
;
;
;
const metadata = {
    title: "Insights | Abid Khan Technical SEO",
    description: "Technical SEO insights, AEO strategies, and high-performance frontend engineering logs."
};
function BlogPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#050505] text-white pt-10 pb-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "w-12 h-px bg-cyan-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.js",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500",
                                    children: "Technical Logs & AEO Insights"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.js",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/page.js",
                            lineNumber: 19,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6",
                            children: [
                                "The ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/10 italic font-serif lowercase",
                                    children: "Crawl."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.js",
                                    lineNumber: 26,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/page.js",
                            lineNumber: 25,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "max-w-xl text-slate-500 text-lg font-medium leading-relaxed",
                            children: "Documenting the intersection of LLM-friendly architecture, Core Web Vital surgeries, and search authority."
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.js",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/page.js",
                    lineNumber: 18,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-12 flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl max-w-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 18,
                            className: "text-slate-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.js",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Search index...",
                            className: "bg-transparent border-none outline-none text-xs font-bold uppercase tracking-widest placeholder:text-slate-700 w-full"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/page.js",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/page.js",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Blog$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blog/${post.slug}`,
                            className: "group flex flex-col lg:flex-row gap-8 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full lg:w-72 aspect-video lg:aspect-square overflow-hidden rounded-3xl shrink-0 grayscale group-hover:grayscale-0 transition-all duration-700",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: post.image,
                                        alt: post.title,
                                        fill: true,
                                        className: "object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/blog/page.js",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/page.js",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col justify-between py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-4 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[9px] font-black uppercase tracking-widest rounded-md border border-cyan-500/20",
                                                            children: post.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/page.js",
                                                            lineNumber: 66,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/page.js",
                                                                    lineNumber: 70,
                                                                    columnNumber: 45
                                                                }, this),
                                                                post.readTime
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/page.js",
                                                            lineNumber: 69,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/blog/page.js",
                                                                    lineNumber: 74,
                                                                    columnNumber: 45
                                                                }, this),
                                                                post.date
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/blog/page.js",
                                                            lineNumber: 73,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/page.js",
                                                    lineNumber: 65,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-3xl md:text-4xl font-black uppercase tracking-tight text-white group-hover:text-cyan-500 transition-colors mb-4 leading-none",
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.js",
                                                    lineNumber: 79,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 bg-white/5 rounded-xl border-l-2 border-cyan-500/50 mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] font-bold uppercase text-cyan-500/70 mb-1 tracking-widest",
                                                            children: "Quick Answer"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/page.js",
                                                            lineNumber: 85,
                                                            columnNumber: 41
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-slate-400 text-sm italic line-clamp-2",
                                                            children: post.directAnswer
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/blog/page.js",
                                                            lineNumber: 86,
                                                            columnNumber: 41
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/blog/page.js",
                                                    lineNumber: 84,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.js",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-cyan-500 transition-colors",
                                            children: [
                                                "Read Analysis ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14,
                                                    className: "group-hover:translate-x-1 transition-transform"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/page.js",
                                                    lineNumber: 93,
                                                    columnNumber: 51
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/page.js",
                                            lineNumber: 92,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/page.js",
                                    lineNumber: 63,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, post.id, true, {
                            fileName: "[project]/src/app/blog/page.js",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/page.js",
                    lineNumber: 45,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/page.js",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/blog/page.js",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/blog/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5c53c12d._.js.map