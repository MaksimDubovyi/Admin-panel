"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Icon from '@mui/material/Icon';
import { AppBar, Box, Button, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import  styled  from 'styled-components';
import Link from 'next/link';




export default function Home() {
  
  return (
   <Paper  style={{marginTop:'-2vh',paddingTop:'2vh' ,backgroundImage:`url(https://source.unsplash.com/random)`,backgroundSize:"100%"}}>
    <Container fixed>
      <Grid container>
        <Grid item md={6}>
          <Typography variant='h4'  color='white'>Home </Typography>
          <Typography variant='h5' paragraph color='white'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Explicabo ab doloremque ut dolores officiis quo vel minima.
              Explicabo aliquam praesentium aspernatur iste perspiciatis
               id quam. 
          </Typography>
          <Button style={{marginBottom:'20px'}} variant='contained' color='success'>Learn more</Button>
        </Grid>
      </Grid>
    </Container>
   </Paper>

  );
}
