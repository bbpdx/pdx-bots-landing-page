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
      }}>
        <Image src='' alt={member.name} width={200} height={200}/>
        <Typography variant='h2'>{member.name}</Typography>
        <Typography variant='body1'>{member.description}</Typography>
    </Box>
  )
}
