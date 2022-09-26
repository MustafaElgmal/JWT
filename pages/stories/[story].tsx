import React from "react";
import StoryDetails from "../../components/storyDetails";
import { AppProps } from "../../types";

const Story = ({ story }: AppProps) => {
  return <StoryDetails story={story} />;
};

export default Story;
