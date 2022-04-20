import { KBarResults, useMatches } from "kbar";
import cx from "classnames";

const KResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div>{item}</div>
        ) : (
          <div className={cx(active ? "bg-gray-700" : "bg-gray-900")}>
            {item.name}
          </div>
        )
      }
    />
  );
};

export default KResults;
