"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type JsonLine = { type: "bracket"; text: string } | { type: "keyvalue"; key: string; value: string; isAvailable?: boolean; hasComma?: boolean } | { type: "skills"; skills: string[] };

const jsonLines: JsonLine[] = [
    { type: "bracket", text: "{" },
    { type: "keyvalue", key: `  "name"`, value: `"Rizki Cahya Ramdani"`, hasComma: true },
    { type: "keyvalue", key: `  "role"`, value: `"Front-end Developer, Graphic Design, UI/UX"`, hasComma: true },
    { type: "keyvalue", key: `  "location"`, value: `"Yogyakarta, Indonesia"`, hasComma: true },
    { type: "keyvalue", key: `  "education"`, value: `"University of Amikom Yogyakarta"`, hasComma: true },
    { type: "keyvalue", key: `  "degree"`, value: `"Bachelor of Computer Science"`, hasComma: true },
    { type: "bracket", text: "}" },
];

const greetings = [
    { lang: "id", text: 'echo "Halo, Selamat Datang!"', output: "Halo, Selamat Datang!", color: "text-emerald-400" },
    { lang: "en", text: 'echo "Hello, Welcome!"', output: "Hello, Welcome!", color: "text-sky-400" },
    { lang: "jp", text: 'echo "こんにちは、ようこそ！"', output: "こんにちは、ようこそ！", color: "text-pink-400" },
];

// Total phases:
// 0..jsonLines.length-1 → JSON lines
// jsonLines.length       → gap / new prompt line
// jsonLines.length+1     → "bash welcome.sh" typed
// jsonLines.length+2..+1+greetings.length*2 → each greeting: command then output
const JSON_DONE = jsonLines.length;
const WELCOME_PROMPT = JSON_DONE + 1;
const GREET_START = WELCOME_PROMPT + 1;

