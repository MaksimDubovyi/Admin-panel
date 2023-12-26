import {InputLabel,MenuItem,FormControl,Select} from '@mui/material';


const FormSelect = ({value,label,data,handleChange})=>{

    return(<FormControl fullWidth sx={{mt:"20px"}}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
          labelId={label}
          value={value}
          label={label}
          onChange={handleChange}
        >
           <MenuItem value={-1}>Не выбрано</MenuItem>
          {data.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>)
}

export{FormSelect};