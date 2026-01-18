import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "MiraiNime",
        description: "Anime discovery platform with Jikan API.",
        image: "/images/mirainime.png",
        link: "https://mirainime.vercel.app",
        tags: ["Next.js", "API", "Tailwind"],
    },
    {
        title: "Focsy",
        description: "Productivity timer for deep work.",
        image: "/images/focsy-2.png",
        link: "https://focsy.vercel.app",
        tags: ["React", "State Management"],
    },
    {
        title: "Roomoria",
        description: "Hotel booking management system.",
        image: "/images/roomoria.png",
        link: "https://roomoria.vercel.app",
        tags: ["TypeScript", "Dashboard"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-4 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Selected Projects</h2>
                <p className="text-zinc-500 max-w-xl">A collection of applications focusing on performance and user experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <a key={project.title} href={project.link} target="_blank" className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors">
                        <div className="relative h-56 w-full bg-zinc-900">
                            <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                            </div>

                            <p className="text-zinc-500 text-sm mb-6 flex-1 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 rounded-md border border-zinc-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
