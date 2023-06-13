import { Typography } from "@mui/material"
import React from 'react'
import { styles } from './styles'


const Text = (props: any) => {
  const { text } = props
  return (
    <Typography sx={styles.text} >
      {text}
    </Typography>
  )
}
export default Text
