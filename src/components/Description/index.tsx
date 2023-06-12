import { Box, Grid, Typography } from '@mui/material';
import useWindowSize from '@/utils/useWindowSize';
import styles from './styles';
import Text from '@/components/Text'
import { missionStatement, keyPoints } from "@/constants/content";
import DropDownText from "../DropDownText";

const Description = () => {
    const { width } = useWindowSize();
    return (
      <Box
          sx={styles.descriptionBox}>
        <Grid item
            justifyContent='flex-start'
            sx={styles.typography(width)}>
            <Text text={missionStatement.opening}/>
            <Box
              sx={styles.typography(null)}>
              {keyPoints.map((keyPoint) => <DropDownText key={keyPoint.title} textObject={keyPoint}/> )}
            </Box>
            <Text text={missionStatement.closing}/>
        </Grid>
      </Box>
    );
};

export default Description;