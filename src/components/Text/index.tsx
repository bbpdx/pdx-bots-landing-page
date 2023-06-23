import { Typography } from '@mui/material';
import React from 'react';
import styles from './styles';

const Text = ({ text }: any) => (
  <Typography sx={styles.text}>{text}</Typography>
);
export default Text;
