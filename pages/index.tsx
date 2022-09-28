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
import { getFourStories } from '../utils/apis';
const Home: NextPage = ({stories}:AppProps) => {
  console.log(stories)
  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <Slider />
      <WomenQuotes />
      <Story stories={stories} />
      <InternShip/>
      <BroadcastCards broadcasts={broadcasts} />
      <Opportunities/>
      <ContactForm/>
    </div>
  );
};

export const getStaticProps:GetStaticProps= async()=>{
  const stories=await getFourStories()
  return{
      props:{stories},
      revalidate:172800
  }
}


export default Home;
