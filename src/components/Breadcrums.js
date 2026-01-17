"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumbs = () => {
    const pathname = usePathname();

    // Don't render on the home page as it's the root
    if (pathname === "/") return null;

    const pathElements = pathname.split("/").filter((path) => path);

    // Generate the Breadcrumb Schema for Google
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://abid-folio.vercel.app/"
            },
            ...pathElements.map((path, index) => {
                const routeTo = `/${pathElements.slice(0, index + 1).join("/")}`;
                const name = path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, " ");
                return {
                    "@type": "ListItem",
                    "position": index + 2,
                    "name": name,
                    "item": `https://abid-folio.vercel.app${routeTo}`
                };
            })
        ]
    };

    return (
        <nav aria-label="Breadcrumb" className="py-6 px-6 md:px-12 lg:px-24 mt-25">
            {/* Injecting Structured Data into the Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <ol className="flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <li className="flex items-center">
                    <Link href="/" className="hover:text-cyan-500 transition-colors flex items-center gap-1">
                        <Home size={12} /> Home
                    </Link>
                </li>

                {pathElements.map((path, index) => {
                    const routeTo = `/${pathElements.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathElements.length - 1;
                    const name = path.replace(/-/g, " ");

                    return (
                        <li key={routeTo} className="flex items-center space-x-2">
                            <ChevronRight size={10} className="text-slate-800" />
                            {isLast ? (
                                <span className="text-cyan-500 font-black italic" aria-current="page">
                                    {name}
                                </span>
                            ) : (
                                <Link href={routeTo} className="hover:text-cyan-500 transition-colors">
                                    {name}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;