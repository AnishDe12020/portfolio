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
  previewURL: string;
  height: number;
  width: number;
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
  iconSVG: string;
  experience: string;
  slug: string;
  link: string;
};

type SkillWithoutExperience = Omit<SkillsCollection, "experience">;
type SkillForSkillPage = Omit<SkillsCollection, "slug, id">;
type SkillForProjectPage = Omit<
  SkillsCollection,
  "slug, id, link, description"
>;

type ProjectsColletion = {
  id: ID;
  name: string;
  description: string;
  slug: string;
  link: string;
  githubLink: string;
  image: CloudinaryImage;
};

type ProjectForProjectPage = Omit<ProjectsColletion, "slug, id">;

type ProjectsSkillsRelationCollection = {
  id: ID;
  projects_id: ProjectsColletion;
  skills_id: SkillsCollection;
};

type Collections = {
  homePage: HomePageCollection;
  skills: SkillsCollection;
  projects: ProjectsColletion;
  projects_skills: ProjectsSkillsRelationCollection;
};

export type {
  Collections,
  DirectusImage,
  CloudinaryImage,
  HomePageCollection,
  SkillsCollection,
  SkillWithoutExperience,
  SkillForSkillPage,
  SkillForProjectPage,
  ProjectsColletion,
  ProjectForProjectPage,
};
