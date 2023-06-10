import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { missionStatement, keyPoints }from '../constants/strings'
import { Box, Grid } from '@mui/material'
import {  mediaQueriesThresholds } from '../constants/constants.js'
import useWindowSize from '@/utils/useWindowSize'
import RenderIf from '@/components/RenderIf/RenderIf'
import DropDownText from "@/components/DropDownText/DropDownText"
import Text from '@/components/Text/Text'



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
      <main>
        <Grid
          container
          sx={{
            width: '100vw',
            height: '100%',
            display: 'flex',
          }}>
      <RenderIf isTrue={width && width > mediaQueriesThresholds.mobile}>
        <Box sx={{
          width: '50vw',
          height: '100%',
          position:'absolute',
        }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}computerworks.gif`}
              alt="background"
              fill
              style={{
                objectFit: 'cover',
                opacity: '0.7',
              }}
              />
          </Box>
        </RenderIf>
          <Grid item
            justifyContent='flex-start'
            sx={{
              marginLeft: (width && width > mediaQueriesThresholds.mobile) ? '52vw': '2rem',
              marginRight: '2rem'
            }}>
          <Text text={missionStatement.opening}/>
          <Box 
            sx={{
            marginTop: '2rem'
            }}>
            {keyPoints.map((keyPoint) => <DropDownText key={keyPoint.title} textObject={keyPoint}/> )}
          </Box>
          <Text text={missionStatement.closing}/>
          </Grid>
        </Grid>
      </main>
    </>
  )
}

export default Home