import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import Link from "@/components/Shared/Link";
import { allProjects, allSkills, Project, Skill } from "contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import { useMDXComponent } from "next-contentlayer/hooks";
import MDXComponents from "@/components/Common/MDXComponents";
import CustomGiscus from "@/components/Shared/CustomGiscus";
import Tooltip from "@/components/Shared/Tooltip";
import { getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import { GitHubLogo } from "@/components/Shared/Icons";

interface ProjectPageProps {
  project: Project;
  skillsUsed: Skill[];
}

const SkillPage: NextPage<ProjectPageProps> = ({ project, skillsUsed }) => {
  const ProjectMDX = useMDXComponent(project.body.code);

  return (
    <>
      <div className="mt-8 flex space-x-8">
        <IconFactory
          name={project.iconName}
          className="shadow-md h-16 w-16 rounded-xl bg-tertiary p-2"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-sm text-gray-300">{project.description}</p>
        </div>
      </div>
      {project.link && (
        <Link href={project.link} className="mt-4 md:mt-6">
          {project.link}
        </Link>
      )}

      {project.githubLink && (
        <Link
          href={project.githubLink}
          className="mt-4 ml-4 md:mt-6"
          icon={<GitHubLogo />}
        >
          {getGitHubOwnerAndRepoFromLink(project.githubLink)}
        </Link>
      )}

      <div className="my-6 flex space-x-4">
        {skillsUsed.map(skill => (
          <Tooltip key={skill._id} content={skill.name}>
            <Link href={`/skills/${skill.slug}`} noGradientUnderline>
              <IconFactory
                name={skill.iconName}
                className="shadow-md h-8 w-8 rounded-lg bg-tertiary p-1 md:h-12 md:w-12 md:p-2"
                aria-label={skill.name}
              />
            </Link>
          </Tooltip>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl">
        <NextImage
          width={project.image.width}
          height={project.image.height}
          src={project.image.url}
          className="rounded-xl drop-shadow-md"
        />
      </div>

      <article>
        <div className="my-8 h-1 w-full rounded-full bg-secondary" />

        <div className="prose leading-8">
          <ProjectMDX components={{ ...MDXComponents }} />
        </div>
        <div className="my-8 h-1 w-full rounded-full bg-secondary" />
        <div className="rounded-xl border-[1px] border-tertiary p-8">
          <CustomGiscus term={`project: ${project.name}`} />
        </div>
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(project => project.slug === params.slug);

  const skillsUsed = project.skillsUsed.map(skill => {
    const skillData = allSkills.find(skillData => skillData.name === skill);
    return skillData;
  });

  console.log(skillsUsed);

  return {
    props: {
      project,
      skillsUsed,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map(project => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
