import { Switch, FormControlLabel, Grid } from "@mui/material";

const Checkbox = ({ profile, label, name, handleChangeValue }) => {
  return (
    <Grid item xs={6} md={4} lg={2}>
      <FormControlLabel
        control={
          <Switch
            name={name}
            id={name}
            checked={profile[name]}
            onChange={(event) => handleChangeValue(event.target.checked, name)}
          />
        }
        label={label}
      />
    </Grid>
  );
};

export { Checkbox };
