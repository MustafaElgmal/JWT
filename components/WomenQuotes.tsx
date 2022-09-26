import Link from 'next/link';
interface Women {
    name: string,
    quote: string,
    imgUrl: string,
    position: string,
}

const women = [
    {
        id: 1, name: "Mai Azzmy", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships",
        imgUrl: "https://i.ibb.co/kBgtHK6/Rectangle-5.png"
    },
    {
        id: 2, name: "Rana Nadim", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships",
        imgUrl: "https://i.ibb.co/6PR2Y74/Rectangle-15.png"
    },
    {
        id: 3, name: "Habiba Diab", position: "Position", quote: "Talent wins games, but teamwork and intelligence win championships",
        imgUrl: "https://i.ibb.co/X8PKD3q/Rectangle-8.png"
    }
]
function WomenQuotes() {
    return (
        <div>
            <div className="container flex justify-center mx-auto pt-12">
                <div>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented Wounder Women Behind the Scenes of the Organization</h1>
                </div>
            </div>
            <div className="w-full bg-pink-200 px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        {women.map((woman: Women) => (
                            <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 lg:mb-2  mb-32  sm:mb-24 xl:max-w-sm lg:w-2/5">
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                    <div className="absolute -mt-24 w-full flex justify-center">
                                        <div className="h-56 w-56">
                                            <img src={woman.imgUrl} alt="img" className="rounded-full object-cover h-full w-full shadow-md" />
                                        </div>
                                    </div>
                                    <div className="px-6 pt-16 mt-16 ">
                                        <div className="font-bold text-center pt-1 pb-1">{woman.name}</div>
                                        <p className="text-gray-500 text-sm text-center">{woman.position }</p>
                                        <p className="text-center text-gray-600 text-base font-normal"><q>{woman.quote}</q></p>
                                        <div className=" flex justify-center pt-1 pb-3">
                                            <a href="javascript:void(0)" className="mx-1">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                                    </svg>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0)" className="mx-1">
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                                        <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
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
                    <div className='xl:text-4xl text-3xl text-center text-gray-800 font-extrabold py-6 sm:w-4/6 w-5/6 mx-auto'>
                    <Link href="/Women">
                            <a className='lg:text-2xl text-sm text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto text-decoration-none'>See All Our Wounder Woman</a>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WomenQuotes;
