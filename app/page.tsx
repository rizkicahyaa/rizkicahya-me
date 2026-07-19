import Hero from "./components/landing/Hero";
import About from "./components/landing/About";
import TechStack from "./components/landing/TechStack";
import Experience from "./components/landing/Experience";
import Projects from "./components/landing/Projects";
import Certificate from "./components/landing/Certificate";
import Contact from "./components/landing/Contact";
import Navbar from "./components/landing/Navbar";

export default function Home() {
    return (
        <div className="min-h-screen bg-zinc-950 bg-grid-white/[0.02] text-white selection:bg-zinc-800 selection:text-white font-sans relative">
            <Navbar />
            <main className="pt-24">
                <Hero />
                <About />
                <TechStack />
                <Experience />
                <Projects />
                <Certificate />
                <Contact />
            </main>
        </div>
    );
}
