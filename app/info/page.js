import { Grid,  Typography,Box, Button } from "@mui/material";


  


export default function Info (){

    return (
      <Box m={5}>
        <Grid
          mt={1}
          container
          spacing={2}
          justify="center"
          justifyContent="center"
          mb={2}
        >
          <Grid item>
          <Button component="a" href="#Button"  variant="contained"color="secondary"> Button</Button>
          </Grid>
          <Grid item>
          <Button component="a"  href="#Grid"   variant="contained" color="secondary" >  Grid</Button>
          </Grid>

        </Grid>

          <Typography variant="h5" color="green"> Розміри</Typography>
                  <ul>
                    <li><strong>1. "xs" </strong> (extra-small): Застосовується до екранів, ширина яких менше 600px. </li>
                    <li><strong>2. "sm" </strong> (small): Застосовується до екранів, ширина яких 600px або більше. </li>
                    <li><strong>3. "md" </strong> (medium): Застосовується до екранів, ширина яких 960px або більше. </li>
                    <li><strong>4. "lg" </strong> (large): Застосовується до екранів, ширина яких 1280px або більше. </li>
                    <li><strong>5. "xl" </strong> (extra-large): Застосовується до екранів, ширина яких 1920px або більше. </li>
                  </ul>

          <hr/><br/>
          <Typography variant="h5" color="green"> Контейнери</Typography>
                  <ul>
          <li>
            <strong>1. AppBar: </strong> для навігації, логотипів, заголовка
            "використовується як контекстне меню або навігаційна панель"
          </li>
          <li>
            <strong>2. Container: </strong> центрує контент по горизонталі
            "базовий елемент макетів"
          </li>
          <li>
            <strong>3. Toolbar</strong> для групування та розміщення елементів у
            верхній частині сторінки (зазвичай це може бути верхній колонтитул).
          </li>
          <li>
            <strong>4. Typography: </strong> можна зазначити стилі тексту для
            різних елементів в інтерфейсі, таких як заголовки, підзаголовки,
            абзаци, кнопки і т. д., застосовуючи заздалегідь визначені стилі
            згідно з дизайном вашого додатку. variant="h1" variant="body1"
            variant="button"
          </li>
          <li>
            <strong>5. Box</strong> це універсальний контейнерний компонент,
            який використовується для створення блочних елементів в інтерфейсі.
            Він надає спрощений спосіб розміщення та вирівнювання дочірніх
            елементів, а також управління внутрішніми та зовнішніми відступами
            елемента.
            <ul>
              <li>
                <strong> 1.</strong> Box може бути використаний для вирівнювання
                та розміщення дочірніх елементів в контейнері.
              </li>
              <li>
                <strong>2. margin та padding</strong>За допомогою властивостей
                margin та padding можна легко керувати внутрішніми та зовнішніми
                відступами.
              </li>
              <li>
                <strong>3.</strong>може працювати з системою граток, де ви
                можете вказати величину колонки та рядка для створення розділень
                та вирівнювань.
              </li>
              <li>
                <strong>4.</strong>{" "}
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  m={2}
                  p={2}
                  border={1}
                >
                  <p>Це текст внутрішнього елемента Box</p>
                </Box>
              </li>
            </ul>
          </li>
  
          <li id="Button">
            <strong>10. Button variant='contained,outlined,text'</strong>
            <ul>
              <li>
                <Button variant="contained" color="inherit">
                  inherit
                </Button>{" "}
                <Button variant="outlined" color="inherit">
                  inherit
                </Button>{" "}
                <Button variant="text" color="inherit">
                  inherit
                </Button>{" "}
              </li>
              <li>
                <Button variant="contained" color="info">
                  info
                </Button>{" "}
                <Button variant="outlined" color="info">
                  info
                </Button>{" "}
                <Button variant="text" color="info">
                  info
                </Button>{" "}
              </li>
              <li>
                <Button variant="contained" color="primary">
                  primary
                </Button>{" "}
                <Button variant="outlined" color="primary">
                  primary
                </Button>{" "}
                <Button variant="text" color="primary">
                  primary
                </Button>{" "}
              </li>
              <li>
                <Button variant="contained" color="secondary">
                  secondary
                </Button>
                <Button variant="outlined" color="secondary">
                  secondary
                </Button>
                <Button variant="text" color="secondary">
                  secondary
                </Button>{" "}
              </li>
              <li>
                <Button variant="contained" color="success">
                  success
                </Button>{" "}
                <Button variant="outlined" color="success">
                  success
                </Button>{" "}
                <Button variant="text" color="success">
                  success
                </Button>{" "}
              </li>
              <li>
                <Button variant="contained" color="warning">
                  warning
                </Button>{" "}
                <Button variant="outlined" color="warning">
                  warning
                </Button>{" "}
                <Button variant="text" color="warning">
                  warning
                </Button>{" "}
              </li>
              <li>
                <Button variant="contained" color="error">
                  error
                </Button>{" "}
                <Button variant="outlined" color="error">
                  error
                </Button>{" "}
                <Button variant="text" color="error">
                  error
                </Button>{" "}
              </li>
            </ul>
          </li>
        </ul>

        <Typography id="Grid" variant="h3" align="center">
          Grid
        </Typography>
        <Grid container
          mt={1}
          spacing={5}
          justify="center"
          justifyContent="center"
        >
          <Grid item>
            <Button variant="contained" color="primary">
              Start Now
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Learn more
            </Button>
          </Grid>
        </Grid>



        
      </Box>
    );
}

