/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Carousel } from 'react-bootstrap';

interface Women {
    name: string,
    quote: string,
    imgUrl: string
}

const women = [
    {
        id: 1, name: "Mai Azzmy", position: "Position",
        quote: "Talent wins games, but teamwork and intelligence win championships",
        imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/273011642_4257317757703185_4417370573970460543_n%20(1).png"
    },
    {
        id: 2, name: "Rana Nadim",
        position: "Position",
        quote: "Talent wins games, but teamwork and intelligence win championships",
        imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/294615177_5349846855076699_3525559458306997967_n.jpg"
    },
    {
        id: 3, name: "Habiba Diab", position: "Position",
        quote: "Talent wins games, but teamwork and intelligence win championships",
        imgUrl: "https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/289577060_5269104873150898_6445441731982278192_n.jpg"
    }
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
