import { GitHubLogo } from "@/components/Shared/Icons";
import Link from "next/link";
import { ExternalLink } from "react-feather";

interface ProjectProps {
  slug: string;
  name: string;
  description: string;
  link: string;
  githubLink: string;
}

const ProjectCard = ({
  slug,
  name,
  description,
  link,
  githubLink,
}: ProjectProps): JSX.Element => {
  return (
    <div className="bg-secondary p-4 rounded-lg border-tertiary border-[1px] hover:border-accent transition duration-200 group relative">
      <Link href={`/skills/${slug}`} passHref>
        <a className="flex space-x-4 ">
          <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </a>
      </Link>
      {link ? (
        <a
          className="opacity-0 group-hover:opacity-100 hidden group-hover:block absolute -top-2 -right-2 rounded-full p-1.5 bg-accent text-tertiary border-[1px] border-accent hover:bg-secondary hover:text-accent transition duration-1000"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      ) : (
        <a
          className="opacity-0 hidden group-hover:opacity-100 group-hover:block absolute -top-2 -right-2 rounded-full p-1.5 bg-accent text-tertiary border-[1px] border-accent hover:bg-secondary hover:text-accent transition"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogo className="h-4 w-4" />
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
