import { GetStaticProps, NextPage } from "next";

import ProjectCard from "@/components/Projects/ProjectCard";

import { allProjects, Project } from "contentlayer/generated";

interface ProjectPageProps {
  projects: Project[];
}

const ProjectsPage: NextPage<ProjectPageProps> = ({ projects }) => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Projects</h1>
      {projects.map(project => (
        <ProjectCard
          key={project._id}
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
  const projects = allProjects;

  return {
    props: {
      projects,
    },
  };
};

export default ProjectsPage;
