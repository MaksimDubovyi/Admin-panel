import React from "react";
import {
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@mui/material";

const SmartList = ({
  config,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  options,
}) => {
  return (
    <Grid item xs={6}>
      <FormControl sx={{ mt: "20px" }} fullWidth>
        <InputLabel id={config.label}>{config.label}</InputLabel>
        <Select
          name={config.name}
          id={config.name}
          labelId={config.label}
          multiple
          value={values[config.name]}
          onChange={handleChange}
          onBlur={handleBlur}
          input={<OutlinedInput label={config.label} />}
        >
          {options.map((item) =>
            item.children !== undefined ? (
              item.children.map((ch) => (
                <MenuItem key={ch.id} value={ch.id}>
                  {ch.label}
                </MenuItem>
              ))
            ) : (
              <MenuItem key={item.id} value={item.id}>
                {item.label}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
      {errors[config.name] && touched[config.name] && (
        <div style={{ color: "red" }}>{errors[config.name]}</div>
      )}
    </Grid>
  );
};

export { SmartList };
