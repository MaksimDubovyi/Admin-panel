
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import LayersRoundedIcon from '@mui/icons-material/LayersRounded';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';


const MainCard = ()=>{

    return(
        <Card>
        <CardMedia
        style={{ paddingTop: '100%' }}
        image='https://source.unsplash.com/random'
        title='Image title'
        />

        <CardContent>

          <Typography variant='h5' gutterBottom>
            Blog post
          </Typography>
          <hr/>
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam laudantium soluta in quasi nemo ratione?
          </Typography>

        </CardContent>

        <CardActions>

          <Button size='small' color='primary'>View</Button>
          <Button size='small' color='primary'>Edit</Button>

          <LayersRoundedIcon/>
          <PlayCircleRoundedIcon/>

        </CardActions>
      </Card>
    )
}
export {MainCard};