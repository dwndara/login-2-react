import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { TextButton } from "../../shared/components";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const smallerHomeFont = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        outline: "1px solid #c8d8da",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      color="#026773"
    >
      <TextButton onClick={() => navigate("/login")}>LOGIN</TextButton>
      <Box sx={{ marginTop: 5 }}>
        <Typography align="center" variant={smallerHomeFont ? "h4" : "h3"}>
          HOME PAGE
        </Typography>
      </Box>
      <Divider
        sx={{
          width: "100%",
          height: "1px",
          margin: "8px 0",
          background:
            "linear-gradient(to right, transparent, #95b9be, transparent)",
        }}
      />
      <Typography align="left" variant={smallerHomeFont ? "body2" : "body1"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        repudiandae impedit nesciunt ea quis consectetur nobis eligendi
        voluptatibus ipsum. Dignissimos esse temporibus magnam quasi eveniet
        consequatur maxime deserunt placeat quisquam.
      </Typography>
    </Box>
  );
};
