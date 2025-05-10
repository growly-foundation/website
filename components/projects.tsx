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
          Explore some of the projects we've built to help teams work smarter
          and faster.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl mx-auto justify-items-center">
        {PROJECTS.slice(0, 2).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
