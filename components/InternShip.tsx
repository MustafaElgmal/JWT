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
                  <h1 className=" text-4xl lg:text-6xl md:text-5xl font-semibold xl:leading-loose text-gray-800">
                    {internship?.title}
                  </h1>
                  <p className="font-bold text-2xl leading-8 text-gray-600">
                    {internship?.description}
                  </p>
                </div>
              </div>
            </div> 
          </div>
        </div>
        <div className="text-center bg-gray-500  py-2 lg:w-64 w-48 mx-auto  mt-10">
        <Link href="/internShips">
          <a className="lg:text-xl p-2 text-sm text-center text-gray-100 font-bold text-decoration-none hover:text-white">
            See Our Internships
          </a>
        </Link>
      </div>
      </div>
    </div>
  );
}
