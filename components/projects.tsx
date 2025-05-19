"use client";

import { PROJECTS } from "@/lib/constants";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-background py-16 px-4 md:px-12 flex flex-col items-center"
    >
      <div className="flex flex-col items-center text-center gap-4 mb-8">
        <h2 className="text-2xl font-semibold">Our Projects</h2>
        <p className="text-muted-foreground max-w-2xl">
          Explore some of the projects we&apos;ve built
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
