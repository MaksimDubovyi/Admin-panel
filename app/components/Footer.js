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
        <div style={{position:'fixed', bottom:'0',width:'100%', height:"100px",  backgroundColor:'white'}}>
        <hr/>
          <BottomNavigation
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              label="Favorite"
              value="favorite"
              icon={<FavoriteRoundedIcon/>}
            />

            <BottomNavigationAction
              label="Location"
              value="location"
              icon={<LocationOnRoundedIcon/>}
            />

            <BottomNavigationAction
              label="Folder"
              value="folder"
              icon={<FolderRoundedIcon/>}
            />
          </BottomNavigation>
          <Typography align='center' color='textSecondaty' component='p' variant='subtitle1'>
            Next.js React Material Ui side
          </Typography>
        </div>
    )
}

export {Footer}