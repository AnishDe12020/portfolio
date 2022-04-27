import Link from "next/link";
import { Fragment, ReactNode } from "react";

interface BreadcrumbItemProps {
  skipSeparator?: boolean;
  children: ReactNode;
  href: string;
  isCurrent?: boolean;
}

const BreadcrumbItem = ({
  skipSeparator,
  children,
  href,
  isCurrent,
}: BreadcrumbItemProps): JSX.Element => (
  <Fragment>
    {!skipSeparator && <span>/</span>}
    <li>
      <Link href={href} passHref>
        <a
          className={
            isCurrent
              ? "bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-emerald-500 font-bold"
              : ""
          }
          aria-current={isCurrent ? "page" : "false"}
        >
          {children}
        </a>
      </Link>
    </li>
  </Fragment>
);

export default BreadcrumbItem;
