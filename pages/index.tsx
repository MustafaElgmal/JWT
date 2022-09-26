
import type { NextPage } from 'next'
import Slider from '../components/slider';
import Story from '../components/story';
import { stories } from '../constants';



const Home: NextPage = () => {
  return (
    <div>
      <Slider />
      <Story stories={stories} />
   
    </div>

  )
}

export default Home;
