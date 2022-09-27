import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";
export const getNameFromPath = (path: string, setRouter: Function) => {
  const parts = path.split("/");
  const name = parts[parts.length - 1];
  console.log(name);
  return name;
};

export function urlFor(source: string) {
  const builder = imageUrlBuilder(sanityClient);
  return builder.image(source);
}
