
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { sanityClient } from "../client";
import BroadcastCards from "../components/BroadcastCards";
import Broadcast from "../components/BroadcastCards";
import ContactForm from "../components/contactForm";
import InternShip from "../components/InternShip";
import Opportunities from "../components/Opportinities";
import Slider from "../components/slider";
import StoryCard  from '../components/story';
import WomenQuotes from "../components/WomenQuotes";
import { stories } from "../constants";
import { broadcasts } from "../constants";
import { AppProps, Internship } from "../types";
import { getInternShip } from "../utils/apis";
import {getCareerUsingPagination } from '../utils/apis';
















  


const Home: NextPage = ({podcasts,stories,careers,internship}:AppProps) => {

  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <Slider />
      <WomenQuotes />
      <StoryCard stories={stories} />
     <InternShip internship={internship} />
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
  const internship = await getInternShip();
  return {
    props: { podcasts,stories,careers,internships },
    revalidate:172800
  };
};

