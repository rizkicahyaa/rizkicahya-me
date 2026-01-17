import Hero from "./components/landing/Hero";
import TechStack from "./components/landing/TechStack";
import Projects from "./components/landing/Projects";
import Contact from "./components/landing/Contact";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500 selection:text-white font-sans">
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
                <div className="text-xl font-bold tracking-tighter">Rizki.</div>
                <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                    <a href="#" className="hover:text-white transition-colors">
                        Home
                    </a>
                    <a href="#projects" className="hover:text-white transition-colors">
                        Work
                    </a>
                    <a href="#contact" className="hover:text-white transition-colors">
                        Contact
                    </a>
                </nav>
                <a href="#contact" className="px-4 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-colors">
                    Let's Talk
                </a>
            </header>

            <main className="pt-20">
                <Hero />
                <TechStack />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
