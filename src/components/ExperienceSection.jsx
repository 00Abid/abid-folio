import React from "react";

const experiences = [
    {
        id: 1,
        company: "SENTARI AI",
        role: "SEO & Frontend Intern",
        period: "Sep 2025 - Present",
        location: "New York, USA",
        logo: "/sai.webp",
        points: [
            "Conducted comprehensive SEO audits to enhance crawlability, indexing, and Core Web Vitals performance across AI journaling products.",
            "Implemented structured data, meta tags, and advanced on-page SEO strategies to improve discoverability and boost search visibility by 20%.",
            "Configured and managed Google Search Console, Google Tag Manager, and Bing Webmaster Tools for performance tracking and analytics insights.",
            "Optimized site architecture and content hierarchy, leading to faster indexing and improved ranking consistency.",
            "Collaborated with product and marketing teams to align SEO strategy with content goals, increasing organic reach and engagement.",
            "Monitored Lighthouse scores and PageSpeed metrics, ensuring high accessibility, performance, and user retention across all platforms."
        ],
    },


];

const ExperienceSection = () => {
    return (
        <section className="relative z-10 text-white flex flex-col items-center px-4 py-8 md:py-12">
            <h2 id="experience-heading" className="text-3xl md:text-4xl font-bold text-center mb-6">
                Experience
            </h2>

            <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-6">
                    {experiences.map((exp) => (
                        <article
                            key={exp.id}
                            className="w-full rounded-xl overflow-hidden shadow-lg bg-white/5 border border-white/6 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center gap-3 px-4 pt-4">
                                {exp.logo ? (
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="w-12 h-12 object-cover rounded-lg border border-white/8"
                                        loading="lazy"
                                        decoding="async"
                                        width="48"
                                        height="48"
                                    />
                                ) : (
                                    <div className="w-12 h-12 rounded-lg bg-white/8 border border-white/8 flex items-center justify-center">
                                        <span className="text-sm font-semibold text-white">
                                            {exp.company?.split(" ").map((w) => w[0]).join("")}
                                        </span>
                                    </div>
                                )}

                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg md:text-xl text-white">{exp.role}</h3>
                                    <p className="text-sm text-gray-300">{exp.company}</p>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {exp.period} <br />{exp.location}
                                    </p>
                                </div>
                            </div>

                            <div className="px-4 pb-4 pt-3">
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {exp.points.map((point, idx) => (
                                        <li key={idx} className="text-[11px] md:text-sm leading-snug">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;