import TextField from "@mui/material/TextField";
import { SxProps } from "@mui/material";
import React from "react";

interface IInputLoginProps {
  label: string;
  value: string;
  type?: string;
  sx?: SxProps;
  onChange: (newValue: string) => void;
}

export const InputLogin: React.FC<IInputLoginProps> = (props) => {
  return (
    <TextField
      sx={props.sx}
      label={props.label}
      size="small"
      variant="outlined"
      value={props.value}
      type={props.type}
      onChange={(e) => props.onChange(e.target.value)}
    ></TextField>
  );
};
