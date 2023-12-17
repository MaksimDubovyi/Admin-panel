import { Button, Container, Grid,  Paper, Typography } from '@mui/material';
const MainHeader =()=>{
     
    return(
        <Paper  style={{paddingTop:'4vh' ,backgroundImage:`url(https://source.unsplash.com/random)`,backgroundSize:"100%"}}>
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
    
    )
}
export {MainHeader}