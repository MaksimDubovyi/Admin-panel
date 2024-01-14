import { InputLabel, MenuItem, FormControl, Select, Grid } from "@mui/material";

const FormSelect = ({
  options,
  optionRender,
  config,
  values,
  handleBlur,
  handleChange,
}) => {
  return (
    <Grid item xs={4}>
      <FormControl fullWidth sx={{ mt: "20px" }}>
        <InputLabel id={config.name}>{config.label}</InputLabel>
        <Select
          name={config.name}
          id={config.name}
          labelId={config.label}
          value={values[config.name] !== undefined ? values[config.name] : -1}
          label={config.label}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <MenuItem value={-1}>Не выбрано</MenuItem>
          {options.map(optionRender)}
        </Select>
      </FormControl>
    </Grid>
  );
};

export { FormSelect };
