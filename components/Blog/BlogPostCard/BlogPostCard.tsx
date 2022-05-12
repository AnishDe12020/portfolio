import NextImage from "next/image";

import { cleanLink, getGitHubOwnerAndRepoFromLink } from "@/utils/helpers";
import Link from "@/components/Shared/Link";
import { CloudinaryImage } from "contentlayer/generated";

interface BlogPostCardProps {
  slug: string;
  title: string;
  image: CloudinaryImage;
  date: string;
  readingTime: string;
}

const ProjectCard = ({
  slug,
  title,
  image,
  date,
  readingTime,
}: BlogPostCardProps): JSX.Element => {
  return (
    <article className="group flex max-w-lg flex-col-reverse rounded-xl border-[1px] border-tertiary bg-secondary py-4 px-6">
      <div className="flex-col space-y-4">
        <Link href={`/blog/${slug}`}>
          <h2 className="text-lg font-semibold group-hover:opacity-60">
            {title}
          </h2>
        </Link>
        <p className="text-gray-300">
          {date} / {readingTime}
        </p>
      </div>
      <Link href={`/blog/${slug}`} className="aspect-[16/9]">
        <NextImage
          src={image.url}
          height={image.height}
          width={image.width}
          className="rounded-lg drop-shadow-md group-hover:opacity-80"
        />
      </Link>
    </article>
  );
};

export default ProjectCard;
