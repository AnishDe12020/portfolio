import graphcmsClient from "lib/graphcmsClient";
import { GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import type { Project } from "types/graphcms";
import ProjectCard from "@/components/Projects/ProjectCard";
import directus from "lib/directus";

interface ProjectPageProps {
  projects: Project[];
}

const SkillsPage: NextPage<ProjectPageProps> = ({ projects }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Projects</h1>
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

  return {
    props: {
      projects: data,
    },
  };
};

export default SkillsPage;
