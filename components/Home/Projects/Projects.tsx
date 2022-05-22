import { allProjects } from ".contentlayer/generated";
import { GitHubLogo } from "@/components/Shared/Icons";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import Link from "@/components/Shared/Link";
import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import { ArrowRight } from "react-feather";

const Projects = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="flex flex-col space-y-8">
        {allProjects.slice(0, 2).map(project => (
          <div key={project._id} className="flex space-x-8 rounded-lg border-[1px] border-tertiary bg-secondary p-4">
                        <Link href={`/projects/${project.slug}`} >

<IconFactory
          name={project.iconName}
          className="shadow-md h-12 w-12 rounded-xl bg-tertiary p-2 hover:opacity-60 transtition duration-200"
        />
</Link>
            <div className="flex-col flex space-y-2">
                                      <Link href={`/projects/${project.slug}`} >

            <h3 className="text-xl font-semibold hover:opacity-60 transition duration-200">{project.name}</h3>
            </Link>
            <p>{project.description}</p>
            <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
              {project.link && (
                <Link href={project.link}>{cleanLink(project.link)}</Link>
              )}
              {project.githubLink && (
                <Link href={project.githubLink} icon={<GitHubLogo />}>
                  {getGitHubOwnerAndRepoFromLink(project.githubLink)}
                </Link>
              )}
            </div>
            <Link href={`/projects/${project.slug}`} className="mt-4">
            Learn More
          </Link>
            </div>
          </div>
        ))}
      </div>
      <Link href="/projects" className="mt-8 group flex items-center justify-start space-x-2 text-xl font-medium">
      <span>View All Projects</span>
      <ArrowRight className="h-4 w-4 transition duration-200 group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default Projects;
