import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#74C043",
    },
    secondary: {
      main: "#2F4858",
    },
    error: {
      main: red.A400,
    },
  },
  //   typography
  typography: {
    fontFamily: "Montserrat, sans-serif",
    h1: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#2F4858",
    },

    body1: {
      fontSize: "20px",
      fontWeight: "100",
      color: "#2F4858",
    },
  },
});

export default theme;
