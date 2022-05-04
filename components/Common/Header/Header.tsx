import Breadcrumb from "./Breadcrumb";
import Nav from "./Nav";

const Header = (): JSX.Element => {
  return (
    <nav className="flex justify-between px-8 my-4 relative">
      <a
        href="#main"
        className="absolute left-1/2 rounded-lg px-4 py-2 bg-secondary shadow-md border-tertiary border-[1px] focus:border-accent z-index-50 -translate-y-16 focus:block focus:translate-y-0 transition duration-200"
        tabIndex={100}
      >
        Skip to main content
      </a>
      <Breadcrumb />
      <Nav />
    </nav>
  );
};

export default Header;
