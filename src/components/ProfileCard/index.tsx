import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
// import { colors, font } from '@/constants'
import { styles } from './styles'


const ProfileCard = ( {member} : any) => {
  return (
    <Box
      sx={styles.profileCardOuterBox}>
          <Box sx={styles.profileCardInnerBox}>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${member.image}`}
              alt="profile pic"
              fill
              />
          </Box>
        <Typography
          variant='h2'
          sx={styles.memberName}>
            {member.name}
        </Typography>
        <Typography
          variant="h6"
          sx={styles.memberPosition}>
            {member.position}
        </Typography>
        <Typography
          variant='body1'
          sx={styles.memberSummary}>
            {member.summary}
        </Typography>
    </Box>
  )
}
export default ProfileCard