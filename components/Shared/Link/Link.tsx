import cx from "classnames";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowUpRight } from "react-feather";
import NextLink from "next/link";

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
}: ExternalLinkProps): JSX.Element => {
  const isInternalLink = href.startsWith("/") || href.startsWith("#");

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a className={className} {...otherProps}>
          {children}
        </a>
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      className={cx(
        "flex items-center space-x-1 text-gray-300 transition duration-200 hover:text-gray-100",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...otherProps}
    >
      <span>{children ?? href}</span> <ArrowUpRight className="h-4 w-4" />
    </a>
  );
};

export default ExternalLink;
