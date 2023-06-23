import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import styles from './styles';

interface DropDownTextProps {
  textObject: {
    title: string;
    detail: string;
  };
}

const DropDownText = ({ textObject: { title, detail } }: DropDownTextProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Button
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Typography variant="h6" sx={styles.title}>
          {`* ${title} *`}
        </Typography>
      </Button>
      {isHovered && <Typography sx={styles.details}>{detail}</Typography>}
    </>
  );
};

export default DropDownText;
