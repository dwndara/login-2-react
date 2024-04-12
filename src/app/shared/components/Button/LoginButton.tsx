import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";
import React from "react";

interface ILoginButtonProps {
  onClick: () => void;
  sx?: SxProps;
  children?: string;
}

export const LoginButton: React.FC<ILoginButtonProps> = (props) => {
  return (
    <Button
      sx={props.sx}
      size="small"
      variant="outlined"
      disableElevation
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
