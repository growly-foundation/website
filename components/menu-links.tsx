import { GitHubIcon, XIcon } from "@/components/ui/brand-icons";

export const MENU_LINKS = [
  {
    title: "Mission",
    href: "/#mission",
    external: false,
  },
  {
    title: "Projects",
    href: "/#projects",
    external: false,
  },
  {
    title: "Team",
    href: "/#team",
    external: false,
  },
  // {
  //   title: "Testimonials",
  //   href: "/#testimonials",
  //   external: false,
  // },
];

export const SOCIAL_LINKS = [
  {
    name: "X (formerly Twitter)",
    href: "https://x.com/GrowlyFND",
    icon: <XIcon className="size-4 shrink-0" />,
  },
  {
    name: "GitHub",
    href: "https://github.com/growly-foundation",
    icon: <GitHubIcon className="size-4 shrink-0" />,
  },
];
