import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export type Link = {
  name: string;
  url: string;
};

export type Project = {
  name: string;
  slug: string;
  image: string;
  description: string;
  links: Link[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const { theme } = useTheme();
  const websiteIcon = "/icons/devfolio.svg";
  const githubIcon =
    theme === "dark" ? "/icons/github-white.svg" : "/icons/github.svg";

  return (
    <div className="flex flex-col items-center bg-muted rounded-2xl shadow-md p-6 mx-2 my-4 max-w-sm transition-transform hover:scale-105">
      <Image
        src={project.image}
        alt={`${project.name} logo`}
        width={150}
        height={150}
        className="rounded-2xl object-cover border-2 mb-4 shadow-lg"
      />
      <div className="flex flex-col items-start justify-start gap-2 w-full px-6 pb-2">
        <Link href={`/projects/${project.slug}`}>
          <h2 className="text-xl font-bold text-left text-foreground">
            {project.name}
          </h2>
        </Link>
        <p className="text-sm opacity-80 text-left font-heading text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-row items-center gap-3 mt-2">
          {project.links.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target={link.url.includes("http") ? "_blank" : undefined}
              className="hover:opacity-80 transition-opacity"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 text-foreground">
                <Image
                  height={24}
                  width={24}
                  src={link.name === "Website" ? websiteIcon : githubIcon}
                  alt={link.name}
                  style={{ filter: "invert(var(--is-dark))" }}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
