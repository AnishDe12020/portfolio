import { Directus } from "@directus/sdk";
import { config } from "dotenv";
import fs from "fs";
import { Collections } from "types/directus";

config();

const directus = new Directus<Collections>(process.env.DIRECTUS_URL);

const KPROVIDER_DATA_FILE = "./data/kprovider.json";

const generateKProviderData = async () => {
  try {
    const { data: skillsData } = await directus
      .items("skills")
      .readByQuery({ limit: -1, fields: "id, name, slug, iconName" });

    const { data: projectsData } = await directus
      .items("projects")
      .readByQuery({ limit: -1, fields: "id, name, slug" });

    console.log("Writing data to file...");
    fs.writeFileSync(
      KPROVIDER_DATA_FILE,
      JSON.stringify({ skills: skillsData, projects: projectsData })
    );
    console.log("Data written to file");
  } catch (error) {
    console.error(error);
  }
};

generateKProviderData();
