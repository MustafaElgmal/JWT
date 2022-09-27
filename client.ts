import client from "@sanity/client";

export const sanityClient = client({
  dataset: "production",
  projectId: "3jgfjpmr",
  useCdn: false,
});
