/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import StoryDetails from "../../components/storyDetails";
import { AppProps } from "../../types";
import { getAllStories } from "../../utils/apis";
import StoryCard from "../../components/story";

const Story = ({ story, stories }: AppProps) => {
  return (
    <div>
      <div className=" text-white storyImage h-screen">
        <div className="bg-gradient-to-r from-blue-900 xl:px-8  xl:py-32 lg:py-20 px-2 py-16 h-screen">
          <div className=" max-w-xl flex items-end px-8 h-full">
            <h1 className="xl:text-6xl font-bold uppercase">story</h1>
          </div>
        </div>
      </div>
      <StoryDetails story={story} />
      <StoryCard stories={stories} />
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
