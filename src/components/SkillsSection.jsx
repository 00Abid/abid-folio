import React from "react";

const skills = [
    { name: "HTML", level: 90, color: "bg-html" },
    { name: "CSS", level: 80, color: "bg-css" },
    { name: "JavaScript", level: 70, color: "bg-js" },
    { name: "React", level: 70, color: "bg-react" },
    { name: "Bootstrap", level: 80, color: "bg-bootstrap" },
    { name: "Tailwind CSS", level: 80, color: "bg-tailwind" },
    { name: "Python", level: 50, color: "bg-python" },
    { name: "C++", level: 50, color: "bg-cpp" },
    { name: "Git / Github", level: 90, color: "bg-github" },
    { name: "Vercel", level: 90, color: "bg-vercel" },
];

const SkillsSection = () => {
    return (
        <div className="relative z-10 min-h-screen text-white flex flex-col items-center justify-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-10">
                Skills
            </h2>

            <div className="w-[95%] md:w-2/3 self-center space-y-4">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between gap-8">
                            <h4 className="text-base font-semibold">{skill.name}</h4>
                            <h5 className="text-base font-semibold">{skill.level}%</h5>
                        </div>
                        <div className="flex h-2.5 w-full overflow-hidden rounded-full bg-gray-700">
                            <div
                                className={`h-full ${skill.color} rounded-full`}
                                style={{ width: `${skill.level}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
