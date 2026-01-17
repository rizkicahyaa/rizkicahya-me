"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formRef.current) return;

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!).then(
            () => {
                alert("Message sent successfully!");
                formRef.current?.reset();
                setIsSubmitting(false);
            },
            (error) => {
                console.error(error);
                alert("Failed to send message");
                setIsSubmitting(false);
            },
        );
    };

    return (
        <section className="flex flex-col w-full gap-8 mt-24 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 fill-mode-backwards">
            <h2 className="font-bold text-3xl tracking-tight text-white border-b border-zinc-800 pb-4">Get in Touch</h2>

            <form ref={formRef} onSubmit={sendEmail} className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 shadow-sm relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                        <label className="block text-sm font-medium leading-6 text-zinc-300">Name</label>
                        <div className="mt-2">
                            <input type="text" name="user_name" required className="block w-full rounded-md border-0 py-2.5 px-3 bg-zinc-800/50 text-white shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 transition-all" placeholder="Your name" />
                        </div>
                    </div>

                    <div className="sm:col-span-1">
                        <label className="block text-sm font-medium leading-6 text-zinc-300">Email</label>
                        <div className="mt-2">
                            <input type="email" name="user_email" required className="block w-full rounded-md border-0 py-2.5 px-3 bg-zinc-800/50 text-white shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 transition-all" placeholder="your@email.com" />
                        </div>
                    </div>

                    <div className="sm:col-span-full">
                        <label className="block text-sm font-medium leading-6 text-zinc-300">Message</label>
                        <div className="mt-2">
                            <textarea name="message" rows={4} required className="block w-full rounded-md border-0 py-2.5 px-3 bg-zinc-800/50 text-white shadow-sm ring-1 ring-inset ring-zinc-700 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6 transition-all" placeholder="How can I help you?" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <button type="submit" disabled={isSubmitting} className="rounded-full bg-white px-8 py-2.5 text-sm font-bold text-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-cyan-50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </section>
    );
}
