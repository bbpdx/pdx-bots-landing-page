import { Box, Button, Typography } from "@mui/material"
import React, { useState } from 'react'
import RenderIf from "../RenderIf/RenderIf"

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
        >
        <Typography variant="h6">
          {title}
        </Typography>
      </Button>
      <RenderIf isTrue={isHovered}>
        <Typography>
          {detail}
        </Typography>
      </RenderIf>
    </Box>

  )
}

export default DropDownText
