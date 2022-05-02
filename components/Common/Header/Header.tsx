import Breadcrumb from "./Breadcrumb";
import NavItem from "./NavItem";

const Header = (): JSX.Element => {
  return (
    <div className="flex justify-between mx-8 my-4">
      <Breadcrumb />
      <nav className="flex space-x-1">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/skills">Skills</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </nav>
    </div>
  );
};

export default Header;
