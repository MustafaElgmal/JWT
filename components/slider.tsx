/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Carousel } from 'react-bootstrap';

interface Women {
    name: string,
    quote: string,
    imgUrl: string
}

const women = [
    { id: 1, name: "Mai Azzmy", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships", imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/omar-lopez-T6zu4jFhVwg-unsplash.jpg" },
    { id: 2, name: "Rana Nadim", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships", imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/linkedin-sales-solutions-IjkIOe-2fF4-unsplash.jpg" },
    { id: 3, name: "Habiba Diab", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships", imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/antonino-visalli-RNiBLy7aHck-unsplash.jpg" }
]

const Slider = () => {
    return (
        <Carousel>
            {women.map((woman) => (
                <Carousel.Item key={woman.id} className="w-screen h-screen  flex justify-center ">
                    <div className="w-screen h-screen flex justify-center ">
                        <img className="w-screen h-screen  transform hover:scale-105 transition ease-in-out duration-1000" src={woman.imgUrl} alt="" />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider;
