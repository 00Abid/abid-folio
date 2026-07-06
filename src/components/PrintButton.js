"use client";

import React from 'react';
import { Download } from 'lucide-react';

export default function PrintButton() {
    return (
        <button
            onClick={() => window.print()}
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black text-[10px] font-black uppercase tracking-widest rounded-full transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/10 active:scale-95"
        >
            <Download size={12} /> Print / Save PDF
        </button>
    );
}
