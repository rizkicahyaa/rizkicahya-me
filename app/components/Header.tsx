import Image from "next/image";

export default function Header() {
    return (
        <>
            <Image className="rounded-full" src="/profile-pic-2.jpg" alt="logo" width={100} height={20} priority />
            <div className="flex flex-col items-center gap-6 py-5 text-center sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">Rizki Cahya Ramdani</h1>
                <span className="">Front-end Developer | UI/UX Designer</span>
                <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400 text-justify">Computer Science student at Universitas Amikom Yogyakarta. Passionate about building web applications, teaching programming, and exploring machine learning in real-world projects.</p>
            </div>
            <div className="flex flex-col w-full gap-6 text-base font-medium sm:flex-row">
                <a className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]" href="https://rizkicahya.vercel.app" target="_blank" rel="noopener noreferrer">
                    My Profile
                </a>
                <a className="flex h-12 w-full items-center justify-center rounded-full border border-gray-300 border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-[#00000021] dark:hover:bg-[#353535] dark:text-white dark:border-[#353535] md:w-[158px]" href="https://github.com/rizkicahyaa?tab=repositories" target="_blank" rel="noopener noreferrer">
                    More Project
                </a>
            </div>

            <div className="mx-auto">
                <div className="mx-auto w-36 h-0.5 bg-gray-200 mt-12"></div>
            </div>
        </>
    );
}
