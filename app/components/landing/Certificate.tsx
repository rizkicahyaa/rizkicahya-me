import { ExternalLink, Award } from "lucide-react";

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
        title: "Workshop Full Stack Developer HIMASI x BPC Amikom",
        issuer: "HIMASI x BPC Amikom",
        date: "2025",
        url: "https://drive.google.com/file/d/1KsYEpeYrGSXXKjwnbjGQBt1aTGhydO22/view?usp=drive_link",
    },
];

export default function Certificate() {
    return (
        <section id="certificates" className="py-32 px-4 max-w-7xl mx-auto">
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-white mb-4">Certificates</h2>
                <p className="text-zinc-500 max-w-xl">Professional certifications and achievements that validate my skills and expertise.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((certificate) => (
                    <a key={certificate.title} href={certificate.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors">
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-start justify-between gap-3 mb-3">
                                <div className="flex items-start gap-3 flex-1">
                                    {/* <Award className="w-5 h-5 text-zinc-400 mt-1 shrink-0" /> */}
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-white group-hover:text-zinc-100 transition-colors">{certificate.title}</h3>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors shrink-0" />
                            </div>

                            <p className="text-zinc-400 text-sm mb-2">{certificate.issuer}</p>
                            <p className="text-zinc-500 text-xs">{certificate.date}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
