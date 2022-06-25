import socials from "@/data/socials";
import { cloneElement, HTMLAttributes, ReactElement } from "react";
import cx from "classnames";
import Link from "../Link";
import Tooltip from "../Tooltip";

interface SocialsProps extends HTMLAttributes<HTMLDivElement> {
  small?: boolean;
}

const Socials = ({
  className,
  small,
  ...otherProps
}: SocialsProps): JSX.Element => {
  return (
    <div className={cx("flex space-x-4", className)} {...otherProps}>
      {socials.map(social => (
        <Tooltip key={social.id} content={social.name}>
          <Link
            href={social.url}
            noExternalLinkIcon
            noGradientUnderline
            aria-label={social.name}
          >
            {cloneElement(social.icon as ReactElement, {
              className: cx(
                "rounded-xl shadow-md border-[1px] border-tertiary bg-secondary",
                small ? "h-8 w-8 px-1.5 py-1" : "h-10 w-10 px-2 py-1.5"
              ),
              "aria-label": social.name,
              color: "#fff",
            })}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;
