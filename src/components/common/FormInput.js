import React from 'react';
import TextField from '@mui/material/TextField';

const FormInput = (props) => {
  const {type, placeholder, value, onChange, error, inputRef,multiline, ...rest } = props;

  return (
    <>
      <TextField
        type={type}
        label={placeholder}
        variant="outlined"
        value={value}
        multiline={multiline}
        rows={multiline && 4}
        onChange={onChange}
        inputRef={inputRef}
        error={Boolean(error)}
        helperText={error}
        {...rest}
        style={{minWidth:"100%"}}
      />
    </>
  );
};

export default FormInput;
