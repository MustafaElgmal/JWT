/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";
import StoryDetails from "../../components/storyDetails";
import { AppProps } from "../../types";
import { getAllStories } from "../../utils/apis";
import StoryCard from "../../components/story";
import { createImageUrl } from "../../utils/functions";
import Link from "next/link";

const Story = ({ story, stories }: AppProps) => {
  const [name,setName]=useState(story?.owner)
  useEffect(()=>{
    setName(story?.owner)
  },[story])
  return (
    <div className="mb-5">
      <div className=" text-white storyImage h-screen">
        <div className="bg-gradient-to-r from-blue-900 xl:px-8  xl:py-32 lg:py-20 px-2 py-16 h-screen">
          <div className=" min-w-xl flex items-end px-8 h-full">
            <h1 className="xl:text-6xl font-bold uppercase">{name}</h1>
          </div>
        </div>
      </div>
      <StoryDetails story={story} />
      <div id="story" className="2xl:container 2xl:mx-auto lg:py-0 lg:px-20 md:py-10 md:px-6 py-9 px-4">
      <div className="flex lg:flex-row flex-col justify-between gap-8">
        <div className="w-fulllg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            {stories?.map((story) => (
              <div
                key={story._id}
                className="p-2 pb-6 flex justify-center flex-col items-center"
              >
                <img
                  className="md:block hidden"
                  src={createImageUrl(story?.image!)}
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src={createImageUrl(story?.image!)}
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  {story.owner}
                </p>
                <Link href={`/stories/${story._id}`}>
                  <a className="font-medium text-cyan-600 hover:text-orange-600 text-decoration-none">
                    Read my story
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stories = await getAllStories();
  const paths = stories.map((story) => ({
    params: { story: story._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stories = await getAllStories();
  const story = stories.find((story) => story._id === params!.story);
  return {
    props: { story: story, stories: stories },
  };
};

export default Story;
