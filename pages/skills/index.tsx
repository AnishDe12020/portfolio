import graphcmsClient from "lib/graphcmsClient";
import { GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import type { Skill } from "types/graphcms";
import SkillCard from "@/components/Skills/SkillCard";

interface SkillsPageProps {
  skills: Skill[];
}

const SkillsPage: NextPage<SkillsPageProps> = ({ skills }) => {
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
  const { data } = await graphcmsClient.query({
    query: gql`
      query PageSkills {
        skills {
          iconName
          name
          link
          id
          slug
          description
        }
      }
    `,
  });

  const skills = data.skills;
  return {
    props: {
      skills,
    },
  };
};

export default SkillsPage;
