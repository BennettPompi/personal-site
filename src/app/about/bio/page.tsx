"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function AboutPage() {
    const paragraphs = [
        `
            Hi there! I'm Bennett Pompi. I'm a software engineer with a passion for writing cool code that does cool stuff.
            I'm most interested in building complex, highly performant systems (in other words, backend), but as you can 
            hopefully see from this website I have experience working across the stack. 
        `,
        `
            I graduated from Georgetown in 2024 with degrees in Economics and Computer Science. Since then, I've been working at various
            startups in Product and Software Engineering roles. I also went to Japan (see above.)
        `,
        `
            I consider myself to be an avid advocate for strongly typed languages, but admit that Python does, very occasionally, have its uses.
            Don't ask me about JS, though. 
        `,
        `
            When I'm not programming, you can generally find me at the gym, watching an old movie, 
            or stressing out about the Detroit Lions (This includes the offseason).
            I also like to take photos on an ancient film camera I bought on eBay, so here's some of those.
            Enjoy! 
        `,
    ];
    const images = [
        <Image
            src="/images/kyoto_bridge.jpeg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/bamboo.jpg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/alley_dark.jpg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/busanBeach.jpeg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/couple_fuji.jpg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/gallan.jpeg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/sunset.jpg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/umich-sign.jpg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        <Image
            src="/images/venice.jpg"
            alt="Description"
            width={600}
            height={400}
            className="mb-16"
        />,
        // <Image
        //     src="/images/"
        //     alt="Description"
        //     width={600}
        //     height={400}
        //     className="mb-16"
        // />,
    ];
    return (
        <div className="flex flex-col items-center justify-start min-h-screen space-y-8 px-4 pt-8">
            <div>
                <Image
                    src="/images/deer_bennett.jpg"
                    alt="Description"
                    width={200}
                    height={120}
                />
            </div>

            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="w-full md:w-1/3 text-center mb-16">
                {paragraphs.map((text, idx) => (
                    <p key={idx} className="mt-4 text-lg">
                        {text}
                    </p>
                ))}
            </div>
            <Carousel className="relative w-[600px]" opts={{ align: "center" }}>
                <CarouselContent className="flex">
                    {images.map((image, idx) => (
                        <CarouselItem
                            key={idx}
                            className="flex-shrink-0 basis-full"
                        >
                            {image}
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
        </div>
    );
}
