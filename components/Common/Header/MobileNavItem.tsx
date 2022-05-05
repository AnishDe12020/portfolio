import cx from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

interface MobileNavItemProps {
  href: string;
  children: ReactNode;
  asPath: string;
}

const MobileNavItem = ({
  href,
  children,
  asPath,
}: MobileNavItemProps): JSX.Element => (
  <li
    className={cx(
      "border-b-[1px] border-b-tertiary py-1 pl-2 text-gray-400 transition duration-200 hover:text-gray-500",
      asPath.split("/")[1] === href.replace("/", "") &&
        "font-medium !text-accent"
    )}
  >
    <Link href={href} passHref>
      <a className="w-auto flex">{children}</a>
    </Link>
  </li>
);

export default MobileNavItem;
