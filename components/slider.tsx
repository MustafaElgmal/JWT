import React from 'react'
import { Carousel } from 'react-bootstrap';

interface Women {
    name: string,
    quote: string,
    imgUrl: string
}

const women = [
    { name: "Mai Azzmy", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships", imgUrl: "https://rirpgoswmpvwobxaqbtk.supabase.co/storage/v1/object/public/workout/kneeHighJumb.jpg" },
    { name: "Rana Nadim", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships", imgUrl: "https://rirpgoswmpvwobxaqbtk.supabase.co/storage/v1/object/public/workout/kneeHighJumb.jpg" },
    { name: "Habiba Diab", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships", imgUrl: "https://rirpgoswmpvwobxaqbtk.supabase.co/storage/v1/object/public/workout/kneeHighJumb.jpg" }
]

const Slider = () => {
    return (
        <Carousel>
            {women.map((woman) => (
                <Carousel.Item className="w-full relative h-500 h-full flex justify-center items-center">
                    <div className="w-full relative slider-height flex justify-center items-center">
                        <img className="transform hover:scale-105 transition ease-in-out duration-1000" src="https://static.shuffle.dev/components/preview/2c34f9b9-2c85-41cf-bacb-c88439ad8ae8/testimonials/03_d913a33f84.png" alt="" data-config-id="auto-img-1-3" data-path="0.0.0.0.0" />
                        <div className="  md:absolute left-0 top-0 px-14 py-11 w-3/4 md:w-1/2  overflow-y-auto h-full bg-fs " >
                            <div className="w-full max-w-sm mx-auto p-8  rounded text-center">
                                <svg className="mb-20" width="47" height="36" viewBox="0 0 47 36" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-3" data-path="0.0.0.0.1.0">
                                    <path d="M0 36V25.6999C0 22.7377 0.554721 19.6578 1.66416 16.46C2.80722 13.2286 4.35372 10.1823 6.30365 7.32118C8.2872 4.42637 10.5061 1.98598 12.9603 0L21.4324 5.5035C19.4489 8.4993 17.7847 11.6297 16.4399 14.8948C15.1288 18.1262 14.49 21.6943 14.5236 25.5989V36H0ZM25.5676 36V25.6999C25.5676 22.7377 26.1223 19.6578 27.2318 16.46C28.3748 13.2286 29.9213 10.1823 31.8712 7.32118C33.8548 4.42637 36.0737 1.98598 38.5279 0L47 5.5035C45.0165 8.4993 43.3523 11.6297 42.0075 14.8948C40.6964 18.1262 40.0576 21.6943 40.0912 25.5989V36H25.5676Z" fill="#4F46E5" data-path="0.0.0.0.1.0.0"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider;
