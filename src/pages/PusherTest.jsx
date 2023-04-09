import React, { useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { usePusher } from "../hooks/usePusher";
const PusherTest = () => {
  const [message, setMessage] = useState("test");

  const { sendMessage, messages, channel } = usePusher(
    "my-channel",
    "my-event"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage({
      channel_name: "private-my-channel",
      event_name: "my-event",
      message,
    });

    setMessage("");
  };

  return (
    <Container
      sx={{
        my: 10,
        display: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
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
      {messages.length > 0 ? (
        <Box
          sx={{
            width: "30%",
            mx: 20,
            display: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "whitesmoke",
          }}
        >
          {messages?.map((message, index) => (
            <Box key={index}>
              <Typography>{message}</Typography>
            </Box>
          ))}
          <br />
        </Box>
      ) : (
        <Typography sx={{ width: "50%", mx: 20 }}>
          {" "}
          no message yet 🗨️ ! send Something from debug console
        </Typography>
      )}
    </Container>
  );
};

export default PusherTest;
