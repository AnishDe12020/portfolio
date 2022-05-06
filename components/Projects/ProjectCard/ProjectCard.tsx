import NextImage from "next/image";
import { CloudinaryImage } from "types/directus";

import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import Link from "@/components/Shared/Link";

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
    <div className="flex flex-col space-y-8 rounded-lg border-[1px] border-tertiary bg-secondary p-4 transition duration-200 md:flex-row md:space-y-0 md:space-x-8">
      <div className="overflow-hidden rounded-lg">
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
          <p className="text-sm text-gray-300">{description}</p>
          <div className="flex flex-row items-center space-x-2">
            {link && <Link href={link}>{cleanLink(link)}</Link>}
            {githubLink && (
              <Link href={githubLink}>
                {getGitHubOwnerAndRepoFromLink(githubLink)}
              </Link>
            )}
          </div>
        </div>
        <Link href={`/projects/${slug}`} className="mt-4 text-gray-300">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
