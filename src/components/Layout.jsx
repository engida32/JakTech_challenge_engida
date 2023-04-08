import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  Divider,
  Button,
} from "@mui/material";

import { Box, styled } from "@mui/system";
import { Logout } from "@mui/icons-material";
import { Outlet } from "react-router-dom";
import { useAuth, useUser } from "../hooks/useAuth";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Layout() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [user, setUser] = useAuth();

  const handleLogOut = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CustomAppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box flex={1} />
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            onClick={handleClick}
          >
            <Avatar
              //   sx={{ height: "auto" }}
              variant="circular"
              src={user?.user?.user_image[0]}
              alt={"Test"}
            />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                width: "300px",
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  height: 10,
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                my: 2,
                px: 2,
              }}
            >
              <Avatar
                sx={{ width: 72, height: "auto", mb: 2 }}
                variant="square"
                alt={"Test"}
                src={user?.user?.user_image[0]}
              />
              <Box>
                <Typography
                  sx={{
                    color: "gray",
                  }}
                  noWrap
                >
                  {user?.user?.name}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "gray",
                    textAlign: "center",
                    width: 200,
                  }}
                  noWrap
                >
                  {user?.user?.phone}
                </Typography>
              </Box>
            </Box>
            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{ bgcolor: "status.danger", color: "#fff" }}
                size="small"
                onClick={handleLogOut}
                startIcon={<Logout fontSize="small" />}
              >
                Logout
              </Button>
            </Box>
          </Menu>
        </Toolbar>
      </CustomAppBar>

      <Box
        component="main"
        sx={{ flexGrow: 1, backgroundColor: "inherit", height: "100%" }}
      >
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
}
