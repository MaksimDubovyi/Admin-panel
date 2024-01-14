import React from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";

const Hobbies = ({ config, values, handleBlur, handleChange, options }) => {
  return (
    <Grid item xs={3}>
      <FormControl sx={{ mt: "20px" }} fullWidth>
        <InputLabel id={config.label}>{config.label}</InputLabel>
        <Select
          name={config.slug + "_H"}
          id={config.slug + "_H"}
          labelId={config.label}
          multiple
          value={values[config.slug + "_H"]}
          onChange={handleChange}
          onBlur={handleBlur}
          input={<OutlinedInput label={config.label} />}
        >
          {options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export { Hobbies };
