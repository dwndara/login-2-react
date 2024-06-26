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
      style={{
        fontWeight: "bold",
        fontFamily: "'Nimbus Sans Arabic Bold', sans-serif",
      }}
      size="small"
      disableElevation
      onClick={props.onClick}
      variant="outlined"
    >
      {props.children}
    </Button>
  );
};
