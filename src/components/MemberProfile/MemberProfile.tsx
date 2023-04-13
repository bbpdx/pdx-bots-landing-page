import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export default function MemberProfile( {member} : any) {

  return (
    <Box>
        <Image src={member.image} alt={member.name} width={200} height={200}/>
        <Typography>{member.name}</Typography>
        <Typography>{member.description}</Typography>
    </Box>
  )
}
