import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

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
        <Typography variant='h2' sx={{color:'grey', inlineSize: 'min-content'}}>{member.name}</Typography>
        <Typography variant='body1'sx={{color:'grey'}}>{member.description}</Typography>
    </Box>
  )
}
export default MemberProfile
