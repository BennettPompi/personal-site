"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    const canvasRef = useRef(null);

    useEffect(() => {});

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
            <div className="flex h-screen w-screen items-center justify-center">
                <p className="absolute top-1/8 left-1/2 transform translate-x-[calc(-50%+0.25em)] text-6xl font-mono animate-typing overflow-hidden whitespace-nowrap border-r-[0.5em] box-content z-10">
                    Hello, world!
                </p>
                <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center w-full md:w-1/3">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Bennett Pompi
                    </h1>
                    <p className="text-lg md:text-2xl mb-6">
                        Software Engineer
                    </p>
                    <p className="text-lg md:text-2xl mb-6">
                        {
                            "This is mostly just a place for me to link stuff I'm working on / serve as a sort of living resume. Enjoy!"
                        }
                    </p>
                    <div className="flex gap-4">
                        <Button asChild>
                            <a
                                href="/Bennett_Pompi_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Resume
                            </a>
                        </Button>
                        <Button asChild variant={"outline"}>
                            <a
                                href="https://linkedin.com/in/bpompi"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
