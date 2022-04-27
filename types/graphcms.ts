export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface RichText {
  html: string;
}

export interface HomeComponent {
  headingText: string;
  description: RichText;
  image: Image;
}

export interface Skill {
  iconName: string;
  name: string;
  link: string;
  id: string;
  slug: string;
  description: string;
}

export interface Project {
  name: string;
  description: string;
  link: string;
  githubLink: string;
  slug: string;
  id: string;
  image: Image;
}

export interface SkillWithExperience extends Skill {
  experience: RichText;
}
