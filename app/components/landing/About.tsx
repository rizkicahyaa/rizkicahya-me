import React from "react";

export default function About() {
    return (
        <section id="about" className="py-32 px-4 max-w-7xl mx-auto" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1">
                    <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed text-xl">
                        <p>Hi! My name is Rizki Cahya Ramdani, a Computer Science student at Universitas Amikom Yogyakarta. I have experience as a lab assistant for Programming, Web Programming, and Advanced Programming courses, where I helped students understand coding concepts and build their projects. I focus mainly on Frontend Development and UI/UX Design because I love creating clean, user-friendly, and visually appealing interfaces. </p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-6 bg-zinc-900/50 border border-zinc-800 rounded-3xl">
                    <h3 className="text-2xl font-semibold text-white mb-4">Quick Facts</h3>
                    <ul className="space-y-3 text-zinc-400 text-lg">
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full shrink-0"></span>
                            <span>Based in Indonesia</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></span>
                            <span>3+ Years Experience</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-purple-500 rounded-full shrink-0"></span>
                            <span>Front-end & UI/UX Designer</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full shrink-0"></span>
                            <span>Open for Freelance</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
