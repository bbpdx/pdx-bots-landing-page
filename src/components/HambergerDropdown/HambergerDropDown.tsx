import { IconButton, Menu, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const HamburgerDropDown = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleMenu = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div> 
 <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={handleMenu}
  >
 <MenuIcon />
  </IconButton>
  <Select
    open={open}
  >
    <MenuItem onClick={handleClose}>Home</MenuItem>
    <MenuItem onClick={handleClose}>About</MenuItem>
    <MenuItem onClick={handleClose}>Contact</MenuItem>
  </Select>
  </div>
  )
}

export default HamburgerDropDown