export default function TechStack() {
    const stack = ["JavaScript", "React", "Next.js", "TypeScript", "Bootstrap", "Tailwind CSS", "Node.js", "MySQL", "Figma", "Git"];

    return (
        <section className="py-20 border-y border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-10">Powered by modern tech</p>

                <div className="flex flex-wrap justify-center gap-3">
                    {stack.map((tech) => (
                        <span key={tech} className="px-5 py-2 rounded-full bg-zinc-900 text-zinc-400 text-sm border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
