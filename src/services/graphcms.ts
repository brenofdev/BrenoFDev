import { GraphQLClient } from "graphql-request";

export function getGraphCMS() {
  const graphcms = new GraphQLClient(
    process.env.GRAPHCMS_CONTENT_API
  );

  return graphcms
}