import type { GetStaticProps, NextPage } from "next";
import Hero from "@/components/Hero";
import graphcmsClient from "lib/graphcmsClient";
import { gql } from "@apollo/client";
import { HomeComponent } from "types/graphcms";

interface HomePageProps {
  content: HomeComponent;
}

const HomePage: NextPage<HomePageProps> = ({ content }) => {
  console.log(content);
  return (
    <Hero
      heroText={content.headingText}
      description={content.description}
      image={content.image}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await graphcmsClient.query({
    query: gql`
      query PageHome {
        page(where: { slug: "home" }) {
          content {
            ... on Home {
              headingText
              description
              image {
                url
                height
                width
              }
            }
          }
        }
      }
    `,
  });

  const content = data.page.content;

  return {
    props: { content },
  };
};

export default HomePage;
