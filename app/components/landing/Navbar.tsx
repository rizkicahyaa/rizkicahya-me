export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-900">
            <div className="text-xl font-bold tracking-tighter">
                <span>&lt;</span>
                Rizki Cahya /<span>&gt;</span>
            </div>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                <a href="#" className="hover:text-white transition-colors">
                    Home
                </a>
                <a href="#about" className="hover:text-white transition-colors">
                    About
                </a>
                <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                </a>
                <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                </a>
            </nav>
            <a href="#contact" className="px-5 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-300 transition-colors">
                Let's Talk
            </a>
        </header>
    );
}
