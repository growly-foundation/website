import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { getIconPath, IconName } from "@/lib/utils/icon-utils";

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

  return (
    <div className="flex flex-col items-center bg-muted rounded-2xl shadow-md p-6 mx-2 my-4 w-full h-[450px] max-w-sm transition-transform hover:scale-105">
      <div className="flex items-center justify-center w-[150px] h-[150px] mb-4">
        <Image
          src={project.image}
          alt={`${project.name} logo`}
          width={150}
          height={150}
          className="rounded-2xl object-cover border-2 shadow-lg"
        />
      </div>
      <div className="flex flex-col items-start justify-between h-full w-full px-4 pb-2">
        <div className="flex flex-col items-center gap-2 w-full">
          <Link href={`/projects/${project.slug}`}>
            <h2 className="text-xl font-bold text-center text-foreground">
              {project.name}
            </h2>
          </Link>
          <p className="text-sm opacity-80 text-left font-heading text-muted-foreground h-24 overflow-y-auto">
            {project.description}
          </p>
        </div>

        <div className="flex flex-row items-center gap-3 mt-4 pt-2 self-start">
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
                  src={getIconPath(link.name as IconName, theme)}
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
