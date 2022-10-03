import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-gradient-to-b from-blue-700 to-blue-600"
      aria-labelledby="footer-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 sm:hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          width={343}
          height={388}
          viewBox="0 0 343 388"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
            fill="url(#linear1)"
            fillOpacity=".1"
          />
          <defs>
            <linearGradient
              id="linear1"
              x1="254.553"
              y1="107.554"
              x2="961.66"
              y2="814.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          width={359}
          height={339}
          viewBox="0 0 359 339"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
            fill="url(#linear2)"
            fillOpacity=".1"
          />
          <defs>
            <linearGradient
              id="linear2"
              x1="192.553"
              y1="28.553"
              x2="899.66"
              y2="735.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
        aria-hidden="true"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          width={160}
          height={678}
          viewBox=""
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
            fill="url(#linear3)"
            fillOpacity=".1"
          />
          <defs>
            <linearGradient
              id="linear3"
              x1="192.553"
              y1="325.553"
              x2="899.66"
              y2="1032.66"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff" />
              <stop offset={1} stopColor="#fff" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto min-w-5x2 mt-5">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className=" w-full mt-12 grid grid-cols-2 gap-20 xl:col-span-2 xl:mt-0">
            <div className="w-full md:grid md:grid-cols-2 md:gap-8">
              <div>
                <ul
                  role="list"
                  className="mt-4 space-y-10  "
                  style={{ width: "256px" }}
                >
                  <li>
                    <a className="footerlink inline-flex items-center text-lg font-extrabold text-white">
                      CONTACT US
                    </a>
                  </li>
                  <li>
                    <a className="footerlink inline-flex items-center text-lg font-extrabold text-white">
                      NEWSLETTER
                    </a>
                  </li>
                  <li>
                    <a className="footerlink inline-flex items-center text-lg font-extrabold text-white">
                      PRESS CENTRE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 ml-0 md:mt-0 ">
                <ul
                  role="list"
                  className="mt-4 space-y-4 "
                  style={{ width: "256px" }}
                >
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      className=" inline-flex items-center font-medium text-white"
                    >
                      Cookie Settings
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      className=" inline-flex items-center font-medium text-white"
                    >
                      Cookie Policy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      className=" inline-flex items-center font-medium text-white"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      className=" inline-flex items-center font-medium text-white"
                    >
                      Modern Slavery Act Statement
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ textDecoration: "none" }}
                      className=" inline-flex items-center  font-medium text-white"
                    >
                      CCPA Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-8 xl:col-span-1 pl-7">
            <p className="text-xl font-bold text-white uppercase ">
              connect with us
            </p>
            <div className="flex space-x-6">
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.facebook.com/WundermanThompson/"
                bgColor="white"
                target="_blanck"
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://twitter.com/JWTCairo"
                bgColor="white"
                target="_blanck"
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.instagram.com/wunthompson/"
                bgColor="white"
                target="_blanck"
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.linkedin.com/company/wunderman-thompson-/"
                bgColor="white"
                target="_blanck"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8">
          <p className="text-base text-white text-center">
            &copy; 2022 Wunderman Thompson.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
