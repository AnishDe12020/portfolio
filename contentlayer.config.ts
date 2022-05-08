import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

export const CloudinaryImage = defineNestedType(() => ({
  name: "CloudinaryImage",
  displayName: "Cloudinary Image",
  fields: {
    height: {
      type: "number",
      description: "Height of the image",
      required: true,
    },
    width: {
      type: "number",
      description: "Width of the image",
      required: true,
    },
    url: {
      type: "string",
      description: "URL of the image",
      required: true,
    },
  },
}));

export const Skill = defineDocumentType(() => ({
  name: "Skill",
  filePathPattern: "skills/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the skill",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the skill",
      required: true,
    },
    link: {
      type: "string",
      description: "The link to the skill's page",
      required: true,
    },
    iconName: {
      type: "string",
      description: "The name of the icon to use",
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      description: "The name of the project",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the project",
      required: true,
    },
    link: {
      type: "string",
      description: "The link to the project's page",
      required: false,
    },
    githubLink: {
      type: "string",
      description: "The link to the project's github page",
      required: false,
    },
    iconName: {
      type: "string",
      description: "The name of the icon to use",
      required: true,
    },
    image: {
      type: "nested",
      description: "Image for the project",
      of: CloudinaryImage,
    },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Skill, Project],
});
