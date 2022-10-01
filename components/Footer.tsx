import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="div2 text-white" aria-labelledby="footer-heading">
      <div className="mx-auto min-w-5x2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
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
          <div className="space-y-8 xl:col-span-1">
            <p className="text-2xl font-bold text-white ">CONTACT WITH US</p>
            <div className="flex space-x-6">
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.facebook.com/WundermanThompson/"
                bgColor="white"
                target='_blanck'
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://twitter.com/JWTCairo"
                bgColor="white"
                target='_blanck'
              />
              <SocialIcon
                style={{ height: 35, width: 35 }}
                url="https://www.instagram.com/wunthompson/"
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
        <div className="mt-12 pt-8">
          <p className="text-base text-white xl:text-center">
            &copy; 2022 Wunderman Thompson.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
