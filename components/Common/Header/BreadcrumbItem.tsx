import Link from "next/link";
import { Fragment, ReactNode } from "react";
import cx from "classnames";

interface BreadcrumbItemProps {
  isRoot?: boolean;
  children: ReactNode;
  href: string;
  isCurrent?: boolean;
}

const BreadcrumbItem = ({
  isRoot,
  children,
  href,
  isCurrent,
}: BreadcrumbItemProps): JSX.Element => (
  <Fragment>
    {!isRoot && <span>/</span>}
    <li>
      <Link href={href} passHref>
        <a
          className={cx(
            isCurrent
              ? "bg-clip-text text-transparent bg-gradient-to-br from-[#9ebd13] to-[#008552] font-bold"
              : "text-gray-300",
            "hover:opacity-80 transition duration-200"
          )}
          aria-current={isCurrent ? "page" : "false"}
        >
          {children}
        </a>
      </Link>
    </li>
  </Fragment>
);

export default BreadcrumbItem;
