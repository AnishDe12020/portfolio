import { GetStaticProps, NextPage } from "next";
import { ProjectForProjectsPage } from "types/directus";

import ProjectCard from "@/components/Projects/ProjectCard";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";

import directus from "lib/directus";

interface ProjectPageProps {
  projects: ProjectForProjectsPage[];
}

const SkillsPage: NextPage<ProjectPageProps> = ({ projects }) => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Projects</h1>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          link={project.link}
          githubLink={project.githubLink}
          slug={project.slug}
          image={project.image}
        />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await directus.items("projects").readByQuery({
    limit: -1,
    fields:
      "id, name, description, slug, link, githubLink, image.url, image.height, image.width",
  });

  for (const project of data) {
    project.image.previewURL = await getPreviewImageUrl(project.image.url);
  }

  return {
    props: {
      projects: data,
    },
  };
};

export default SkillsPage;
