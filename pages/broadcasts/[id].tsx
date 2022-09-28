/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from "next";
import BroadcastCards from "../../components/BroadcastCards";
import { AppProps, BroadcastType } from "../../types";
import { getAllPodcasts } from "../../utils/apis";

export default function Broadcast({ podcast, podcasts }: AppProps) {
  return (
    <>
      <div>
        <img
          className="bg-cover bg-center"
          src="https://images.unsplash.com/photo-1583127812417-7c06e950a432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        />
      </div>
      <div className="pt-6 pb-16 sm:pb-24 bg-gray-50 mt-5">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="flex justify-between">
                <h1 className="text-2xl font-medium text-gray-900">
                  {podcast?.title}
                </h1>
              </div>
            </div>
            <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
              <div className="aspect-w-16 aspect-h-9 ">
                <iframe
                  className="rounded-lg"
                  src={podcast?.videoUrl}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="mt-8 lg:col-span-5">
              <div className="mt-3">
                <h2 className="text-lg font-medium text-gray-900">
                  Description
                </h2>
                <div className="prose prose-sm mt-4 text-gray-500" />
                {podcast?.description}
              </div>
            </div>
          </div>
        </div>
        <BroadcastCards podcasts={podcasts} />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const podcasts: BroadcastType[] = await getAllPodcasts();
  const paths: { params: { id: string } }[] = podcasts.map((podcast) => {
    return {
      params: { id: podcast._id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id;
  const podcasts: BroadcastType[] = await getAllPodcasts();
  const podcast = podcasts.find((podcast) => podcast._id === id);

  return {
    props: {
      podcast: podcast,
      podcasts: podcasts,
    },
  };
};
