import React from 'react';
import {InputLabel, MenuItem, FormControl, Select, FormHelperText} from '@mui/material';


const SelectInput = (props) => {
  const { label, value, onChange, options, error, inputRef, ...rest } = props;

  return (
    <FormControl variant="outlined" fullWidth error={Boolean(error)}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        inputRef={inputRef}
        {...rest}
      >
        {options && options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default SelectInput;
