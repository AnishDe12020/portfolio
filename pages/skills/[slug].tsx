import ExternalLink from "@/components/Shared/ExternalLink";
import IconMaker from "@/components/Shared/Icons/IconMaker";
import directus from "lib/directus";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { SkillForSkillPage } from "types/directus";

interface SkillsPageProps {
  skill: SkillForSkillPage;
}

const SkillPage: NextPage<SkillsPageProps> = ({ skill }) => {
  console.log(skill);
  return (
    <>
      <div className="flex space-x-8 mt-8">
        <IconMaker
          svgCode={skill.iconSVG}
          className="h-16 w-16 bg-tertiary p-3 rounded-lg shadow-md"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{skill.name}</h1>
          <p className="text-gray-300 text-sm">{skill.description}</p>
        </div>
      </div>

      <ExternalLink href={skill.link} className="mt-4 md:mt-6" />
      <p className="mt-8">{skill.experience}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await directus.items("skills").readByQuery({
    filter: { slug: params.slug as string },
    fields: "name, description, iconSVG, link, experience",
  });

  return {
    props: { skill: data[0] },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await directus.items("skills").readByQuery({
    fields: "slug",
  });

  const paths = data.map(skill => {
    return {
      params: {
        slug: skill.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
