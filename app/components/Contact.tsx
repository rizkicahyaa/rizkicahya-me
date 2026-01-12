"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!).then(
            () => {
                alert("Message sent successfully!");
                formRef.current?.reset();
            },
            (error) => {
                console.error(error);
                alert("Failed to send message");
            }
        );
    };

    return (
        <div className="flex flex-col flex-grow w-full gap-6 mt-10">
            <div className="pb-4">
                <h1 className="font-bold text-2xl">Contact Me</h1>

                <form ref={formRef} onSubmit={sendEmail}>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium">Your name</label>
                            <input type="text" name="user_name" required className="mt-2 block w-full rounded-md bg-gray-200 px-3 py-1.5 dark:text-black" placeholder="Your name" aria-required="true" />
                        </div>

                        <div className="sm:col-span-3">
                            <label className="block text-sm font-medium">Your email</label>
                            <input type="email" name="user_email" required className="mt-2 block w-full rounded-md bg-gray-200 px-3 py-1.5 dark:text-black" placeholder="Your email" aria-required="true" />
                        </div>

                        <div className="sm:col-span-full">
                            <label className="block text-sm font-medium">Your message</label>
                            <textarea name="message" rows={4} required className="mt-2 block w-full rounded-md bg-gray-200 px-3 py-1.5 dark:text-black" placeholder="Your message" aria-required="true" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button type="submit" className="bg-foreground text-white px-6 py-2.5 rounded-3xl transition hover:opacity-80 dark:hover:bg-[#ccc] dark:text-black">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
