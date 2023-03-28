import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Layout.module.css';
import { Box } from '@mui/system';

const Layout = ({ children }: any) => {
  return (
    <div>
      <header>
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          color: 'white',
          backgroundColor: 'grey',
          opacity: '0.6',
          fontFamily: 'Bungee Hairline'
        }}>
          <Link href='/'>
              <h1>PDX Bots</h1>
          </Link>
          <Box sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              width: '100%',
              alignItems: 'center',
              color:'#16FF00',
              opacity: '1',
            }}>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </Box>
        </Box>
      </header>
      <main>{children}</main>
      <footer>
        {/* Your footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;