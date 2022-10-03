/* eslint-disable @next/next/no-img-element */
import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AppProps } from "../types";
import { GetStaticProps } from "next";
import { getAllStories } from "../utils/apis";
import { createImageUrl } from "../utils/functions";
export default function StoryDetails({ story }: AppProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
          Our members stories
        </h1>
        <div>
          <div className="flex">
            <div className="mt-14 md:flex">
              <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                <img
                  src={createImageUrl(story?.image!)}
                  alt="image of profile"
                  className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                />
              </div>
              <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                <div>
                 
                  <p className=" lg:text-xl leading-6 mt-4 text-gray-700">
                    {story?.story}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stores = await getAllStories();

  return {
    props: { stores },
    revalidate: 172800,
  };
};
