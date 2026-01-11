import Image from "next/image";

type Project = {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
};

const projects: Project[] = [
    {
        title: "MiraiNime",
        description: "MiraiNime is a simple website that utilizes the Jikan API to display anime information from MyAnimeList.",
        image: "/images/mirainime.png",
        github: "https://github.com/rizkicahyaa/mirai-nime.git",
        demo: "https://mirainime.vercel.app",
    },
    {
        title: "Focsy",
        description: "A productivity timer web application that helps you stay focused, manage your time, and get more done (pomodoro).",
        image: "/images/focsy-2.png",
        github: "https://github.com/rizkicahyaa/focsy.git",
        demo: "https://focsy.vercel.app",
    },
    {
        title: "Jogja Culinary",
        description: "A culinary website in Yogyakarta with a responsive layout using React, Tailwind CSS, and MySQL",
        image: "/images/jogja-culinary.png",
        github: "https://github.com/rizkicahyaa/jogja-culinary.git",
    },
    {
        title: "Roomoria",
        description: "Modern hotel booking website built using React, TypeScript, and Tailwind CSS.",
        image: "/images/roomoria.png",
        github: "https://github.com/rizkicahyaa/roomoria.git",
        demo: "https://roomoria.vercel.app",
    },
];

export default function ProjectsSection() {
    return (
        <section className="flex flex-col w-full gap-6 mt-10">
            <h1 className="font-bold text-2xl">My Project</h1>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <div key={project.title} className="border-gray-300 border shadow-sm rounded-2xl overflow-hidden">
                        <Image src={project.image} alt={project.title} width={500} height={200} className="w-full h-40 object-cover" priority />

                        <div className="p-6">
                            <h2 className="font-bold text-lg mb-3">{project.title}</h2>

                            <p className="mb-6 leading-8 text-zinc-600 dark:text-gray-200 text-justify">{project.description}</p>

                            <div className="flex flex-col gap-3 sm:flex-row text-center">
                                <a href={project.github} target="_blank" className="bg-foreground text-sm text-white px-5 py-2.5 rounded-3xl transition hover:bg-[#000000b3] dark:text-black">
                                    View Project
                                </a>

                                {project.demo && (
                                    <a href={project.demo} target="_blank" className="bg-white text-sm text-black border border-gray-300 px-5 py-2.5 rounded-3xl transition hover:bg-[#00000021] dark:border-gray-300 bg-none">
                                        Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-6">
                <a href="https://github.com/rizkicahyaa?tab=repositories" target="_blank" className="hover:text-blue-500 transition">
                    More? On my GitHub →
                </a>
            </div>

            <div className="mx-auto">
                <div className="mx-auto w-36 h-0.5 bg-gray-200 mt-12"></div>
            </div>
        </section>
    );
}
