import { GraphQLClient, gql } from "graphql-request";
import { config } from "dotenv";
import fs from "fs";

config();

const KPROVIDER_DATA_FILE = "./data/kprovider.json";

const generateKProviderData = async () => {
  const graphCMSClient = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT);

  const query = gql`
    query PageHome {
      pages {
        id
        slug
        name
      }
    }
  `;

  const data = await graphCMSClient.request(query);

  fs.writeFileSync(KPROVIDER_DATA_FILE, JSON.stringify(data));
};

generateKProviderData();
