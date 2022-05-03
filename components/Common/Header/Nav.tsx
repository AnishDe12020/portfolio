import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Menu, X } from "react-feather";
import { AnimatePresence, motion, Variants } from "framer-motion";
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
      <ul className="hiden md:flex space-x-2 w-full">
        {navItems.map((item, index) => (
          <NavItem href={item.href} asPath={asPath} key={index}>
            {item.name}
          </NavItem>
        ))}
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
              className="flex flex-col space-y-4 bg-primary w-full h-screen pt-8 px-8 left-0 md:hidden z-50 absolute"
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
