import { KBarResults, useMatches } from "kbar";
import cx from "classnames";
import Kbd from "@/components/Kbd";
import { cloneElement, ReactElement } from "react";

const KResults = () => {
  const { results } = useMatches();

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div className="text-sm px-3 py-2 text-gray-400">{item}</div>
        ) : (
          <div
            className={cx(
              "px-4 py-3 transition-colors flex items-center justify-between cursor-pointer rounded-lg",
              active ? "bg-tertiary" : "bg-transparent"
            )}
          >
            <div className="flex items-center">
              {item.icon && (
                <div className="mr-2">
                  {cloneElement(item.icon as ReactElement<any>, {
                    className: "h-5 w-5",
                  })}
                </div>
              )}
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
                  <Kbd key={shortcut}>{shortcut}</Kbd>
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
