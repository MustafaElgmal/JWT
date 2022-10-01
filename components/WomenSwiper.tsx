// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { women } from "../constants";
import { SocialIcon } from "react-social-icons";

const WomenSwiper = ({ slidesPerView }: { slidesPerView: number }) => {
    return (
        <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={40}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
        >
            {women.map((woman) => (
                <SwiperSlide key={woman.id}>
                    <div  className="relative overflow-hidden " style={{ background: `url(${woman.imgUrl})`, width: "400px", height: "400px", backgroundSize: "cover" }}>
                        <div className=" absolute bottom-0 text-start text-white px-3 bg-gray-900/[.5]">
                            <div className="font-bold mt-1">
                                {woman.name}
                            </div>
                            <p className=" text-sm">
                                {woman.position}
                            </p>
                            <p className="text-center text-base font-normal">
                                <q>{woman.quote}</q>
                            </p>
                            <div className=" flex justify-center gap-3 pb-3">
                                <SocialIcon
                                    style={{ height: 35, width: 35 }}
                                    url="https://twitter.com/JWTCairo"
                                    bgColor="white"
                                    target='_blanck'
                                />
                                <SocialIcon
                                    style={{ height: 35, width: 35 }}
                                    url="https://www.linkedin.com/company/wunderman-thompson-/"
                                    bgColor="white"
                                    target='_blanck'
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default WomenSwiper;
