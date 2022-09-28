/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AppProps, Internship } from "../types";
import { createImageUrl } from "../utils/functions";

export default function InternShip({ internship }: AppProps) {
  return (
    <div id="internships" className="bg-gray-50">
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>
      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
          INTERNSHIPS
        </h1>
        <div>
          <div className="flex">
            <div className="mt-14  md:flex">
              <div className="relative flex justify-center lg:w-1/2 sm:w-96 xl:h-96 h-80">
                <img
                  src={createImageUrl(internship?.image!)}
                  alt="image of profile"
                  className="h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                />
              </div>
              <div className="md:w-2/3 lg:w-2/3 xl:ml-10 md:ml-10 md:mt-0 mt-4 flex flex-col justify-between">
                <div>
                  <h1 className="text-6xl font-semibold xl:leading-loose text-gray-800">
                    {internship?.title}
                  </h1>
                  <p className="text-xl lg:text-3xl  py-4 md:py-4">
                    {internship?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold py-6 sm:w-4/6 w-5/6 mx-auto">
          <Link href="/internShips">
            <a className="lg:text-2xl text-sm text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto text-decoration-none">
              See All Our internship
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
