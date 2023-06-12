import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { missionStatement, keyPoints }from '../constants/strings'
import { Box, Grid } from '@mui/material'
import { mediaQueriesThresholds } from '@/constants'
import useWindowSize from '@/utils/useWindowSize'
import RenderIf from '@/utils/renderIf'
import DropDownText from "@/components/DropDownText"
import Text from '@/components/Text'
import  Main  from "@/components/Main"



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
      <Main></Main>
    </>
  )
}

export default Home
