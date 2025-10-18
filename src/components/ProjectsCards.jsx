import React from "react";

const projects = [
    {
        id: 1,
        title: "Cryptocurrency Tracker",
        tech: "React · Tailwind CSS · Firebase · CoinGecko API",
        desc: "Monitors live market prices for cryptocurrencies with portfolio access",
        image: "/cry.webp",
        link: "https://crypto-trackerrr.vercel.app/",
    },
    {
        id: 2,
        title: "CaloriCurve - Nutrition Tracker",
        tech: "HTML · CSS · JS · Firebase",
        desc: "AI powered nutrition tracker to log meals, track calories, and moniter progress",
        image: "/ca.webp",
        link: "https://caloricurve.vercel.app/",
    },
    {
        id: 3,
        title: "Cosmetic Website",
        tech: "Next.js · Tailwind CSS · AOS · Shadcn UI",
        desc: "A modern, Professional Cosmetic Website made using NextJS, Tailwind CSS",
        image: "/lb.webp",
        link: "https://liyana-beauty.vercel.app/",
    },
    {
        id: 4,
        title: "AERO ENTERPRISES Website",
        tech: "React · Tailwind CSS · SEO · AOS",
        desc: "An seo optimized business website for AERO ENTERPRISES with Googletools",
        image: "/ae.webp",
        link: "https://www.aeroenterprises.shop/",
    },
];


const ProjectCards = () => {
    return (
        <div className="relative z-10 min-h-screen text-white flex flex-col items-center justify-center px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
                Projects
            </h2>

            <div className="container mx-auto max-w-7xl px-6 md:px-8 py-4 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="w-full rounded-2xl overflow-hidden shadow-xl bg-white/10 border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={project.image}
                                alt={`${project.title} by Abid Khan`}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="px-6 py-5">
                                <h3 className="font-bold text-xl mb-2 text-white">{project.title}</h3>
                                <p className="text-xs mb-1 text-gray-300">{project.tech}</p>
                                <p className="text-sm mb-1 text-gray-400">{project.desc}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-transparent border-none cursor-pointer group mt-4"
                                >
                                    <span className="relative text-white text-sm pr-4 pb-2 after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-0 after:left-0 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                                        Live Preview
                                    </span>

                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCards;
