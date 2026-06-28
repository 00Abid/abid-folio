"use client";
import React from 'react';
import { Share2 } from 'lucide-react';

export default function ShareButton({ tl_dr }) {
    const handleCopy = () => {
        // Joins the array into a formatted string
        const textToCopy = `TL;DR Summary:\n${tl_dr.map(item => `• ${item}`).join('\n')}`;

        navigator.clipboard.writeText(textToCopy).then(() => {
            alert("Summary copied to clipboard!");
        });
    };

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-colors"
        >
            Share Insights <Share2 size={12} />
        </button>
    );
}