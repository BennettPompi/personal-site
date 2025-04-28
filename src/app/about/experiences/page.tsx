import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default function ExperiencesPage() {
    const education = [
        {
            institution: "Georgetown University",
            degree: "B.A. in Computer Science, Economics",
            location: "Washington, D.C.",
            date: "2020 – 2024",
            gpa: "GPA: 3.74",
        },
    ];

    const experiences = [
        {
            company: "Brellium",
            title: "Software Engineer",
            location: "New York, NY",
            date: "Feb 2025 – Apr 2025",
            bullets: [
                "Developed AI-enabled clinical compliance product for mental healthcare providers",
                "Developed multiple end-to-end product integrations for clients serving 10K+ patients",
                "Led development of integration with new EHR, enabling seamless processing of documents without client intervention",
                "Made improvements to internal testing suite to enable faster integration timelines while maintaining quality and improving developer experience",
                "Assisted in major effort to improve user experience / analytics collection in our web app",
            ],
        },
        {
            company: "ISpeak AI",
            title: "Full Stack Software Engineer – MaraBot",
            location: "Remote",
            date: "Sep 2024 – Feb 2025",
            bullets: [
                "Co-developed B2B SaaS product targeting the Real Estate vertical with one other dev",
                "Added features and functionality at all layers of the tech stack (frontend rebuild, backend usage limits, authentication)",
                "Led full backend refactor to align data model with hierarchical architecture philosophy",
                "Leveraged NestJS, MongoDB/Mongoose, Angular, and React",
                "Key decision-maker in domains ranging from UX design to data model architecture",
            ],
        },
        {
            company: "Placekey",
            title: "Product / Support Engineer (Contract)",
            location: "Remote",
            date: "Jul 2024 – Sep 2024",
            bullets: [
                "Served as interface between core engineering team and users/business leadership",
                "Identified, isolated, and addressed bugs reported by users",
                "Built out analytics pipeline to provide more actionable data on user activity",
                "Overhauled auth system for the API Portal",
                "Expanded lead generation integration into developer dashboard",
                "Designed automated systems to contact promising potential customers and monitor error reports",
            ],
        },
        {
            company: "Georgetown University",
            title: "Computer Science TA",
            location: "Washington, D.C.",
            date: "Jan 2023 – May 2024",
            bullets: [
                "Selected as TA for Computer Science 1, Computer Science 2, and Advanced courses based on performance",
            ],
        },
    ];

    return (
        <div className="px-4 py-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-4xl font-bold">Experiences</h1>

                <Link
                    href="/Bennett_Pompi_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/file.svg"
                        alt="Resume"
                        width={24}
                        height={24}
                        className="filter invert hover:opacity-75"
                    />
                </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            {education.map((edu) => (
                <div key={`${edu.institution}-${edu.date}`} className="mb-8">
                    <h2 className="text-xl font-semibold">{edu.institution}</h2>
                    <p className="text-sm text-muted-foreground">
                        {edu.degree} • {edu.location} • {edu.date} • {edu.gpa}
                    </p>
                </div>
            ))}
            <h3 className="text-2xl font-bold mb-6">Professional</h3>
            {experiences.map((exp) => (
                <Collapsible
                    key={`${exp.company}-${exp.date}`}
                    className="mb-8"
                >
                    <CollapsibleTrigger asChild>
                        <button className="w-full flex items-center justify-between text-left">
                            <div className="flex flex-col items-start">
                                <h2 className="text-xl font-semibold">
                                    {exp.company}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    {exp.title} • {exp.location} • {exp.date}
                                </p>
                            </div>
                            <ChevronDown className="ml-2" />
                        </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="overflow-hidden radix-collapsible-content">
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            {exp.bullets.map((b, idx) => (
                                <li key={idx}>{b}</li>
                            ))}
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
            ))}
        </div>
    );
}
