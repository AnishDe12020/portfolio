import ExternalLink from "@/components/Shared/ExternalLink";
import NextImage from "next/image";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import directus from "lib/directus";
import { ProjectsColletion } from "types/directus";

interface ProjectPageProps {
  project: ProjectsColletion;
}

const SkillPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <div className="flex space-x-8 mt-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
      <ExternalLink href={project.link} className="mt-4 md:mt-6 mb-8" />
      <NextImage
        width={project.image.width}
        height={project.image.height}
        src={project.image.url}
        className="rounded-xl drop-shadow-md"
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await directus.items("projects").readByQuery({
    filter: { slug: params.slug as string },
    fields:
      "id, name, description, slug, link, githubLink, image.url, image.height, image.width",
  });

  return {
    props: { project: data[0] },
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
