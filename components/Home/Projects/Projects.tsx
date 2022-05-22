import { allProjects } from ".contentlayer/generated";
import { GitHubLogo } from "@/components/Shared/Icons";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import Link from "@/components/Shared/Link";
import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";

const Projects = (): JSX.Element => {
  return (
    <div className="my-16 flex flex-col">
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="ml-8 flex flex-col space-y-8">
        {allProjects.map(project => (
          <div key={project._id} className="flex space-x-8">
<IconFactory
          name={project.iconName}
          className="shadow-md h-12 w-12 rounded-xl bg-tertiary p-2"
        />
            <div className="flex-col flex">
            <h3 className="text-xl font-semibold">{project.name}</h3>
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
