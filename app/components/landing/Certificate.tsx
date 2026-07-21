import { ExternalLink } from "lucide-react";

const certificates = [
    {
        title: "Code Generation and Optimization Using IBM Granite",
        issuer: "IBM x Hacktiv8",
        date: "2025",
        url: "https://drive.google.com/file/d/1DOc5Qd518RZNcmmZJZu2KMn9PbRnsLtf/view?usp=sharing",
    },
    {
        title: "Unlocking the Power of Data: Practical Introduction to Machine Learning",
        issuer: "Dibimbing.id",
        date: "2025",
        url: "https://drive.google.com/file/d/1PbD1WNdOtXSMwj0NLQyLweorCMJ9u2YM/view?usp=drive_link",
    },
    {
        title: "Website Aman di Era AI: Cara Developer Bertahan dari Serangan Hacker Modern",
        issuer: "Dunia Coding",
        date: "2026",
        url: "https://duniacoding.id/certificate/E-WS127-0039",
    },
    {
        title: "Workshop Full Stack Developer HIMASI x BPC Amikom",
        issuer: "HIMASI x BPC Amikom",
        date: "2025",
        url: "https://drive.google.com/file/d/1KsYEpeYrGSXXKjwnbjGQBt1aTGhydO22/view?usp=drive_link",
    },
    {
        title: "Laboratory Assistant: Programming",
        issuer: "Forum Asisten, Universitas Amikom Yogyakarta",
        date: "2025",
        url: "https://drive.google.com/file/d/1yWmBjqg4NtldOGrMVI1SW2LxcBBgXfn9/view?usp=drive_link",
    },
    {
        title: "Laboratory Assistant: Web Programming",
        issuer: "Forum Asisten, Universitas Amikom Yogyakarta",
        date: "2025",
        url: "https://drive.google.com/file/d/15p2aV_32nGxI_Tuahj3CY3tXk9ftcfys/view?usp=drive_link",
    },
    {
        title: "Laboratory Assistant: Advanced Programming",
        issuer: "Forum Asisten, Universitas Amikom Yogyakarta",
        date: "2026",
        url: "https://drive.google.com/file/d/1PwPD4GkZsOqUV1YKARIejtQqyRqfrJ_Z/view?usp=sharing",
    },
];

export default function Certificate() {
    return (
        <section id="certificates" className="py-32" style={{ fontFamily: "var(--font-outfit), sans-serif" }}>
            <div className="px-4 max-w-4xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-5xl font-bold text-white mb-4">Certificates</h2>
                    <p className="text-zinc-500 max-w-xl text-xl">Professional certifications and achievements that validate my skills and expertise.</p>
                </div>

                <div className="divide-y divide-zinc-800/60">
                    {certificates.map((certificate, index) => (
                        <a
                            key={certificate.title}
                            href={certificate.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-6 py-5 hover:bg-zinc-900/30 px-4 -mx-4 rounded-xl transition-all duration-200"
                        >
                            <div className="flex items-start gap-5 flex-1 min-w-0">
                                <span className="text-zinc-600 text-base font-mono mt-0.5 shrink-0 w-6 text-right">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors leading-snug">
                                        {certificate.title}
                                    </h3>
                                    <p className="text-zinc-500 text-base mt-1">{certificate.issuer}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 shrink-0">
                                <span className="text-zinc-600 text-sm font-medium tabular-nums">{certificate.date}</span>
                                <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
