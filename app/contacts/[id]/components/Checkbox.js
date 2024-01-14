import { Switch, FormControlLabel, Grid } from "@mui/material";

const Checkbox = ({ config, values, handleBlur, handleChange }) => {
  return (
    <Grid item xs={6} md={4} lg={2}>
      <FormControlLabel
        control={
          <Switch
            name={config.name}
            id={config.name}
            checked={values[config.name]}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        }
        label={config.label}
      />
    </Grid>
  );
};

export { Checkbox };
