import { Grid } from "@mui/material";
import { Hobbies } from "./Hobbies";

const HobbiesList = ({ label, options, handleChange, handleBlur, values }) => {
  return (
    <Grid container spacing={2}>
      {options.map((item) => {
        return (
          <Hobbies
            key={item.id}
            label={item.label}
            config={item}
            options={item.children}
            handleChange={handleChange}
            handleBlur={handleBlur}
            values={values}
          />
        );
      })}
    </Grid>
  );
};
export { HobbiesList };
