import { ID } from "@directus/sdk";

type HomePageCollection = {
  heroHeading: string;
  heroText: string;
  heroImage: DirectusImage;
};

type Collections = {
  homePage: HomePageCollection;
};

type DirectusImage = {
  url: string;
  height: number;
  width: number;
  id: ID;
};

export type { Collections, HomePageCollection, DirectusImage };
