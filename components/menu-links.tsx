import { GitHubIcon, XIcon } from "@/components/ui/brand-icons";

export const MENU_LINKS = [
  {
    title: "Mission",
    href: "/#mission",
    external: false,
  },
  {
    title: "Portfolio",
    href: "/#portfolio",
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

export const FOOTER_LINKS = [
  {
    title: "Product",
    links: [
      { name: "Mission", href: "#mission", external: false },
      { name: "Portfolio", href: "#portfolio", external: false },
      { name: "Team", href: "#team", external: false },
      { name: "Partners", href: "#partners", external: false },
    ],
  },
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
