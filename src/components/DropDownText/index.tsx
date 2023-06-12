import { Button, Typography } from "@mui/material"
import React, { useState } from 'react'
import RenderIf from "@/utils/renderIf"
import { styles } from './styles'

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
    <>
      <Button
        onMouseOver={()=> setIsHovered(true)}
        onMouseLeave={()=> setIsHovered(false)}
        >
        <Typography
          variant="h6"
          sx={styles.title}
        >
          {`* ${title} * `}
        </Typography>
      </Button>
      <RenderIf isTrue={isHovered}>
        <Typography
          sx={styles.details}
        >
          {detail}
        </Typography>
      </RenderIf>
    </>

  )
}

export default DropDownText