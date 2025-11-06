import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { SiX } from "react-icons/si";

const socialLinks = [
    {
        id: 1,
        href: "mailto:kaabid1557@gmail.com",
        icon: <FaEnvelope size={40} />,
        label: "Email Abid Khan"
    },
    {
        id: 2,
        href: "https://x.com/kaabid1557",
        icon: <SiX size={40} />,
        label: "Follow Abid Khan on X (Twitter)"
    },
    {
        id: 3,
        href: "https://github.com/00Abid",
        icon: <FaGithub size={40} />,
        label: "View Abid Khan's GitHub profile"
    },
    {
        id: 4,
        href: "https://www.linkedin.com/in/abid-khan-coder/",
        icon: <FaLinkedin size={40} />,
        label: "Connect with Abid Khan on LinkedIn"
    },
    {
        id: 5,
        href: "/",
        icon: <FaFilePdf size={40} />,
        label: "Download Abid Khan's resume (PDF)"
    },
];

const ContactSection = () => {
    return (
        <section className="h-auto flex flex-col justify-center items-center">
            <div className="self-center my-10">
                <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-white">Get in Touch</h2>
            </div>

            <div className="card flex h-16 w-64 mb-4 gap-6 md:gap-12 justify-center" role="navigation" aria-label="Social media links">
                {socialLinks.map((link) => (
                    <a
                        key={link.id}
                        className="group flex items-center justify-center rounded-full text-white transition-transform duration-300 ease-in-out transform scale-90 hover:scale-150"
                        href={link.href}
                        target={link.id === 5 ? "_self" : "_blank"}
                        rel={link.id === 5 ? undefined : "noopener noreferrer"}
                        aria-label={link.label}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default ContactSection;