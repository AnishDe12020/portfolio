import graphcmsClient from "lib/graphcmsClient";
import { GetStaticProps, NextPage } from "next";
import { gql } from "@apollo/client";
import type { Skill } from "types/graphcms";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import Link from "next/link";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface SkillsPageProps {
  skills: Skill[];
}

const SkillsPage: NextPage<SkillsPageProps> = ({ skills }) => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Skills</h1>
      {skills.map(skill => (
        <div
          key={skill.id}
          className="bg-secondary p-4 rounded-lg border-tertiary border-[1px] hover:border-accent transition duration-200 group relative"
        >
          <Link href={`/skills/${skill.slug}`} passHref>
            <a className="flex space-x-4 ">
              <IconFactory name={skill.iconName} className="h-12 w-12" />
              <div className="flex flex-col space-y-1">
                <h2 className="text-xl font-bold">{skill.name}</h2>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </div>
            </a>
          </Link>
          <a
            className="opacity-0 hidden group-hover:opacity-100 group-hover:flex absolute -top-2 -right-2 rounded-full p-1.5 bg-accent text-tertiary border-[1px] border-accent hover:bg-secondary hover:text-accent transition"
            href={skill.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkIcon />
          </a>
        </div>
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
