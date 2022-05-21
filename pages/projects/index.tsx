import { GetStaticProps, NextPage } from "next";

import ProjectCard from "@/components/Projects/ProjectCard";

import { allProjects } from "contentlayer/generated";

const ProjectsPage: NextPage = () => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Projects</h1>
      <div className="flex-col space-y-8">
        {allProjects.map(project => (
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
      </div>
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
