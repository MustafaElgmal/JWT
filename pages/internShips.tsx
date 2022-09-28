/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import { AppProps, Internship } from "../types";
import { getAllInternShip } from "../utils/apis";
import { createImageUrl } from "../utils/functions";

export default function InternShip({ internships }: AppProps) {
  return (
    <div className="bg-gray-50 min-h-screen grid lg:grid-cols-2 grid-cols-1">
      {internships?.map((internship) => (
        <div className="xl:px-20 px-8 py-6 2xl:mx-auto 2xl:container relative z-40 ">
          <div>
            <div>
              <div className="mt-14 md:flex">
                <div className=" lg:w-1/2 sm:w-96 xl:h-96 h-80">
                  <img
                    src={createImageUrl(internship?.image!)}
                    alt="image of profile"
                    className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                  />
                </div>
                <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                  <div>
                    <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">
                      {internship?.title}
                    </h1>
                    <p className="text-base font-medium leading-6 mt-4 text-gray-600">
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
