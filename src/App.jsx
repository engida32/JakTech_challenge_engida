import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     justifyItems: "center",
    //   }}
    // >
    //   <Login />
    // </Box>
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
