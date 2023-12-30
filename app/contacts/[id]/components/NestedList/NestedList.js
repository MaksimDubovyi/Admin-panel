import { Card, CardContent } from "@mui/material";
import { Container } from "@mui/system";
import { NestedPrivider } from "./NestedPrivider";
import { GOALS, HOBBIES } from "../../../../data";
import { useEffect, useState } from "react";

const NestedList = ({ profile, label, name, handleChangeValue }) => {
  const [data, setData] = useState(HOBBIES);

  useEffect(() => {
    switch (label) {
      case "GOALS":
        setData(GOALS);
        break;
      case "HOBBIES":
        setData(HOBBIES);
        break;

      default:
        setData([]);
    }
  }, [label]);

  return (
    <Container sx={{ marginTop: "20px" }}>
      <Card>
        <CardContent>
          <NestedPrivider
            data={data}
            title={label}
            selected={profile[name]}
            onSelect={handleChangeValue}
            name={name}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export { NestedList };
