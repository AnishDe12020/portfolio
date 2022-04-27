import { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "react-feather";
import cx from "classnames";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: ReactNode;
}

const ExternalLink = ({
  href,
  className,
  children,
  ...otherProps
}: ExternalLinkProps): JSX.Element => (
  <a
    href={href}
    className={cx(
      "text-gray-300 flex space-x-1 items-end text-sm hover:text-gray-100 transition duration-200",
      className
    )}
    target="_blank"
    rel="noopener noreferrer"
    {...otherProps}
  >
    <span>{children ?? href}</span> <ArrowUpRight className="h-4 w-4" />
  </a>
);

export default ExternalLink;
