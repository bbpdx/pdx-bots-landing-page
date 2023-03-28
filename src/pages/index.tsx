import Head from 'next/head'
import Image from 'next/image'
import { Roboto } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { lorem }from '../constants/lorem'

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
      <main className={styles.main}>
        <>{lorem.title}</>
      </main>
    </>
  )
}
