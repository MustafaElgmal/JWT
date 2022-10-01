/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { AppProps, Internship } from "../types";
import { getAllInternShip } from "../utils/apis";
import { createImageUrl } from "../utils/functions";

export default function InternShip({ internships }: AppProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className=" text-white internShipImage h-screen">
      <div className="bg-gradient-to-r from-blue-900 xl:px-8  xl:py-32 lg:py-20 px-2 py-16 h-screen">
          <div className=" max-w-xl flex items-end px-8 h-full">
            <h1 className="xl:text-6xl font-bold uppercase">internship</h1>
          </div>
        </div>
      </div>
      {internships?.map((internship) => (
        <div key={internship._id}>
          <div className="flex items-center justify-between h-full w-full absolute z-0">
            <div className="w-1/3 h-full bg-white" />
            <div className="w-4/6 ml-16 h-full bg-gray-100" />
          </div>
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative">
            <div className="flex">
              <div className="mt-14 md:flex">
                <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <img
                    src="https://i.ibb.co/4g1D9cv/imgslider1.png"
                    alt="image of profile"
                    className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                  />
                  <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-indigo-100 rounded-full">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg"
                      alt="commas"
                    />
                  </div>
                </div>
                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl font-extrabold  xl:leading-loose text-gray-800">
                      {internship?.title}
                    </h1>
                    <p className="text-2xl font-semibold leading-6 mt-4 text-gray-600">
                      {internship?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const internships = await getAllInternShip();
  return {
    props: { internships },
  };
};
