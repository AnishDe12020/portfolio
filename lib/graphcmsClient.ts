import { ApolloClient, InMemoryCache } from "@apollo/client";

if (!process.env.GRAPHCMS_ENDPOINT) {
  throw new Error("GRAPHCMS_ENDPOINT is not set");
}

const graphcmsClient = new ApolloClient({
  uri: process.env.GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
    },
  },
});

export default graphcmsClient;
