import ExternalLink from "@/components/Shared/ExternalLink";
import NextImage from "next/image";
import Link from "next/link";
import type { Image } from "types/graphcms";

interface ProjectProps {
  slug: string;
  name: string;
  description: string;
  link: string;
  githubLink: string;
  image: Image;
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
    <div className="flex space-x-4 bg-secondary p-4 rounded-lg border-tertiary border-[1px] transition duration-200">
      <NextImage
        width={image.width / 4}
        height={image.height / 4}
        src={image.url}
        alt={name}
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        <Link href={`/projects/${slug}`} passHref>
          <a className="text-gray-300 mt-4">Learn More</a>
        </Link>
        {link && <ExternalLink href={link} className="mt-2" />}
        {githubLink && <ExternalLink href={githubLink} className="mt-2" />}
      </div>
    </div>
  );
};

export default ProjectCard;
