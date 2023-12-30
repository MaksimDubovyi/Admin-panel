import { InputLabel, MenuItem, FormControl, Select, Grid } from "@mui/material";
import {
  EDUCATION,
  RELATIONSHIP,
  LGBT_TOLERANT,
  CHILDREN,
  FINANCIAL,
  PETS,
  ORIENTATION,
  RELIGION,
} from "../../../data";
import { useEffect, useState } from "react";
const FormSelect = ({ profile, label, name, handleChangeValue }) => {
  const [data, setData] = useState(RELIGION);

  useEffect(() => {
    switch (label) {
      case "EDUCATION":
        setData(EDUCATION);
        break;
      case "RELATIONSHIP":
        setData(RELATIONSHIP);
        break;
      case "LGBT_TOLERANT":
        setData(LGBT_TOLERANT);
        break;
      case "CHILDREN":
        setData(CHILDREN);
        break;
      case "FINANCIAL":
        setData(FINANCIAL);
        break;
      case "PETS":
        setData(PETS);
        break;
      case "ORIENTATION":
        setData(ORIENTATION);
        break;
      case "RELIGION":
        setData(RELIGION);
        break;
      default:
        setData([]);
    }
  }, [label]);

  return (
    <Grid item xs={4}>
      <FormControl fullWidth sx={{ mt: "20px" }}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          name={name}
          id={name}
          labelId={label}
          value={profile[name] !== undefined ? profile[name] : -1}
          label={label}
          onChange={(event) => handleChangeValue(event.target.value, name)}
        >
          <MenuItem value={-1}>Не выбрано</MenuItem>
          {data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export { FormSelect };
