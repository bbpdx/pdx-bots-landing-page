import { Box, Button, Typography } from "@mui/material"
import React, { useState } from 'react'
import RenderIf from "../RenderIf/RenderIf"
import { colors } from '../../constants/constants'
import { Opacity } from "@mui/icons-material"

interface DropDownTextProps {
  key: string
  textObject: {
    title: string
    detail: string
  }}

const DropDownText = (props: DropDownTextProps) => {
  const [ isHovered , setIsHovered ] = useState(false)
  const { textObject: { title, detail } } = props

  return (
    <Box>
      <Button
        onMouseOver={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}
        sx={{color: colors.secondary }}
        >
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'Bungee Hairline',
            fontWeight:'bold'
          }}
        >
          {`${title}`}
        </Typography>
      </Button>
      <RenderIf isTrue={isHovered}>
        <Typography
          sx={{
            fontFamily: 'monospace',
            opacity: 0.8
          }}
        >
          {detail}
        </Typography>
      </RenderIf>
    </Box>

  )
}

export default DropDownText
