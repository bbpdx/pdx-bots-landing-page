import { Typography } from "@mui/material"
import React from 'react'
import {colors, mediaQueriesThresholds} from '../../constants/constants'
import useWindowSize from "@/utils/useWindowSize"

const Text = (props: any) => {
  const { text } = props
    const { width } = useWindowSize()

  return (
    <Typography
      sx={{
          marginLeft: (width && width > mediaQueriesThresholds.mobile) ? '55vw': '2rem',
          marginTop:'10vh',
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
