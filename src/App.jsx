import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      <Login />
    </Box>
  );
}

export default App;
