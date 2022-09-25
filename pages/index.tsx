import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Story from '../components/story'
import { stories } from '../constants'

const Home: NextPage = () => {
  return (
    <Story  stories={stories} />
  )
}

export default Home
