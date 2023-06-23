import Head from 'next/head';

interface HeaderProps {
  page: String;
}

const Header = ({ page }: HeaderProps) => (
  <Head>
    <title>PDX Bots</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="all" />
    <link rel="canonical" href={`https://pdxbots.org${page}`} key="canonical" />
  </Head>
);

export default Header;
