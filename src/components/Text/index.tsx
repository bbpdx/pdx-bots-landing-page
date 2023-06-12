import { Typography } from "@mui/material"
import React from 'react'
import {colors, mediaQueriesThresholds} from '@/constants'
import useWindowSize from "@/utils/useWindowSize"

const Text = (props: any) => {
  const { text } = props

  return (
    <Typography
      sx={{
          marginTop:'5vh',
          opacity:'0.6',
          color: colors.text,
          fontFamily: 'monospace',
        }}
        >
      {text}
    </Typography>
  )
}
export default Text
