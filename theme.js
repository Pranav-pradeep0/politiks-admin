import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3A7BD5",
    },
    secondary: {
      main: "#D4E6FF",
    },
    error: {
      main: "#E94057",
    },
    warning: {
      main: "#F27121",
    },
    info: {
      main: "#9747FF",
    },
    success: {
      main: "#00A12D",
    },
    background: {
      default: "#ffffff",
      lightBlue: "#D4E6FF",
    },
    common: {
      black: "#000000",
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    fontWeightRegular: 400,
    button: {
      textTransform: "none", // Prevents default uppercase transformation
    },
    h1: {
      fontWeight: 700,
      fontSize: "18px",
    },
    h2: {
      fontWeight: 700,
      fontSize: "18px",
    },
    h3: {
      fontWeight: 700,
      fontSize: "18px",
    },
    h4: {
      fontWeight: 700,
      fontSize: "18px",
    },
    h5: {
      fontWeight: 700,
      fontSize: "18px",
    },
    h6: {
      fontWeight: 700,
      fontSize: "18px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "18px",
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: "18px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none", // Prevents default uppercase transformation
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#E94057", // Color for the switch knob when unchecked
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#00A12D", // Color for the switch knob when checked
          },
        },
        track: {
          "&.Mui-checked": {
            backgroundColor: "#00A12D", // Color for the switch track when checked
          },
          backgroundColor: "#E94057", // Color for the switch track when unchecked
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // Black color for Table Head
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#D4E6FF", // Background color for tab items
        },
      },
    },
  },
});

export default theme;
