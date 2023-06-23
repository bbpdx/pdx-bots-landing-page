import { Grid } from '@mui/material';
import { MEMBER_PROFILES } from '@/constants/content';
import ProfileCard from '@/components/ProfileCard';
import styles from './styles';

const AboutUs = () => (
  <main>
    <Grid container gap={4} sx={styles.main}>
      {MEMBER_PROFILES.map((member: any) => (
        <Grid item key={member.name} xs={11} sm={6} md={4}>
          <ProfileCard member={member} />
        </Grid>
      ))}
    </Grid>
  </main>
);

export default AboutUs;
