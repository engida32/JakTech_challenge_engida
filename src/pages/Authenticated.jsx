// Generate a simple authenticated page with username displayed

import React from "react";
import { useUser } from "../hooks/useAuth";
import { Box } from "@mui/material";

const Authenticated = () => {
  const user = useUser();

  return (
    <Box>
      <h1>Authenticated</h1>
      <p>Welcome, {user?.user.name}</p>
    </Box>
  );
};

export default Authenticated;
