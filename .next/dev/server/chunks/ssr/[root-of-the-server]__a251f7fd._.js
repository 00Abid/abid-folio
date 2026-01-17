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
"[project]/src/app/blog/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPost,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Blog$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/Blog-data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-rsc] (ecmascript) <export default as Share2>");
;
;
;
;
;
;
;
async function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Blog$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].map((post)=>({
            slug: post.slug
        }));
}
async function BlogPost({ params }) {
    const { slug } = await params;
    const post = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$Blog$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["blogs"].find((b)=>b.slug === slug);
    if (!post) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])(); // Triggers your custom 404
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#050505] text-white pt-15 pb-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-3 py-1 bg-cyan-500/10 text-cyan-500 text-[9px] font-black uppercase tracking-widest rounded-md border border-cyan-500/20",
                                    children: post.category
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-slate-600 text-[10px] font-bold uppercase tracking-widest",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/[slug]/page.js",
                                            lineNumber: 32,
                                            columnNumber: 29
                                        }, this),
                                        " ",
                                        post.readTime
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8",
                            children: post.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center font-black text-black text-xs",
                                    children: "AK"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 41,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] font-black uppercase tracking-widest text-white",
                                            children: post.author
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/[slug]/page.js",
                                            lineNumber: 45,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[9px] font-bold uppercase text-slate-500",
                                            children: [
                                                "Technical SEO • Verified: ",
                                                post.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/blog/[slug]/page.js",
                                            lineNumber: 46,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/page.js",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-video md:w-[70%] rounded-[2.5rem] overflow-hidden border border-white/10 mb-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: post.image,
                        alt: post.title,
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/blog/[slug]/page.js",
                        lineNumber: 53,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/page.js",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12 p-8 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-[10px] font-black uppercase tracking-[0.3em] text-cyan-500 mb-4",
                            children: "Core Inquiry"
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 58,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl font-black uppercase tracking-tight text-white italic",
                            children: [
                                '"',
                                post.mainQuestion,
                                '"'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/page.js",
                    lineNumber: 57,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 16,
                                    className: "text-cyan-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-black uppercase tracking-widest",
                                    children: "Direct Resolution"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 68,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-slate-300 leading-relaxed font-medium bg-white/5 p-6 rounded-2xl border-l-4 border-cyan-500",
                            children: post.directAnswer
                        }, void 0, false, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 70,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/page.js",
                    lineNumber: 65,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-black uppercase tracking-widest mb-4",
                                    children: "TL;DR Summary"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 78,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    children: post.tl_dr.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-start gap-3 text-sm text-slate-400 font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-cyan-500 mt-1.5",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                                    lineNumber: 82,
                                                    columnNumber: 37
                                                }, this),
                                                " ",
                                                item
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/blog/[slug]/page.js",
                                            lineNumber: 81,
                                            columnNumber: 33
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 79,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 77,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[9px] font-mono text-slate-600 uppercase mb-2",
                                    children: "Citable Content Ready"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-colors",
                                    children: [
                                        "Share Insights ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/blog/[slug]/page.js",
                                            lineNumber: 90,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 89,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/blog/[slug]/page.js",
                    lineNumber: 76,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-16 mb-20",
                    children: post.contentSections.map((section, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "max-w-3xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-6",
                                    children: section.heading
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 99,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-slate-400 text-lg leading-relaxed font-medium",
                                    children: section.body
                                }, void 0, false, {
                                    fileName: "[project]/src/app/blog/[slug]/page.js",
                                    lineNumber: 102,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/app/blog/[slug]/page.js",
                            lineNumber: 98,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/page.js",
                    lineNumber: 96,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                    className: "pt-12 border-t border-white/10 md:w-[70%] mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-10 bg-cyan-500 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-black text-2xl font-black uppercase tracking-tighter text-center md:text-left leading-none",
                                children: [
                                    "Need to Engineer ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/app/blog/[slug]/page.js",
                                        lineNumber: 113,
                                        columnNumber: 46
                                    }, this),
                                    " Your Search Growth?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/blog/[slug]/page.js",
                                lineNumber: 112,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/#contact",
                                className: "md:w-[50%] px-10 py-5 bg-black text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-900 transition-colors",
                                children: post.cta
                            }, void 0, false, {
                                fileName: "[project]/src/app/blog/[slug]/page.js",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/blog/[slug]/page.js",
                        lineNumber: 111,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/blog/[slug]/page.js",
                    lineNumber: 110,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/blog/[slug]/page.js",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/blog/[slug]/page.js",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/blog/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/blog/[slug]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a251f7fd._.js.map