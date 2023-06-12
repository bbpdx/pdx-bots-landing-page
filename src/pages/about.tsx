import {Grid}  from '@mui/material';
import ProfileCard from '@/components/ProfileCard';
import Header from '@/components/Header';
import { memberProfiles } from '@/constants/strings.js';

const About = () => {
  return (
    <>
      <Header page="/about" />
      <main >
        <Grid
        container
        gap={4}
        sx={{
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '2rem',
        }}>
          { memberProfiles.map((member: any) => (
            <Grid
            item
            key={member.name}
            xs={11}
            sm={6}
            md={4}
            >
              <ProfileCard member={member}/>
            </Grid>
          )
          )}
        </Grid>
      </main>
    </>
  )
};

export default About;
