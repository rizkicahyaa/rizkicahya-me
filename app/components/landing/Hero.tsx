import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-sm text-zinc-400 mb-8">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">digital products</span> that scale.
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">I help startups and businesses turn ideas into high-performance web applications with modern technologies and clean design.</p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#projects" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                    View my work
                </Link>
                <Link href="#contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors gap-2 group">
                    Contact me
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
