import React from "react";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaGithub, FaChartLine
}
    from "react-icons/fa";
import {
    SiNextdotjs, SiTailwindcss, SiCplusplus, SiVercel, SiGoogletagmanager, SiPagespeedinsights, SiLighthouse, SiGoogleanalytics
}
    from "react-icons/si";

const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next JS", icon: <SiNextdotjs className="text-white" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Python", icon: <FaPython /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
    { name: "Git / Github", icon: <FaGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "SEO", icon: <FaChartLine className="text-emerald-400" /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics className="text-orange-500" /> },
    { name: "Google Tag Manager", icon: <SiGoogletagmanager className="text-blue-400" /> },
    { name: "PageSpeed Insights", icon: <SiPagespeedinsights className="text-green-400" /> },
    { name: "Google Lighthouse", icon: <SiLighthouse className="text-red-400" /> },
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
                            <span className="text-xs font-semibold mt-2">
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