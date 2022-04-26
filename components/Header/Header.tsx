import { useKBar } from "kbar";
import { CommandIcon } from "@/components/Icons";

const Header = (): JSX.Element => {
  const { query } = useKBar();

  return (
    <nav className="flex justify-end mx-8 my-4">
      <button className="flex space-x-2" onClick={() => query.toggle()}>
        <CommandIcon className="hover:shadow-commandButton transition duration-200 rounded-md p-1 h-8 w-8" />
      </button>
    </nav>
  );
};

export default Header;
