import React from "react";

const experiences = [
    {
        id: 1,
        company: "SENTARI AI",
        role: "SDE Intern",
        period: "Sep 2025 – Present",
        location: "USA - Remote",
        logo: "/sai.webp",
        points: [
            "Built fast, accessible interfaces with React, Next.js, and Tailwind CSS, boosting organic traffic and discoverability.",
            "Researched AI journaling trends and analyzed competitor features to recommend product and UX improvements.",
            "Implemented advanced SEO measures, raising search rankings and expanding organic reach by 20%.",
            "Led marketing automation and journey projects, improving user retention by 20%.",
            "Enhanced performance and accessibility for voice first apps, lifting Lighthouse scores and lowering bounce rates.",
            "Delivered UI features with cross functional teams, speeding up releases and aligning product with business goals."
        ],
    },

];

const ExperienceSection = () => {
    return (
        <div className="relative z-10 text-white flex flex-col items-center px-4 py-12 md:py-16">
            <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold text-center mb-10">
                Experience
            </h2>

            <div className=" mx-auto  px-6 md:px-8 py-2 text-white">
                <div className="grid grid-cols-1 gap-8">
                    {experiences.map((exp) => (
                        <article
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
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;