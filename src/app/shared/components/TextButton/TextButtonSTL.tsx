import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";
import React from "react";

interface ITextButtonProps {
  onClick: () => void;
  sx?: SxProps;
  children?: string;
}

export const TextButton: React.FC<ITextButtonProps> = (props) => {
  return (
    <Button
      sx={props.sx}
      style={{
        fontWeight: "bold",
        fontFamily: "'Nimbus Sans Arabic Bold', sans-serif",
        color: "#026773",
      }}
      size="small"
      disableElevation
      onClick={props.onClick}
      variant="text"
    >
      {props.children}
    </Button>
  );
};
