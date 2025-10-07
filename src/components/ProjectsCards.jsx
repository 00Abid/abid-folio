import React from "react";

const projects = [
    {
        id: 1,
        title: "Cryptocurrency Tracker",
        tech: "ReactJS, TailwindCSS, Firebase, CoinGecko API",
        desc: "Monitors live market prices for cryptocurrencies with portfolio access",
        image: "/cry.webp",
        link: "https://crypto-trackerrr.vercel.app/",
    },
    {
        id: 2,
        title: "CaloriCurve - Nutrition Tracker",
        tech: "React, Firebase, Flask, OpenFoodFacts API",
        desc: "Track daily food intake and calories with smart recommendations",
        image: "/ca.webp",
        link: "https://caloricurve.vercel.app/",
    },
    {
        id: 3,
        title: "Portfolio Website",
        tech: "React, TailwindCSS, AOS Animations",
        desc: "A modern developer portfolio with animations and 3D effects",
        image: "/lb.webp",
        link: "https://abidkhan.vercel.app/",
    },
    {
        id: 4,
        title: "AERO ENTERPRISES Website",
        tech: "React, TailwindCSS, SEO, Google Search Console, GTM",
        desc: "Analyzes stock market data with real-time updates and predictions",
        image: "/ae.webp",
        link: "https://stock-analyzer-ai.vercel.app/",
    },
];


const ProjectCards = () => {            
    return (
        <div className="relative z-10 min-h-screen text-white flex flex-col items-center justify-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-10">
                Projects
            </h2>

            <div className="container mx-auto max-w-7xl px-6 md:px-8 py-4 text-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            data-aos="fade-up"
                            className="w-full rounded-2xl overflow-hidden shadow-xl bg-white/10 border border-white/10 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <img
                                className="w-full h-48 object-cover"
                                src={project.image}
                                alt={`${project.title} by Abid Khan`}
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
                                    <svg
                                        className="w-8 h-3 -translate-x-2 group-hover:translate-x-0 transition-transform duration-300 fill-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 46 16"
                                    >
                                        <path d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" />
                                    </svg>
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
