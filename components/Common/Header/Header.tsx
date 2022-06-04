import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";

const Header = (): JSX.Element => {
  return (
    <nav className="relative my-4 flex items-center justify-between px-8">
      <a
        href="#main"
        className="z-index-50 absolute left-1/2 -translate-y-32 rounded-lg border-[1px] border-tertiary bg-secondary px-4 py-2 shadow-md transition duration-200 focus:block focus:translate-y-0 focus:border-accent"
      >
        Skip to main content
      </a>
      <Breadcrumb />
      <Nav />
    </nav>
  );
};

export default Header;
