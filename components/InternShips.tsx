/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { AppProps } from "../types";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
export default function Internships({ internships }: AppProps) {
// const ayhaga = internships[0].description.split()
  return (
    <div id="internships">
      <div className="flex items-center justify-between h-full w-full absolute z-0">
        <div className="w-1/3 bg-white h-full" />
        <div className="w-4/6 ml-16 bg-gray-100 h-full" />
      </div>

      <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
        <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
          Internships
        </h1>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {internships?.map((internship) => (
            <SwiperSlide>
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
                      <h1 className="text-2xl font-bold text-start xl:leading-loose text-gray-800">
                        {internship?.title}
                      </h1>
                      <p className=" leading-6 pb-6 text-start text-gray-600">
                          {internship?.description}
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="text-center bg-gray-500  py-2 lg:w-64 w-48 mx-auto  mt-10">
          <Link href="/internShips">
            <a className="lg:text-xl p-2 text-sm text-center text-gray-100 font-bold text-decoration-none hover:text-white">
              See Our Internships
            </a>
          </Link>
        </div> */}
      </div>
    </div>
  );
}
