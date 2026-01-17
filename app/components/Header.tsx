import Image from "next/image";

export default function Header() {
    return (
        <header className="flex flex-col items-center gap-8 py-10 text-center sm:items-start sm:text-left animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
                <Image className="relative rounded-full border-2 border-zinc-950" src="/profile-pic-2.jpg" alt="Rizki Cahya Ramdani" width={120} height={120} priority />
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-white">
                    Rizki Cahya <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Ramdani</span>
                </h1>
                <span className="text-xl font-medium text-zinc-400">Front-end Developer | UI/UX Designer</span>
                <p className="max-w-xl text-lg leading-8 text-zinc-400 text-center sm:text-justify text-balance">Computer Science student at Universitas Amikom Yogyakarta. Passionate about building web applications, teaching programming, and exploring machine learning in real-world projects.</p>
            </div>

            <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto mt-4">
                <a className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-8 text-zinc-950 font-bold transition-transform hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]" href="https://rizkicahya.vercel.app" target="_blank" rel="noopener noreferrer">
                    Visit Profile
                </a>
                <a className="flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 px-8 text-zinc-300 font-medium transition-colors hover:bg-zinc-800 hover:text-white hover:border-zinc-700" href="https://github.com/rizkicahyaa?tab=repositories" target="_blank" rel="noopener noreferrer">
                    View Projects
                </a>
            </div>

            <div className="w-full flex justify-center sm:justify-start mt-12 mb-4">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 rounded-full"></div>
            </div>
        </header>
    );
}
