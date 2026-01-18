import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[70vh] px-4 max-w-7xl mx-auto py-20 gap-12">
            <div className="flex flex-col items-start text-left max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Available for new projects
                </div>

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                    Hi, I'm <span className="text-zinc-400">Rizki Cahya</span>. <br />I build digital products.
                </h1>

                <p className="text-lg text-zinc-500 mb-10 leading-relaxed max-w-lg">A passionate Front-end & UI/UX designer based in Indonesia. I transform complex problems into powerful, beautiful, and intuitive web applications.</p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="#projects" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        View my work
                    </Link>
                    <Link href="#contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors gap-2">
                        Contact me
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
                <div className="absolute inset-0 bg-zinc-800 rounded-3xl rotate-6"></div>
                <Image src="https://github.com/rizkicahyaa.png" alt="Rizki Cahya" fill className="object-cover rounded-3xl border-4 border-zinc-950/50 bg-zinc-950 grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
        </section>
    );
}
