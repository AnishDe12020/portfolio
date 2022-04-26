import { gql } from "@apollo/client";
import graphcmsClient from "lib/graphcmsClient";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const SkillPage: NextPage = () => {
  return <div>SkillPage</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await graphcmsClient.query({
    query: gql`
      query PageSkillPaths {
        skills {
          slug
        }
      }
    `,
  });

  const paths = data.skills.map(skill => {
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
