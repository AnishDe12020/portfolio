import { GraphQLClient, gql } from "graphql-request";
import { config } from "dotenv";
import fs from "fs";

config();

const KPROVIDER_DATA_FILE = "./data/kprovider.json";

const generateKProviderData = async () => {
  try {
    const graphCMSClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

    const query = gql`
      query KProviderData {
        skills {
          id
          slug
          name
          iconName
        }
      }
    `;

    console.log("Querying data...");
    const data = await graphCMSClient.request(query);
    console.log("Data received");

    console.log("Writing data to file...");
    fs.writeFileSync(KPROVIDER_DATA_FILE, JSON.stringify(data));
    console.log("Data written to file");
  } catch (error) {
    console.error(error);
  }
};

generateKProviderData();
