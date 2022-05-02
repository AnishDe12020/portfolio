import type { GetStaticProps, NextPage } from "next";
import Hero from "@/components/Home/Hero";
import directus from "lib/directus";
import getAssetUrl from "@/utils/getAssetUrl";
import { HomePageCollection } from "types/directus";
import getPreviewImageUrl from "@/utils/getPreviewImageURL";

interface HomePageProps {
  content: HomePageCollection;
}

const HomePage: NextPage<HomePageProps> = ({ content }) => {
  return (
    <Hero
      heroHeading={content.heroHeading}
      heroText={content.heroText}
      image={content.heroImage}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await directus.singleton("homePage").read({
    fields:
      "heroHeading, heroText, heroImage.id, heroImage.height, heroImage.width",
  });

  data.heroImage.url = getAssetUrl(data.heroImage.id);

  data.heroImage.previewURL = await getPreviewImageUrl(data.heroImage.url);

  console.log(data);
  return {
    props: { content: data },
  };
};

export default HomePage;
