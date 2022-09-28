import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import BroadcastCards from '../components/BroadcastCards';
import ContactForm from '../components/contactForm';
import InternShip from '../components/InternShip';
import Opportunities from '../components/Opportinities';
import Slider from '../components/slider';
import Story from '../components/story';
import WomenQuotes from '../components/WomenQuotes';
import { broadcasts } from '../constants';

import { AppProps} from '../types';
import { getFourStories,getThreeRecFromPodcasts,getAllPodcasts } from '../utils/apis';
const Home: NextPage = ({podcasts,stories}:AppProps) => {
  
  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <Slider />
      <WomenQuotes />
      <Story stories={stories} />
      <InternShip />
      <BroadcastCards podcasts={podcasts} />
      <Opportunities />
      <ContactForm />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const podcasts = await getThreeRecFromPodcasts();
  const stories=await getFourStories()
  return {
    props: { podcasts,stories },
    revalidate:172800
  };
};
