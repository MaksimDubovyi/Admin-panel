"use client";
import { AppBar, Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ButtonLink } from './ButtonLink';
import { useState } from 'react';



const Header = () =>{

    const navigation =[
        {label:"Home", href:"/"},
        {label:"Contacts", href:"/contacts"},
    ]

    const [open,setOpe]=useState(false);

    const handleClose=()=>{
      setOpe(false)
    }

    const handleClickOpen=()=>{
      setOpe(true)
    }
    return(
            <header>
        <AppBar position="fixed">
          <Container fixed>
            <Toolbar>

                <Typography variant="h5" mr={2} ml={2}>Material UI && NEXT.JS</Typography>


                <ButtonLink navLinks={navigation}/>

                  <Box   ml={5}>
                   <Button  variant='outlined' color="inherit" onClick={handleClickOpen}>Log In</Button>
                   
                   <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>

                    <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                    <DialogContent>
                      <DialogContentText>Log in to see videos</DialogContentText>
                      <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Email Adress'
                        type='email'
                        fullWidth
                      />

                      <TextField
                        autoFocus
                        margin='dense'
                        id='pass'
                        label='Password'
                        type='password'
                        fullWidth
                      />

                    </DialogContent>

                    <DialogActions>
                      <Button onClick={handleClose} color='primary' >Cancel</Button>
                      <Button onClick={handleClose} variant='contained' color='secondary' >Log in</Button>
                    </DialogActions>

                   </Dialog>

                 </Box>
            </Toolbar>
          </Container>
        </AppBar>
    </header>
    )

}

export {Header}