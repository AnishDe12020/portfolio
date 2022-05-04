import { GetStaticProps, NextPage } from "next";
import SkillCard from "@/components/Skills/SkillCard";
import directus from "lib/directus";
import { SkillWithoutExperience } from "types/directus";

interface SkillsPageProps {
  skills: SkillWithoutExperience[];
}

const SkillsPage: NextPage<SkillsPageProps> = ({ skills }) => {
  console.log(skills);
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Skills</h1>
      <div className="flex-col space-y-8">
        {skills.map(skill => (
          <SkillCard
            key={skill.id}
            name={skill.name}
            description={skill.description}
            link={skill.link}
            slug={skill.slug}
            iconSVG={skill.iconSVG}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await directus.items("skills").readByQuery({
    limit: -1,
    fields: "id, name, description, iconSVG, slug, link",
  });

  return {
    props: {
      skills: data,
    },
  };
};

export default SkillsPage;
