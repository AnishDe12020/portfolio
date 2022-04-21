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
              "px-4 py-3 transition-colors flex items-center justify-between cursor-pointer rounded-lg",
              active ? "bg-tertiary" : "bg-transparent"
            )}
          >
            <div className="flex items-center">
              {item.icon && <div className="mr-2">{item.icon}</div>}
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
              <span className="text-lg">{item.name}</span>
            </div>
            {item.shortcut?.length && (
              <div className="flex items-center justify-center space-x-2">
                {item.shortcut.map(shortcut => (
                  <kbd
                    key={shortcut}
                    className={cx(
                      "px-2 py-0.5 rounded-md text-sm",
                      active ? "bg-secondary" : "bg-tertiary"
                    )}
                  >
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
