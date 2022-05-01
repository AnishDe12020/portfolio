import { GetStaticProps, NextPage } from "next";
import SkillCard from "@/components/Skills/SkillCard";
import directus from "lib/directus";
import { SkillsCollection } from "types/directus";

interface SkillsPageProps {
  skills: SkillsCollection;
}

const SkillsPage: NextPage<SkillsPageProps> = ({ skills }) => {
  console.log(skills);
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Skills</h1>
      {skills.map(skill => (
        <SkillCard
          key={skill.id}
          name={skill.name}
          description={skill.description}
          iconName={skill.iconName}
          link={skill.link}
          slug={skill.slug}
        />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await directus.items("skills").readByQuery({
    limit: -1,
    fields: "name, description, iconName, slug, link",
  });

  return {
    props: {
      skills: data,
    },
  };
};

export default SkillsPage;
