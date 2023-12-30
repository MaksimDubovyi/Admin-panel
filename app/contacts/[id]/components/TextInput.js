"use client";
import { TextField } from "@mui/material";

const TextInput = ({ profile, label, name, handleChangeValue }) => {
  return (
    <TextField
      margin="dense"
      label={label}
      type="text"
      value={profile[name]}
      fullWidth
      onChange={(event) => handleChangeValue(event.target.value, name)}
    />
  );
};

export { TextInput };
