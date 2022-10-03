/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { AppProps } from '../types';
import { createImageUrl } from '../utils/functions';

export default function BroadcastCards({ podcasts }: AppProps) {
  return (
    <div id="podcast" className="bg-white">
      <div className="relative overflow-hidden">
        <h1 className=" uppercase ">podcast</h1>
        <div className="relative  md:py-20 md:mx-auto ">
          <div className="relative">
            <div className="mx-auto mt-12 grid max-w-md gap-8 md:px-4 sm:px-1 sm:max-w-lg  lg:max-w-7xl lg:grid-cols-3 lg:px-8">
              {podcasts?.map((podcast) => (
                <Link key={podcast._id} href={`/podcast/${podcast._id}`}>
                  <div
                    style={{ cursor: 'pointer' }}
                    className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover"
                        src={createImageUrl(podcast.image)}
                        alt={podcast.title}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <p className="text-lg font-semibold text-gray-900">
                          {podcast.title}
                        </p>
                        <p className={'text-gray-500'}>by {podcast.author}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
