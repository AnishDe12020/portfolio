import cx from "classnames";
import {
  AnchorHTMLAttributes,
  cloneElement,
  forwardRef,
  ReactElement,
  ReactNode,
} from "react";
import { ArrowUpRight } from "react-feather";
import NextLink from "next/link";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: ReactNode;
  gradientUnderline?: boolean;
  noGradientUnderline?: boolean;
  noExternalLinkIcon?: boolean;
  noHighlight?: boolean;
  icon?: ReactNode;
}

const ExternalLink = forwardRef<HTMLAnchorElement, ExternalLinkProps>(
  (
    {
      href,
      className,
      children,
      gradientUnderline,
      noGradientUnderline,
      noExternalLinkIcon,
      noHighlight = false,
      icon,
      ...otherProps
    }: ExternalLinkProps,
    ref
  ): JSX.Element => {
    const isInternalLink = href.startsWith("/") || href.startsWith("#");

    const isGradientUnderline = gradientUnderline
      ? true
      : (typeof children === "string" || typeof children === "undefined") &&
        !noGradientUnderline
      ? true
      : false;

    return (
      <>
        {isInternalLink ? (
          <NextLink href={href}>
            <a
              className={cx(
                "transition duration-200",
                isGradientUnderline && "gradient-underline flex items-center",
                className
              )}
              ref={ref}
              {...otherProps}
            >
              {isGradientUnderline ? <span>{children ?? href}</span> : children}
            </a>
          </NextLink>
        ) : (
          <a
            href={href}
            className={cx(
              "mr-1 inline-flex items-center space-x-1 text-gray-300 transition duration-200",
              isGradientUnderline && "gradient-underline",
              isGradientUnderline &&
                !noHighlight &&
                "text-blue-400 hover:text-blue-300",
              className
            )}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            {...otherProps}
          >
            {icon &&
              cloneElement(icon as ReactElement, { className: "h-4 w-4 mr-1" })}
            {noExternalLinkIcon ? children : <span>{children}</span>}{" "}
            {!noExternalLinkIcon && <ArrowUpRight className="h-4 w-4" />}
          </a>
        )}
        <style jsx>{`
          .gradient-underline :not(.anchor) {
            text-decoration: none;
            background-image: linear-gradient(to right, #be185d, #1d4ed8);
            background-repeat: no-repeat;
            background-position: bottom left;
            background-size: 0% 3px;
            transition: background-size 150ms ease-in-out;
          }

          .gradient-underline:hover :not(.anchor) {
            background-size: 100% 3px;
            color: inherit;
          }
        `}</style>
      </>
    );
  }
);

ExternalLink.displayName = "Link";

export default ExternalLink;
