"use client";
import { TextField } from "@mui/material";

const TextInput = ({
  config,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
}) => {
  return (
    <>
      <TextField
        sx={{ mt: 2 }}
        fullWidth
        margin="dense"
        label={config.label}
        type={config.type}
        value={values[config.name]}
        name={config.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors[config.name] && touched[config.name] && (
        <div style={{ color: "red" }}>{errors[config.name]}</div>
      )}
    </>
  );
};

export { TextInput };
