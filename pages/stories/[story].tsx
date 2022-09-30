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
      <div className="max-h-screen">
        <img
          className="bg-cover bg-center w-full max-h-screen"
          src="https://cdn.sanity.io/images/3jgfjpmr/production/1b84827d76862e6be51fe844d49e58fc62560783-1200x627.png?w=2000&fit=max&auto=format"
          alt="landing"
        />
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
