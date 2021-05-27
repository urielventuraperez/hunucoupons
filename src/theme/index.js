import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import grey from "@material-ui/core/colors/grey";

export const LightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fd548e",
      light: "#ffcdd2",
      dark: pink["A700"]
    },
    secondary: {
      main: "#2F4858",
      light: "#d7e2ea",
      dark: "#21333e"
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    error: {
      main: "#B00020",
      dark: grey["800"],
    },
    action: {
      main: "#232f34"
    },
    text: {
      secondary: grey["600"],
      disabled: grey["50"],
      light: "#ffffff",
      hint: grey["50"]
    }
  },
  typography: {
    fontFamily: [
      "Asap",
      "Poppins",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    h1: {
      fontSize: "8rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "-1.5px"
    },
    h2: {
      fontSize: "5rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "-0.5px"
    },
    h3: {
      fontSize: "4rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0px"
    },
    h4: {
      fontSize: "2.8333rem",
      fontWeight: 700,
      fontFamily: "Poppins",
      letterSpacing: "0.25px"
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0px"
    },
    h6: {
      fontSize: "1.6666rem",
      fontWeight: 500,
      fontFamily: "Poppins",
      letterSpacing: "0.15px"
    },
    subtitle1: {
      fontSize: "1.2333rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "0.15px"
    },
    subtitle2: {
      fontSize: "1.1666rem",
      fontWeight: 100,
      fontFamily: "Poppins",
      letterSpacing: "0.1px"
    },
    body1: {
      fontSize: "1.05rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0.5px"
    },
    body2: {
      fontSize: "0.89rem",
      fontWeight: 200,
      fontFamily: "Poppins",
      letterSpacing: "0.25px"
    },
    button: {
      fontSize: "1.0666rem",
      fontWeight: 500,
      fontFamily: "Poppins",
      letterSpacing: "1.25px",
      textTransform: "uppercase"
    },
    caption: {
      fontSize: "0.7rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "0.5px"
    }
  },
});

export const DarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fd548e",
      dark: pink["A700"]
    },
    secondary: {
      main: pink["A700"],
      light: "#39557A"
    },
    background: {
      default: "#303030",
      paper: "#424242"
    },
    error: {
      main: "#B00020"
    },
    action: {
      main: "#232f34"
    },
    text: {
      primary: grey["100"],
      secondary: "#e1e1e1",
      disabled: grey["300"],
      light: grey["50"],
      hint: grey["500"]
    }
  },
  typography: {
    fontFamily: [
      "Asap",
      "Poppins",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    h1: {
      fontSize: "8rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "-1.5px"
    },
    h2: {
      fontSize: "5rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "-0.5px"
    },
    h3: {
      fontSize: "4rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0px"
    },
    h4: {
      fontSize: "2.8333rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0.25px"
    },
    h5: {
      fontSize: "2rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0px"
    },
    h6: {
      fontSize: "1.6666rem",
      fontWeight: 500,
      fontFamily: "Poppins",
      letterSpacing: "0.15px"
    },
    subtitle1: {
      fontSize: "1.3333rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "0.15px"
    },
    subtitle2: {
      fontSize: "1.1666rem",
      fontWeight: 500,
      fontFamily: "Poppins",
      letterSpacing: "0.1px"
    },
    body1: {
      fontSize: "1.1rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0.5px"
    },
    body2: {
      fontSize: "0.95rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0.25px"
    },
    button: {
      fontSize: "1.0666rem",
      fontWeight: 500,
      fontFamily: "Poppins",
      letterSpacing: "1.25px",
      textTransform: "uppercase"
    },
    caption: {
      fontSize: "0.7rem",
      fontWeight: 300,
      fontFamily: "Poppins",
      letterSpacing: "0.5px"
    }
  }
});
