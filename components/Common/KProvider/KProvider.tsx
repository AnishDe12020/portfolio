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

interface KProviderProps {
  children: ReactNode;
}

const KProvider = ({ children }: KProviderProps): JSX.Element => {
  const { push } = useRouter();

  const actions: Action[] = [];

  kproviderData.pages.map(page => {
    actions.push({
      id: page.id,
      name: page.name,
      keywords: page.keywords,
      shortcut: page.shortcuts,
      perform: () => push(page.slug),
      section: "Pages",
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
          <KBarPositioner className="z-30 bg-secondary/40 backdrop-filter backdrop-blur-sm">
            <KBarAnimator className="rounded-xl mx-auto overflow-hidden w-[32rem] bg-secondary/80 shadow-2xl backdrop-filter backdrop-blur-md px-4 border-[1px] border-tertiary">
              <div className="flex justify-between items-end py-4 mx-1">
                <span>
                  <Search className="h-5 w-5 mr-2 text-gray-100" />
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
