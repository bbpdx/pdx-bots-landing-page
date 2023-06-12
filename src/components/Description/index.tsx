import { Box, Grid, Typography } from '@mui/material';
import useWindowSize from '@/utils/useWindowSize';
import styles from './styles';
import Text from '@/components/Text'
import { missionStatement, keyPoints } from "@/constants/strings";
import { mediaQueriesThresholds } from "@/constants";
import DropDownText from "../DropDownText";

const DESCRIPTION_BODY = `Hello World`;

const Description = () => {
    const { width } = useWindowSize();
    return (
      <Box
          sx={styles.descriptionBox}>
        <Grid item
            justifyContent='flex-start'
            sx={{
              marginLeft: (width && width > mediaQueriesThresholds.mobile) ? '52vw': '2rem',
              marginRight: '2rem'
            }}>
            <Text text={missionStatement.opening}/>
            <Box
              sx={{
              marginTop: '2rem'
              }}>
              {keyPoints.map((keyPoint) => <DropDownText key={keyPoint.title} textObject={keyPoint}/> )}
            </Box>
            <Text text={missionStatement.closing}/>
        </Grid>
      </Box>
    );
};

export default Description;