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
import { Search } from "react-feather";
import toast from "react-hot-toast";

import IconMaker from "@/components/Shared/Icons/IconMaker";
import Kbd from "@/components/Shared/Kbd";
import kproviderData from "@/data/kprovider.json";
import socials from "@/data/socials";

import useCircles from "store/circles";

import KResults from "./KResults";

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

  socials.map(social => {
    actions.push({
      id: social.id,
      name: social.name,
      perform: () => window.open(social.url),
      section: "Socials",
      icon: social.icon,
    });
  });

  const { skills, projects } = kproviderData;

  skills.map(skill => {
    actions.push({
      id: skill.id.toString(),
      name: skill.name,
      perform: () => push("/skills/" + skill.slug),
      icon: <IconMaker svgCode={skill.iconSVG} />,
      parent: "skills",
    });
  });

  projects.map(project => {
    actions.push({
      id: project.id.toString(),
      name: project.name,
      perform: () => push("/projects/" + project.slug),
      parent: "projects",
    });
  });

  return (
    <>
      <KBarProvider actions={actions}>
        <KBarPortal>
          <KBarPositioner className="z-30 bg-secondary/60 backdrop-blur-sm backdrop-filter">
            <KBarAnimator className="mx-auto w-[32rem] overflow-hidden rounded-xl border-[1px] border-tertiary bg-secondary/90 px-4 drop-shadow-2xl backdrop-blur-md backdrop-filter">
              <div className="mx-2 flex items-end justify-between py-4">
                <span>
                  <Search className="mr-2 mb-0.5 h-5 w-5 text-gray-100" />
                </span>
                <KBarSearch className="w-full rounded-md border-b border-none border-gray-300 bg-transparent pt-2 text-gray-100 outline-none" />
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
