import ExternalLink from "@/components/Shared/ExternalLink";
import IconMaker from "@/components/Shared/Icons/IconMaker";
import directus from "lib/directus";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ProjectsForSkillPage, SkillForSkillPage } from "types/directus";
import Tooltip from "@/components/Shared/Tooltip";
import Link from "next/link";

interface SkillsPageProps {
  skill: SkillForSkillPage;
  projectsMade: ProjectsForSkillPage[];
}

const SkillPage: NextPage<SkillsPageProps> = ({ skill, projectsMade }) => {
  console.log(skill);
  return (
    <>
      <div className="flex space-x-8 mt-8">
        <IconMaker
          svgCode={skill.iconSVG}
          className="h-16 w-16 bg-tertiary p-3 rounded-lg shadow-md"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{skill.name}</h1>
          <p className="text-gray-300 text-sm">{skill.description}</p>
        </div>
      </div>

      <ExternalLink href={skill.link} className="mt-4 md:mt-6" />

      <div className="my-6 flex space-x-4">
        {projectsMade.map(project => (
          <Tooltip key={project.id} content={project.name}>
            <Link href={`/projects/${project.slug}`} passHref>
              <a>
                <IconMaker
                  svgCode={project.iconSVG}
                  className="h-8 w-8 bg-tertiary p-1 md:h-12 md:w-12 md:p-2 rounded-lg shadow-md"
                  aria-label={project.name}
                />
              </a>
            </Link>
          </Tooltip>
        ))}
      </div>

      <p className="mt-8">{skill.experience}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await directus.items("skills").readByQuery({
    filter: { slug: params.slug as string },
    fields: "name, description, iconSVG, link, experience",
  });

  const { data: projectsMade } = await directus
    .items("projects_skills")
    .readByQuery({
      filter: { skills_id: { slug: params.slug as string } },
      fields:
        "projects_id.name, projects_id.slug, projects_id.id, projects_id.iconSVG",
    });

  return {
    props: {
      skill: data[0],
      projectsMade: projectsMade.map(project => {
        return { ...project.projects_id };
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await directus.items("skills").readByQuery({
    fields: "slug",
  });

  const paths = data.map(skill => {
    return {
      params: {
        slug: skill.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
