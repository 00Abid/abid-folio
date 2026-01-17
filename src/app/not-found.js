import Link from "next/link";
import { Terminal, ArrowLeft, Search, Home } from "lucide-react";

export const metadata = {
    title: "404: Resource Not Indexed | Abid SEO",
    description: "The requested path could not be resolved by the server.",
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center px-6 relative mt-2 overflow-hidden">

            {/* Background Decorative Element: Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
            }} />

            <div className="relative z-10 w-full max-w-2xl">
                {/* HEADER LOG */}
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                    <div className="w-10 h-10 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500">
                        <Terminal size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] font-mono text-red-500 uppercase tracking-[0.3em]">Status Code: 404</p>
                        <h1 className="text-xl font-black uppercase tracking-tighter">Request_Path_Invalid</h1>
                    </div>
                </div>

                {/* MAIN CONTENT */}
                <div className="space-y-6 mb-12">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                        Lost in <br />
                        <span className="text-white/10 italic font-serif lowercase">The Crawl.</span>
                    </h2>
                    <p className="text-slate-400 text-lg font-medium max-w-md leading-relaxed">
                        The resource you are looking for has been moved, renamed, or was never indexed by our server.
                    </p>
                </div>

                {/* LOGICAL REDIRECTS (SEO Best Practice) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                        href="/"
                        className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                    >
                        <Home size={20} className="text-cyan-500 group-hover:text-black mb-4 transition-colors" />
                        <p className="text-xs font-black uppercase tracking-widest text-white group-hover:text-black">Return Home</p>
                        <p className="text-[10px] text-slate-500 group-hover:text-black/70 mt-1 uppercase">Root Directory</p>
                    </Link>

                    <Link
                        href="/blog"
                        className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:border-white transition-all duration-300"
                    >
                        <Search size={20} className="text-slate-400 group-hover:text-black mb-4 transition-colors" />
                        <p className="text-xs font-black uppercase tracking-widest text-white group-hover:text-black">Search Blog</p>
                        <p className="text-[10px] text-slate-500 group-hover:text-black/70 mt-1 uppercase">Indexed Insights</p>
                    </Link>
                </div>

                {/* FOOTER TERMINAL DATA */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex gap-6">
                        <span className="text-[9px] font-mono text-slate-700 uppercase">IP: LOGGED</span>
                        <span className="text-[9px] font-mono text-slate-700 uppercase">AGENT: VERIFIED</span>
                    </div>
                    <Link href="/#contact" className="text-[9px] font-mono text-cyan-500 hover:underline uppercase tracking-widest">
                        Report Broken Link // 0xAF4
                    </Link>
                </div>
            </div>
        </main>
    );
}