import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#046d76",
      secondary: "#FF8B41",
      navLinkActive: "#884E83",
      navLinkInActive: "#E9FDFF",
    },
    secondary: {
      light: "#0066ff",
      main: "#046d76",

      contrastText: "#ffcc00",
    },
    status: {
      danger: "#862400",
    },
    contrastThreshold: 3,

    tonalOffset: 0.2,
    components: {
      MuiButton: {
        textTransform: "none",
        textDecoration: "none",

        defaultProps: {
          "&:hover": {
            backgroundColor: "#046d76",
          },
          disableRipple: true,
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            margin: "10px",
            "&.Mui-disabled": {
              color: "#e4e4e4",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "red",
            },
          },
        },
      },
    },
  },
});
