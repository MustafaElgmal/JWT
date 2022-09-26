import type { NextPage } from 'next';
import BroadcastCards from '../components/BroadcastCards';
import Broadcast from '../components/BroadcastCards';
import Slider from '../components/slider';
import Story from '../components/story';
import { stories } from '../constants';
import { broadcasts } from '../constants';


const Home: NextPage = () => {
  return (
    <div>
      <Slider />
      <Story stories={stories} />

      <BroadcastCards broadcasts={broadcasts} />
    </div>
  );
};


export default Home;
