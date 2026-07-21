export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-900" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            <div className="text-2xl font-bold tracking-tighter">
                <span>&lt;</span>
                Rizki Cahya /<span>&gt;</span>
            </div>
            <nav className="hidden md:flex gap-8 text-base font-medium text-zinc-400">
                <a href="#" className="hover:text-white transition-colors">
                    Home
                </a>
                <a href="#about" className="hover:text-white transition-colors">
                    About
                </a>
                <a href="#experience" className="hover:text-white transition-colors">
                    Experience
                </a>
                <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                </a>
                <a href="#certificates" className="hover:text-white transition-colors">
                    Certificates
                </a>
                <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                </a>
            </nav>
            <a href="#contact" className="px-6 py-2.5 bg-purple-600 text-white text-base font-medium rounded-full hover:bg-purple-500 transition-colors shadow-md shadow-purple-900/40">
                Let's Talk
            </a>
        </header>
    );
}
