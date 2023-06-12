import {Grid}  from '@mui/material';
import ProfileCard from '@/components/ProfileCard';
import Header from '@/components/Header';
import { memberProfiles } from '@/constants/content';
import AboutUs from '@/views/AboutUs'

const About = () => {
  return (
    <>
      <Header page="/about" />
      <AboutUs/>
    </>
  )
};

export default About;
