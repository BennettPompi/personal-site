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
            I also like to take photos on an ancient film camera I bought on eBay, so here's one of those.
            Enjoy! 
        `,
    ];
    return (
        <div className="flex flex-col items-center justify-start min-h-screen space-y-8 px-4 pt-8">
            <div>
                <Image
                    src="/deer_bennett.jpg"
                    alt="Description"
                    width={200}
                    height={120}
                />
            </div>

            <h1 className="text-4xl font-bold">Bio</h1>
            <div className="w-full md:w-1/3 text-center mb-16">
                {paragraphs.map((text) => (
                    <p className="mt-4 text-lg">{text}</p>
                ))}
            </div>
            <div>
                <Image
                    src="/kyoto_bridge.jpeg"
                    alt="Description"
                    width={600}
                    height={400}
                    className="mb-16"
                />
            </div>
        </div>
    );
}
