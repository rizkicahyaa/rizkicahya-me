export default function TechStack() {
    const stack = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Figma", "Git"];

    return (
        <section className="py-12 border-y border-zinc-900 bg-zinc-900/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
                <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mb-8">Powered by modern tech</p>

                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
                    {stack.map((tech) => (
                        <span key={tech} className="text-lg font-semibold text-zinc-300">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
