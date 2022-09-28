import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";
const builder: any = imageUrlBuilder(sanityClient)

export const getNameFromPath = (path: string, setRouter: Function) => {
  const parts = path.split("/");
  const name = parts[parts.length - 1];
  console.log(name);
  return name;
};





export function createImageUrl(source: {

  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}) {
  return builder.image(source);
}




