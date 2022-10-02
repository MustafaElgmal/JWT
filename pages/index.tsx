import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import BroadcastCards from "../components/BroadcastCards";
import ContactForm from "../components/contactForm";
import InternShip from "../components/InternShip";
import LandingPage from "../components/LandingPage";
import Opportunities from "../components/Opportunities";
import StoryCard from "../components/story";
import Women from "../components/Women";


import { AppProps, Internship } from "../types";
import {
  getFourStories,
  getInternShip,
  getThreeRecFromPodcasts,
} from "../utils/apis";
import { getCareerUsingPagination } from "../utils/apis";

const Home: NextPage = ({
  podcasts,
  stories,
  careers,
  internship,
}: AppProps) => {
  useEffect(()=>{
    

  },[])
  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <LandingPage />
      <Women/>
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
  const stories = await getFourStories();
  const careers = await getCareerUsingPagination();
  const internship = await getInternShip();
  return {
    props: { podcasts, stories, careers, internship },
    revalidate: 172800,
  };
};
