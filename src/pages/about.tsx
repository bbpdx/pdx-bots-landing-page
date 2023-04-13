import React from 'react'
import styles from '@/styles/Home.module.css'
import MemberProfile from '@/components/MemberProfile/MemberProfile'
import Box from '@mui/material/Box'
import { memberProfiles } from '@/constants/constants'

export default function About() {
  return (
    <main className={styles.main}>
      <Box>
        {memberProfiles.map((member) => ( 
        <MemberProfile member={member} key={member.name}/>)
        )}
      </Box>
    </main>
  )
}
