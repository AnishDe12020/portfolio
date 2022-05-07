import { GetStaticProps, NextPage } from "next";

import SkillCard from "@/components/Skills/SkillCard";

import { allSkills, Skill } from ".contentlayer/generated";

interface SkillsPageProps {
  skills: Skill[];
}

const SkillsPage: NextPage<SkillsPageProps> = ({ skills }) => {
  console.log(skills);
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Skills</h1>
      <div className="flex-col space-y-8">
        {skills.map(skill => (
          <SkillCard
            key={skill._id}
            name={skill.name}
            description={skill.description}
            link={skill.link}
            slug={skill.slug}
            iconName={skill.iconName}
          />
        ))}
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const skills = allSkills;

  return {
    props: {
      skills,
    },
  };
};

export default SkillsPage;
