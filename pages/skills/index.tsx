import { NextPage } from "next";

import SkillCard from "@/components/Skills/SkillCard";

import { allSkills } from ".contentlayer/generated";

const SkillsPage: NextPage = () => {
  return (
    <>
      <h1 className="mb-8 text-2xl font-bold">Skills</h1>
      <div className="flex-col space-y-8">
        {allSkills.map(skill => (
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
      <p className="mt-8 text-xl font-semibold">And much more!</p>
    </>
  );
};

export default SkillsPage;
