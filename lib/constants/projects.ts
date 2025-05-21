export enum FILTER {
  ALL = "All",
  INTERNAL = "Internal products",
  EXTERNAL = "External products",
  HACKATHONS = "Hackathons",
}

export const PROJECTS = [
  {
    name: "Suite",
    slug: "suite",
    description:
      "Empower DeFi Adoption with AI-powered Engine. Focus on shipping great products, we'll handle the connection between your users and your app.",
    image: "/projects/suite.png",
    type: FILTER.HACKATHONS,
    links: [
      {
        name: "Devfolio",
        url: "https://devfolio.co/projects/growly-smarlet-1ad7",
      },
      {
        name: "Github",
        url: "https://github.com/growly-foundation/suite",
      },
      {
        name: "Website",
        url: "https://getgrowly.app/",
      },
    ],
  },
  {
    name: "Growly",
    slug: "growly",
    description:
      "Personalize your investment decisions. Optimize your portfolio management. Powered by elizaOS",
    image: "/projects/growly.png",
    type: FILTER.HACKATHONS,
    links: [
      {
        name: "Devfolio",
        url: "https://devfolio.co/projects/growly-0d3e",
      },
    ],
  },
  {
    name: "OnchainBuster",
    slug: "onchainbuster",
    description:
      "More than just your onchain footprint. Dive into Base with recommendations tailored to your interests.",
    image: "/projects/onchainbuster.png",
    type: FILTER.HACKATHONS,
    links: [
      {
        name: "Devfolio",
        url: "https://devfolio.co/projects/onchainbuster-9549",
      },
      {
        name: "Github",
        url: "https://github.com/growly-foundation/onchainbuster",
      },
      {
        name: "Website",
        url: "https://onchainbuster.vercel.app/",
      },
    ],
  },
];
