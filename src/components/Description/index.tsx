import { Box, Grid } from '@mui/material';
import Text from '@/components/Text';
import DropDownText from '@/components/DropDownText';
import useWindowSize from '@/utils/useWindowSize';
import { MISSION_STATEMENT, KEY_POINTS } from '@/constants/content';

import styles from './styles';

const Description = () => {
  const { width } = useWindowSize();
  return (
    <Box sx={styles.descriptionBox}>
      <Grid item justifyContent="flex-start" sx={styles.typography(width)}>
        <Text text={MISSION_STATEMENT.opening} />
        <Box sx={styles.typography(null)}>
          {KEY_POINTS.map((keyPoint) => (
            <DropDownText key={keyPoint.title} textObject={keyPoint} />
          ))}
        </Box>
        <Text text={MISSION_STATEMENT.closing} />
      </Grid>
    </Box>
  );
};

export default Description;
