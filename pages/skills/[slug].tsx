import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

import MDXComponents from "@/components/Common/MDXComponents";

import Link from "@/components/Shared/Link";
import { allSkills, allProjects, Project, Skill } from "contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import CustomGiscus from "@/components/Shared/CustomGiscus";
import Tooltip from "@/components/Shared/Tooltip";

interface SkillsPageProps {
  skill: Skill;
  projectsMade: Project[];
}

const SkillPage: NextPage<SkillsPageProps> = ({ skill, projectsMade }) => {
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

      <div className="my-6 flex space-x-4">
        {projectsMade.map(project => (
          <Tooltip key={project._id} content={project.name}>
            <Link href={`/projects/${project.slug}`}>
              <IconFactory
                name={project.iconName}
                className="shadow-md h-8 w-8 rounded-lg bg-tertiary p-1 md:h-12 md:w-12 md:p-2"
                aria-label={project.name}
              />
            </Link>
          </Tooltip>
        ))}
      </div>

      <article>
        <div className="prose leading-8">
          <ExperienceMDX components={{ ...MDXComponents }} />
        </div>
        <div className="my-8 h-1 w-full rounded-full bg-secondary" />
        <div className="rounded-xl border-[1px] border-tertiary p-8">
          <CustomGiscus term={`skill: ${skill.name}`} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const skill = allSkills.find(skill => skill.slug === params.slug);

  const projectsMade = allProjects.filter(project =>
    project.skillsUsed.includes(skill.name)
  );

  return {
    props: {
      skill,
      projectsMade,
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
