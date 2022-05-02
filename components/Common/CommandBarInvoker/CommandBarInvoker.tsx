import { CommandIcon } from "@/components/Shared/Icons";
import { useKBar } from "kbar";

const CommandBarInvoker = (): JSX.Element => {
  const { query } = useKBar();

  return (
    <button
      className="hover:shadow-commandButton transition duration-200 rounded-md p-1 focus:outline-none focus-visible:shadow-commandButton fixed right-8 bottom-8"
      onClick={() => query.toggle()}
    >
      <CommandIcon />
    </button>
  );
};

export default CommandBarInvoker;
