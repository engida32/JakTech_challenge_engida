import React from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  EmailOutlined,
  LockOpenOutlined,
  LockOutlined,
} from "@mui/icons-material";
import { Controller, useForm } from "react-hook-form";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        minWidth: "100vw",
        alignItems: "center",
        justifyContent: "flex-start",
        background: "url(https://source.unsplash.com/random/1600x900)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(3px)",
      }}
    >
      <Card sx={{ p: 2, minWidth: 300, marginTop: "6em" }}>
        <Box
          sx={{
            margin: "1em",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            <LockOutlined />
          </Avatar>
        </Box>
        <Typography
          sx={{
            color: "#FF8B41",
            textAlign: "center",
            my: 3,
            fontWeight: 900,
          }}
          variant="h5"
        >
          Sign In
        </Typography>

        <Box
          sx={{ mx: 5, my: 3, borderRadius: 3, p: 4 }}
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Controller
            defaultValue={""}
            name="username"
            control={control}
            rules={{
              required: "please enter valid phone",
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              //     message: "invalid phone number",
              //   },
            }}
            render={({ field }) => (
              <TextField
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlined />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                placeholder="username"
                autoComplete="username"
                autoFocus
                helperText={errors?.username ? errors?.username?.message : ""}
                error={errors?.username}
                {...field}
              />
            )}
          />
          <Controller
            defaultValue={""}
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "password must be at least 8 characters",
              },
            }}
            render={({ field }) => (
              <TextField
                variant="standard"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOpenOutlined />
                    </InputAdornment>
                  ),
                }}
                margin="normal"
                fullWidth
                type="password"
                placeholder="Password"
                helperText={errors?.password ? errors?.password?.message : ""}
                error={errors?.password}
                {...field}
              />
            )}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              type="submit"
              fullWidth
              size="large"
              sx={{
                my: 3,
                bgcolor: "primary.main",
                "&:hover": {
                  bgcolor: "primary.main",
                },
                color: "white",
              }}
            >
              Log In
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Login;
