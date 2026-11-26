"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    // { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    // { href: "/contact", label: "Contact" },
    { href: "/interests", label: "Interests" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-zinc-950/80 backdrop-blur-sm border-b border-zinc-900">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    {/* <span>&lt;</span>
                    Rizki Cahya /<span>&gt;</span> */}
                    @rizkicahya.
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-8 text-base font-medium text-zinc-400">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className={`hover:text-white transition-colors ${pathname === link.href ? "text-white" : ""}`}>
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile hamburger - Right */}
                <button className="md:hidden ml-auto p-2 text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            {mobileOpen && (
                <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 text-base font-medium text-zinc-400 border-t border-zinc-800 pt-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={`hover:text-white transition-colors px-2 py-1 ${pathname === link.href ? "text-white" : ""}`}>
                            {link.label}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}
