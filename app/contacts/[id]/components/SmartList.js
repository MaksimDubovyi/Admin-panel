import React from 'react';
import {OutlinedInput,InputLabel,MenuItem,FormControl,Select} from '@mui/material';

const SmartList = ({ handleChange, label, data, value }) => {

  const handleChangeItem = (event) => {
    const {
      target: { value },
    } = event;

    if (handleChange) {
      handleChange(
        typeof value === 'string'
          ? value.split(',').map((id) => parseInt(id, 10))
          : value
      );
    }
  };

  return (
    <div>
      <FormControl sx={{mt:"20px"}}  fullWidth>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          multiple
          value={value}
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
    </div>
  );
};

export { SmartList };
