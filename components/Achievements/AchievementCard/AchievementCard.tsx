import MDXComponents from "@/components/Common/MDXComponents";
import Link from "@/components/Shared/Link";
import { format, parseISO } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { CleanedAchievement } from "types/achievements";

const AchievementCard = ({
  title,
  date,
  proof,
  content,
}: Omit<CleanedAchievement, "id">): JSX.Element => {
  const AchievementMDX = useMDXComponent(content);

  return (
    <div className="b flex flex-col space-y-4 rounded-xl border-[1px] border-tertiary bg-secondary/50 py-4 px-6">
      <h2 className="text-lg font-semibold text-gray-100 ">{title}</h2>
      <div className="max-w-full my-8 leading-8 prose">
        <AchievementMDX components={{ ...MDXComponents }} />
      </div>
      {proof && (
        <Link href={proof.url} noHighlight className="font-semibold">
          {proof.title}
        </Link>
      )}
      <div className="flex flex-row justify-between">
        {date && (
          <p className="text-gray-300 ">{format(parseISO(date), "PPP")}</p>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
