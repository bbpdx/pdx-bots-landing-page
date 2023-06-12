import Head from 'next/head'
import { Roboto } from 'next/font/google'
import useWindowSize from '@/utils/useWindowSize'
import  Main  from "@/views/Main"



const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Home = () => {

  const { width } = useWindowSize()

  return (
    <>
      <Head>
        <title>PDX Bots</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Main />
    </>
  )
}

export default Home
