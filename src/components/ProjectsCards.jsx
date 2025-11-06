import React from "react";
import { FaLocationArrow } from "react-icons/fa6";


const projects = [
    {
        id: 1,
        title: "Aero Enterprises - SEO Optimized Website",
        tech: "React · Tailwind CSS · SEO · Google Search Console · GTM",
        desc: "Developed and optimized a responsive business website with structured data, meta strategies, and Google Tools integration to improve search visibility and ranking.",
        image: "/ae.webp",
        link: "https://www.aeroenterprises.shop/",
    },
    {
        id: 2,
        title: "Raja Buffing Works - Local SEO & Performance Optimization",
        tech: "React · Tailwind CSS · Local SEO · Google Search Console",
        desc: "Designed and optimized a local manufacturing website focused on performance driven SEO and mobile first design, achieving measurable visibility growth through local keyword targeting.",
        image: "/rbw.webp",
        link: "https://rajabuffing.vercel.app/",
    },
    {
        id: 3,
        title: "CaloriCurve - AI Powered Nutrition Tracker",
        tech: "HTML · CSS · JavaScript · Flask · Firebase · Gemini AI",
        desc: "Built an AI driven nutrition tracker that intelligently logs meals, tracks calories and nutrients, and enhances discoverability through on-page SEO techniques.",
        image: "/ca.webp",
        link: "https://caloricurve.vercel.app/",
    },
    {
        id: 4,
        title: "Cryptocurrency Tracker",
        tech: "React · Tailwind CSS · Firebase · CoinGecko API",
        desc: "Developed a real time cryptocurrency tracking platform integrating the CoinGecko API for live market analysis and secure portfolio access.",
        image: "/cry.webp",
        link: "https://crypto-trackerrr.vercel.app/",
    },
    {
        id: 5,
        title: "Ammu Cosmetics - SEO Cosmetic Website",
        tech: "Next.js · Tailwind CSS · SEO",
        desc: "Created a modern, professional cosmetic brand website with a clean UI, responsive design, and engaging animations for an enhanced user experience.",
        image: "/lb.webp",
        link: "https://ammu-cosmetics.vercel.app/",
    },
];



const ProjectCards = () => {
    return (
        <section className="relative z-10 py-8 px-4">
            <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold text-center mb-10">
                Experience
            </h2>
            <div className="container mx-auto max-w-7xl px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {projects.map((project) => (
                        <article
                            key={project.id}
                            className="group flex flex-col h-full rounded-xl overflow-hidden shadow-lg bg-white/4 border border-white/6 backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]"
                        >
                            <figure className="w-full overflow-hidden">
                                <img
                                    className="w-full h-36 md:h-44 lg:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
                                    src={project.image}
                                    alt={`${project.title} by Abid Khan`}
                                    loading="lazy"
                                    decoding="async"
                                    width="800"
                                    height="450"
                                />
                            </figure>

                            <div className="px-4 py-3 flex-1 flex flex-col">
                                <h3 className="font-semibold text-base md:text-lg mb-1 text-white/95">{project.title}</h3>

                                <p className="text-[11px] md:text-sm mb-2 text-gray-300">{project.tech}</p>

                                <p className="text-[10px] mb-3 text-gray-400 flex-1 leading-tight">{project.desc}</p>

                                <div className="mt-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold text-white bg-white/6 hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
                                        aria-label={`Open ${project.title} in a new tab`}
                                    >
                                        <span className="relative">Live Preview</span>
                                        <FaLocationArrow />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCards;