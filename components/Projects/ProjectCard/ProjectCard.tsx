import ExternalLink from "@/components/Shared/ExternalLink";
import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import NextImage from "next/image";
import Link from "next/link";
import { CloudinaryImage } from "types/directus";

interface ProjectProps {
  slug: string;
  name: string;
  description: string;
  link: string;
  githubLink: string;
  image: CloudinaryImage;
}

const ProjectCard = ({
  slug,
  name,
  description,
  image,
  link,
  githubLink,
}: ProjectProps): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 bg-secondary p-4 rounded-lg border-tertiary border-[1px] transition duration-200">
      <div className="rounded-lg overflow-hidden">
        <NextImage
          width={image.width / 4}
          height={image.height / 4}
          src={image.url}
          alt={name}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL={image.previewURL}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-300 text-sm">{description}</p>
          <div className="flex flex-row space-x-2 items-center">
            {link && <ExternalLink href={link}>{cleanLink(link)}</ExternalLink>}
            {githubLink && (
              <ExternalLink href={githubLink}>
                {getGitHubOwnerAndRepoFromLink(githubLink)}
              </ExternalLink>
            )}
          </div>
        </div>
        <Link href={`/projects/${slug}`} passHref>
          <a className="text-gray-300 mt-4">Learn More</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
