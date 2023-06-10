import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { colors } from '../../constants/constants'


const MemberProfile = ( {member} : any) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
          <Box sx={{
          width: '10rem',
          height: '10rem',
          position: 'relative',
        }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${member.image}`}
              alt="profile pic"
              fill
              />
          </Box>
        <Typography
          variant='h2'
          sx={{
            color: colors.secondary,
            opacity:'0.7',
            inlineSize: 'min-content'
          }}>
            {member.name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: colors.secondary,
            opacity:'0.5'
          }}>
            {member.position}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            color: colors.text,
            opacity:'0.5'
          }}>
            {member.description}
        </Typography>
    </Box>
  )
}
export default MemberProfile
