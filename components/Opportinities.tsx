import React from "react";
import { AppProps } from "../types";
import { createImageURL } from "../utils/functions";

function Opportunities({ careers }: AppProps) {
    return (
        <div id="opportunities" className="md:mx-auto md:container pt-4">
            <h1 className="text-2xl lg:text-6xl font-black">Careers</h1>
            {careers?.map((career, index) => (
                <div key={index}>
                    {index % 2 === 0 ?
                        <div className="pt-10 md:pt-10">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap items-center pb-12">
                                    <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                    <h1 className="text-xl lg:text-4xl  font-black">{career.title}</h1>
                                        <div className="py-2 text-color">
                                            <h2 className="text-lg lg:text-3xl  py-4 md:py-8">
                                                {career.description}
                                            </h2>
                                            <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                                <h3 className=" text-lg lg:text-2xl font-semibold underline text-indigo-700">Come join us!</h3>
                                                <div className="pl-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                        <img className="absolute w-full h-full inset-0  object-center" src={createImageURL(career.image)} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <div className = "pb-16">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap flex-row-reverse items-center">
                                    <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                    <h1 className="text-2xl lg:text-4xl  font-black">{career.title}</h1>
                                        <div className="py-2 text-color">
                                            <h2 className="text-lg lg:text-3xl  py-4 md:py-8">
                                                {career.description}
                                            </h2>
                                            <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                                <h3 className=" text-lg lg:text-2xl font-semibold underline text-indigo-700">Come join us!</h3>
                                                <div className="pl-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                                        <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                        <img className="absolute w-full h-full " src={createImageURL(career.image)} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}
export default Opportunities;

{/* <div className="pb-16">
    <div className="container mx-auto">
        <div className="flex flex-wrap items-center pb-12">
            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <h1 className="text-xl lg:text-4xl  font-black">Animator</h1>
                <div className="py-2 text-color">
                    <h2 className="text-lg lg:text-3xl  py-4 md:py-8">
                        We are looking for an Animator  with 3+ years of experience.
                        If you got the moves, show us!
                    </h2>
                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                        <h3 className=" text-lg lg:text-2xl font-semibold underline text-indigo-700">Come join us!</h3>
                        <div className="pl-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                                <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img className="absolute w-full h-full inset-0  object-center" src="https://lxwnzovjjfyhbnrqtzqh.supabase.co/storage/v1/object/public/jwt/hiring/309196379_409566584660863_3029818054303487200_n.jpg" alt="" />
            </div>
        </div>
    </div>
</div> */}