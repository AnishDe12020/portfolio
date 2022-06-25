import { MDXComponents } from "mdx/types";
import Link from "@/components/Shared/Link";
import { cloneElement, useRef } from "react";

const CodeBlock = props => {
  const codeRef = useRef<HTMLElement>(null);

  return (
    <div style={{ position: "relative", overflow: "auto" }}>
      <pre {...props}>
        {cloneElement(props.children as React.ReactElement, { ref: codeRef })}
      </pre>
    </div>
  );
};

const BlogImage = props => {
  return <img {...props} className="my-8 rounded-md" />;
};

const BlogLink = props => {
  return <Link {...props} className="text-blue-400 hover:text-blue-300" />;
};

const CustomMDXComponents: MDXComponents = {
  a: BlogLink,
  pre: CodeBlock,
  img: BlogImage,
};
export default CustomMDXComponents;
