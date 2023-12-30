import React, { useEffect, useState } from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";
import { LANGUAGES, GOALS, HOBBIES, VALUABLES, GENRES } from "../../../data";

const SmartList = ({ profile, label, name, handleChangeValue }) => {
  const [data, setData] = useState(LANGUAGES);

  useEffect(() => {
    switch (label) {
      case "LANGUAGES":
        setData(LANGUAGES);
        break;
      case "GOALS":
        setData(GOALS);
        break;
      case "HOBBIES":
        setData(HOBBIES);
        break;
      case "VALUABLES":
        setData(VALUABLES);
        break;
      case "GENRES":
        setData(GENRES);
        break;
      case "CINEMA":
        setData(GENRES.Cinema);
        break;
      case "MUSIC":
        setData(GENRES.Music);
        break;
      case "LITERATURE":
        setData(GENRES.Literature);
        break;
      default:
        setData([]);
    }
  }, [label]);

  const handleChangeItem = (event) => {
    const {
      target: { value },
    } = event;

    if (handleChangeValue) {
      handleChangeValue(
        typeof value === "string"
          ? value.split(",").map((id) => parseInt(id, 10))
          : value,
        name
      );
    }
  };

  return (
    <Grid item xs={6}>
      <FormControl sx={{ mt: "20px" }} fullWidth>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          name={name}
          id={name}
          labelId={label}
          multiple
          value={profile[name]}
          onChange={handleChangeItem}
          input={<OutlinedInput label={label} />}
        >
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

export { SmartList };
