import graphcmsClient from "lib/graphcmsClient";
import { GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import type { Skill } from "types/graphcms";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import Link from "next/link";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface SkillsPageProps {
  skills: Skill[];
}

const SkillsPage: NextPage<SkillsPageProps> = ({ skills }) => {
  return (
    <div className="max-w-3xl mx-auto px-8">
      {skills.map(skill => (
        <Link key={skill.id} href={`/skills/${skill.slug}`} passHref>
          <a className="flex space-x-4">
            <IconFactory name={skill.iconName} className="h-12 w-12" />
            <div className="flex flex-col space-y-1">
              <h2 className="text-xl font-bold">{skill.name}</h2>
              <a
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center opacity-60 text-sm space-x-1 hover:opacity-80 transition duration-200"
              >
                <span>{skill.link}</span>
                <ArrowTopRightIcon />
              </a>
            </div>
          </a>
        </Link>
      ))}
    </div>
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
