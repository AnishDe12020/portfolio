import { ReactNode } from "react";

import {
  DevToLogo,
  GitHubLogo,
  HashnodeLogo,
  Twitterlogo,
  YouTubeLogo,
} from "@/components/Shared/Icons";

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: "twitter",
    name: "Twitter",
    url: "https://twitter.com/AnishDe12020",
    icon: <Twitterlogo color="#1DA1F2" />,
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/AnishDe12020",
    icon: <GitHubLogo />,
  },
  {
    id: "youtube",
    name: "YouTube",
    url: "https://www.youtube.com/anishtechtutorials",
    icon: <YouTubeLogo color="#ff0000" />,
  },
  {
    id: "hashnode",
    name: "Hashnode",
    url: "https://hashnode.com/@anishde12020",
    icon: <HashnodeLogo color="#2962ff" />,
  },
  {
    id: "dev.to",
    name: "Dev.to",
    url: "https://dev.to/anishde12020",
    icon: <DevToLogo color="#f0f0f0" />,
  },
];

export default socials;
