import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";

const Header = (): JSX.Element => {
  return (
    <nav className="flex justify-between px-8 my-4 relative">
      <Breadcrumb />
      <Nav />
    </nav>
  );
};

export default Header;
