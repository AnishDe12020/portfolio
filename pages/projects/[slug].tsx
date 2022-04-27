import ExternalLink from "@/components/Shared/ExternalLink";
import IconFactory from "@/components/Shared/Icons/IconFactory";
import { gql } from "@apollo/client";
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

      <ExternalLink href={project.link} className="mt-4 md:mt-6" />
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
