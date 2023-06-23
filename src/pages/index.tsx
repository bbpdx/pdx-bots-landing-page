import Head from 'next/head';
import Main from '@/views/Main';

const Home = () => (
  <>
    <Head>
      <title>PDX Bots</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Main />
  </>
);

export default Home;
