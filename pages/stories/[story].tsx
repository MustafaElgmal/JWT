/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import StoryDetails from "../../components/storyDetails";
import { AppProps } from "../../types";
import { getAllStories } from "../../utils/apis";
import StoryCompo from "../../components/story";

const Story = ({ story, stories }: AppProps) => {
  return (
    <div>
      <div>
        <img
          src="https://review2020.s3.us-east-1.amazonaws.com/1664325461811sicpic2.jpg"
          alt="landimg"
          className="bg-cover bg-center w-full"
        />
      </div>
      <StoryDetails story={story} />
      <StoryCompo stories={stories} />
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
