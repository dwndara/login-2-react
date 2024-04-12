import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { InputLogin, LoginButton, TextButton } from "../../shared/components";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PageName = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <TextButton onClick={() => navigate("/home")}>HOME</TextButton>
      <TextButton onClick={() => navigate("/login")}>LOGIN</TextButton>
    </Box>
  );
};

const SignUpContainer = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setNameError(false);
    setEmailError(false);
    setPwdError(false);
    setOpen(false);
  };
  const handleOpen = () => {
    if (name && email && pwd) {
      setOpen(true);
    } else {
      setNameError(!name);
      setEmailError(!email);
      setPwdError(!pwd);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [pwdError, setPwdError] = useState(false);

  // const handleClick = () => {
  //   console.log(name);
  //   console.log(email);
  //   console.log(pwd);
  // };

  return (
    <Box
      sx={{
        width: 400,
        marginY: 20,
        marginX: 40,
        p: 4,
        outline: "1px solid #c8d8da",
        borderRadius: 1,
      }}
      color="#026773"
    >
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} xl={12}>
            <Typography
              marginBottom={2}
              variant="h4"
              color="#026773"
              align="center"
            >
              Create an account
            </Typography>
            <Divider
              sx={{
                width: "100%",
                height: "1px",
                margin: "8px 0",
                marginBottom: 0,
                background:
                  "linear-gradient(to right, transparent, #95b9be, transparent)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <InputLogin
              label="Name"
              value={name}
              onChange={(newValue) => setName(newValue)}
              error={nameError}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <InputLogin
              label="Email"
              value={email}
              type="email"
              onChange={(newValue) => setEmail(newValue)}
              error={emailError}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12}>
            <InputLogin
              label="Password"
              value={pwd}
              type="password"
              onChange={(newValue) => setPwd(newValue)}
              error={pwdError}
            />
          </Grid>
          <Grid item xs={12} md={12} xl={12} style={{ textAlign: "center" }}>
            <LoginButton
              sx={{
                marginTop: 0,
                color: "white",
                bgcolor: "#3d9db3",
                "&:hover": {
                  backgroundColor: "#026773",
                },
              }}
              onClick={handleOpen}
            >
              Create account
            </LoginButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Account created successfully!
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  A confirmation email was sent to {email}.
                </Typography>
              </Box>
            </Modal>
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
      <SignUpContainer />
    </Container>
  );
};
