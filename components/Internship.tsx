/* eslint-disable @next/next/no-img-element */
import React from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { AppProps } from '../types';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { createImageUrl } from '../utils/functions';
export default function Internship({ internships }: AppProps) {
  return (
    <div id="internship" className='xs:pt-5 lg:min-h-screen'>
      <div className=" relative z-40">
        <h1 className="uppercase font-semibold"
          style={{ color: '#AF3B6E' }}>
          Internships
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {internships?.map((internship) => (
            <SwiperSlide key={internship._id}>
              <div className="flex">
                <div className="mt-14 md:flex">
                  <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                    <img
                      src={createImageUrl(internship.image)}
                      alt="image of profile"
                      className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded"
                    />
                    <div className=" md:flex  items-center justify-center absolute top-0 -mr-16 -mt-14 right-0">
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
      </div>
    </div>
  );
}
