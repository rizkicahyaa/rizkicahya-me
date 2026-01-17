import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 border-t border-zinc-900 bg-zinc-900/10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to work together?</h2>
                <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">I'm currently available for freelance projects and full-time roles. Let's create something amazing.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <a href="mailto:contact@example.com" className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-colors">
                        <Mail className="w-5 h-5" />
                        Send an Email
                    </a>
                    <div className="flex gap-4">
                        <a href="https://github.com/rizkicahyaa" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <footer className="text-zinc-600 text-sm">&copy; 2026 Rizki Cahya. Built with Next.js & Tailwind.</footer>
            </div>
        </section>
    );
}
