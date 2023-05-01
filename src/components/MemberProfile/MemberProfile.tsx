import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export default function MemberProfile( {member} : any) {

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        border: 'red 1px solid',
      }}>
          <Box sx={{ 
          width: '10rem',
          height: '10rem', 
          position: 'relative',
          border: 'green 1px solid',
        }}>
            <Image
              src="/Trollface.png" 
              alt="profile pic"
              fill
              />
          </Box>
        <Typography variant='h2' sx={{color:'grey'}}>{member.name}</Typography>
        <Typography variant='body1'sx={{color:'grey'}}>{member.description}</Typography>
    </Box>
  )
}
