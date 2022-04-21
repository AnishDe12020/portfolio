import socials from "@/data/socials";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
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
import KResults from "./KResults";

interface KProviderProps {
  children: ReactNode;
}

const KProvider = ({ children }: KProviderProps): JSX.Element => {
  const { push } = useRouter();

  const actions: Action[] = [
    {
      id: "home",
      name: "Home",
      shortcut: ["h"],
      keywords: "home index",
      perform: () => push("/"),
    },
  ];

  actions.push(...socials);

  return (
    <>
      {/* @ts-ignore */}
      <KBarProvider actions={actions}>
        <KBarPortal>
          {/* @ts-ignore */}
          <KBarPositioner className="z-30 bg-secondary/40 backdrop-filter backdrop-blur-md">
            {/* @ts-ignore */}
            <KBarAnimator className="rounded-xl mx-auto overflow-hidden w-[32rem] bg-secondary/80 shadow-2xl backdrop-filter backdrop-blur-lg px-4 border-[1px] border-tertiary">
              <div className="flex justify-between my-4 items-center ml-1">
                <span>
                  <MagnifyingGlassIcon className="h-6 w-6 mr-2 text-gray-100" />
                </span>
                <KBarSearch className="w-full border-b border-gray-300 py-2 border-none bg-transparent text-gray-100 rounded-md outline-none" />
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
