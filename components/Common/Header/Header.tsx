import Breadcrumb from "./Breadcrumb";

const Header = (): JSX.Element => {
  return (
    <nav className="flex justify-between mx-8 my-4">
      <Breadcrumb />
    </nav>
  );
};

export default Header;
