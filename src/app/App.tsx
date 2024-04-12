import { Box, Container } from "@mui/material";
import { RoutesApp } from "./routes";

export const App = () => {
  return (
    <Container sx={{ p: 2 }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <RoutesApp />
      </Box>
    </Container>
  );
};
