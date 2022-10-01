/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticPaths, GetStaticProps } from 'next';
import BroadcastCards from '../../components/BroadcastCards';
import { AppProps, BroadcastType } from '../../types';
import { getAllPodcasts } from '../../utils/apis';
import { createImageUrl } from '../../utils/functions';

export default function Broadcast({ podcast, podcasts }: AppProps) {
  return (
    <div>
      <div className="relative">
        <img
          className="bg-cover bg-center brightness-[0.35] blur-[1.5px] "
          src="https://images.unsplash.com/photo-1583127812417-7c06e950a432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
        />
        <h2 className=" absolute bottom-[50%] md:left-[30%] left-[9%] text-white text-md hidden md:md:block lg:left-[35%] ">
          Welcome To Our Podcast
        </h2>
        {podcast?.audioUrl ? (
          <div className="bg-white rounded-md lg:rounded-none  drop-shadow-2xl h-[260px] w-[60%] absolute bottom-[-80%] md:bottom-[-11%] left-[18%] z-10 md:h-[110px] sm:bottom-[-30%] lg:absolute lg:bottom-[-5%] lg:max-w-[50%] lg:h-[190px] lg:left-[25%]  ">
            <div className="flex flex-wrap md:flex-row md:w-full sm:flex sm:flex-col sm:w-[100%] sm:h-[100%]">
              <div className="h-[50%] md:w-[30%] lg:h-full">
                <img
                  className=" h-[100%] rounded-md md:rounded-none w-full lg:w-full lg:h-full"
                  src={createImageUrl(podcast.image)}
                  alt={podcast.title}
                />
              </div>
              <div className=" z-20 w-full h-[50%]  md:w-[70%] md:h-1/2">
                <div className="h-1/2">
                  <p className="text-sm text-center md:text-lg lg:text-lg ">
                    {podcast.title}
                  </p>
                </div>
                <div className="h-1/2 ">
                  <audio
                    className="w-full lg:w-[70%] color-black absolute bottom-0 md:absolute md:bottom-[32%] md:left-0 lg:left-[30%]"
                    controlsList="nodownload"
                    controls
                  >
                    <source src={podcast?.audioUrl} />
                  </audio>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="pt-6 pb-16 sm:pb-24 bg-gray-50 mt-5">
        <div className="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
            {podcast?.videoUrl ? (
              <>
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
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="pt-20 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
          <BroadcastCards podcasts={podcasts} />
        </div>
      </div>
    </div>
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

{
  /* <div className="flex">
<div>
  <img
    className="object-left-top object-contain h-[180px] w-96 "
    src={createImageUrl(podcast.image)}
    alt={podcast.title}
  />
</div>
<div className="w-full">
  <audio controlsList="nodownload" controls>
    <source src={podcast?.audioUrl} />
  </audio>
</div>
</div> */
}
