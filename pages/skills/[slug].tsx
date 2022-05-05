import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { useMemo } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { ProjectsForSkillPage, SkillForSkillPage } from "types/directus";

import MDXComponents from "@/components/Common/MDXComponents";
import ExternalLink from "@/components/Shared/ExternalLink";
import IconMaker from "@/components/Shared/Icons/IconMaker";
import Tooltip from "@/components/Shared/Tooltip";

import directus from "lib/directus";

interface SkillsPageProps {
  skill: SkillForSkillPage;
  projectsMade: ProjectsForSkillPage[];
  experienceMDX: string;
}

const SkillPage: NextPage<SkillsPageProps> = ({
  skill,
  projectsMade,
  experienceMDX,
}) => {
  console.log(skill);

  const ExperienceMDX = useMemo(
    () => getMDXComponent(experienceMDX),
    [experienceMDX]
  );

  return (
    <>
      <div className="mt-8 flex space-x-8">
        <IconMaker
          svgCode={skill.iconSVG}
          className="shadow-md h-16 w-16 rounded-lg bg-tertiary p-3"
        />
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{skill.name}</h1>
          <p className="text-sm text-gray-300">{skill.description}</p>
        </div>
      </div>

      <ExternalLink href={skill.link} className="mt-4 md:mt-6" />

      <div className="my-6 flex space-x-4">
        {projectsMade.map(project => (
          <Tooltip key={project.id} content={project.name}>
            <Link href={`/projects/${project.slug}`} passHref>
              <a>
                <IconMaker
                  svgCode={project.iconSVG}
                  className="shadow-md h-8 w-8 rounded-lg bg-tertiary p-1 md:h-12 md:w-12 md:p-2"
                  aria-label={project.name}
                />
              </a>
            </Link>
          </Tooltip>
        ))}
      </div>

      <article className="prose">
        <ExperienceMDX components={{ ...MDXComponents }} />
      </article>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await directus.items("skills").readByQuery({
    filter: { slug: params.slug as string },
    fields: "name, description, iconSVG, link, experience",
  });

  const { code } = await bundleMDX({
    source: data[0].experience,
    mdxOptions(options) {
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              classname: "anchor",
            },
          },
        ],
      ];
      return options;
    },
  });

  const { data: projectsMade } = await directus
    .items("projects_skills")
    .readByQuery({
      filter: { skills_id: { slug: params.slug as string } },
      fields:
        "projects_id.name, projects_id.slug, projects_id.id, projects_id.iconSVG",
    });

  return {
    props: {
      skill: data[0],
      projectsMade: projectsMade.map(project => {
        return { ...project.projects_id };
      }),
      experienceMDX: code,
    },
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
