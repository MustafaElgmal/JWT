import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Header = () => {
  const [menu, setMenu] = useState([
    { id: 'dashboard', name: 'dashboard', active: false },
    { id: 'team', name: 'team', active: false },
    { id: 'project', name: 'project', active: false },
    { id: 'calender', name: 'calender', active: false },
  ]);

  const selectHandler = (id: string) => {
    console.log(id);

    const filterdMenu = menu.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false },
    );
    console.log(filterdMenu);
    setMenu(filterdMenu);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  {/* <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                  /> */}
                  <h1 className="text-black">Logo</h1>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {menu.map((item) => (
                    <Link key={item.id} href={''}>
                      <a
                        onClick={() => selectHandler(item.id)}
                        className={`${
                          item.active
                            ? 'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium border-[#0a47ed] text-[#0a47ed]'
                            : '"inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-black hover:border-[#0a47ed] hover:text-[#0a47ed]'
                        }`}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0a47ed]">
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
                <>
                  <Link href={item.id}>
                    <Disclosure.Button
                      onClick={() => selectHandler(item.id)}
                      className={
                        item.active
                          ? 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium border-[#0a47ed] bg-gray-50 text-[#0a47ed]'
                          : 'block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-black hover:border-[#0a47ed] hover:bg-gray-50 hover:text-[#0a47ed]'
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
