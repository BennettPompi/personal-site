"use client";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
    const canvasRef = useRef(null);

    useEffect(() => {});

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            <canvas ref={canvasRef} className="absolute inset-0 z-0" />
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Bennett Pompi
                </h1>
                <p className="text-lg md:text-2xl mb-6">
                    Software Engineer | Full-Stack | Product-Focused
                </p>
                <p className="text-lg md:text-2xl mb-6">
                    (In case you can't tell, still very much working on this
                    site)
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
    );
}
