import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BroadcastCards from '../components/BroadcastCards';
import Broadcast from '../components/BroadcastCards';
import ContactForm from '../components/contactForm';
import InternShip from '../components/InternShip';
import Opportunities from '../components/Opportinities';
import Slider from '../components/slider';
import Story from '../components/story';
import WomenQuotes from '../components/WomenQuotes';
import { stories } from '../constants';
import { broadcasts } from '../constants';
import { getNameFromPath } from '../utils/functions';


const Home: NextPage = () => {
  const [Router,setRouter]=useState()
  const route=useRouter()
 
    useEffect(()=>{
      getNameFromPath(route.asPath,setRouter)

    },[])
  
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


export default Home;
