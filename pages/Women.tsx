/* eslint-disable @next/next/no-img-element */
import React from "react";
import WomenQuotes from "../components/WomenQuotes";
const women = [
  {
    id: 1,
    name: "Mai Azzmy",
    position: "Position",
    quote: "Talent wins games, but teamwork and intelligence win championships",
    imgUrl: "https://i.ibb.co/kBgtHK6/Rectangle-5.png",
  },
  {
    id: 2,
    name: "Rana Nadim",
    position: "Position",
    quote: "Talent wins games, but teamwork and intelligence win championships",
    imgUrl: "https://i.ibb.co/6PR2Y74/Rectangle-15.png",
  },
  {
    id: 3,
    name: "Habiba Diab",
    position: "Position",
    quote: "Talent wins games, but teamwork and intelligence win championships",
    imgUrl: "https://i.ibb.co/X8PKD3q/Rectangle-8.png",
  },
];

function Women() {
  return (
    <div className="flex flex-col items-center justify-center mt-3 ">
      <div className="lg:px-16 lg:flex-wrap flex-nowrap  items-start none lg:flex">
        <div className="mt-24 hidden xl:block">
          <div className="hidden items-end  xl:flex">
            <img
              tabIndex={0}
              src="https://i.ibb.co/kBgtHK6/Rectangle-5.png"
              alt="girl with blue background"
              className="w-20 h-20 rounded-lg mr-6"
            />
            <img
              tabIndex={0}
              src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/devn-53ouhY5koKY-unsplash.jpg"
              alt="woman"
              className="w-48 h-36 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-end my-6">
            <img
              className="w-48 h-48"
              src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/seth-doyle-B3VWevRn1oU-unsplash.jpg"
              alt="Women"
            />
          </div>
          <div className="flex items-start">
            <img
              tabIndex={0}
              src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/bruce-mars-dNNfMegXUi4-unsplash.jpg"
              alt="girl with blue background"
              className="w-48 h-48 rounded-lg"
            />
          </div>
        </div>
        <div className="ml-6 mt-32 hidden xl:block">
          <img
            tabIndex={0}
            src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/joanna-nix-walkup-h2pnXHMz8YM-unsplash.jpg"
            className="w-72 h-80 rounded-lg"
            alt="woman"
          />
          <div className="flex items-start mt-6">
            <img
              tabIndex={0}
              src="https://i.ibb.co/X8PKD3q/Rectangle-8.png"
              alt="girl  laughing"
              className="w-48 h-48 rounded-lg"
            />
            <img
              tabIndex={0}
              src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
            />
          </div>
        </div>
        <div className="lg:mt-14 lg:ml-6">
          <div className="lg:flex ">
            <div>
              <img
                tabIndex={0}
                src="https://i.ibb.co/bWGVSkP/Rectangle-10.png"
                alt="group of friends"
                className="lg:w-96 w-screen lg:h-72  lg:rounded-lg lg:object-center lg:object-fit"
              />
            </div>
            <div className="hidden lg:block">
              <div className="flex ml-6">
                <img
                  tabIndex={0}
                  src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/noah-buscher-vsBkQ0Lc3zs-unsplash.jpg"
                  className="w-20 h-20 rounded-lg mt-14"
                  alt="woman"
                />
                <img
                  tabIndex={0}
                  src="https://i.ibb.co/6PR2Y74/Rectangle-15.png"
                  className="w-20 h-24 rounded-lg ml-6"
                  alt="woman"
                />
              </div>
              <div>
                <img
                  tabIndex={0}
                  src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/jonathan-cosens-photography-v-YiCIbDjOQ-unsplash.jpg"
                  alt="Woman"
                  className="ml-6 mt-6 w-48 h-32 rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className=" mt-6 hidden xl:flex">
            <div>
              <img
                tabIndex={0}
                className="w-48 h-48 rounded-lg"
                src="https://i.ibb.co/GPpMsbr/Rectangle-12.png"
                alt="young girl with red hair"
              />
            </div>
            <div>
              <img
                tabIndex={0}
                className="w-72 h-56 rounded-lg ml-6"
                src="https://i.ibb.co/VBcgkVL/Rectangle-11.png"
                alt="young girl with red hair"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 w-11/12 lg:my-5 my-2">
        <h1
          role="heading"
          tabIndex={0}
          className="xl:text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
        >
          IN Touching With Our Wounder Woman
        </h1>
      </div>
      <div className="container mx-auto mt-5">
        <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
          {women.map((woman) => (
            <div
              key={woman.id}
              className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 lg:mb-2  mb-32  sm:mb-24 xl:max-w-sm lg:w-2/5"
            >
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-24 w-full flex justify-center">
                  <div className="h-56 w-56">
                    <img
                      src={woman.imgUrl}
                      alt="img"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />
                  </div>
                </div>
                <div className="px-6 pt-16 mt-16 ">
                  <div className="font-bold text-center pt-1 pb-1">
                    {woman.name}
                  </div>
                  <p className="text-gray-500 text-sm text-center">
                    {woman.position}
                  </p>
                  <p className="text-center text-gray-600 text-base font-normal">
                    <q>{woman.quote}</q>
                  </p>
                  <div className=" flex justify-center pt-1 pb-3">
                    <a href="javascript:void(0)" className="mx-1">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-twitter"
                        >
                          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                        </svg>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="mx-1">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#718096"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-instagram"
                        >
                          <rect
                            x={2}
                            y={2}
                            width={20}
                            height={20}
                            rx={5}
                            ry={5}
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Women;

