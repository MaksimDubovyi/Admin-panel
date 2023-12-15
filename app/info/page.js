import { Grid, List, ListItem, ListItemText, Typography,Box, Button, Link } from "@mui/material";


  


const Info =()=>{

    return(
      <Box m={5}>
      <Box m={3}>
        <Link component="button" variant="button" href="#Button" underline="hover" >Button</Link>
        <Link component="button" variant="button" href="#Button" underline="hover" >Button</Link>
      </Box>
  <ul>
  <li><strong>1. AppBar: </strong> для навігації, логотипів, заголовка "використовується як контекстне меню або навігаційна панель"</li>
  <li><strong>2. Container: </strong> центрує контент по горизонталі "базовий елемент макетів"</li>
  <li><strong>3. Toolbar</strong> для групування та розміщення елементів у верхній частині сторінки (зазвичай це може бути верхній колонтитул).</li>
  <li><strong>4. Typography: </strong> можна зазначити стилі тексту для різних елементів в інтерфейсі, таких як заголовки, підзаголовки, абзаци, кнопки і т. д., застосовуючи заздалегідь визначені стилі згідно з дизайном вашого додатку.
   variant="h1" variant="body1"  variant="button"
  </li>
  <li><strong>5. Box</strong> це універсальний контейнерний компонент, який використовується для створення блочних елементів в інтерфейсі. Він надає спрощений спосіб розміщення та вирівнювання дочірніх елементів, а також управління внутрішніми та зовнішніми відступами елемента.
  
    <ul>
      <li><strong>  1.</strong> Box може бути використаний для вирівнювання та розміщення дочірніх елементів в контейнері.</li>
      <li><strong>2. margin та padding</strong>За допомогою властивостей margin та padding можна легко керувати внутрішніми та зовнішніми відступами.</li>
      <li><strong>3.</strong>може працювати з системою граток, де ви можете вказати величину колонки та рядка для створення розділень та вирівнювань.</li>
      <li><strong>4.</strong> <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={2}
      p={2}
      border={1}
    >
      <p>Це текст внутрішнього елемента Box</p>
    </Box></li>
    </ul>

  </li>
  <li><strong>6. </strong></li>
  <li><strong>7. </strong></li>
  <li><strong>8. </strong></li>
  <li><strong>9. </strong></li>
  <li id='Button'><strong>10. Button variant='contained,outlined,text'</strong>
  <ul>
    <li><Button variant='contained' color='inherit'>inherit</Button>    <Button variant='outlined' color='inherit'>inherit</Button>    <Button variant='text' color='inherit'>inherit</Button>     </li>
    <li><Button variant='contained' color='info'>info</Button>          <Button variant='outlined' color='info'>info</Button>          <Button variant='text' color='info'>info</Button>           </li>
    <li><Button variant='contained' color='primary'>primary</Button>    <Button variant='outlined' color='primary'>primary</Button>    <Button variant='text' color='primary'>primary</Button>     </li>
    <li><Button variant='contained' color='secondary'>secondary</Button><Button variant='outlined' color='secondary'>secondary</Button><Button variant='text' color='secondary'>secondary</Button> </li>
    <li><Button variant='contained' color='success'>success</Button>    <Button variant='outlined' color='success'>success</Button>    <Button variant='text' color='success'>success</Button>     </li>
    <li><Button variant='contained' color='warning'>warning</Button>    <Button variant='outlined' color='warning'>warning</Button>    <Button variant='text' color='warning'>warning</Button>     </li>
    <li><Button variant='contained' color='error'>error</Button>        <Button variant='outlined' color='error'>error</Button>        <Button variant='text' color='error'>error</Button>         </li>
  </ul>
  </li>
</ul> 
</Box>
    )
}

export default Info;