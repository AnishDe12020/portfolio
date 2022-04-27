import ExternalLink from "@/components/Shared/ExternalLink";
import { gql } from "@apollo/client";
import NextImage from "next/image";
import graphcmsClient from "lib/graphcmsClient";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Project } from "types/graphcms";

interface ProjectPageProps {
  project: Project;
}

const SkillPage: NextPage<ProjectPageProps> = ({ project }) => {
  return (
    <>
      <div className="flex space-x-8 mt-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-gray-300 text-sm">{project.description}</p>
        </div>
      </div>
      <ExternalLink href={project.link} className="mt-4 md:mt-6 mb-8" />
      <NextImage
        width={project.image.width}
        height={project.image.height}
        src={project.image.url}
        className="rounded-xl drop-shadow-md"
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await graphcmsClient.query({
    query: gql`
      query PageProject($slug: String!) {
        project(where: { slug: $slug }) {
          id
          link
          githubLink
          name
          description
          image {
            url
            width
            height
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });

  const project = data.project;

  return {
    props: { project },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await graphcmsClient.query({
    query: gql`
      query PageProjectPaths {
        projects {
          slug
        }
      }
    `,
  });

  const paths = data.projects.map(project => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default SkillPage;
