"use client";

import Image from "next/image";
import { MapPin, ArrowUpRight } from "lucide-react";

export default function ProfileCard() {
    return (
        <div className="bento-card h-full p-6 flex flex-col justify-between relative group">
            <div className="flex justify-between items-start">
                <Image src="/profile-pic-2.jpg" alt="Profile" width={64} height={64} className="rounded-full border border-zinc-700" />

                <a href="#" className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                </a>
            </div>

            <div>
                <h1 className="text-2xl font-bold text-white mb-2">Rizki Cahya Ramdani</h1>
                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    Front-end Developer & UI/UX Designer.
                    <br />
                    Crafting clean, accessible, and performant web interfaces.
                </p>

                <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium bg-zinc-800/50 w-fit px-3 py-1 rounded-full border border-zinc-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Available for work
                </div>
            </div>
        </div>
    );
}
