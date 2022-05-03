import Link from "next/link";
import { ReactNode } from "react";
import cx from "classnames";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavItemProps {
  href: string;
  children: ReactNode;
  asPath: string;
}

const MobileNavItem = ({
  href,
  children,
  asPath,
}: MobileNavItemProps): JSX.Element => (
  <AnimatePresence>
    <motion.li>
      <Link href={href} passHref>
        <a
          className={cx(
            "text-gray-400 pl-2 py-1 hover:text-gray-500 transitin duration-200 border-b-tertiary border-b-[1px]",
            asPath.split("/")[1] === href.replace("/", "") &&
              "font-medium !text-accent"
          )}
        >
          {children}
        </a>
      </Link>
    </motion.li>
  </AnimatePresence>
);

export default MobileNavItem;
