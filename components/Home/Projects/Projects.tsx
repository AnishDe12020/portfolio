import { allProjects } from ".contentlayer/generated";
import Link from "@/components/Shared/Link";
import { ArrowRight } from "react-feather";

const Projects = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="flex flex-col space-y-8">
        {allProjects.slice(0, 2).map(project => (
        <Link key={project._id} href={`/projects/${project.slug}`} className="flex flex-col space-y-2 group">
        <h3 className="text-lg font-semibold flex flex-row space-x-2 items-center"><span>{project.name}</span> <ArrowRight className="h-4 w-4 translate-x-0 group-hover:translate-x-1 transition duration-200" /></h3>
            <p className="text-md text-gray-300">{project.description}</p>
          </Link>
        ))}
      </div>
      <Link
        href="/projects"
        className="group mt-8 flex items-center justify-start space-x-2 text-xl font-medium"
      >
        <span>View All Projects</span>
        <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default Projects;
