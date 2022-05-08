import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Giscus from "@giscus/react";
import { useMDXComponent } from "next-contentlayer/hooks";

import MDXComponents from "@/components/Common/MDXComponents";

import Link from "@/components/Shared/Link";
import { allSkills, Skill } from "contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";

interface SkillsPageProps {
  skill: Skill;
}

const SkillPage: NextPage<SkillsPageProps> = ({
  skill,
}) => {
  console.log(skill);

  const ExperienceMDX = useMDXComponent(skill.body.code);

  return (
    <>
      <div className="mt-8 flex space-x-8">
        <IconFactory
        name={skill.iconName}
          className="shadow-md h-16 w-16 rounded-lg bg-tertiary p-3"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{skill.name}</h1>
          <p className="text-sm text-gray-300">{skill.description}</p>
        </div>
      </div>

      <Link href={skill.link} className="mt-4 md:mt-6" />
      {/* }
      <div className="my-6 flex space-x-4">
        {projectsMade.map(project => (
          <Tooltip key={project.id} content={project.name}>
            <Link href={`/projects/${project.slug}`}>
              <IconMaker
                svgCode={project.iconSVG}
                className="shadow-md h-8 w-8 rounded-lg bg-tertiary p-1 md:h-12 md:w-12 md:p-2"
                aria-label={project.name}
              />
            </Link>
          </Tooltip>
        ))}
      </div>
        {*/}

      <article className="prose leading-8">
        <ExperienceMDX components={{ ...MDXComponents }} />
        <Giscus
          id="comments"
          repo="AnishDe12020/portfolio"
          repoId="R_kgDOGfn4eQ"
          category="Comments"
          categoryId="DIC_kwDOGfn4ec4CO-cF"
          mapping="specific"
          term={`skill: ${skill.name}`}
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const skill = allSkills.find(skill => skill.slug === params.slug);

  console.log(skill);

  return {
    props: {
      skill,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allSkills.map(skill => ({ params: { slug: skill.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
