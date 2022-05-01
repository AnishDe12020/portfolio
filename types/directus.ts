import { ID } from "@directus/sdk";

type DirectusImage = {
  url: string;
  previewURL: string;
  height: number;
  width: number;
  id: ID;
};

type HomePageCollection = {
  heroHeading: string;
  heroText: string;
  heroImage: DirectusImage;
};

type SkillsCollection = {
  id: ID;
  name: string;
  description: string;
  iconName: string;
  experience: string;
  slug: string;
  link: string;
};

type Collections = {
  homePage: HomePageCollection;
  skills: SkillsCollection;
};

export type {
  Collections,
  HomePageCollection,
  DirectusImage,
  SkillsCollection,
};
