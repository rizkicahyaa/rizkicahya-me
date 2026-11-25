"use client";

import React from "react";
import Image from "next/image";
import { Briefcase, GraduationCap } from "lucide-react";

type Role = {
    title: string;
    period: string;
};

type Experience = {
    type: "work" | "education";
    company: string;
    description: string;
    tags: string[];
    roles?: Role[];
};

const experiences: Experience[] = [
    {
        type: "work",
        company: "Lume Gumi Corp.",
        description: "As a Graphic Designer, I contribute to visual content creation and web development projects.",
        tags: ["Graphic Design", "Web Development", "UI/UX"],
        roles: [
            {
                title: "Graphic Designer",
                period: "June 2026 - Present",
            },
        ],
    },
    {
        type: "work",
        company: "Forum Asisten, Universitas Amikom Yogyakarta",
        description: "Served as a Laboratory Assistant for Programming, Web Programming, and Advanced Programming courses, guiding students through practical sessions, assisting in troubleshooting coding issues, and supporting lecturers in delivering hands-on learning materials.",
        tags: ["C#", "HTML", "CSS", "JavaScript", "PHP", "SQL", "WinForm", ".NET"],
        roles: [
            {
                title: "Laboratory Assistant",
                period: "Feb 2025 - January 2026",
            },
        ],
    },
    {
        type: "work",
        company: "Jogja Media Web",
        description: "As a Web Developer Intern, I contributed to web development projects.",
        tags: ["Web Development", "UI/UX"],
        roles: [
            {
                title: "Web Developer",
                period: "Feb 2021 - May 2021",
            },
        ],
    },
    {
        type: "education",
        company: "Universitas Amikom Yogyakarta",
        description: "Studied Computer Science with a focus on software engineering, web development, and UI/UX design. Actively involved in campus laboratory activities and student organizations.",
        tags: ["Software Engineering", "Web Development", "Machine Learning / AI", "Graphic Design", "UI/UX"],
        roles: [
            {
                title: "S1 - Computer Science",
                period: "2022 - 2026",
            },
        ],
    },
    {
        type: "education",
        company: "SMK Muhammadiyah 1 Yogyakarta",
        description: "Completed a vocational program in Software Engineering, specializing in web and desktop application development. Studied software development lifecycle, database management, and object-oriented programming.",
        tags: ["Web Development", "Desktop Application", "UI/UX"],
        roles: [
            {
                title: "Software Engineering",
                period: "2019 - 2022",
            },
        ],
    },
];

export default function About() {
    return (
        <section id="about" className="py-32 px-4 max-w-7xl mx-auto">
            {/* About Me */}
            <div className="flex flex-col-reverse md:flex-row gap-12 items-center mb-32">
                {/* Description */}
                <div className="flex-1">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                        About Me<span className="text-zinc-600">.</span>
                    </h2>

                    <div className="space-y-4 text-zinc-500 leading-relaxed text-lg md:text-xl">
                        <p className="text-justify">Hi! My name is Rizki Cahya Ramdani, a Computer Science graduate from Universitas Amikom Yogyakarta. I have experience as a Laboratory Assistant for Programming, Web Programming, and Advanced Programming courses, where I guided students in understanding programming concepts and completing practical projects. I also gained professional experience as a Full-Stack Web Developer Intern at Jogja Media Web and as a Graphic Designer & Web Developer at Lume Gumi, an indie game development studio.</p>

                        <p className="text-justify">I have a strong interest in Frontend Development, UI/UX Design, and Graphic Design. At Lume Gumi, I contribute to creating visual content for social media and developing the studio's official website. I enjoy combining technical skills with creativity to build responsive, user-friendly websites and visually engaging designs. I am always eager to learn new technologies, explore creative ideas, and improve my skills through meaningful projects and experiences.</p>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="w-full md:w-1/3 flex items-center justify-center">
                    <Image src="/profile.jpg" alt="Rizki Cahya Ramdani" width={280} height={280} className="rounded-2xl object-cover" priority />
                </div>
            </div>

            {/* Experience & Education */}

            {/* Experience */}
            <div id="experience" className="scroll-mt-28">
                <div className="mb-12">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                        Experience<span className="text-zinc-600">.</span>
                    </h2>

                    <p className="text-zinc-500 max-w-xl text-lg md:text-xl">My professional journey and educational background that shaped my skills and perspective.</p>
                </div>

                <div className="space-y-6 text-zinc-500 leading-relaxed text-lg md:text-xl">
                    <p className="text-justify">I am currently involved with Lume Gumi Corp., an indie game development studio, as a Graphic Designer and Web Developer. My responsibilities include creating visual content for social media and developing the studio's official website.</p>

                    <p className="text-justify">Previously, I served as a Laboratory Assistant at Forum Asisten, Universitas Amikom Yogyakarta, assisting students in Programming, Web Programming, and Advanced Programming courses. During this experience, I helped students understand programming concepts, troubleshoot coding issues, and complete practical assignments.</p>

                    <p className="text-justify">I also gained industry experience through an internship at Jogja Media Web as a Web Developer, where I was involved in website development projects and gained practical experience in building web applications.</p>

                    <p className="text-justify">I completed my Bachelor's degree in Computer Science at Universitas Amikom Yogyakarta (2022–2026), where I studied software engineering, web development, machine learning, and UI/UX design. Before that, I graduated from SMK Muhammadiyah 1 Yogyakarta, majoring in Software Engineering (2019–2022), where I developed foundational knowledge of web and desktop application development.</p>
                </div>
            </div>
        </section>
    );
}
