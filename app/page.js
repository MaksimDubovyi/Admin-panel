"use client"
import Image from 'next/image';
import styles from './page.module.css';
import Icon from '@mui/material/Icon';
import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import  styled  from 'styled-components';
import Link from 'next/link';
import { MainHeader } from './components/MainHeader';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import { MainCard } from './components/MainCard';



const contacts=[1,2,3,4,5,6,7,8,9]

export default function Home() {
  
  return (
    <>
       <MainHeader/>
       <Container  >

        <Typography variant='h2' align='center' color="textPrimary">Material UI </Typography>
        <Typography variant='h5' align='center' color="textSecondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quo, id aperiam deleniti consectetur laudantium? Vel, qui sit eius earum corporis odio perferendis rem magnam officiis deleniti, architecto provident dignissimos. </Typography>
       
   
         <Grid mt={1} mb={5} container spacing={5} justify="center" justifyContent="center">

          <Grid item>
            <Button variant='contained' color='primary'>Start Now</Button>
          </Grid>
          <Grid item>
            <Button variant='outlined' color='primary'>Learn more</Button>
          </Grid>
         </Grid>

          <Container mt={1} >

            <Grid container spacing={2} justify="center" justifyContent="center">
              {contacts.map((contact)=>(
                <Grid item key={contact} xs={12} sm={8} md={6} lg={4}  xl={2}>
                  <MainCard/>
                </Grid>
              ))}
            </Grid>

          </Container>
     
       </Container>
    </>

  );
}
