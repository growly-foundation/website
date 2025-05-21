export type IconName =
  | "Website"
  | "Github"
  | "Twitter"
  | "Linkedin"
  | "Devfolio"
  | "Logo";

export function getIconPath(iconName: IconName, theme?: string): string {
  const isDark = theme === "dark";

  switch (iconName) {
    case "Website":
      return isDark ? "/icons/dribble-white.svg" : "/icons/dribble.svg";
    case "Github":
      return isDark ? "/icons/github-white.svg" : "/icons/github.svg";
    case "Twitter":
      return isDark ? "/icons/twitter-white.svg" : "/icons/twitter.svg";
    case "Linkedin":
      return isDark ? "/icons/linkedin-white.svg" : "/icons/linkedin.svg";
    case "Devfolio":
      return "/icons/devfolio.svg";
    case "Logo":
      return "/logo.svg";
    default:
      return "";
  }
}
