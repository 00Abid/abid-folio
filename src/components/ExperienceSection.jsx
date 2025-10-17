import React from "react";

const experiences = [
    {
        id: 1,
        company: "SENTARI AI",
        role: "SDE Intern",
        period: "Sep 2025 – Present",
        location: "USA - Remote",
        logo: "/sai.webp", // placeholder company logo
        points: [
            "SEO-friendly UIs with React/Next.js + SSR",
            "Remote collaboration with cross‑functional teams",
            "Performance optimization across devices/browsers",
            "Code reviews, SEO fixes with Lighthouse & GSC",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <div className="relative z-10 text-white flex flex-col items-center px-4 py-12 md:py-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10">Experience</h2>

            <div className="container mx-auto max-w-7xl px-6 md:px-8 py-2 text-white">
                <div className="grid grid-cols-1 gap-8">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="w-full rounded-2xl overflow-hidden shadow-xl bg-white/10 border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center gap-4 px-6 pt-6">
                                {exp.logo ? (
                                    <img
                                        src={exp.logo}
                                        alt={`${exp.company} logo`}
                                        className="w-14 h-14 object-cover rounded-xl border border-white/10"
                                        loading="lazy"
                                        decoding="async"
                                        width="56"
                                        height="56"
                                    />
                                ) : (
                                    <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
                                        <span className="text-sm font-semibold text-white">
                                            {exp.company?.split(" ").map((w) => w[0]).join("")}
                                        </span>
                                    </div>
                                )}

                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-white">{exp.role}</h3>
                                    <p className="text-sm text-gray-300">{exp.company}</p>
                                    <p className="text-xs text-gray-400">
                                        {exp.period} <br />
                                        {exp.location}
                                    </p>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="px-6 pb-6 pt-4">
                                <div>
                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        {exp.points.map((point, idx) => (
                                            <li key={idx} className="text-[9px] md:text-sm">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
