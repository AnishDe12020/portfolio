import { MDXComponents } from "mdx/types";
import { HTMLAttributes } from "react";

const MDXUl = ({ children, ...props }: HTMLAttributes<HTMLUListElement>) => (
  <ul {...props} className="list-disc">
    {children}
  </ul>
);

const CustomMDXComponents: MDXComponents = {
  ul: MDXUl,
};

export default CustomMDXComponents;
