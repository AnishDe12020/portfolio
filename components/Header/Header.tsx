import Kbd from "@/components/Kbd";
import { useKBar } from "kbar";

const Header = (): JSX.Element => {
  const { query } = useKBar();

  return (
    <nav className="flex justify-end mx-8 my-4">
      <button className="flex space-x-2" onClick={() => query.toggle()}>
        <Kbd>Ctrl</Kbd> <Kbd>K</Kbd>
      </button>
    </nav>
  );
};

export default Header;
