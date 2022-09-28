

import { Career } from "../types"

import { sanityClient } from "../client";
import { storyType } from "../types";

export async function getFourStories() {
  let stories: storyType[] = [];
  try {
    stories = await sanityClient.fetch(`*[_type == 'successStory'] | order(_createdAt desc) [0...4]`);
  } catch (e) {
    console.log(e);
  }
  return stories;
}
export async function getAllStories() {
  let stories: storyType[] = [];
  try {
    stories = await sanityClient.fetch(`*[_type == 'successStory'] | order(_createdAt desc)`);
  } catch (e) {
    console.log(e);
  }
  return stories;
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


export const getCareerUsingPagination = async () => {
    try {
        return await sanityClient.fetch(`*[_type=="career"] | order(_createdAt desc) [0...3]`)
    } catch (error) {
        console.log(error)
    }
}

export const getAllCareers = async (): Promise<Career[] | undefined> => {
    try {
        return await sanityClient.fetch(`*[_type=="career"]`)!
    } catch (error) {
        console.log(error)
    }
}

