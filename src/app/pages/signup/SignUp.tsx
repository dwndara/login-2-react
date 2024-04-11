import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid, Link } from "@mui/material";
import Divider from "@mui/material/Divider";
import { InputLogin } from "../../shared/components/TextField/InputLogin";
import { useState } from "react";

const PageName = () => {
  return (
    <Box>
      <Link
        sx={{ fontWeight: "bold" }}
        href="/home"
        color="#026773"
        underline="hover"
        style={{ fontFamily: "'Nimbus Sans Arabic Bold', sans-serif" }}
      >
        HOME
      </Link>
      <Link
        sx={{ fontWeight: "bold", marginLeft: 2 }}
        href="/login"
        color="#026773"
        underline="hover"
        style={{ fontFamily: "'Nimbus Sans Arabic Bold', sans-serif" }}
      >
        LOGIN
      </Link>
    </Box>
  );
};

const SignUpContainer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleClick = () => {
    console.log(name);
    console.log(email);
    console.log(pwd);
  };

  return (
    <Box
      sx={{
        marginY: 20,
        marginX: 40,
        p: 2,
        outline: "1px solid #c8d8da",
        borderRadius: 1,
      }}
      color="#026773"
    >
      <Typography marginBottom={2} variant="h5" color="#026773" align="center">
        Create an account
      </Typography>
      <Divider
        sx={{
          width: "100%",
          height: "1px",
          margin: "8px 0",
          marginBottom: 4,
          background:
            "linear-gradient(to right, transparent, #95b9be, transparent)",
        }}
      />
      <form>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item xs={12} md={12}>
            <InputLogin
              sx={{ margin: 1 }}
              label="Name"
              value={name}
              onChange={(newValue) => setName(newValue)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <InputLogin
              sx={{ margin: 1 }}
              label="Email"
              value={email}
              type="email"
              onChange={(newValue) => setEmail(newValue)}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <InputLogin
              sx={{ margin: 1 }}
              label="Password"
              value={pwd}
              type="password"
              onChange={(newValue) => setPwd(newValue)}
            />
          </Grid>
          <Grid item xs={12} md={12} style={{ textAlign: "center" }}>
            <Button
              sx={{
                marginTop: 2,
                bgcolor: "#3d9db3",
                "&:hover": {
                  backgroundColor: "#026773",
                },
              }}
              variant="contained"
              onClick={handleClick}
            >
              Create account
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export const SignUp = () => {
  return (
    <Container sx={{ p: 2 }}>
      <PageName />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      ></Box>

      <SignUpContainer />
    </Container>
  );
};
