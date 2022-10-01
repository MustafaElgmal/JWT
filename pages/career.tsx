/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import React from "react";
import Opportunities from "../components/Opportunities";
import { AppProps } from "../types";
import { getAllCareers } from "../utils/apis";

const Career = ({ careers }: AppProps) => {
  return (
    <>
      <div className=" text-white careerImage h-screen">
        <div className="bg-gradient-to-r from-blue-900 xl:px-8  xl:py-32 lg:py-20 px-2 py-16 h-screen">
          <div className=" max-w-xl flex items-end px-8 h-full">
            <h1 className="xl:text-6xl font-bold uppercase">career</h1>
          </div>
        </div>
      </div>
      <Opportunities careers={careers} />
    </>
  );
};

export default Career;
export const getStaticProps: GetStaticProps = async () => {
  const careers = await getAllCareers();
  return {
    props: { careers: careers },
    redirect: 172800,
  };
};
