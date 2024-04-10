import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "@mui/material";
import Divider from '@mui/material/Divider';
import { Margin } from "@mui/icons-material";

const PageName = () => {
  return (
    <Link
      sx={{ fontWeight: 'bold' }}
      href="/home"
      color="#026773"
      underline="hover"
      style={{ fontFamily: "'Nimbus Sans Arabic Bold', sans-serif" }}
    >
      HOME
    </Link>
  );
};

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleClick = () => {
    console.log(email);
    console.log(pwd);
  };

  return (
    <Box sx={{
        outline: '1px solid #c8d8da',
        borderRadius:1,
      }} 
      color="#026773">
      <form>
        <Box sx={{p:2}}>
        <Typography align="center" variant="h3" marginBottom={5}>
          Login
          <Divider sx={{
            width: '100%',
            height: '1px',
            margin: '8px 0',
            background: 'linear-gradient(to right, transparent, #95b9be, transparent)'
            }} />
        </Typography>
        <Typography align="left" variant="body1">
          Insert your email
        </Typography>
        <TextField
          sx={{ paddingBottom: 2, width: 400 }}
          label="Email"
          size="small"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
         /> 
        <Typography align="left" variant="body1">
          Insert you password
        </Typography>
        <TextField
          sx={{ width: 400 }}
          type="password"
          label="Password"
          size="small"
          variant="outlined"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        </Box>
        <Box
          sx={{p:2, gap: "2px" }}
          display="flex"
          alignItems="left"
          flexDirection="column"
          minHeight={"10vh"}
        >
          <Typography>
            <FormControlLabel
              control={<Checkbox 
              checked={checked} onChange={handleChange} />}
              label="Keep me logged"
            />
          </Typography>
          <Button 
          sx={{ bgcolor:"#3d9db3"}} 
          size="small" 
          variant="contained" 
          onClick={handleClick} disableElevation>
            Log in
          </Button>
        </Box> 
        <Box 
        sx={{
            height:40,
            backgroundColor: '#e1eaeb', 
            gap: "1px" 
        }}
        display="flex"
        flexDirection="row"
        justifyContent="right">
        <Typography sx={{p:1}}> 
            Doesn't have an account? 
        </Typography> 
        <Button 
        sx={{ margin:0.8,
            marginRight:2,
            bgcolor:"#f6f7f0", 
            color:"#1da2c1"
        }} 
        size="small" 
        variant="outlined" 
        onClick={handleClick} disableElevation>
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export const Login = () => {
  return (
    <Container sx={{p:2}}> 
      <PageName/>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="90vh"
        flexDirection="column"
      >
        <LoginContainer />
      </Box>
    </Container>
  );
};
