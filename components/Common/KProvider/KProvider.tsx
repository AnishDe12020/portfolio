import socials from "@/data/socials";
import {
  Action,
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Kbd from "@/components/Shared/Kbd";
import KResults from "./KResults";

import kproviderData from "@/data/kprovider.json";
import { Search } from "react-feather";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import useCircles from "store/circles";
import toast from "react-hot-toast";

interface KProviderProps {
  children: ReactNode;
}

const KProvider = ({ children }: KProviderProps): JSX.Element => {
  const { push } = useRouter();
  const { toggleCircles } = useCircles();

  const actions: Action[] = [
    {
      id: "home",
      name: "Home",
      keywords: "index root",
      shortcut: ["h"],
      perform: () => push("/"),
      section: "Pages",
    },
    {
      id: "skills",
      name: "Skills",
      keywords: "skills talents skillset stack",
      section: "Pages",
    },
    {
      id: "skills-page",
      name: "All Skills",
      keywords: "skills talents skillset stack",
      shortcut: ["s"],
      parent: "skills",
      perform: () => push("/skills"),
    },
    {
      id: "projects",
      name: "Projects",
      keywords: "projects creations apps repositories",
      section: "Pages",
    },
    {
      id: "projects-page",
      name: "All Projects",
      keywords: "projects creations apps repositories",
      shortcut: ["p"],
      parent: "projects",
      perform: () => push("/projects"),
    },
    {
      id: "toggle-circles",
      name: "Toggle Circles",
      keywords: "toggle circles",
      shortcut: ["t", "c"],
      perform: () => {
        toggleCircles();
        toast.success("Circles toggled");
      },
    },
  ];

  const { skills } = kproviderData;

  skills.map(skill => {
    actions.push({
      id: skill.id,
      name: skill.name,
      perform: () => push("/skills/" + skill.slug),
      icon: <IconFactory name={skill.iconName} />,
      parent: "skills",
    });
  });

  socials.map(social => {
    actions.push({
      id: social.id,
      name: social.name,
      perform: () => window.open(social.url),
      section: "Socials",
      icon: social.icon,
    });
  });

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="z-30 bg-secondary/60 backdrop-filter backdrop-blur-sm">
            <KBarAnimator className="rounded-xl mx-auto overflow-hidden w-[32rem] bg-secondary/90 drop-shadow-2xl backdrop-filter backdrop-blur-md px-4 border-[1px] border-tertiary">
              <div className="flex justify-between items-end py-4 mx-2">
                <span>
                  <Search className="w-5 h-5 mr-2 mb-0.5 text-gray-100" />
                </span>
                <KBarSearch className="w-full border-b border-gray-300 pt-2 border-none bg-transparent text-gray-100 rounded-md outline-none" />
                <Kbd>esc</Kbd>
              </div>

              <KResults />
              <div className="h-4" />
            </KBarAnimator>
          </KBarPositioner>
        </KBarPortal>
        {children}
      </KBarProvider>
    </>
  );
};

export default KProvider;
