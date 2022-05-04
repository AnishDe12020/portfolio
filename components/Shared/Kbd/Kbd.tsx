import cx from "classnames";
import { ReactNode } from "react";

interface KbdProps {
  children: ReactNode;
  className?: string;
}

const Kbd = ({ children, className }: KbdProps): JSX.Element => {
  return (
    <>
      <kbd
        className={cx(
          "rounded-md border-[1px] border-b-2 border-[#4a4a4a] bg-[#333333] px-2 py-0.5 text-sm",
          className
        )}
      >
        {children}
      </kbd>
    </>
  );
};

export default Kbd;
