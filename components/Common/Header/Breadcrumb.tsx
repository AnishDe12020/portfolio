import capitalize from "@/utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Breadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

const Breadcrumb = (): JSX.Element => {
  const { asPath } = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);

  useEffect(() => {
    const pathWithoutQuery = asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    console.log("pathArray", pathArray);
    pathArray.shift();
    console.log("pathArrayShifted", pathArray);
    pathArray = pathArray.filter(path => path !== "");
    console.log("pathArrayFiltered", pathArray);

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: capitalize(path),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [asPath]);

  return (
    <ol aria-label="breadcrumb" className="flex space-x-2">
      <li>
        <Link href="/" passHref>
          <a>~</a>
        </Link>
      </li>
      {breadcrumbs &&
        breadcrumbs.map(({ href, label, isCurrent }) => (
          <>
            <span>/</span>
            <li key={href}>
              <Link href={href} passHref>
                <a
                  className={
                    isCurrent
                      ? "bg-clip-text text-transparent bg-gradient-to-br from-sky-500 to-emerald-500 font-bold"
                      : ""
                  }
                  aria-current={isCurrent ? "page" : "false"}
                >
                  {label}
                </a>
              </Link>
            </li>
          </>
        ))}
    </ol>
  );
};

export default Breadcrumb;
