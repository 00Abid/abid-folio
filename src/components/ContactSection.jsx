import React from "react";

const socialLinks = [
    {
        id: 1,
        href: "mailto:kaabid1557@gmail.com",
        bgHover: "hover:bg-email active:bg-email",
        svg: (
            <svg
                viewBox="0 0 24 24"
                fill="white"
                className="h-8 w-8 transition-all duration-300 group-hover:scale-125"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 5.25L3 5.25V5.25C3 4.83579 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.83579 21 5.25C21 5.66421 20.6642 6 20.25 6H3.75C3.33579 6 3 5.66421 3 5.25ZM3.75 8.25L3 8.25V8.25L3 8.25V18C3 18.4142 3.33579 18.75 3.75 18.75H20.25C20.6642 18.75 21 18.4142 21 18V8.25L12 14.25L3.75 8.25ZM12 12.75L3 7.5H21L12 12.75Z"
                />
            </svg>
        ),
    },
    {
        id: 2,
        href: "https://x.com/kaabid1557",
        bgHover: "hover:bg-gray-700 active:bg-gray-700",
        svg: (
            <svg
                viewBox="0 0 16 16"
                className="bi bi-x-twitter h-8 w-8 transition-all duration-300 group-hover:scale-125"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
            </svg>
        ),
    },
    {
        id: 3,
        href: "https://github.com/00Abid",
        bgHover: "hover:bg-gray-600 active:bg-gray-600",
        svg: (
            <svg
                viewBox="0 0 16 16"
                className="bi bi-github h-8 w-8 transition-all duration-300 group-hover:scale-125 group-active:scale-125"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M8 0 C3.58 0 0 3.58 0 8 c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55 -0.17 0.55 -0.38 0 -0.19 -0.01 -0.82 -0.01 -1.49 -2.01 0.37 -2.53 -0.49 -2.69 -0.94 -0.09 -0.23 -0.48 -0.94 -0.82 -1.13 -0.28 -0.15 -0.68 -0.52 -0.01 -0.53 0.63 -0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07 -0.52 0.28 -0.87 0.51 -1.07 -1.78 -0.2 -3.64 -0.89 -3.64 -3.95 0 -0.87 0.31 -1.59 0.82 -2.15 -0.08 -0.2 -0.36 -1.02 0.08 -2.12 0 0 0.67 -0.21 2.2 0.82 0.64 -0.18 1.32 -0.27 2 -0.27 0.68 0 1.36 0.09 2 0.27 1.53 -1.04 2.2 -0.82 2.2 -0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07 -1.87 3.75 -3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07 -0.01 1.93 -0.01 2.2 0 0.21 0.15 -0.46 0.55 -0.38 C13.71 14.53 16 11.53 16 8 c0 -4.42 -3.8 -8 -8 -8 z"
                />
            </svg>
        ),
    },
    {
        id: 4,
        href: "https://www.linkedin.com/in/abid-khan-coder/",
        bgHover: "hover:bg-linkedin active:bg-linkedin",
        svg: (
            <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 transition-all duration-300 group-hover:scale-125"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.761s.784-1.761 1.75-1.761 1.75.79 1.75 1.761-.784 1.761-1.75 1.761zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
            </svg>
        ),
    },
    {
        id: 5,
        href: "/Abid_Khan_Resume.pdf",
        bgHover: "hover:bg-gray-600 active:bg-gray-600",
        svg: (
            <svg
                viewBox="0 0 24 24"
                className="h-8 w-8 transition-all duration-300 group-hover:scale-125"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5V9h5.5L13 3.5zM6 4h6v4h4v12H6V4z" />
            </svg>
        ),
    },
];

const ContactSection = () => {
    return (
        <section className="h-auto flex flex-col justify-center items-center">
            <div className="self-center mb-5 mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Get in Touch</h2>
            </div>

            <div className="card flex h-16 w-64 mb-4">
                {socialLinks.map((link) => (
                    <a
                        key={link.id}
                        className={`group flex w-1/4 items-center justify-center rounded-full text-white transition-all ${link.bgHover}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.svg}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ContactSection;
