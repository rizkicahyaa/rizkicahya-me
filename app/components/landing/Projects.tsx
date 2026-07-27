import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
    {
        title: "MiraiNime",
        description: "Anime discovery platform with Jikan API.",
        image: "/images/mirainime.png",
        demo: "https://mirainime.vercel.app",
        github: "https://github.com/rizkicahyaa/mirainime",
        tags: ["Vite", "Typescript", "React", "Tailwind CSS"],
    },
    {
        title: "Trip.yuk",
        description: "Indonesian destination system",
        image: "/images/trip-yuk.png",
        github: "https://github.com/rizkicahyaa/trip-yuk",
        tags: ["Vite", "Javascript", "React", "Laravel", "Inertia.js", "Tailwind CSS", "Node.js"],
    },
    {
        title: "Lume Gumi Corp.",
        description: "Lume Gumi Corp. (Indie Game Developer) company profile",
        image: "/images/lumegumi.png",
        demo: "https://lumegumi-corp.vercel.app",
        github: "https://github.com/rizkicahyaa/lumegumi-corp.git",
        tags: ["Vite", "Typescript", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Jogja Culinary",
        description: "Website for culinary in Jogja.",
        image: "/images/jogja-culinary.png",
        github: "https://github.com/rizkicahyaa/jogja-culinary",
        tags: ["Vite", "Javascript", "React", "Tailwind CSS", "MySQL", "Node.js", "Express.js"],
    },
    {
        title: "Otakuverse",
        description: "Anime & game favorite website",
        image: "/images/otakuverse.png",
        demo: "https://otakuverse-main.vercel.app",
        github: "https://github.com/rizkicahyaa/fe-otakuverse.git",
        tags: ["Vite", "React", "Javascript", "Bootstrap"],
    },
    {
        title: "Ngawikerto",
        description: "Hotel booking management system (UI/UX)",
        image: "/images/ngawikerto.png",
        demo: "https://www.figma.com/design/eSa9brf8IkddzMcMuTHBG2/Sistem-Pemesanan-Tiket-Hotel?node-id=0-1&t=K0ksMtmmtNOVZMN9-1",
        tags: ["Figma"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-4 max-w-7xl mx-auto" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            <div className="mb-16">
                <h2 className="text-5xl font-bold text-white mb-4">My Projects</h2>
                <p className="text-zinc-500 max-w-xl text-xl">A collection of applications focusing on performance and user experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {projects.map((project) => (
                    <div key={project.title} className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors">
                        <div className="relative h-50 w-full bg-zinc-900">
                            <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            </div>

                            <p className="text-zinc-500 text-lg mb-6 flex-1 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 rounded-md border border-zinc-800">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-3 mt-auto">
                                {project.demo && (
                                    <a href={project.demo} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-lg hover:bg-purple-500 transition-colors shadow-md shadow-purple-900/30">
                                        <ExternalLink className="w-4 h-4" />
                                        Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a href={project.github} target="_blank" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors border border-zinc-700">
                                        <Github className="w-4 h-4" />
                                        Github
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center">
                <Link href="https://github.com/rizkicahyaa?tab=repositories" target="_blank" className="flex w-full sm:w-auto items-center justify-center h-12 px-8 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/30">
                    View all projects
                </Link>
            </div>
        </section>
    );
}
