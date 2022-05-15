import { MDXComponents } from "mdx/types";
import Link from "@/components/Shared/Link";
import { cloneElement, useRef } from "react";

const CodeBlock = props => {
  const codeRef = useRef<HTMLElement>(null);

  console.log(codeRef);
  return (
    <div style={{ position: "relative", overflow: "auto" }}>
      <pre {...props}>
        {cloneElement(props.children as React.ReactElement, { ref: codeRef })}
      </pre>
    </div>
  );
};

const BlogImage = props => {
  return <img {...props} className="my-8 rounded-xl bg-secondary p-2" />;
};

const CustomMDXComponents: MDXComponents = {
  a: Link,
  pre: CodeBlock,
  img: BlogImage,
};
export default CustomMDXComponents;
