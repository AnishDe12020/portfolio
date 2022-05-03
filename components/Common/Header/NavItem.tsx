import Link from "next/link";
import cx from "classnames";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
  asPath: string;
}

const NavItem = ({ href, children, asPath }: NavItemProps): JSX.Element => {
  return (
    <li>
      <Link href={href} passHref>
        <a
          className={cx(
            "text-gray-500 px-3 py-1 hover:bg-gray-600 hover:bg-opacity-30 rounded-lg transition duration-200 text-base",
            asPath.split("/")[1] === href.replace("/", "") &&
              "font-medium !text-accent bg-gray-600 bg-opacity-30 hover:bg-opacity-40"
          )}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default NavItem;
