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
            <KBarAnimator className="rounded-xl mx-auto overflow-hidden w-[32rem] border-gray-500 bg-secondary/80 drop-shadow-lg backdrop-filter backdrop-blur-lg px-4">
              <KBarSearch className="w-full border-b border-gray-300 py-2 border-none bg-transparent text-gray-100 rounded-md outline-none my-4" />
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
