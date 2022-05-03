import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from "react-feather";
import { AnimatePresence, motion, Variants } from "framer-motion";
import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

const mobileMenuVariants: Variants = {
  open: {
    x: 0,
    display: "flex",
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      duration: 0.6,
    },
  },
};

const Nav = (): JSX.Element => {
  const { asPath } = useRouter();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <ul className="hiden md:flex space-x-2">
        <NavItem href="/" asPath={asPath}>
          Home
        </NavItem>
        <NavItem href="/skills" asPath={asPath}>
          Skills
        </NavItem>
        <NavItem href="/projects" asPath={asPath}>
          Projects
        </NavItem>
      </ul>
      <div>
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="block md:hidden relative"
        >
          {isMobileNavOpen ? <X /> : <Menu />}
        </button>
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.ul
              className="flex flex-col space-y-4 bg-primary w-full h-screen pt-8 pl-8 left-0 md:hidden z-50 absolute"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <MobileNavItem href="/" asPath={asPath}>
                Home
              </MobileNavItem>
              <MobileNavItem href="/skills" asPath={asPath}>
                Skils
              </MobileNavItem>
              <MobileNavItem href="/projects" asPath={asPath}>
                Projects
              </MobileNavItem>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Nav;
