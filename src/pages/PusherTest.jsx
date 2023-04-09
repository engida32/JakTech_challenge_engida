// generate a simple form that sends data to Pusher and displays the response

import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { usePusher } from "../hooks/usePusher";
import {
  ChatBubble,
  ChatBubbleSharp,
  Message,
  SendToMobileSharp,
} from "@mui/icons-material";

const PusherTest = () => {
  const [message, setMessage] = useState("");

  const { sendMessage, messages } = usePusher("my-channel", "my-event");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);

    setMessage("");
  };

  return (
    <Container
      sx={{
        my: 10,
      }}
    >
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{
          my: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
          sx={{
            width: "50%",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            m: 2,
            p: 1,
          }}
          // endIcon={<sendMessage />}
        >
          Send
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          mx: 30,
          display: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {messages.map((message, index) => (
          <>
            <Box key={index}>
              <Typography>{message}</Typography>
            </Box>
            <br />
          </>
        ))}
      </Box>
    </Container>
  );
};

export default PusherTest;
