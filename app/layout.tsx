import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/landing/Navbar";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Rizki Cahya - Full Stack & AI Enthusiast",
    description: "Professional portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${inter.className}`}>
                <div className="min-h-screen bg-zinc-950 bg-grid-white/[0.02] text-white selection:bg-zinc-800 selection:text-white font-sans relative">
                    <Navbar />
                    <main className="pt-24">{children}</main>
                </div>
            </body>
        </html>
    );
}
