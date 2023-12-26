"use client";
import { AppBar} from '@mui/material';
import { ButtonLink } from './ButtonLink';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const Header = () =>{

    const navigation =[
        {label:"Home", href:"/"},
        {label:"Contacts", href:"/contacts"},
    ]


   
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#1976d2',
        },
      },
    });
    return(
            <header>

      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
          <ButtonLink navLinks={navigation}/>
        </AppBar>
      </ThemeProvider>
    </header>
    )

}

export {Header}