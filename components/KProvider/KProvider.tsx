import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
} from "kbar";
import { ReactNode } from "react";

interface KProviderProps {
  children: ReactNode;
}

const KProvider = ({ children }: KProviderProps): JSX.Element => {
  return (
    <KBarProvider>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
};

export default KProvider;
