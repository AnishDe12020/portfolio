import { capitalize } from "@/utils/helpers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BreadcrumbItem from "./BreadcrumbItem";

interface IBreadcrumb {
  href: string;
  label: string;
  isCurrent: boolean;
}

const Breadcrumb = (): JSX.Element => {
  let { asPath } = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

  useEffect(() => {
    asPath = asPath.replace("#main", "");

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
      <BreadcrumbItem href="/" isRoot>
        ~
      </BreadcrumbItem>
      {breadcrumbs &&
        breadcrumbs.map(({ href, label, isCurrent }) => (
          <BreadcrumbItem href={href} isCurrent={isCurrent} key={href}>
            {label}
          </BreadcrumbItem>
        ))}
    </ol>
  );
};

export default Breadcrumb;
