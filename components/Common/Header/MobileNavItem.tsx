import Link from "next/link";
import { ReactNode } from "react";
import cx from "classnames";

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
      "text-gray-400 pl-2 py-1 hover:text-gray-500 transition duration-200 border-b-tertiary border-b-[1px]",
      asPath.split("/")[1] === href.replace("/", "") &&
        "font-medium !text-accent"
    )}
  >
    <Link href={href} passHref>
      <a className="w-auto">{children}</a>
    </Link>
  </li>
);

export default MobileNavItem;
