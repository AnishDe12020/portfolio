import { KBarResults, useMatches } from "kbar";
import cx from "classnames";
import Kbd from "@/components/Shared/Kbd";
import { cloneElement, ReactElement } from "react";
import { ArrowRight } from "react-feather";

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
                <div className="mr-4">
                  {cloneElement(item.icon as ReactElement<any>, {
                    className: "h-5 w-5",
                  })}
                </div>
              )}
              {item.parent && (
                <>
                  <span className="opacity-60">
                    {
                      item.ancestors.find(
                        ancestor => ancestor.id === item.parent
                      )?.name
                    }
                  </span>
                  <span className="opacity-60">
                    <ArrowRight className="h-4 w-4 mx-2" />
                  </span>
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
