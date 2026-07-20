import { SiJavascript, SiReact, SiNextdotjs, SiTypescript, SiBootstrap, SiTailwindcss, SiNodedotjs, SiMysql, SiFigma, SiGit, SiLaravel, SiCodeigniter, SiPhp, SiSvelte, SiAstro } from "react-icons/si";

export default function TechStack() {
    const stack = [
        { name: "PHP", icon: SiPhp, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
        { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
        { name: "React", icon: SiReact, color: "text-blue-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "Svelte", icon: SiSvelte, color: "text-orange-500" },
        { name: "Astro", icon: SiAstro, color: "text-purple-400" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
        { name: "MySQL", icon: SiMysql, color: "text-orange-400" },
        { name: "Figma", icon: SiFigma, color: "text-pink-400" },
        { name: "Git", icon: SiGit, color: "text-red-500" },
    ];

    return (
        <section className="py-20 border-y border-zinc-900">
            <div className="max-w-4xl mx-auto px-4 flex flex-col items-center">
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-10">Tech Stack</p>

                <div className="flex flex-wrap justify-center gap-6">
                    {stack.map((tech) => (
                        <div key={tech.name} className="flex flex-col items-center gap-2 group cursor-pointer">
                            <div className={`p-4 rounded-2xl bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300 group-hover:bg-zinc-800`}>
                                <tech.icon className={`w-8 h-8 ${tech.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
