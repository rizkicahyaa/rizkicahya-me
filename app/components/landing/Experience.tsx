import { Briefcase, GraduationCap } from "lucide-react";

type Role = {
    title: string;
    period: string;
};

type Experience = {
    type: "work" | "education";
    title?: string;
    company: string;
    period?: string;
    description: string;
    tags: string[];
    roles?: Role[];
};

const experiences: Experience[] = [
    {
        type: "work",
        company: "Lume Gumi Corp.",
        description: "As a Graphic Designer & Web Developer, I contribute to visual content creation and web development projects.",
        tags: ["Graphic Design", "Web Development", "UI/UX"],
        roles: [{ title: "Graphic Designer & Web Developer", period: "June 2026 - Present" }],
    },
    {
        type: "work",
        company: "Forum Asisten, Universitas Amikom Yogyakarta",
        description: "Served as a Laboratory Assistant for Programming, Web Programming, and Advanced Programming courses, guiding students through practical sessions, assisting in troubleshooting coding issues, and supporting lecturers in delivering hands-on learning materials.",
        tags: ["C#", "HTML", "CSS", "JavaScript", "PHP", "WinForm", ".NET"],
        roles: [{ title: "Laboratory Assistant", period: "Feb 2025 - January 2026" }],
    },
    {
        type: "education",
        company: "Universitas Amikom Yogyakarta",
        description: "Studying Computer Science with a focus on software engineering, web development, and UI/UX design. Actively involved in campus laboratory activities and student organizations.",
        tags: ["Computer Science", "Software Engineering", "UI/UX"],
        roles: [{ title: "S1 - Computer Science", period: "2022 - 2026" }],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-4 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
                <p className="text-zinc-500 max-w-xl">My professional journey and educational background that shaped my skills and perspective.</p>
            </div>

            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <div key={index} className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex items-start gap-4 flex-1">
                                <div className={`p-2 rounded-lg shrink-0 ${exp.type === "work" ? "bg-blue-500/10 text-blue-400" : "bg-purple-500/10 text-purple-400"}`}>{exp.type === "work" ? <Briefcase className="w-5 h-5" /> : <GraduationCap className="w-5 h-5" />}</div>

                                <div className="flex-1">
                                    {/* Single role title */}
                                    {exp.title && <h3 className="text-base font-semibold text-white">{exp.title}</h3>}

                                    {/* Multiple roles */}
                                    {exp.roles && (
                                        <div className="space-y-1 mb-2">
                                            {exp.roles.map((role) => (
                                                <div key={role.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5">
                                                    <h3 className="text-base font-semibold text-white">{role.title}</h3>
                                                    <span className="text-xs text-zinc-500 whitespace-nowrap">{role.period}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <p className="text-sm text-zinc-400 mt-0.5">{exp.company}</p>
                                    <p className="text-sm text-zinc-500 leading-relaxed mt-3">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2 py-1 bg-zinc-900 text-zinc-400 rounded-md border border-zinc-800">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Single period (for non-roles entries) */}
                            {exp.period && !exp.roles && <span className="text-xs text-zinc-500 whitespace-nowrap sm:mt-1">{exp.period}</span>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
