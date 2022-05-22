import { GetStaticProps, NextPage } from "next";
import { motion } from "framer-motion";

import ProjectCard from "@/components/Projects/ProjectCard";

import { allProjects } from "contentlayer/generated";
import { fadeInVariant } from "variants";

const MotionProjectCard = motion(ProjectCard);

const ProjectsPage: NextPage = () => {
  return (
    <>
      <motion.h1
        variants={fadeInVariant}
        initial="offscreen"
        animate="onscreen"
        className="mb-8 text-2xl font-bold"
      >
        Projects
      </motion.h1>
      <div className="flex-col space-y-8">
        {allProjects.map((project, index) => (
          <MotionProjectCard
            key={project._id}
            name={project.name}
            description={project.description}
            link={project.link}
            githubLink={project.githubLink}
            slug={project.slug}
            image={project.image}
            variants={fadeInVariant}
            initial="offscreen"
            animate="onscreen"
            transition={{ delay: 0.2+ 0.3 * index, duration: 0.3 }}
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
