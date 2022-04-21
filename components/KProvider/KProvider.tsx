import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { ReactNode } from "react";
import KResults from "./KResults";

interface KProviderProps {
  children: ReactNode;
}

const KProvider = ({ children }: KProviderProps): JSX.Element => {
  const actions = [
    {
      id: "open-github",
      name: "GitHub",
      perform: () => console.log("open github"),
    },
    {
      id: "open-twitter",
      name: "Twitter",
      perform: () => console.log("open twitter"),
    },
    {
      id: "open-source",
      name: "Source",
      perform: () => console.log("open source"),
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="z-30 bg-primary/80 backdrop-filter backdrop-blur-md">
          <KBarAnimator className="rounded-xl bg-primary mx-auto overflow-hidden w-[32rem] border-gray-500">
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
