import { Grid, Typography } from "@mui/material"


const GitItem =({item})=>{


    return(
     <>
             {item.inf.map((itemInf, index) =>(
             <Grid item  sm={12}  key={itemInf.property}  sx={{mb:'10px'}}>

                 <Grid container spacing={5} >
                     <Grid sm={4} item >
                         <Typography variant="h6" color="green" align="left">{index+1 }. { itemInf.property} </Typography>
                     </Grid>
                     <Grid sm={6} item  >
                         <Typography variant="p"  align="left">{itemInf.use} </Typography>
                     </Grid>
                 </Grid>

           </Grid>
            
         ) 
         )}
     </>
    )
}
export {GitItem}