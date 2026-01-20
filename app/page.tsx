import Hero from "./components/landing/Hero";
import TechStack from "./components/landing/TechStack";
import Projects from "./components/landing/Projects";
import Contact from "./components/landing/Contact";
import Navbar from "./components/landing/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 bg-grid-white/[0.02] text-white selection:bg-zinc-800 selection:text-white font-sans relative">
            <Navbar />
            <main className="pt-24">
                <Hero />
                <TechStack />
                <Projects />
                <Contact />
            </main>
        </div>
    );
}
