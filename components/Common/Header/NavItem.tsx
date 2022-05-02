import Link from "next/link";
import cx from "classnames";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface NavItemProps {
  href: string;
  children: ReactNode;
}

const NavItem = ({ href, children }: NavItemProps): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Link href={href} passHref>
      <a
        className={cx(
          "text-gray-400 px-3 py-1 hover:bg-gray-500 hover:bg-opacity-30 rounded-lg transition duration-200",
          asPath === href && "font-bold !text-accent bg-gray-500 bg-opacity-50"
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
