import { ReactNode } from "react";
import { Twitterlogo } from "@/components/Shared/Icons";
import { GitHub } from "react-feather";

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
    icon: <GitHub />,
  },
];

export default socials;
