import ExternalLink from "@/components/Shared/ExternalLink";
import NextImage from "next/image";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import directus from "lib/directus";
import { ProjectForProjectPage, SkillForProjectPage } from "types/directus";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";
import Link from "next/link";
import Tooltip from "@/components/Shared/Tooltip";
import IconMaker from "@/components/Shared/Icons/IconMaker";

interface ProjectPageProps {
  project: ProjectForProjectPage;
  skillsUsed: SkillForProjectPage[];
}

const SkillPage: NextPage<ProjectPageProps> = ({ project, skillsUsed }) => {
  console.log(skillsUsed);
  return (
    <>
      <div className="flex space-x-8 mt-8">
        <IconMaker
          svgCode={project.iconSVG}
          className="h-16 w-16 bg-tertiary p-2 rounded-xl shadow-md"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
      <ExternalLink href={project.link} className="mt-4 md:mt-6" />

      <div className="my-6 flex space-x-4">
        {skillsUsed.map(skill => (
          <Tooltip key={skill.id} content={skill.name}>
            <Link href={`skills/${skill.slug}`} passHref>
              <a>
                <IconMaker
                  svgCode={skill.iconSVG}
                  className="h-8 w-8 bg-tertiary p-1 md:h-12 md:w-12 md:p-2 rounded-lg shadow-md"
                  aria-label={skill.name}
                />
              </a>
            </Link>
          </Tooltip>
        ))}
      </div>
      <div className="rounded-xl overflow-hidden">
        <NextImage
          width={project.image.width}
          height={project.image.height}
          src={project.image.url}
          className="rounded-xl drop-shadow-md"
          placeholder="blur"
          blurDataURL={project.image.previewURL}
        />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await directus.items("projects").readByQuery({
    filter: { slug: params.slug as string },
    fields:
      "name, description, link, githubLink, iconSVG, image.url, image.height, image.width",
  });

  data[0].image.previewURL = await getPreviewImageUrl(data[0].image.url);

  const { data: skillsUsed } = await directus
    .items("projects_skills")
    .readByQuery({
      filter: { projects_id: { slug: params.slug as string } },
      fields: "skills_id.name, skills_id.slug, skills_id.iconSVG, skills_id.id",
    });

  return {
    props: {
      project: data[0],
      skillsUsed: skillsUsed.map(skill => {
        return { ...skill.skills_id };
      }),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await directus.items("projects").readByQuery({
    fields: "slug",
  });

  const paths = data.map(project => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
