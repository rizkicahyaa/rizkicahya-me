import Image from "next/image";

type Project = {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
};

const projects: Project[] = [
    {
        title: "MiraiNime",
        description: "MiraiNime is a simple website that utilizes the Jikan API to display anime information from MyAnimeList.",
        image: "/images/mirainime.png",
        github: "https://github.com/rizkicahyaa/mirai-nime.git",
        demo: "https://mirainime.vercel.app",
    },
    {
        title: "Focsy",
        description: "A productivity timer web application that helps you stay focused, manage your time, and get more done (pomodoro).",
        image: "/images/focsy-2.png",
        github: "https://github.com/rizkicahyaa/focsy.git",
        demo: "https://focsy.vercel.app",
    },
    {
        title: "Jogja Culinary",
        description: "A culinary website in Yogyakarta with a responsive layout using React, Tailwind CSS, and MySQL",
        image: "/images/jogja-culinary.png",
        github: "https://github.com/rizkicahyaa/jogja-culinary.git",
    },
    {
        title: "Roomoria",
        description: "Modern hotel booking website built using React, TypeScript, and Tailwind CSS.",
        image: "/images/roomoria.png",
        github: "https://github.com/rizkicahyaa/roomoria.git",
        demo: "https://roomoria.vercel.app",
    },
];

export default function ProjectsSection() {
    return (
        <section className="flex flex-col w-full gap-8 mt-24 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-backwards">
            <h2 className="font-bold text-3xl tracking-tight text-white border-b border-zinc-800 pb-4">Featured Projects</h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <div key={project.title} className="group flex flex-col overflow-hidden rounded-2xl bg-zinc-900/50 border border-zinc-800 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] hover:border-cyan-500/30 hover:-translate-y-1 backdrop-blur-sm">
                        <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                            <Image src={project.image} alt={project.title} width={600} height={300} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" priority={false} />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="mb-2 text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                            <p className="mb-6 flex-1 text-base leading-relaxed text-zinc-400 text-justify">{project.description}</p>

                            <div className="flex flex-wrap gap-3 mt-auto">
                                <a href={project.github} target="_blank" className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition-colors hover:bg-cyan-50">
                                    GitHub
                                </a>

                                {project.demo && (
                                    <a href={project.demo} target="_blank" className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-transparent px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white hover:border-zinc-600">
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-8">
                <a href="https://github.com/rizkicahyaa?tab=repositories" target="_blank" className="inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition-colors group">
                    View more on GitHub
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
            </div>

            <div className="mx-auto w-full max-w-xs">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mt-16"></div>
            </div>
        </section>
    );
}
