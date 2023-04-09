// Generate a simple authenticated page with username displayed

import React from "react";
import { useUser } from "../hooks/useAuth";
import { Box, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Authenticated = () => {
  const navigate = useNavigate();
  const user = useUser();

  return (
    <Container>
      <h1>Authenticated</h1>
      <p>Welcome, {user?.user.name}</p>

      <Button
        variant="contained"
        sx={{ p: 2 }}
        onClick={() => navigate("pusher")}
      >
        Got to Chat
      </Button>
    </Container>
  );
};

export default Authenticated;
