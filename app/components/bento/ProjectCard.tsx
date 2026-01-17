import Image from "next/image";

type ProjectProps = {
    title: string;
    description: string;
    image: string;
    link: string;
};

export default function ProjectCard({ title, description, image, link }: ProjectProps) {
    return (
        <a href={link} target="_blank" className="bento-card block h-full group relative">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 z-10" />

            <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

            <div className="absolute bottom-0 left-0 w-full p-5 z-20">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
                <p className="text-zinc-400 text-xs line-clamp-1">{description}</p>
            </div>
        </a>
    );
}
