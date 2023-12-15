"use client";
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { ButtonLink } from './ButtonLink';
// import  styled  from 'styled-components';
// import Link from 'next/link';



// const Root = styled.div`
//   position: relative;
//   display: inline-block;
//   width: 32px;
//   height: 20px;
//   background-color: red;
  
// `;

const Header = () =>{

    const navigation =[
        {label:"Home", href:"/"},
        {label:"Contacts", href:"/contacts"},
        {label:"Inf", href:"/info"},
    ]

    return(
            <header>
        <AppBar position="fixed">
          <Container fixed>
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>

                <Typography variant="h5" mr={5} ml={5}>Material UI && NEXT.JS</Typography>


                <ButtonLink navLinks={navigation}/>
             
            </Toolbar>
          </Container>
        </AppBar>
    </header>
    )

}

export {Header}