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
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="z-30 bg-primary/80 backdrop-filter backdrop-blur-md">
          <KBarAnimator className="rounded-xl bg-primary mx-auto overflow-hidden w-[32rem] border-gray-500 shadow-gray-900 shadow-lg">
            <KBarSearch className="w-full border-b border-gray-300 py-2 border-none bg-primary text-gray-100 rounded-md outline-none" />
            <KResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default KProvider;
