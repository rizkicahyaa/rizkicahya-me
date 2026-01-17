import { Github, Linkedin, Mail } from "lucide-react";

export default function ConnectCard() {
    return (
        <div className="bento-card h-full p-6 flex flex-col justify-center items-center gap-6 bg-zinc-900 border border-zinc-800">
            <h3 className="text-white font-bold text-lg">Let's Connect</h3>
            <div className="flex gap-4">
                <a href="https://github.com/rizkicahyaa" target="_blank" className="p-3 bg-zinc-800 rounded-full text-zinc-400 hover:bg-white hover:text-black transition-all">
                    <Github className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" className="p-3 bg-zinc-800 rounded-full text-zinc-400 hover:bg-blue-600 hover:text-white transition-all">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:contact@example.com" className="p-3 bg-zinc-800 rounded-full text-zinc-400 hover:bg-green-500 hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
}
