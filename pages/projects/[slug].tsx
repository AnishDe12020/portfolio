import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import NextImage from "next/image";

import Link from "@/components/Shared/Link";
import { allProjects, Project } from "contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";

interface ProjectPageProps {
  project: Project;
}

const SkillPage: NextPage<ProjectPageProps> = ({ project }) => {
console.log(project);
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
      <Link href={project.link} className="mt-4 md:mt-6" />

      {/**}
      <div className="my-6 flex space-x-4">
        {skillsUsed.map(skill => (
          <Tooltip key={skill.id} content={skill.name}>
            <Link href={`/skills/${skill.slug}`}>
              <IconMaker
                svgCode={skill.iconSVG}
                className="shadow-md h-8 w-8 rounded-lg bg-tertiary p-1 md:h-12 md:w-12 md:p-2"
                aria-label={skill.name}
              />
            </Link>
          </Tooltip>
        ))}
      </div>
      {**/}
      <div className="overflow-hidden rounded-xl">
        <NextImage
          width={project.image.width}
          height={project.image.height}
          src={project.image.url}
          className="rounded-xl drop-shadow-md"
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = allProjects.find(project => project.slug === params.slug);

  return {
    props: {
      project: project,
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
