import { defineDocumentType, makeSource } from "contentlayer/source-files";

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

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Skill],
});
