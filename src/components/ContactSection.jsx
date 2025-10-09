import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFilePdf } from "react-icons/fa";

const socialLinks = [
    {
        id: 1,
        href: "mailto:kaabid1557@gmail.com",
        icon: <FaEnvelope size={40} />,
    },
    {
        id: 2,
        href: "https://x.com/kaabid1557",
        icon: <FaTwitter size={40} />,
    },
    {
        id: 3,
        href: "https://github.com/00Abid",
        icon: <FaGithub size={40} />,
    },
    {
        id: 4,
        href: "https://www.linkedin.com/in/abid-khan-coder/",
        icon: <FaLinkedin size={40} />,
    },
    {
        id: 5,
        href: "/Abid_Khan_Resume.pdf",
        icon: <FaFilePdf size={40} />,
    },
];

const ContactSection = () => {
    return (
        <section className="h-auto flex flex-col justify-center items-center">
            <div className="self-center my-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h2>
            </div>

            <div className="card flex h-16 w-64 mb-4 gap-6 md:gap-12 justify-center">
                {socialLinks.map((link) => (
                    <a
                        key={link.id}
                        className="group flex items-center justify-center rounded-full text-white transition-transform duration-300 ease-in-out transform scale-90 hover:scale-150"
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ContactSection;
