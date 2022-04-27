import graphcmsClient from "lib/graphcmsClient";
import { GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import type { Project } from "types/graphcms";
import ProjectCard from "@/components/Projects/ProjectCard";

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
  const { data } = await graphcmsClient.query({
    query: gql`
      query PageProjects {
        projects {
          name
          link
          id
          githubLink
          description
          slug
          image {
            height
            width
            url
          }
        }
      }
    `,
  });

  const projects = data.projects;

  return {
    props: {
      projects,
    },
  };
};

export default SkillsPage;
