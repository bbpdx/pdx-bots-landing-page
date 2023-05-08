import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export default function MemberProfile( {member} : any) {
console.log('member', member)
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
          <Box sx={{ 
          width: '10rem',
          height: '10rem', 
          position: 'relative',
          border: 'red 1px solid',
        }}>
            <Image
              src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${member.image}`}
              alt="profile pic"
              fill
              />
          </Box>
        <Typography variant='h2' sx={{color:'grey'}}>{member.name}</Typography>
        <Typography variant='body1'sx={{color:'grey'}}>{member.description}</Typography>
    </Box>
  )
}
