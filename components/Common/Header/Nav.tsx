import { AnimatePresence, Variants, motion } from "framer-motion";
import { Rotate as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import MobileNavItem from "./MobileNavItem";
import NavItem from "./NavItem";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
];

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

  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [asPath]);

  return (
    <>
      <ul className="hiden space-x-2 md:flex">
        {navItems.map((item, index) => (
          <NavItem href={item.href} asPath={asPath} key={index}>
            {item.name}
          </NavItem>
        ))}
      </ul>
      <div className="md:hidden">
        <div className="relative block md:hidden">
          <Hamburger
            toggled={isMobileNavOpen}
            toggle={setIsMobileNavOpen}
            rounded
            size={24}
            direction="right"
          />
        </div>
        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.ul
              className="absolute left-0 z-50 flex h-screen w-full flex-col space-y-6 bg-primary px-8 pt-8 md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <AnimatePresence>
                {isMobileNavOpen &&
                  navItems.map((item, index) => (
                    <MobileNavItem href={item.href} asPath={asPath} key={index}>
                      {item.name}
                    </MobileNavItem>
                  ))}
              </AnimatePresence>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Nav;
