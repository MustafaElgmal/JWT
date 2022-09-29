/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import * as Scroll from "react-scroll";

const Header = () => {
  const [menu, setMenu] = useState([
    { name: "women", active:false},
    { name: "stories", active: false },
    { name: "internships", active: false },
    { name: "interviews", active: false },
    { name: "opportunities", active: false },
    { name: "contact us", active: false },
  ]);

  const selectHandler = (name: string) => {
    const filterdMenu = menu.map((item) =>
      item.name === name
        ? { ...item, active: true }
        : { ...item, active: false }
    );

    setMenu(filterdMenu);
  };


  return (
    <header className="fixed-top">
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex w-full justify-between">
                  <div
                    className="flex flex-shrink-0 items-center "
                    style={{ cursor: "pointer" }}
                  >
                    <Link href="/">
                      <img
                        className="block h-8 w-auto lg:hnameden"
                        src="https://review2020.s3.us-east-1.amazonaws.com/1664216788841Wunderman_Thompson_2018.png"
                        alt="Your Company"
                      />
                    </Link>
                  </div>

                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {menu.map((item) => (
                      <Scroll.Link
                        activeClass="active"
                        href="/"
                        to={item.name}
                        spy={true}
                        offset={-60}
                        duration={500}
                        key={item.name}
                        className={`${
                          !item.active
                            ? "item inline-flex items-center border-b-4 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                            : "item inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        }`}
                        onClick={() => selectHandler(item.name)}
                      >
                        {item.name}
                      </Scroll.Link>
                    ))}
                  </div>
                </div>

                <div className="-mr-2 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 pt-2 pb-3">
                {menu.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className={"item block py-2 pl-3 pr-4 "}
                    
                  >
                    <Scroll.Link
                      activeClass="active"
                      to={item.name}
                      spy={true}
                      offset={-70}
                      duration={500}
                      href='/'
                      className={`${
                        item.active
                          ? "item border-l-4 border-indigo-500 bg-indigo-50  text-base font-medium text-indigo-700"
                          : "item border-l-4 border-transparent  text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                      }`}
                      onClick={() => selectHandler(item.name)}
                    >
                      {item.name}
                    </Scroll.Link>
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
