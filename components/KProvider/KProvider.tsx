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
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch />
            <KResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default KProvider;
