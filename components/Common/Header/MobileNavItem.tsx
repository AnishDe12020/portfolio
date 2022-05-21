import Link from "@/components/Shared/Link";
import cx from "classnames";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface MobileNavItemProps {
  href: string;
  children: ReactNode;
  asPath: string;
}

const mobileNavItemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000, velocity: 100 },
    },
  },
};

const MobileNavItem = ({
  href,
  children,
  asPath,
}: MobileNavItemProps): JSX.Element => (
  <motion.li
    className={cx(
      "border-b-[1px] border-b-tertiary py-1 pl-2 text-gray-400 transition duration-200 hover:text-gray-500",
      asPath.split("/")[1] === href.replace("/", "") &&
        "font-medium !text-accent"
    )}
    variants={mobileNavItemVariants}
  >
    <Link href={href} className="flex w-auto" noGradientUnderline>
      {children}
    </Link>
  </motion.li>
);

export default MobileNavItem;
