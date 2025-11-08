import React from 'react'

const BlogSection = () => {
    const posts = [
        {
            id: 1,
            title: "Ahrefs Blog",
            description: "Data-driven SEO articles backed by original research and real-world case studies. Covers keyword research, backlinks, technical SEO, and content marketing.",
            link: "https://ahrefs.com/blog",
            category: "Technical SEO",
            update_frequency: "Weekly"
        },
        {
            id: 2,
            title: "Backlinko",
            description: "Expert-level SEO advice with actionable guides like 'The Complete SEO Checklist' and 'Link Building: The Definitive Guide'. Skyscraper Technique originated here.",
            link: "https://backlinko.com",
            category: "Advanced SEO Tactics",
            update_frequency: "Monthly"
        },
        {
            "id": 3,
            "title": "Semrush Blog",
            "description": "Broad range of SEO topics from beginner to advanced. Updated daily with checklists, expert roundups, and practical tips.",
            "link": "https://semrush.com/blog",
            "category": "General SEO & Marketing",
            "update_frequency": "Daily"
        },
        {
            "id": 4,
            "title": "Moz Blog",
            "description": "Industry thought leadership with beginner-friendly guides and advanced technical SEO. Known for 'Whiteboard Friday' video series.",
            "link": "https://moz.com/blog",
            "category": "SEO Education",
            "update_frequency": "Weekly"
        },
        {
            "id": 5,
            "title": "Google Search Central Blog",
            "description": "Official Google blog for algorithm updates, feature announcements, and best practices directly from Google engineers.",
            "link": "https://developers.google.com/search/blog",
            "category": "Official Google Updates",
            "update_frequency": "Weekly"
        },
        {
            "id": 6,
            "title": "Search Engine Journal",
            "description": "Daily SEO news, algorithm updates, and industry insights. Strong community interaction.",
            "link": "https://www.searchenginejournal.com",
            "category": "SEO News",
            "update_frequency": "Daily"
        },
        {
            "id": 7,
            "title": "Search Engine Land",
            "description": "Go-to news source for SEO professionals, well-known for its coverage of Google algorithm updates.",
            "link": "https://searchengineland.com",
            "category": "SEO News & Updates",
            "update_frequency": "Daily"
        },
        {
            "id": 8,
            "title": "HubSpot Blog",
            "description": "All-in-one marketing guide covering SEO, content marketing, marketing automation, and more.",
            "link": "https://blog.hubspot.com",
            "category": "Marketing & SEO",
            "update_frequency": "Weekly"
        },
        {
            "id": 9,
            "title": "Neil Patel Blog",
            "description": "Simplifies SEO into basic terms with step-by-step guides covering keyword research to backlinks.",
            "link": "https://neilpatel.com/blog",
            "category": "Beginner-Friendly SEO",
            "update_frequency": "Weekly"
        },
        {
            "id": 10,
            "title": "Content Marketing Institute",
            "description": "Storytelling experts focusing on content strategy and SEO-driven content creation.",
            "link": "https://contentmarketinginstitute.com",
            "category": "Content Strategy",
            "update_frequency": "Weekly"
        },
        {
            "id": 11,
            "title": "WebFX Blog",
            "description": "Top-tier SEO strategy and content guides with real-world case studies and ROI-focused insights.",
            "link": "https://www.webfx.com/blog",
            "category": "SEO Strategy",
            "update_frequency": "Weekly"
        },
        {
            "id": 12,
            "title": "Mangools Blog",
            "description": "Guides, interviews, and 'SEOpedia' articles explaining common search engine terms.",
            "link": "https://mangools.com/blog",
            "category": "SEO Tools & Education",
            "update_frequency": "Bi-weekly"
        },
        {
            "id": 13,
            "title": "Keywords Everywhere Blog",
            "description": "Latest stats and detailed guides for readers of all skill levels on keyword research and SEO.",
            "link": "https://www.keywordseverywhere.com/blog",
            "category": "Keyword Research",
            "update_frequency": "Weekly"
        },
        {
            "id": 14,
            "title": "Search Engine Roundtable",
            "description": "SEO forum and community discussing algorithm changes, strategies, and industry trends.",
            "link": "https://www.seroundtable.com",
            "category": "SEO Community & News",
            "update_frequency": "Daily"
        },
        {
            "id": 15,
            "title": "Search Engine Watch",
            "description": "Expert SEO tips, industry insights, and best practices for search optimization.",
            "link": "https://www.searchenginewatch.com",
            "category": "SEO Best Practices",
            "update_frequency": "Weekly"
        },
        {
            "id": 16,
            "title": "SE Ranking Blog",
            "description": "SEO tool platform offering practical tips, guides, and industry insights.",
            "link": "https://seranking.com/blog",
            "category": "SEO Tools & Tactics",
            "update_frequency": "Weekly"
        },
        {
            "id": 17,
            "title": "Growth Memo",
            "description": "Specialist viewpoint on growth marketing and SEO strategies.",
            "link": "https://growthm.io",
            "category": "Growth & SEO",
            "update_frequency": "Bi-weekly"
        },
        {
            "id": 18,
            "title": "Detailed Blog",
            "description": "Deep-dive educational SEO content with advanced tactics and strategies.",
            "link": "https://detailed.com/blog",
            "category": "Advanced SEO",
            "update_frequency": "Bi-weekly"
        },
        {
            "id": 19,
            "title": "GSQi Blog",
            "description": "Deep-dive educational SEO blog covering technical and strategic aspects.",
            "link": "https://gsqi.com/blog",
            "category": "Technical SEO",
            "update_frequency": "Bi-weekly"
        },
        {
            "id": 20,
            "title": "SEO.com Blog",
            "description": "Traditional and AI-powered SEO strategies with actionable insights.",
            "link": "https://seo.com/blog",
            "category": "SEO Strategy",
            "update_frequency": "Weekly"
        },
        {
            "id": 21,
            "title": "Uprankly Blog",
            "description": "SEO best practices, ranking tips, and competitor analysis guides.",
            "link": "https://uprankly.com/blog",
            "category": "SEO Ranking Tips",
            "update_frequency": "Weekly"
        },
        {
            "id": 22,
            "title": "SE Journal Posts",
            "description": "In-depth SEO articles covering technical, on-page, and off-page optimization.",
            "link": "https://searchengineland.com",
            "category": "SEO Optimization",
            "update_frequency": "Daily"
        },
        {
            "id": 23,
            "title": "Link Building Academy",
            "description": "Focused on link building strategies, backlink analysis, and authority building.",
            "link": "https://linkbuildingacademy.com",
            "category": "Link Building",
            "update_frequency": "Monthly"
        },
        {
            "id": 24,
            "title": "Yoast Blog",
            "description": "WordPress SEO plugin creators offering tips on on-page optimization and technical SEO.",
            "link": "https://yoast.com/blog",
            "category": "WordPress & On-Page SEO",
            "update_frequency": "Weekly"
        },
        {
            "id": 25,
            "title": "First Page Rank Blog",
            "description": "SEO news, algorithm updates, and ranking strategies for small businesses.",
            "link": "https://firstpagerank.com/blog",
            "category": "Local & Small Business SEO",
            "update_frequency": "Weekly"
        },
        {
            "id": 26,
            "title": "CSS-Tricks",
            "description": "Web design and development arsenal by Chris Coyier. Code snippets, articles, videos, training courses, and podcasts.",
            "link": "https://css-tricks.com",
            "category": "CSS & Web Development",
            "focus": "Frontend"
        },
        {
            "id": 27,
            "title": "Codrops",
            "description": "Beautiful, well-designed tutorials covering web development trends, creative techniques, and interactive design.",
            "link": "https://codrops.com",
            "category": "Frontend Tutorials",
            "focus": "Frontend"
        },
        {
            "id": 28,
            "title": "Overreacted.io",
            "description": "By Dan Abramov (React core team). Articles on React rendering behavior, hooks, and performance optimization.",
            "link": "https://overreacted.io",
            "category": "React Deep Dives",
            "focus": "React"
        },
        {
            "id": 29,
            "title": "Epic Web by Kent C. Dodds",
            "description": "Covers React, web performance, testing, and modern web development best practices.",
            "link": "https://epicweb.dev",
            "category": "React & Full Stack",
            "focus": "Frontend"
        },
        {
            "id": 30,
            "title": "Angular-In-Depth",
            "description": "On Medium. Covers Angular, RxJs, TypeScript, Webpack, Firebase, and advanced JavaScript frameworks.",
            "link": "https://medium.com/angular-in-depth",
            "category": "Angular Framework",
            "focus": "Frontend"
        },
        {
            "id": 31,
            "title": "JavaScript Scene",
            "description": "By Eric Elliott. Deep dives into JavaScript patterns, functional programming, and software architecture.",
            "link": "https://medium.com/javascript-scene",
            "category": "Advanced JavaScript",
            "focus": "JavaScript"
        },
        {
            "id": 32,
            "title": "Speckyboy",
            "description": "Design magazine with insights on latest web technologies and frontend development trends.",
            "link": "https://speckyboy.com",
            "category": "Web Design & Frontend",
            "focus": "Frontend"
        },
        {
            "id": 33,
            "title": "Mozilla Hacks",
            "description": "Mozilla's official blog covering web technologies, HTML5, CSS, JavaScript, and web standards.",
            "link": "https://hacks.mozilla.org",
            "category": "Web Standards",
            "focus": "Frontend"
        },
        {
            "id": 34,
            "title": "GitConnected",
            "description": "On Medium. Cross-sectional blog covering JavaScript, web development trends, design, and startups.",
            "link": "https://medium.com/gitconnected",
            "category": "Web Development Trends",
            "focus": "Frontend"
        },
        {
            "id": 35,
            "title": "Airbnb Engineering",
            "description": "Engineering blog of Airbnb covering frontend, backend, and full-stack technologies.",
            "link": "https://medium.com/airbnb-engineering",
            "category": "Company Engineering Blogs",
            "focus": "Frontend"
        },
        {
            "id": 36,
            "title": "Shopify Engineering",
            "description": "Blog featuring frontend and fullstack engineering at scale.",
            "link": "https://shopify.engineering",
            "category": "Company Engineering Blogs",
            "focus": "Frontend"
        },
        {
            "id": 37,
            "title": "Stripe Blog",
            "description": "Technical posts on payment systems, APIs, frontend, and web development.",
            "link": "https://stripe.com/blog/engineering",
            "category": "Company Engineering Blogs",
            "focus": "Frontend"
        },
        {
            "id": 38,
            "title": "Google Chrome Blog",
            "description": "Official blog for Chrome browser updates, web platform features, and performance tips.",
            "link": "https://blog.chromium.org",
            "category": "Web Platform",
            "focus": "Frontend"
        },
        {
            "id": 39,
            "title": "Dev.to",
            "description": "Community of developers sharing articles on frontend, backend, and full-stack development.",
            "link": "https://dev.to",
            "category": "Developer Community",
            "focus": "Multi-tech"
        },
        {
            "id": 40,
            "title": "Smashing Magazine",
            "description": "Comprehensive resource for web designers and frontend developers with tutorials and articles.",
            "link": "https://www.smashingmagazine.com",
            "category": "Web Design & Frontend",
            "focus": "Frontend"
        },
        {
            "id": 41,
            "title": "Netlify Blog",
            "description": "Hosting platform blog covering frontend deployment, Jamstack, and web performance.",
            "link": "https://www.netlify.com/blog",
            "category": "Web Hosting & Deployment",
            "focus": "Frontend"
        },
        {
            "id": 42,
            "title": "Vercel Blog",
            "description": "Next.js platform blog covering React, frontend performance, and serverless technologies.",
            "link": "https://vercel.com/blog",
            "category": "Next.js & React",
            "focus": "Frontend"
        },
        {
            "id": 43,
            "title": "React Blog",
            "description": "Official React blog with updates, release notes, and best practices.",
            "link": "https://react.dev/blog",
            "category": "React Framework",
            "focus": "React"
        },
        {
            "id": 44,
            "title": "Web.dev",
            "description": "Google's learning platform with guides on web development, performance, and best practices.",
            "link": "https://web.dev",
            "category": "Web Development Learning",
            "focus": "Frontend"
        },
        {
            "id": 45,
            "title": "MDN Web Docs",
            "description": "Mozilla's comprehensive documentation for HTML, CSS, JavaScript, and web APIs.",
            "link": "https://developer.mozilla.org",
            "category": "Web Documentation",
            "focus": "Frontend"
        },
        {
            "id": 46,
            "title": "Frontend Masters Blog",
            "description": "Educational platform blog with advanced frontend development tutorials.",
            "link": "https://frontendmasters.com/blog",
            "category": "Frontend Education",
            "focus": "Frontend"
        },
        {
            "id": 47,
            "title": "Hashnode",
            "description": "Blogging platform for developers with numerous frontend and backend articles.",
            "link": "https://hashnode.com",
            "category": "Developer Blogging",
            "focus": "Multi-tech"
        },
        {
            "id": 48,
            "title": "Toptal Blog",
            "description": "Insights from top developers on web development, design, and engineering practices.",
            "link": "https://www.toptal.com/blog",
            "category": "Web Development Insights",
            "focus": "Frontend"
        },
        {
            "id": 49,
            "title": "LogRocket Blog",
            "description": "Frontend debugging and performance monitoring blog with React, Vue, and JavaScript tips.",
            "link": "https://blog.logrocket.com",
            "category": "Frontend Performance",
            "focus": "Frontend"
        },
        {
            "id": 50,
            "title": "CSS-Innovations",
            "description": "Dedicated to latest CSS techniques, Grid, Flexbox, and modern styling practices.",
            "link": "https://cssinnovations.com",
            "category": "Modern CSS",
            "focus": "CSS"
        },
        {
            "id": 51,
            "title": "What is SEO and how does it work?",
            "description": "SEO (Search Engine Optimization) is the practice of optimizing websites to improve visibility in organic search results. It involves on-page optimization (content, keywords, meta tags), technical SEO (site speed, structure, indexing), and off-page optimization (backlinks, citations). Google's algorithm evaluates hundreds of factors to rank pages, aiming to deliver the most relevant results for user queries."
        },
        {
            "id": 52,
            "title": "What is the difference between organic and paid search results?",
            "description": "Organic results are unpaid listings earned through SEO efforts. Paid results are advertisements you bid on using keywords (Google Ads). Paid appears at the top of SERPs with an 'Ad' label; organic appears below. Paid requires budgets and bid management; organic requires keyword optimization and content quality. Organic has higher click-through rates and trust."
        },
        {
            "id": 53,
            "title": "How long does SEO take to show results?",
            "description": "SEO typically takes 3-6 months to show significant results, depending on competition, website age, and content quality. High-competition keywords may take 6-12 months or longer. Local SEO shows faster results (1-3 months). Consistency, quality content, and technical optimization matter more than speed. Google's indexing and ranking processes take time."
        },
        {
            "id": 54,
            "title": "What are keywords and how do I find them?",
            "description": "Keywords are search terms users type into Google. Find them by: checking SERP 'People Also Ask' sections, using tools like Ahrefs, SEMrush, or Ubersuggest, analyzing competitor websites, studying user intent, examining Google Search Console data, and researching long-tail variations. Focus on keywords with moderate search volume and lower difficulty for quick wins."
        },
        {
            "id": 55,
            "title": "What is on-page vs off-page SEO?",
            "description": "On-page SEO: Content quality, meta tags, keyword optimization, internal links, page speed, user experience, headers, and schema markup. Off-page SEO: Backlinks, citations, domain authority, social signals, brand mentions, and external validation. Both are essential—on-page ensures relevance; off-page builds authority."
        },
        {
            "id": 56,
            "title": "Why is site speed important for SEO?",
            "description": "Google uses page speed as a ranking factor. Fast-loading sites improve user experience, reduce bounce rates, and enable better crawling of content. Core Web Vitals (LCP, FID, CLS) are official ranking signals. Page speed affects mobile rankings more than desktop. Use tools like Google PageSpeed Insights and GTmetrix to identify bottlenecks and optimize."
        },
        {
            "id": 57,
            "title": "What is a backlink and why does it matter?",
            "description": "A backlink is a hyperlink from another website pointing to your site. Backlinks signal trust and authority to search engines. High-quality backlinks from authoritative, relevant sites boost rankings more than quantity. Natural, editorial backlinks are most valuable. Focus on earning links through quality content, not buying them, which violates Google's guidelines."
        },
        {
            "id": 58,
            "title": "What is Domain Authority (DA) and Domain Rating (DR)?",
            "description": "Domain Authority (by Moz) and Domain Rating (by Ahrefs) are metrics measuring a website's authority and ranking potential on a 0-100 scale. Higher scores suggest better ranking potential. They're influenced by backlink quality, quantity, and domain age. DA/DR are correlation metrics, not direct ranking factors, but strong indicators of SEO strength."
        },
        {
            "id": 59,
            "title": "What is keyword stemming?",
            "description": "Keyword stemming is Google's ability to recognize variations of a word (plurals, tenses, prefixes, suffixes) in search queries. For example, 'run', 'runs', 'running', 'runner' are recognized as related terms. This means ranking for 'running' helps you rank for 'run'. LSI (Latent Semantic Indexing) keywords enhance this effect by providing semantic variations."
        },
        {
            "id": 60,
            "title": "How do I improve my bounce rate?",
            "description": "Bounce rate is the % of visitors leaving after viewing only one page. Improve it by: enhancing content quality and relevance, improving site speed and UX design, adding clear CTAs, creating better internal links, optimizing for mobile, reducing pop-ups, improving page loading, and ensuring landing page matches search intent. A lower bounce rate improves rankings and user satisfaction."
        },
        {
            "id": 61,
            "title": "What is Google Search Console and why should I use it?",
            "description": "Google Search Console is Google's official tool for webmasters. It confirms your site can be crawled, identifies indexing issues, monitors search traffic, shows which keywords bring traffic, reports mobile usability, and alerts you to technical problems. It's essential for understanding how Google sees your site and fixing issues that impact rankings."
        },
        {
            "id": 62,
            "title": "What are Core Web Vitals?",
            "description": "Core Web Vitals are Google's key metrics for page experience: LCP (Largest Contentful Paint—loading speed, target <2.5s), FID (First Input Delay—interactivity, target <100ms), and CLS (Cumulative Layout Shift—visual stability, target <0.1). They're official ranking factors affecting mobile and desktop rankings. Use Google PageSpeed Insights and Web Vitals tools to monitor."
        },
        {
            "id": 63,
            "title": "What is the importance of mobile-first indexing?",
            "description": "Google now indexes the mobile version of sites first, regardless of desktop version. Mobile-first indexing is critical because most users access sites on mobile. Ensure mobile responsiveness, fast loading on mobile, readable fonts, easy navigation, and mobile-friendly design. Google Search Console shows mobile usability issues that must be fixed."
        },
        {
            "id": 64,
            "title": "How do I optimize for voice search?",
            "description": "Voice search optimization involves: targeting conversational, long-tail keywords matching natural speech patterns, optimizing for featured snippets (which voice assistants read), ensuring clear, concise answers in content, using schema markup, improving page speed and mobile responsiveness, and focusing on 'People Also Ask' queries. Voice searches are longer and more specific than text searches."

        },
        {
            "id": 65,
            "title": "What is schema markup and why is it important?",
            "description": "Schema markup (structured data) helps search engines understand content context (product, recipe, event, article, etc.). It enables rich snippets (enhanced listings with ratings, prices, dates) in search results, improving click-through rates. Schema increases visibility and can boost rankings. Common schemas: Product, Article, LocalBusiness, FAQ, Review. Use JSON-LD format in HTML head."
        },
        {
            "id": 66,
            "title": "What is content freshness and how does it affect SEO?",
            "description": "Content freshness refers to how recently content was published or updated. Google favors fresher content for time-sensitive queries (news, trends, events). Regularly updating old content with new data, statistics, and insights can boost rankings. Republishing dates also count. Balance between evergreen content (timeless) and fresh content (timely) for best results."
        },
        {
            "id": 67,
            "title": "How do I create an effective SEO strategy?",
            "description": "Steps: 1) Conduct keyword research for target audience. 2) Analyze competitor sites. 3) Optimize on-page elements (meta tags, content, internal links). 4) Improve technical SEO (site speed, indexing, mobile). 5) Build quality backlinks. 6) Create content aligned with user intent. 7) Monitor with Google Search Console and Analytics. 8) Adjust based on data and rankings."
        },
        {
            "id": 68,
            "title": "What are the most important ranking factors in 2025?",
            "description": "Top ranking factors: 1) Content quality and user intent alignment, 2) Core Web Vitals and page speed, 3) Mobile-first design and responsive UX, 4) Structured data (schema markup), 5) Internal and external linking quality, 6) E-E-A-T (Expertise, Experience, Authority, Trustworthiness), 7) Brand authority and mentions, 8) Domain age and history, 9) Backlink quality and relevance."
        },
        {
            "id": 69,
            "title": "How do I measure SEO success?",
            "description": "Key metrics: 1) Organic traffic growth, 2) Keyword rankings and visibility, 3) Click-through rate (CTR) in SERPs, 4) Conversion rates from organic, 5) Pages per session, 6) Bounce rate, 7) Backlink growth and quality, 8) Domain Authority/Rating. Use Google Analytics 4, Google Search Console, and SEO tools to track. Set baseline metrics and monitor progress monthly."
        },
        {
            "id": 70,
            "title": "What are common SEO mistakes to avoid?",
            "description": "Avoid: 1) Keyword stuffing (over-optimizing keywords), 2) Poor content quality, 3) Slow page speed, 4) Ignoring mobile optimization, 5) Buying backlinks (violates guidelines), 6) Duplicate content, 7) Poor internal linking structure, 8) Ignoring user intent, 9) Hiding text or links, 10) Not updating content, 11) Poor site navigation, 12) Missing meta tags. Follow Google's Webmaster Guidelines.",

        }
    ]

    // Build BlogPosting JSON-LD for each listed resource (helps rich results when possible)
    const site = 'https://abid-folio.vercel.app'
    const blogGraph = posts.map(p => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        'headline': p.title,
        'description': p.description,
        'mainEntityOfPage': { '@type': 'WebPage', '@id': p.link },
        'author': { '@type': 'Person', 'name': 'Abid Khan', 'url': site },
        'url': p.link
    }))

    return (
        <div className="relative min-h-screen py-8 px-4 text-white">
            <div className="max-w-7xl mx-auto relative z-10">
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogGraph) }} />
                <header className="my-14">
                    <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-6 ">
                        Enterprise SEO Resources
                    </h2>
                    <p className="text-sm text-gray-300 mt-1 text-center">Guides, playbooks and tools for technical and enterprise level SEO strategy.</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map(post => (
                        <article key={post.id} className="bg-white/5 border border-white/6 rounded-lg overflow-hidden shadow-sm backdrop-blur-sm">
                            <div className="p-4">
                                {/* Date is omitted as no date field in data */}
                                <h3 className="text-sm md:text-base font-semibold text-white mt-1">{post.title}</h3>
                                <p className="text-sm text-gray-300 mt-2">{post.description}</p>
                                <div className="mt-3">
                                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="inline-block text-sm text-white/95 bg-white/6 px-3 py-1 rounded-md hover:bg-white/10" aria-label={`Read ${post.title} blog`}>
                                        Read
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BlogSection
