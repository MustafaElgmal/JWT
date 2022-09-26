import React from "react";

import { SocialIcon } from "react-social-icons";



const Footer = () => {
  return (
    <>
      <div className="div2 text-white w-full grid grid-cols-2 justify-around items-start pt-7 px-20  bottom-0 ">
        <div className="p-5">
          <ul>
            {/* <p className="text-white-800 font-bold text-2xl pb-4">Support</p> */}

            <li className="text-white-500 text-2xl pb-2 font-semibold">
              <span className=" hover:text-blue-600 cursor-pointer">
                CONTACT US
              </span>
            </li>
            <li className="text-white-500 text-2xl pb-2 font-semibold">
              <span className=" hover:text-blue-600 cursor-pointer">
                NEWSLETTER
              </span>
            </li>
            <li className="text-white-500 text-2xl pb-2 font-semibold">
              <span className=" hover:text-blue-600 cursor-pointer ">
                PRESS CENTRE
              </span>
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul className="">
            {/* <p className="text-white-800 font-bold text-2xl pb-4">Product</p> */}
            <li className="text-white-500 text-md pb-2 font-semibold ">
              <span className="hover:text-blue-600 cursor-pointer">
                Cookie Settings
              </span>
            </li>
            <li className="text-white-500 text-md pb-2 font-semibold  ">
              <span className="hover:text-blue-600 cursor-pointer">
                Cookie Policy
              </span>
            </li>
            <li className="text-white-500 text-md pb-2 font-semibold ">
              <span className="hover:text-blue-600 cursor-pointer">
                Privacy
              </span>
            </li>
            <li className="text-white-500 text-md pb-2 font-semibold ">
              <span className="hover:text-blue-600 cursor-pointer">Terms</span>
            </li>
            <li className="text-white-500 text-md pb-2 font-semibold ">
              <span className="hover:text-blue-600 cursor-pointer">
                Modern Slavery Act Statement
              </span>
            </li>
            <li className="text-white-500 text-md pb-2 font-semibold ">
              <span className="hover:text-blue-600 cursor-pointer">
                CCPA Policy
              </span>
            </li>
          </ul>
        </div>

        <div className="p-5 ">
          <ul>
            <p className="text-white-500 font-bold text-3xl pb-6">
              <span className="text-white-400">CONNECT WITH US</span>
            </p>
            <div className="flex gap-6 pb-5">
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.facebook.com/WundermanThompson/"
                fgColor="white"
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://twitter.com/Fahad_Alshemali"
                fgColor="white"
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.instagram.com/wunthompson/"
                fgColor="white"
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.linkedin.com/company/wunderman-thompson-/"
                fgColor="white"
              />
            </div>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start text-start p-5 col-end-4 ">
          <h1 className=" text-white-800 text-2xl	font-extrabold">
            © 2022 Wunderman Thompson
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
