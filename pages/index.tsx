import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import BroadcastCards from '../components/BroadcastCards';
import ContactForm from '../components/contactForm';
import InternShip from '../components/InternShip';
import Opportunities from '../components/Opportinities';
import Slider from '../components/slider';
import StoryCard  from '../components/story';
import WomenQuotes from '../components/WomenQuotes';
import { stories } from '../constants';
import { broadcasts } from '../constants';
import { getAllCareers, getCareerUsingPagination } from '../utils/apis';
import { getNameFromPath } from '../utils/functions';




const Home: NextPage = ({ careers }: any) => {
  

import { AppProps} from '../types';
import { getFourStories,getThreeRecFromPodcasts,getAllPodcasts } from '../utils/apis';
const Home: NextPage = ({podcasts,stories,careers}:AppProps) => {
  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <Slider />
      <WomenQuotes />
      <StoryCard stories={stories} />
      <InternShip />
      <BroadcastCards podcasts={podcasts} />
      <Opportunities careers={careers} />
      <ContactForm />
    </div>
  );
};

export default Home;
export const getStaticProps = async () => {
  const podcasts = await getThreeRecFromPodcasts();
  const stories=await getFourStories()
  const careers = await getCareerUsingPagination();
  return {
    props: { podcasts,stories,careers },
    revalidate:172800
  };
};

