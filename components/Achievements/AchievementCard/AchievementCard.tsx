import MDXComponents from "@/components/Common/MDXComponents";
import Link from "@/components/Shared/Link";
import Tooltip from "@/components/Shared/Tooltip";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { CleanedAchievement } from "types/achievements";

const AchievementCard = ({
  title,
  date,
  prizeValue,
  proof,
  content,
}: Omit<CleanedAchievement, "id">): JSX.Element => {
  const AchievementMDX = useMDXComponent(content);

  return (
    <div className="flex flex-col space-y-4 rounded-xl border-[1px] border-tertiary bg-secondary py-4 px-6">
      <h2 className="text-lg font-semibold text-gray-100 ">{title}</h2>
      <div className="prose my-8 max-w-full leading-8">
        <AchievementMDX components={{ ...MDXComponents }} />
      </div>
      {proof && (
        <Link href={proof.url} noHighlight className="font-semibold">
          {proof.title}
        </Link>
      )}
      <div className="flex flex-row justify-between">
        {date && (
          <p className=" text-gray-300 ">{format(parseISO(date), "PPP")}</p>
        )}
        {prizeValue && (
          <Tooltip content={`Prize value: ${prizeValue}`}>
            <p className=" font-mono text-gray-400">Won {prizeValue}</p>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
