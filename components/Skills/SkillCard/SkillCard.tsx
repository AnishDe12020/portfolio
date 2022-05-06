import { ExternalLink } from "react-feather";

import IconMaker from "@/components/Shared/Icons/IconMaker";
import Link from "@/components/Shared/Link";

interface SkillProps {
  slug: string;
  iconSVG: string;
  name: string;
  description: string;
  link: string;
}

const SkillCard = ({
  slug,
  iconSVG,
  name,
  description,
  link,
}: SkillProps): JSX.Element => {
  return (
    <div className="group relative rounded-lg border-[1px] border-tertiary bg-secondary p-4 transition duration-200 hover:border-accent">
      <Link href={`/skills/${slug}`} className="flex items-center space-x-4">
          <IconMaker
            svgCode={iconSVG}
            className="shadow-md h-14 w-14 rounded-lg bg-tertiary p-2"
          />
          <div className="flex flex-col space-y-1">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm text-gray-300">{description}</p>
          </div>
      </Link>
      <a
        className="absolute -top-2 -right-2 hidden rounded-full border-[1px] border-accent bg-accent p-1.5 text-tertiary opacity-0 transition hover:bg-secondary hover:text-accent group-hover:block group-hover:opacity-100"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  );
};

export default SkillCard;
