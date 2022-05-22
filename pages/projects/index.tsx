import { NextPage } from "next";
import { motion } from "framer-motion";

import ProjectCard from "@/components/Projects/ProjectCard";

import { allProjects } from "contentlayer/generated";
import { fadeInVariant } from "variants";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";

const MotionProjectCard = motion(ProjectCard);
const MotionLink = motion(Link);

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
            transition={{ delay: 0.2 + 0.3 * index, duration: 0.3 }}
          />
        ))}
      </div>
      <MotionLink
        href="https://github.com/stars/AnishDe12020/lists/projects"
        className="group mt-8 flex flex-row items-center justify-start space-x-2 text-xl font-medium"
        noExternalLinkIcon
        variants={fadeInVariant}
        initial="offscreen"
        animate="onscreen"
        transition={{ delay: 0.3 * allProjects.length, duration: 0.2 }}
      >
        <span>View more on GitHub</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </MotionLink>
    </>
  );
};

export default ProjectsPage;
