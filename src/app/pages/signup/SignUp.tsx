import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid, useTheme } from "@mui/material";
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
  const theme = useTheme();
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
      margin={theme.spacing(22)}
      sx={{
        outline: "1px solid #c8d8da",
        borderRadius: 1,
      }}
      color="#026773"
    >
      <form>
        <Box sx={{ p: 1 }}>
          <Box></Box>
          <Typography align="center" variant="h4">
            Create an account
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
            label="Name"
            value={name}
            onChange={(newValue) => setName(newValue)}
            error={nameError}
          />
          <InputLogin
            sx={{ margin: 1, width: 400 }}
            label="Email"
            value={email}
            type="email"
            onChange={(newValue) => setEmail(newValue)}
            error={emailError}
          />
          <InputLogin
            sx={{ margin: 1, width: 400 }}
            label="Password"
            value={pwd}
            type="password"
            onChange={(newValue) => setPwd(newValue)}
            error={pwdError}
          />

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
        </Box>
      </form>
    </Box>
  );
};

export const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PageName />
      <SignUpContainer />
    </Box>
  );
};