function TerminalWindow() {
    const [phase, setPhase] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);

    const totalPhases = GREET_START + greetings.length * 2;

    useEffect(() => {
        if (phase < totalPhases) {
            // Slow down at certain phases for dramatic effect
            let delay = 120;
            if (phase === JSON_DONE) delay = 600; // pause before new command
            if (phase === WELCOME_PROMPT) delay = 400; // "bash welcome.sh" appears
            if (phase >= GREET_START && phase % 2 === 1) delay = 250; // output line
            const timer = setTimeout(() => setPhase((p) => p + 1), delay);
            return () => clearTimeout(timer);
        }
    }, [phase, totalPhases]);

    useEffect(() => {
        const interval = setInterval(() => setCursorVisible((v) => !v), 530);
        return () => clearInterval(interval);
    }, []);

    const jsonDone = phase > JSON_DONE;
    const visibleJsonLines = Math.min(phase, jsonLines.length);

    // How many greeting pairs to show
    const greetPhase = Math.max(0, phase - GREET_START);

    const renderJsonLine = (line: JsonLine, index: number) => {
        if (line.type === "bracket") {
            return (
                <div key={index} className="text-zinc-400">
                    {line.text}
                </div>
            );
        }
        if (line.type === "keyvalue") {
            return (
                <div key={index} className="flex flex-wrap">
                    <span className="text-sky-400">{line.key}</span>
                    <span className="text-zinc-500">:</span>
                    <span className={`ml-1 ${line.isAvailable ? "text-green-400" : "text-amber-300"}`}>{line.value}</span>
                    {line.hasComma && <span className="text-zinc-500">,</span>}
                </div>
            );
        }
        return null;
    };

    const isDone = phase >= totalPhases;

    return (
        <div className="w-full h-full flex flex-col">
            <div className="rounded-xl overflow-hidden border border-zinc-700/60 shadow-2xl shadow-black/60 bg-zinc-950/90 backdrop-blur-sm flex flex-col h-full">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-700/50 shrink-0">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors" />
                    </div>
                    <div className="flex-1 text-center">
                        <span className="text-xs text-zinc-500" style={{ fontFamily: "Consolas, 'Courier New', monospace" }}>
                            bash ~ rizki_cahya.sh
                        </span>
                    </div>
                    <div className="w-12" />
                </div>

                {/* Terminal body */}
                <div className="p-7 text-sm leading-7 flex-1 overflow-hidden" style={{ fontFamily: "Consolas, 'Courier New', monospace" }}>
                    {/* cat profile.json */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="text-purple-400">~</span>
                        <span className="text-zinc-500">$</span>
                        <span className="text-zinc-300">cat</span>
                        <span className="text-amber-300 ml-1">profile.json</span>
                    </div>

                    {/* JSON output */}
                    <div className="space-y-1 text-[13px] mb-2">{jsonLines.slice(0, visibleJsonLines).map((line, i) => renderJsonLine(line, i))}</div>

                    {/* Cursor while typing JSON */}
                    {phase < JSON_DONE && <span className={`inline-block w-2 h-4 bg-zinc-300 mt-1 align-middle transition-opacity duration-100 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />}

                    {/* welcome.sh section — appears after JSON done */}
                    {jsonDone && (
                        <div className="mt-4">
                            {/* New prompt: bash welcome.sh */}
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-purple-400">~</span>
                                <span className="text-zinc-500">$</span>
                                {phase >= WELCOME_PROMPT ? (
                                    <>
                                        <span className="text-zinc-300">bash</span>
                                        <span className="text-amber-300 ml-1">welcome.sh</span>
                                    </>
                                ) : (
                                    <span className={`inline-block w-2 h-4 bg-zinc-300 align-middle transition-opacity duration-100 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
                                )}
                            </div>

                            {/* Greeting outputs */}
                            <div className="space-y-1 text-[13px]">
                                {greetings.map((g, idx) => {
                                    const cmdPhase = idx * 2;
                                    const outPhase = idx * 2 + 1;
                                    return (
                                        <div key={g.lang}>
                                            {greetPhase > cmdPhase && <div className="flex items-center gap-2">{/* <span className="text-zinc-600">{g.label}</span> */}</div>}
                                            {greetPhase > outPhase && <div className={`font-medium ${g.color}`}>{g.output}</div>}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Final blinking cursor */}
                            {isDone && (
                                <div className="flex items-center gap-2 mt-3">
                                    <span className="text-purple-400">~</span>
                                    <span className="text-zinc-500">$</span>
                                    <span className={`inline-block w-2 h-4 bg-zinc-300 align-middle transition-opacity duration-100 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative flex flex-col md:flex-row items-stretch justify-center min-h-[90vh] px-8 max-w-6xl mx-auto py-28 gap-24 overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Left: Large profile photo */}
            <div className="flex flex-col items-center justify-center shrink-0 w-full md:w-72">
                {/* Gradient ring */}
                <div className="relative">
                    <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-sky-400 via-purple-400 to-emerald-400 blur-md opacity-60" />
                    <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-zinc-800">
                        <Image src="https://github.com/rizkicahyaa.png" alt="Rizki Cahya" fill className="object-cover" priority />
                    </div>
                    {/* Online badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-700/60 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-green-400" style={{ fontFamily: "Consolas, 'Courier New', monospace" }}>
                            available
                        </span>
                    </div>
                </div>

                {/* Info below photo */}
                <div className="mt-5 text-center space-y-1">
                    <p className="text-base font-semibold text-zinc-200" style={{ fontFamily: "Consolas, 'Courier New', monospace" }}>
                        Rizki Cahya
                    </p>
                    <p className="text-sm text-zinc-500" style={{ fontFamily: "Consolas, 'Courier New', monospace" }}>
                        Front-end Developer
                    </p>
                    <div className="flex items-center justify-center gap-3 pt-3">
                        <Link href="#projects" className="flex items-center justify-center h-9 px-5 rounded-full bg-purple-600 text-white text-sm font-medium hover:bg-purple-500 transition-colors shadow-md shadow-purple-900/40">
                            View work
                        </Link>
                        <Link href="#contact" className="flex items-center justify-center h-9 px-5 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors gap-1.5 border border-zinc-700">
                            Contact
                            <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right: Tall terminal window */}
            <div className="relative flex-1 min-h-[480px] md:min-h-0">
                {/* Glow */}
                <div className="absolute -inset-2 bg-sky-500/5 rounded-2xl blur-2xl pointer-events-none" />
                <TerminalWindow />
            </div>
        </section>
    );
}
