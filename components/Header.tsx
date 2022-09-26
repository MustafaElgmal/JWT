/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { classNames } from "../constants";

const Header = () => {
  const [menu, setMenu] = useState([
    { name: "women", active: true },
    { name: "stories", active: false },
    { name: "interviews", active: false },
    { name: "internships", active: false },
    { name: "opertunities", active: false },
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
    <header>
      <Disclosure as="nav" className="bg-white shadow">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex w-full justify-between">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <img
                    className="block h-8 w-auto lg:hnameden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                    <h1>Logo</h1>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {menu.map((item) => (
                      <Link key={item.name} href="/">
                        <a
                          className={`${
                            !item.active
                              ? "item inline-flex items-center border-b-4 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                              : "item inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                          }`}
                          onClick={() => selectHandler(item.name)}
                        >
                          {item.name}
                        </a>
                      </Link>
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
                    href="/"
                    as="link"
                    className={`${
                      item.active
                        ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                        : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                    onClick={() => selectHandler(item.name)}
                  >
                    {item.name}
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
