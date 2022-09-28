import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BroadcastCards from '../components/BroadcastCards';
import ContactForm from '../components/contactForm';
import InternShip from '../components/InternShip';
import Opportunities from '../components/Opportinities';
import Slider from '../components/slider';
import Story from '../components/story';
import WomenQuotes from '../components/WomenQuotes';
import { stories } from '../constants';
import { broadcasts } from '../constants';
import { getAllCareers, getCareerUsingPagination } from '../utils/apis';
import { getNameFromPath } from '../utils/functions';




const Home: NextPage = ({ careers }: any) => {
  console.log(careers)
  const [Router, setRouter] = useState()
  const route = useRouter()

  useEffect(() => {
    getNameFromPath(route.asPath, setRouter)
  }, [])

  return (
    <div>
      <Head>
        <title>JWT</title>
      </Head>
      <Slider />
      <WomenQuotes />
      <Story stories={stories} />
      <InternShip />
      <BroadcastCards broadcasts={broadcasts} />
      <Opportunities careers={careers} />
      <ContactForm />
    </div>
  );
};


export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const careers = await getCareerUsingPagination();
  return {
    props: { careers: careers },
    redirect: 172800
  }
}