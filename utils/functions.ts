import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "../client";
export const getNameFromPath = (path: string, setRouter: Function) => {
  const parts = path.split("/");
  const name = parts[parts.length - 1];
  console.log(name);
  return name;
};

export function urlFor(source: {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}) {
  const builder: any = imageUrlBuilder(sanityClient)
  return builder.image(source);
}


export const getAllPodcasts = async () => {
  try {
    const allPodcasts = await sanityClient.fetch(`*[_type=="podcast"]`)
    return allPodcasts

  } catch (error) {
    console.log(error);

  }
}

export const getThreeRecFromPodcasts = async () => {
  try {
    const podcasts = await sanityClient.fetch(`*[_type=="podcast"][0...3]`)
    return podcasts

  } catch (error) {
    console.log(error);

  }

}