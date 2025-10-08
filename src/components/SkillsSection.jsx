import React from "react";

const skills = [
    { name: "HTML", icon: "fa-brands fa-html5 text-orange-500" },
    { name: "CSS", icon: "fa-brands fa-css3-alt text-blue-500" },
    { name: "JavaScript", icon: "fa-brands fa-js text-yellow-400" },
    { name: "React", icon: "fa-brands fa-react text-cyan-400" },
    { name: "Next JS", icon: "fa-solid fa-code text-white" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap text-purple-500" },
    { name: "Tailwind CSS", icon: "fa-solid fa-wind text-sky-400" },
    { name: "Python", icon: "fa-brands fa-python text-yellow-400" },
    { name: "C++", icon: "fa-solid fa-code text-blue-400" },
    { name: "Git / Github", icon: "fa-brands fa-github text-white" },
    { name: "Vercel", icon: "fa-solid fa-cloud text-gray-300" },
    { name: "SEO", icon: "fa-solid fa-chart-line text-emerald-400" },
];

const SkillsSection = () => {
    return (
        <div className="relative z-10 min-h-screen text-white flex flex-col items-center justify-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center my-10">
                Skills
            </h2>

            <div className="mt-10 w-[95%] md:w-2/3 self-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="w-[150px] h-[100px] bg-gray-800/60 border border-gray-700/50 rounded-xl p-4 flex flex-col items-center justify-center transition hover:scale-105 hover:shadow-lg hover:shadow-gray-700/30 duration-200"
                        >
                            <i
                                className={`${skill.icon} text-5xl mb-2`}
                                aria-hidden="true"
                            ></i>
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
