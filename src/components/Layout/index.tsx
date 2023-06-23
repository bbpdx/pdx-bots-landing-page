import Link from 'next/link';
import { Box, Button, ButtonGroup } from '@mui/material';
import useWindowSize from '@/utils/useWindowSize';
import HamburgerDropDown from '@/components/HamburgerDropdown';
import { MEDIA_QUERIES_THRESHOLDS, HEADER_NAVIGATION } from '@/constants';

import styles from './styles';

const Layout = ({ children }: any) => {
  const { width } = useWindowSize();
  return (
    <div>
      <header>
        <Box sx={styles.header}>
          <Link href="/">
            <h1>PDX Bots</h1>
          </Link>
          <Box sx={styles.headerNavBox}>
            {width && width > MEDIA_QUERIES_THRESHOLDS.mobile ? (
              <ButtonGroup>
                {HEADER_NAVIGATION.map((link) => (
                  <Link href={link.href} key={link.label}>
                    <Button variant="text" sx={styles.navigationButton}>
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </ButtonGroup>
            ) : (
              <HamburgerDropDown />
            )}
          </Box>
        </Box>
      </header>
      <main>{children}</main>
      <footer />
    </div>
  );
};

export default Layout;
