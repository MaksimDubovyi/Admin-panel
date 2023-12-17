import { Grid, Typography } from "@mui/material"



const UserValue = ({variant, type, content} )=>{

    return(
        <Grid item xs={12}>
        <Typography variant='h5'>
          <strong>{type}</strong> {content}
        </Typography>
        </Grid>
        
    )

}

export {UserValue}