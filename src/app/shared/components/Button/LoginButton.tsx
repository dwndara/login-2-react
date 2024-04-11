import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";
import React from "react";

interface ILoginButtonProps {
  href?: string;
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
      href={props.href}
    >
      {props.children}
    </Button>
  );
};
