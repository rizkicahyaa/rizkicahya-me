import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-32 px-4 max-w-7xl mx-auto" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            <div className="flex flex-col-reverse md:flex-row gap-12 items-start">
                <div className="flex-1">
                    <h2 className="text-5xl font-bold text-white mb-6">About Me</h2>
                    <div className="space-y-4 text-zinc-400 leading-relaxed text-xl">
                        <p>Hi! My name is Rizki Cahya Ramdani, a Computer Science student at Universitas Amikom Yogyakarta. I have experience as a lab assistant for Programming, Web Programming, and Advanced Programming courses, where I helped students understand coding concepts and build their projects. I focus mainly on Frontend Development and UI/UX Design because I love creating clean, user-friendly, and visually appealing interfaces. </p>
                    </div>
                </div>

                <div className="w-full md:w-1/3 rounded-3xl flex items-center justify-center">
                    <Image src="/profile.jpg" alt="Profile" width={280} height={280} className="rounded-2xl object-cover" priority />
                </div>
            </div>
        </section>
    );
}
