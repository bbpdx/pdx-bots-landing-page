import { Box, Grid } from '@mui/material';
import useWindowSize from '@/utils/useWindowSize';
import styles from './styles';
import Text from '@/components/Text'
import { MISSION_STATEMENT, KEY_POINTS } from "@/constants/content";
import DropDownText from "../DropDownText";

const Description = () => {
    const { width } = useWindowSize();
    return (
      <Box
          sx={styles.descriptionBox}>
        <Grid item
            justifyContent='flex-start'
            sx={styles.typography(width)}>
            <Text text={MISSION_STATEMENT.opening}/>
            <Box
              sx={styles.typography(null)}>
              {KEY_POINTS.map((keyPoint) => <DropDownText key={keyPoint.title} textObject={keyPoint}/> )}
            </Box>
            <Text text={MISSION_STATEMENT.closing}/>
        </Grid>
      </Box>
    );
};

export default Description;