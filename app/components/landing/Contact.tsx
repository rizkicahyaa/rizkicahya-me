import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-4">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to work together?</h2>
                <p className="text-zinc-500 text-lg mb-10">I'm currently available for freelance projects and full-time roles.</p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                    <a href="mailto:rizki.cahya03@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                        <Mail className="w-5 h-5" />
                        Send an Email
                    </a>
                    <div className="flex gap-4">
                        <a href="https://github.com/rizkicahyaa" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/rizkicahya/" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/millioree/" target="_blank" className="p-3 bg-zinc-900 rounded-full text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <footer className="pt-10 border-t border-zinc-900 text-zinc-600 text-sm flex justify-center">
                    <span>&copy; 2026 Rizki Cahya. All rights reserved.</span>
                </footer>
            </div>
        </section>
    );
}
