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
import { Code, Search } from "react-feather";
import toast from "react-hot-toast";

import Kbd from "@/components/Shared/Kbd";
import socials from "@/data/socials";
import { allProjects } from "contentlayer/generated";
import hashnodeData from "@/data/hashnode.json";

import useCircles from "store/circles";

import KResults from "./KResults";
import IconFactory from "@/components/Shared/Icons/IconFactory";

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
      id: "guestbook",
      name: "Guestbook",
      keywords: "guestbook comments community wall",
      shortcut: ["g"],
      perform: () => push("/guestbook"),
      section: "Pages",
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
      id: "blog",
      name: "Blog",
      keywords: "blogs blog post articles tutorials",

      section: "Pages",
    },
    {
      id: "blogs-page",
      name: "All Blog Posts",
      keywords: "blogs blog post articles tutorials",
      shortcut: ["b"],
      parent: "blog",
      perform: () => push("/blog"),
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

  actions.push({
    id: "source-code",
    name: "Source Code",
    keywords: "source code",
    perform: () => window.open("https://github.com/AnishDe12020/portfolio"),
    section: "Socials",
    icon: <Code />,
  });

  allProjects.map(project => {
    actions.push({
      id: project._id,
      name: project.name,
      perform: () => push("/projects/" + project.slug),
      icon: <IconFactory name={project.iconName} />,
      parent: "projects",
    });
  });

  hashnodeData.posts.map(post => {
    actions.push({
      id: post._id,
      name: post.title,
      perform: () => window.open(`https://${hashnodeData.domain}/${post.slug}`),

      parent: "blog",
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
