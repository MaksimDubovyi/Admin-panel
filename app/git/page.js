
'use client';
import { useEffect, useState } from "react";
import { Container } from "@mui/system";
import { getInfo } from "@/services/getInfo";
import { GitList } from "./components/GitList";
import { Button, Typography } from "@mui/material";
import { GitButtonLink } from "./components/GitButtonLink";
import Loading from "../loading";


export default  function Git () {

const [info, setInfo]= useState([]);

useEffect(()=>{
    getInfo().then(setInfo);
},[]);


return(

    <Container sx={{ mt: '30px' }}>
      {info && info[0] && (

            <Typography  variant="h2" align="center">{info[0].title} </Typography>
            
      )}
        {info && info[0] && (

            <GitButtonLink list={info[0]}/>

        )}
        {info && info[0] && (

             <GitList git={info[0]}/>
   
        )}
      {<Loading/>}
    </Container>
 )
}

