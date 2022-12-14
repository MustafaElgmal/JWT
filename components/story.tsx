/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { AppProps } from '../types';
import { createImageUrl } from '../utils/functions';

const Story = ({ stories }: AppProps) => {
  return (
    <div id={'story'} className="xs:pt-5">
      <div className="flex lg:flex-row flex-col justify-between gap-5">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="uppercase font-semibold " style={{ color: '#AF3B6E' }}>OUR STORY</h1>
          <p className="leading-9 text-gray-600 ">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:h-full">
          <div className="grid sm:grid-cols-2 grid-cols-1 shadow-lg rounded-md ">
            {stories?.map((story) => (
              <div
                key={story._id}
                className="p-4 pb-6 flex justify-center flex-col items-center"
              >
                <img
                  className="md:block hidden"
                  src={createImageUrl(story?.image!)}
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src={createImageUrl(story?.image!)}
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  {story.owner}
                </p>
                <Link href={`/story/${story._id}`}>
                  <a className="font-medium text-cyan-600 hover:text-orange-600 text-decoration-none">
                    Read my story
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
