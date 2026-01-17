export default function StackCard() {
    const stack = ["React", "Next.js", "TypeScript", "Tailwind"];

    return (
        <div className="bento-card h-full p-6 flex flex-col justify-center gap-4">
            <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
                {stack.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-lg border border-zinc-700">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
