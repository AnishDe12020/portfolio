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
          <div
            className={cx(
              "px-3 py-1 transition-colors flex items-center justify-between cursor-pointer",
              active ? "bg-gray-700" : "bg-transparent"
            )}
          >
            <div className="flex items-center">
              {item.icon && item.icon}
              {item.parent && (
                <>
                  <span>
                    {
                      item.ancestors.find(
                        ancestor => ancestor.id === item.parent
                      )?.name
                    }
                  </span>
                  <span>&gt;</span>
                </>
              )}
              <span>{item.name}</span>
            </div>
            {item.shortcut?.length && (
              <div className="flex items-center justify-center space-x-2">
                {item.shortcut.map(shortcut => (
                  <kbd key={shortcut} className="bg-gray-500">
                    {shortcut}
                  </kbd>
                ))}
              </div>
            )}
          </div>
        )
      }
    />
  );
};

export default KResults;
