import { useKBar } from "kbar";
import { CommandIcon } from "@/components/Shared/Icons";
import Breadcrumb from "./Breadcrumb";

const Header = (): JSX.Element => {
  const { query } = useKBar();

  return (
    <nav className="flex justify-between mx-8 my-4">
      <Breadcrumb />
      <button
        className="hover:shadow-commandButton transition duration-200 rounded-md p-1 focus:outline-none focus-visible:shadow-commandButton"
        onClick={() => query.toggle()}
      >
        <CommandIcon />
      </button>
    </nav>
  );
};

export default Header;
