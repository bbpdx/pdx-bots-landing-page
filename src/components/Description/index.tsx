import { Box, Typography } from '@mui/material';
import useWindowSize from '@/utils/useWindowSize';
import styles from './styles';

const DESCRIPTION_BODY = `Hello World`;

const Description = () => {
    const { width } = useWindowSize();

    return (
      <Box
          sx={styles.descriptionBox}>
          <Typography
            sx={styles.typography(width)}
          >
            {DESCRIPTION_BODY}
        </Typography>
      </Box>
    );
};

export default Description;