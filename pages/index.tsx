import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sanityClient } from "../client";
import BroadcastCards from "../components/BroadcastCards";
import Broadcast from "../components/BroadcastCards";
import ContactForm from "../components/contactForm";
import InternShip from "../components/InternShip";
import Opportunities from "../components/Opportinities";
import Slider from "../components/slider";
import Story from "../components/story";
import WomenQuotes from "../components/WomenQuotes";
import { stories } from "../constants";
import { broadcasts } from "../constants";
import { AppProps, Internship } from "../types";
import { getInternShip } from "../utils/apis";
import { getNameFromPath, createImageURL } from "../utils/functions";

const Home: NextPage = ({ internship }: AppProps) => {
  const [Router, setRouter] = useState();
  const route = useRouter();

  useEffect(() => {
    getNameFromPath(route.asPath, setRouter);
  }, []);
  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <Slider />
      <WomenQuotes />
      <Story stories={stories} />
      <InternShip internship={internship} />
      <BroadcastCards broadcasts={broadcasts} />
      <Opportunities />
      <ContactForm />
    </div>
  );
};
export const getStaticProps: GetStaticProps = async () => {
  const internship = await getInternShip();
  return {
    props: { internship },
  };
};

export default Home;
