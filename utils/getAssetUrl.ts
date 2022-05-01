import { ID } from "@directus/sdk";

const getAssetUrl = (id: ID) => {
  return `${process.env.DIRECTUS_URL}/assets/${id}`;
};

export default getAssetUrl;
