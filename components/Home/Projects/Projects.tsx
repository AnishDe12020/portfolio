import { allProjects } from ".contentlayer/generated";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import Link from "@/components/Shared/Link";
import { ArrowRight, ExternalLink } from "react-feather";
import {motion} from "framer-motion";
import { fadeInVariant } from "variants";

const MotionLink = motion(Link);

const Projects = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <motion.h2 variants={fadeInVariant} initial="offscreen" animate="onscreen" transition={{delay:0.8}} className="mb-8 text-3xl font-bold will-change-transform will-change-opacity">Projects</motion.h2>
      <div className="flex flex-col space-y-8">
        {allProjects.slice(0, 2).map((project, index) => (
          <motion.div
            key={project._id}
            className="group relative rounded-lg border-[1px] border-tertiary bg-secondary p-4 transition duration-200 hover:border-accent md:hover:scale-105 will-change-transform will-change-opacity"
            variants={fadeInVariant} initial="offscreen" animate="onscreen" transition={{delay:0.9 + 0.3 * index}}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="flex items-center space-x-4"
            >
              <IconFactory
                name={project.iconName}
                className="shadow-md h-12 w-12 rounded-xl bg-tertiary p-1.5"
              />
              <div className="flex-col space-y-2">
                <h3 className="flex flex-row items-center space-x-2 text-lg font-semibold">
                  {project.name}
                </h3>
                <p className="text-md text-gray-300">{project.description}</p>
              </div>
            </Link>
            {(project.link || project.githubLink) && (
              <a
                className="absolute -top-2 -right-2 hidden rounded-full border-[1px] border-accent bg-accent p-1.5 text-tertiary opacity-0 transition hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100"
                href={project.link || project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </motion.div>
        ))}
      </div>
      <MotionLink
        href="/projects"
        className="group mt-8 flex items-center justify-start space-x-2 text-xl font-medium will-change-opacity will-change-transform"
         variants={fadeInVariant}
        initial="offscreen"
        animate="onscreen"
        transition={{ delay: 1+0.6, duration: 0.2 }}

      >
        <span>View All Projects</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </MotionLink>
    </div>
  );
};

export default Projects;
