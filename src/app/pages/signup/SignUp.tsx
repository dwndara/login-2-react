import {useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid, Link } from "@mui/material";
import Divider from '@mui/material/Divider';

const PageName = () => {
    return (
      <Link
        sx={{ fontWeight: 'bold'}}
        href="/home"
        color="#026773"
        underline="hover"
        style={{ fontFamily: "'Nimbus Sans Arabic Bold', sans-serif" }}
      >
        HOME
      </Link>
    );
  };

const SignUpContainer = () => {
    return (
      <Box sx={{
        p:10
      }}>
        <Typography
        marginBottom={2}
        variant="h5"
        color="#026773"
        align="center"
        > 
        Create an account 
        </Typography>
        <form>
        <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Name" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Email" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Password" type="password" fullWidth />
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'center' }}>
        <Button sx={{
            bgcolor:"#3d9db3", 
        }}
        size="small" 
        variant="contained">
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
      <Container sx={{p:2}}> 
      <PageName/>
      <SignUpContainer/>
      </Container>
    );
  };