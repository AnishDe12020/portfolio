import { ID } from "@directus/sdk";

type DirectusImage = {
  url: string;
  previewURL: string;
  height: number;
  width: number;
  id: ID;
};

type CloudinaryImage = {
  id: ID;
  url: string;
  height: string;
  width: string;
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

type ProjectsColletion = {
  id: ID;
  name: string;
  description: string;
  slug: string;
  link: string;
  githubLink: string;
  image: CloudinaryImage;
};

type Collections = {
  homePage: HomePageCollection;
  skills: SkillsCollection;
};

export type {
  Collections,
  DirectusImage,
  CloudinaryImage,
  HomePageCollection,
  SkillsCollection,
  ProjectsColletion,
};
