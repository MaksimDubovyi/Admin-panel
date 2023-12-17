
import { Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { GitItem } from "./GitItem";

const GitList=({git})=>{

    return(
        <Container>

         {git.data.map(item=>(
             <Grid container  id={item.subtitle}   key={item.subtitle}>

                <Typography sx={{mt:'100px'}} variant="h6" color="red" align="right">{item.subtitle} </Typography>

                <GitItem item={item}/>

             </Grid>
         ) 
         )}
      </Container>
    )
}

export {GitList}