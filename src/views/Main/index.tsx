import Image from 'next/image';
import { Box } from '@mui/material';
import Description from '@/components/Description';
import useWindowSize from '@/utils/useWindowSize';
import { MEDIA_QUERIES_THRESHOLDS } from '@/constants';
import styles from './styles';

const Main = () => {
  const { width } = useWindowSize();
  return (
    <main>
      {width && width > MEDIA_QUERIES_THRESHOLDS.mobile && (
        <Box sx={styles.imageBox}>
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
      )}
      <Description />
    </main>
  );
};

export default Main;
