import React, { ChangeEvent } from 'react';
import { TextField, Typography } from '@mui/material';

interface Props {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const InputText = (props: Props) => {
  const { value, onChange, error } = props;
  return (
    <>
      <TextField
        label="Name"
        variant="outlined"
        value={value}
        onChange={onChange}
      />
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
    </>
  );
};
