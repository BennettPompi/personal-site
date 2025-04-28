import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">Contact Me</h1>
            <div className="mt-4 flex items-center gap-2 text-lg">
                <Image
                    src="/Gmail_icon_(2020).svg"
                    alt="Email Icon"
                    width={24}
                    height={24}
                />
                <a
                    href="mailto:bennettp2002@gmail.com"
                    className="hover:underline"
                >
                    bennettp2002@gmail.com
                </a>
            </div>
            <div className="mt-2 flex items-center gap-2 text-lg">
                <Image
                    src="/LinkedIn_icon.svg"
                    alt="LinkedIn Icon"
                    width={24}
                    height={24}
                />
                <a
                    href="https://linkedin.com/in/bpompi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    linkedin.com/in/bpompi
                </a>
            </div>
            <div className="mt-2 flex items-center gap-2 text-lg">
                <Image
                    src="/github-mark-white.png"
                    alt="GitHub Icon"
                    width={24}
                    height={24}
                />
                <a
                    href="https://github.com/bennettpompi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    github.com/bennettpompi
                </a>
            </div>
        </div>
    );
}
