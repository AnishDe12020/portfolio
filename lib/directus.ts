import { Directus } from "@directus/sdk";
import { Collections } from "types/directus";

const directus = new Directus<Collections>(process.env.DIRECTUS_URL);

export default directus;
