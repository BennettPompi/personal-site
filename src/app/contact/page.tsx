import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center pt-8 space-y-4">
            <Image
                src="/images/busanNightLS.jpg"
                alt="nighttime shot of Busan"
                width={600}
                height={200}
            />
            <h1 className="text-4xl font-bold">Contact Me!</h1>
            <div className="flex items-center gap-2 text-lg">
                <Image
                    src="/images/Gmail_icon_(2020).svg"
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
            <div className="flex items-center gap-2 text-lg">
                <Image
                    src="/images/LinkedIn_icon.svg"
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
            <div className="flex items-center gap-2 text-lg">
                <Image
                    src="/images/github-mark-white.png"
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
