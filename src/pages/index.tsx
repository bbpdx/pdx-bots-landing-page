import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { lorem }from '../constants/lorem'
import { Box, Typography } from '@mui/material'
import { colors } from '../constants/constants.js'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <Head>
        <title>PDX Bots</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Box sx={{ 
          width: '50vw',
          height: '100%', 
          position:'absolute',
        }}>
          <Image
            src="/background.jpg" 
            alt="background"
            fill
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: 'cover',
              opacity: '0.7',
            }}
            />
        </Box>
        <Box
          sx={{
            width: '100vw',
            height: '100%', 
            display: 'flex',
          }}>
          <Typography 
            sx={{
              margin: '2rem',
              marginLeft:'55vw',
              marginTop:'10vh',
              opacity:'0.5',
              color: colors.text
            }}
          >{lorem.title}</Typography>
        </Box>
      </main>
    </>
  )
}
