"use client";
import { getContactsId } from "@/services/getContacts";
import { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container, Paper } from "@mui/material";
import { UserValue } from "@/app/components/UserValue";

export default  function Contact({ params: { id } }) {
    const [contact, setContacts]= useState([]);

    useEffect(() => {
        getContactsId(id).then(setContacts);
      }, [id]);

    try {
        if (contact.length === 0) {
            return <div className='container'><h1>Contact is not available</h1></div>;
          }
            return (
              <Container maxWidth="xl">
              <Grid container spacing={5} m={5}>
                <Grid item>
                <Paper variant="div" sx={{width:"300px", height:'300px', borderRadius:'8px'}}  style={{backgroundImage:`url(https://source.unsplash.com/random)`,backgroundSize:"110%"}}/>
                </Grid>

                <Grid item  xs={10} sm={8} md={6} lg={6} xl={8} container>
                  <Grid item>
                    <Typography variant="h3">
                      <strong>{contact[0].name}</strong>
                    </Typography>
                  </Grid>

                    <UserValue type={"Login:"} content={contact[0].login}/>
                    <UserValue type={"Phone:"} content={contact[0].phone}/>
                    <UserValue type={"Sex:"} content={contact[0].sex}/>
                    <UserValue type={"Status:"} content={contact[0].status}/>
                    <UserValue type={"Geo:"} content={contact[0].profile.userGeo.name}/>
                    <UserValue type={"Friend:"} content={contact[0].description.friend}/>
                    <UserValue type={"Love:"} content={contact[0].description.love}/>

                </Grid>
              </Grid>
              </Container>
            );
        
    } catch (error) {
        console.error('Помилка при отриманні контакту:', error);
      
        return <div className='container'><h1>Error receiving contact</h1></div>;
    }
}

