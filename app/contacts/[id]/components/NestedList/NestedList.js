import { Card, CardContent} from "@mui/material";
import { Container } from "@mui/system";
import { NestedPrivider } from "./NestedPrivider";

const NestedList=({data , title,selected,setSelected})=> {

  return (
    <Container sx={{marginTop:"20px"}}>
      <Card>
        <CardContent>

            <NestedPrivider  data={data} title={title} selected={selected} onSelect={setSelected}/>

        </CardContent>
      </Card>
    </Container>
  );
}

export {NestedList}

