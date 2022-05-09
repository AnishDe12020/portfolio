import Giscus from "@giscus/react";

interface CustomGiscusProps {
  term: string;
}

const CustomGiscus = ({ term }: CustomGiscusProps) => {
  return (
    <Giscus
      id="comments"
      repo="AnishDe12020/portfolio"
      repoId="R_kgDOGfn4eQ"
      category="Comments"
      categoryId="DIC_kwDOGfn4ec4CO-cF"
      mapping="specific"
      term={term}
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
};

export default CustomGiscus;
