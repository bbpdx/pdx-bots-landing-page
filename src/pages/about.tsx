import React from 'react'
import styles from '@/styles/Home.module.css'
import MemberProfile from '@/components/MemberProfile/MemberProfile'
import {Box, Grid}  from '@mui/material'
import { memberProfiles } from '@/constants/constants'

export default function About() {

  console.log('memberProfiles', memberProfiles)
  return (
    <main >
      <Grid 
      container
      gap={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}>
        {memberProfiles.map((member) => ( 
          <Grid 
          item
          key={member.name}
          xs={11}
          sm={6}
          md={4}
          >
            <MemberProfile member={member}/>
          </Grid>
        )
        )}
      </Grid>
    </main>
  )
}
