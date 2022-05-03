import { useRouter } from "next/router";
import Breadcrumb from "./Breadcrumb";
import NavItem from "./NavItem";

const Header = (): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <div className="flex justify-between mx-8 my-4">
      <Breadcrumb />
      <nav>
        <ul className="flex space-x-2">
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
      </nav>
    </div>
  );
};

export default Header;
