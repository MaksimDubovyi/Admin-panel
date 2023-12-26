"use client";
import { BottomNavigation, BottomNavigationAction, Typography } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import FolderRoundedIcon from '@mui/icons-material/FolderRounded';
import { useState } from 'react';



const Footer = () =>{

const [value, setValue]= useState('favorite')
const handleChange=(event,newValue)=>{
    setValue(newValue)
}
    return(
        <div style={{position:'fixed', bottom:'0',width:'100%', height:"50px",  backgroundColor:'black' }}>
        <hr/>
    
          <Typography mt={1} align='center' color='textSecondaty' component='p' variant='subtitle1' sx={{color:'white'}} >
            Next.js React Material Ui side
          </Typography>
        </div>
    )
}

export {Footer}