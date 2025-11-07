import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaBootstrap,
    FaPython,
    FaGithub,
    FaChartLine,
    FaSearch,
    FaGlobe,
    FaPenNib,
    FaCode,
    FaExternalLinkAlt,
} from "react-icons/fa";

import {
    SiNextdotjs,
    SiTailwindcss,
    SiCplusplus,
    SiVercel,
    SiFirebase,
    SiGoogletagmanager,
    SiPagespeedinsights,
    SiLighthouse,
    SiGoogleanalytics,
} from "react-icons/si";


const skills = [
    // 🧱 Frontend & Core
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },

    // ⚙️ Tools & Platforms
    { name: "Git / GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Firebase", icon: <SiFirebase className="text-amber-400" /> },

    // 🔍 SEO & Analytics Core
    { name: "SEO Auditing", icon: <FaChartLine className="text-emerald-400" /> },
    { name: "Technical SEO", icon: <SiGoogleanalytics className="text-green-400" /> },
    { name: "On-Page Optimization", icon: <SiGoogletagmanager className="text-blue-400" /> },
    { name: "Off-Page SEO", icon: <FaExternalLinkAlt className="text-gray-300" /> },
    { name: "Keyword Research", icon: <FaSearch className="text-yellow-400" /> },
    { name: "Content Optimization", icon: <FaPenNib className="text-pink-400" /> },
    { name: "Structured Data", icon: <FaCode className="text-indigo-400" /> },
    // Enterprise SEO additions
    { name: "Site Management", icon: <FaCode className="text-yellow-400" /> },
    { name: "Crawl Management", icon: <FaChartLine className="text-emerald-300" /> },
    { name: "Programmatic SEO", icon: <FaExternalLinkAlt className="text-indigo-300" /> },
    { name: "Multiregional SEO", icon: <FaGlobe className="text-sky-300" /> },

    // 📊 SEO Tools & Monitoring
    { name: "Google Search Console", icon: <SiGoogleanalytics className="text-orange-500" /> },
    { name: "Google Tag Manager", icon: <SiGoogletagmanager className="text-blue-400" /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics className="text-red-500" /> },
    { name: "Google Lighthouse", icon: <SiLighthouse className="text-red-400" /> },
    { name: "PageSpeed Insights", icon: <SiPagespeedinsights className="text-green-400" /> },
];


const SkillsSection = () => {
    return (
        <div className="relative z-10 min-h-screen text-white flex flex-col items-center justify-center px-4">
            <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold text-center my-10">
                Skills
            </h2>

            <div className="mt-10 w-[95%] md:w-2/3 self-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6" role="list" aria-label="Technical skills">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            role="listitem"
                            className="w-[150px] h-[100px] bg-white/10 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center transition hover:scale-105 hover:shadow-lg  duration-200 backdrop-blur-xs"
                        >
                            <div className="text-5xl mb-2" aria-hidden="true">
                                {skill.icon}
                            </div>
                            <span className="text-[10px] font-semibold mt-2">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;