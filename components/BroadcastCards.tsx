/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Router, useRouter } from "next/router";

import { AppProps } from "../types";
import { createImageUrl } from "../utils/functions";

export default function BroadcastCards({ podcasts }: AppProps) {
  const router = useRouter();
  return (
    <div id="podcast" className=" xs:pt-10 ">
      <div className="relative overflow-hidden">
        {router.asPath === "/" || router.asPath === "/#podcast" ? (
          <h1 className="uppercase font-semibold" style={{ color: "#AF3B6E" }}>
            podcast
          </h1>
        ) : null}
        <div className="md:py-10">
          <div className="relative">
            <div className="max-w-full grid gap-6 lg:grid-cols-3 md:grid-cols-2">
              {podcasts?.map((podcast) => (
                <Link key={podcast._id} href={`/podcast/${podcast._id}`}>
                  <div
                    style={{ cursor: "pointer" }}
                    className="flex flex-col overflow-hidden rounded-lg shadow-md"
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
                        <p className={"text-gray-500"}>by {podcast.author}</p>
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
