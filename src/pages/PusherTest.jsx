// generate a simple form that sends data to Pusher and displays the response

import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { usePusher } from "../hooks/usePusher";

const PusherTest = () => {
  const [message, setMessage] = useState("");

  const { sendMessage, messages } = usePusher("my-channel", "my-event");

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          label="Message"
        />
        <Button type="submit">Send</Button>
      </form>
      <Box>
        {messages.map((message, index) => (
          <Box key={index}>{message}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default PusherTest;
