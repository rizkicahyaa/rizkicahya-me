"use client";

import Image from "next/image";

type InterestItem = {
    title: string;
    image: string;
    category: string;
    genre: string;
};

const animeList: InterestItem[] = [
    {
        title: "Neon Genesis Evangelion",
        image: "/images/interests/evangelion.jpg",
        category: "Anime",
        genre: "Action, Drama, Mecha, Sci-Fi, Psychological",
    },
    {
        title: "Angel Beats",
        image: "/images/interests/angel-beats.jpg",
        category: "Anime",
        genre: "Drama, Fantasy, School",
    },
    {
        title: "Demon Slayer: Kimetsu no Yaiba",
        image: "/images/interests/demon-slayer.jpg",
        category: "Anime",
        genre: "Action, Historical, Supernatural, Shounen",
    },
    {
        title: "Dandadan",
        image: "/images/interests/dandadan.jpg",
        category: "Anime",
        genre: "Action, Comedy, Supernatural",
    },
    {
        title: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
        image: "/images/interests/seishun-buta.jpg",
        category: "Anime",
        genre: "Drama, Romance, Supernatural, School",
    },
    {
        title: "Kono Subarashii Sekai ni Shukufuku wo!",
        image: "/images/interests/konosuba.jpg",
        category: "Anime",
        genre: "Adventure, Comedy, Fantasy, Parody",
    },
    {
        title: "Uma Musume: Pretty Derby",
        image: "/images/interests/umamusume-2.jpg",
        category: "Anime",
        genre: "Sports, Racing, School",
    },
];

const gamesList: InterestItem[] = [
    {
        title: "Genshin Impact",
        image: "/images/interests/genshin-impact.png",
        category: "PC / Mobile Game",
        genre: "Action RPG, Open World, Fantasy",
    },
    {
        title: "Honkai: Star Rail",
        image: "/images/interests/hsr.jpg",
        category: "PC / Mobile Game",
        genre: "Turn-Based, J-RPG, Fantasy",
    },
    {
        title: "Umamusume: Pretty Derby",
        image: "/images/interests/uma.webp",
        category: "PC / Mobile Game",
        genre: "Racing RPG, Sports",
    },
    {
        title: "Arknights",
        image: "/images/interests/arknights.jpg",
        category: "PC / Mobile Game",
        genre: "Tower Defense, Tactical RPG, Fantasy",
    },
    {
        title: "Morimens",
        image: "/images/interests/morimens.webp",
        category: "PC / Mobile Game",
        genre: "Roguelite Deck-Builder, Turn-Based RPG, Visual Novel",
    },
];

function InterestCard({ item }: { item: InterestItem }) {
    return (
        <div className="group overflow-hidden rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-all">
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
            </div>

            <div className="p-4">
                <span className="text-xs text-zinc-500">{item.category}</span>

                <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>

                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{item.genre}</p>
            </div>
        </div>
    );
}

export default function Interests() {
    return (
        <section className="min-h-screen py-32 px-4 max-w-7xl mx-auto">
            {/* Hero */}
            <div className="mb-20">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
                    Interests<span className="text-zinc-600">.</span>
                </h1>

                <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed">Beyond coding and designing, I enjoy exploring different worlds through anime and video games. Here are some of my personal favorites.</p>
            </div>

            {/* Anime */}
            <div className="mb-24">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Anime</h2>
                    <p className="text-zinc-500 mt-2">Stories and characters that I enjoy watching.</p>
                </div>

                {animeList.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {animeList.map((item) => (
                            <InterestCard key={item.title} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-zinc-600 text-sm border border-dashed border-zinc-800 rounded-xl p-8 text-center">Anime collection coming soon...</p>
                )}
            </div>

            {/* Games */}
            <div>
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Games</h2>
                    <p className="text-zinc-500 mt-2">Games that I have played and enjoyed.</p>
                </div>

                {gamesList.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                        {gamesList.map((item) => (
                            <InterestCard key={item.title} item={item} />
                        ))}
                    </div>
                ) : (
                    <p className="text-zinc-600 text-sm border border-dashed border-zinc-800 rounded-xl p-8 text-center">Game collection coming soon...</p>
                )}
            </div>
        </section>
    );
}
