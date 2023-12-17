import { Button, Card, CardHeader, Grid } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { green} from '@mui/material/colors';
import { ContactValue } from "./ContactValue";



export default  function Contact ({contacts})
{

    return (
      <>
        {contacts.map((contact) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={contact._id.$oid} >
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                title={contact.login}
                subheader={contact.sex}
              />

              <CardContent>
                <ContactValue icon={"FaceIcon"} content={contact.name}/>
                <ContactValue icon={"LocalPhoneIcon"} content={contact.phone}/>
                
                <Button  component="a"  href={`/contacts/${contact._id.$oid}`} variant='outlined' color='primary'>Open</Button>
              </CardContent>

            </Card>
          </Grid>
        ))}
      </>
    );
}

