import got from "got";
import datocmsConfig from "@config/datocms";
export async function request({
  query,
  variables,
  preview,
  includeDrafts,
  excludeInvalid,
}) {
  const headers = {
    authorization: `Bearer ${datocmsConfig.token}`,
  };

  const body = await got
    .post(`https://graphql.datocms.com${preview ? "/preview" : "/"}`, {
      json: {
        query,
        variables,
      },
      headers: {
        authorization: `Bearer ${datocmsConfig.token}`,
      },
    })
    .json();

  if (body.errors) {
    throw new Error(
      `Invalid GraphQL response! Query: ${JSON.stringify(
        query
      )}, Variables: ${JSON.stringify(
        variables
      )}, Preview: ${preview}, Response: ${JSON.stringify(body)}`
    );
  }

  if (includeDrafts) {
    headers["X-Include-Drafts"] = "true";
  }
  if (excludeInvalid) {
    headers["X-Exclude-Invalid"] = "true";
  }
  return body?.data;
}

// DATO REQUEST TEMPLATE
// import { GraphQLClient } from "graphql-request";
// export function request({ query, variables, includeDrafts, excludeInvalid }) {
//   const headers = {
//     authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
//   };
//   if (includeDrafts) {
//     headers['X-Include-Drafts'] = 'true';
//   }
//   if (excludeInvalid) {
//     headers['X-Exclude-Invalid'] = 'true';
//   }
//   const client = new GraphQLClient('https://graphql.datocms.com', { headers });
//   return client.request(query, variables);
// }
