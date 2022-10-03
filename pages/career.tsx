/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import Opportunities from "../components/Opportunities";
import { AppProps } from "../types";
import { getAllCareers } from "../utils/apis";
import { createImageUrl } from "../utils/functions";

const Career = ({ careers }: AppProps) => {
  return (
    <div className="career">
      <div className="text-white careerImage lg:h-screen xs:h-96">
        <div className="bg-gradient-to-r from-blue-900 xl:px-8  xl:py-32 lg:py-20 px-2 py-16 lg:h-screen xs:h-96">
          <div className=" max-w-xl flex items-end px-8 h-full">
            <h1 className="xl:text-6xl font-bold uppercase">careers</h1>
          </div>
        </div>
      </div>
      <div id="career" className="xs:pt-4 lg:pt-0'">
        {careers?.map((career, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <div className="pt-10 md:pt-0">
                <div className="container mx-auto">
                  <div className="flex flex-wrap items-center pb-12">
                    <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                      <h2 className=" lg:text-3xl ">{career.title}</h2>
                      <div className="py-2 text-color">
                        <p className="text-lg  py-4 md:py-8">
                          {career.description}
                        </p>
                        <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                          <Link href={`/#contact us`}>
                            <a className="text-xl lg:text-xl font-semibold text-cyan-600 hover:text-orange-600 text-decoration-none">
                              Come join us!
                            </a>
                          </Link>

                          <div className="pl-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                                fill="#D53F8C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                      <img
                        className="absolute w-full h-full inset-0  object-center"
                        src={createImageUrl(career.image)}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="pb-16">
                <div className="container mx-auto">
                  <div className="flex flex-wrap flex-row-reverse items-center">
                    <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                      <h2 className=" lg:text-3xl">{career.title}</h2>
                      <div className="py-2 text-color">
                        <p className="text-lg  py-4 md:py-8">
                          {career.description}
                        </p>
                        <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                          <Link href={`/#contact us`}>
                            <a className="text-xl lg:text-xl font-semibold text-cyan-600 hover:text-orange-600 text-decoration-none">
                              Come join us!
                            </a>
                          </Link>
                          <div className="pl-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                                fill="#D53F8C"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                      <img
                        className="absolute w-full h-full "
                        src={createImageUrl(career.image)}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
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
