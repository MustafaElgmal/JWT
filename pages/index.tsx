import type { NextPage } from "next";
import Head from "next/head";
import BroadcastCards from "../components/BroadcastCards";
import ContactForm from "../components/contactForm";
import InternShip from "../components/InternShips";
import LandingPage from "../components/LandingPage";
import Opportunities from "../components/Opportunities";
import StoryCard from "../components/story";
import Women from "../components/Women";


import { AppProps, Internship } from "../types";
import {
  getAllInternShip,
  getFourStories,
  getInternShip,
  getThreeRecFromPodcasts,
} from "../utils/apis";
import { getCareerUsingPagination } from "../utils/apis";

const Home: NextPage = ({
  podcasts,
  stories,
  careers,
  internships,
}: AppProps) => {
  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <LandingPage />
      <Women/>
      <StoryCard stories={stories} />
      <InternShip internships={internships} />
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
  const internships = await getAllInternShip();
  return {
    props: { podcasts, stories, careers, internships },
    revalidate: 172800,
  };
};
