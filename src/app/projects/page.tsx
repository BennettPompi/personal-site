import React from "react";
import {
    Collapsible,
    CollapsibleTrigger,
    CollapsibleContent,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

export default async function ProjectsPage() {
    const GH_PREFIX = "https://github.com/BennettPompi/";
    const projects = [
        {
            name: "Personal Website",
            openInNewTab: true,
            repoLink: "personal-site",
            details: [
                "Built with Next.js and React",
                "Styled using Tailwind CSS",
                "Hosted on Vercel",
            ],
        },
        {
            name: "Conway's Game of Life",
            openInNewTab: false,
            repoLink: "personal-site",
            link: "/projects/game-of-life",
            details: ["Just something I prototyped over like 15 mins for fun"],
        },
    ];

    // Fetch last commit timestamp for each project
    const projectsWithCommits = await Promise.all(
        projects.map(async (project) => {
            const res = await fetch(
                `https://api.github.com/repos/BennettPompi/${project.repoLink}/commits?per_page=1`
            );
            const data = await res.json();
            return {
                ...project,
                lastCommit: data[0]?.commit?.committer?.date ?? "Unknown date",
            };
        })
    );

    return (
        <div className="px-4 py-8 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">
                {"Projects (Watch This Space)"}
            </h1>
            {projectsWithCommits.map((project) => (
                <Collapsible key={project.name} className="mb-8">
                    <CollapsibleTrigger asChild>
                        <button className="w-full flex items-center justify-between text-left">
                            <div className="flex flex-col items-start space-y-1">
                                <h2 className="text-2xl font-semibold">
                                    {project.name}
                                </h2>
                                {(project.link || project.repoLink) && (
                                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                        <a
                                            href={
                                                project.link ??
                                                GH_PREFIX + project.repoLink
                                            }
                                            target={
                                                project.openInNewTab
                                                    ? "_blank"
                                                    : ""
                                            }
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            {project.link ?? project.repoLink}
                                        </a>
                                        <span>•</span>
                                        <span>
                                            {"Last Commit at: " +
                                                new Date(
                                                    project.lastCommit
                                                ).toLocaleString()}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <ChevronDown />
                        </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="radix-collapsible-content">
                        <ul className="list-disc list-inside mt-2 space-y-1">
                            {project.details.map((d, idx) => (
                                <li key={idx}>{d}</li>
                            ))}
                        </ul>
                    </CollapsibleContent>
                </Collapsible>
            ))}
        </div>
    );
}
