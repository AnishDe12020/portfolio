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
      "flex items-end space-x-1 text-sm text-gray-300 transition duration-200 hover:text-gray-100",
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
