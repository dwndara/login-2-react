import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import { FormControlLabel, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import { LoginButton, InputLogin, TextButton } from "../../shared/components";
import { useNavigate } from "react-router-dom";
import { CenterFocusStrong } from "@mui/icons-material";

const PageName = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  return (
    <Box>
      <TextButton onClick={() => navigate("/home")}>HOME</TextButton>
    </Box>
  );
};

const LoginContainer = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  const handleClick = () => {
    console.log(email);
    console.log(pwd);
  };
  const handleClickSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <Box
      sx={{
        outline: "1px solid #c8d8da",
        borderRadius: 1,
      }}
      color="#026773"
    >
      <form>
        <Box sx={{ p: 1 }}>
          <Typography align="center" variant="h3">
            Login
            <Divider
              sx={{
                width: "100%",
                height: "1px",
                margin: "8px 0",
                background:
                  "linear-gradient(to right, transparent, #95b9be, transparent)",
              }}
            />
          </Typography>
        </Box>

        <Box
          sx={{ p: 2, gap: "2px" }}
          display="flex"
          alignItems="left"
          flexDirection="column"
          marginTop={-2}
          minHeight={"10vh"}
        >
          <InputLogin
            sx={{ margin: 1, width: 400 }}
            label="Email"
            value={email}
            onChange={(newValue) => setEmail(newValue)}
          />
          <InputLogin
            sx={{ margin: 1, width: 400 }}
            label="Password"
            value={pwd}
            type="password"
            onChange={(newValue) => setPwd(newValue)}
          />
          <Box display="flex" flexDirection="row" marginLeft={1}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    marginTop: "-10px",
                    marginBottom: "-10px",
                    alignSelf: "flex-start",
                  }}
                  onChange={handleChange}
                />
              }
              label={<Typography padding={-1}>Keep me logged</Typography>}
            />
          </Box>
          <LoginButton
            sx={{
              p: 1,
              margin: 1,
              bgcolor: "#3d9db3",
              color: "white",
              "&:hover": {
                backgroundColor: "#026773",
              },
            }}
            onClick={handleClick}
          >
            Log In
          </LoginButton>
        </Box>
        <Box
          sx={{
            height: 40,
            backgroundColor: "#e1eaeb",
            gap: "1px",
          }}
          display="flex"
          flexDirection="row"
          justifyContent="right"
        >
          <Typography sx={{ p: 1 }}>Doesn't have an account?</Typography>
          <LoginButton
            sx={{
              margin: 0.8,
              marginRight: 2,
              bgcolor: "#f6f7f0",
              color: "#1da2c1",
              "&:hover": {
                backgroundColor: "#ffffff",
              },
            }}
            onClick={handleClickSignUp}
          >
            Sign Up
          </LoginButton>
        </Box>
      </form>
    </Box>
  );
};

export const Login = () => {
  return (
    <Container sx={{ p: 2 }}>
      <PageName />
      <Box
        height="100vh"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginContainer />
      </Box>
    </Container>
  );
};
