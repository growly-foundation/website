export enum FILTER {
  ALL = "All",
  INTERNAL = "Internal products",
  EXTERNAL = "External products",
  HACKATHONS = "Hackathons",
}

export const PROJECTS = [
  {
    name: "Growly",
    slug: "growly",
    description:
      "Personalize your investment decisions. Optimize your portfolio management. Powered by elizaOS",
    image: "/projects/growly.webp",
    type: FILTER.HACKATHONS,
    links: [
      {
        name: "Website",
        url: "https://devfolio.co/projects/growly-0d3e",
      },
    ],
  },
  {
    name: "OnchainBuster",
    slug: "onchainbuster",
    description:
      "More than just your onchain footprint. Dive into Base with recommendations tailored to your interests.",
    image: "/projects/onchainbuster.webp",
    type: FILTER.HACKATHONS,
    links: [
      {
        name: "Website",
        url: "https://devfolio.co/projects/onchainbuster-9549",
      },
      {
        name: "Github",
        url: "https://github.com/growly-foundation/onchainbuster",
      },
    ],
  },
];
