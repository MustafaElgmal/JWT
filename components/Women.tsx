import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import WomenSwiper from "./WomenSwiper";

const Women = () => {

    return (
        <div id="women">
            <div className='bg-pink-200 w-full h-screen justify-center items-center xl:flex hidden'>
                <WomenSwiper slidesPerView={3} />
            </div >
            <div className='bg-pink-200 w-screen h-screen justify-center items-center xl:hidden lg:flex hidden'>
                <WomenSwiper slidesPerView={2} />
            </div >
            <div className='bg-pink-200 w-screen h-[550px] justify-center items-center xl:hidden lg:hidden flex '>
                <WomenSwiper slidesPerView={1} />
            </div >
        </div>
    )
}

export default Women
