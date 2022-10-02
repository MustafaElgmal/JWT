import Link from 'next/link';
import { AppProps } from '../types';
import { createImageUrl } from '../utils/functions';

export default function BroadcastCards({ podcasts }: AppProps) {
  return (
    <div id="podcast" className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Talks and Interviews
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-md gap-8 px-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8">
                {podcasts?.map((podcast) => (
                  <Link key={podcast._id} href={`/broadcasts/${podcast._id}`}>
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
        </main>
      </div>
    </div>
  );
}
