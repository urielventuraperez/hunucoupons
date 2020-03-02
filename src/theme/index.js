import { createMuiTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import grey from "@material-ui/core/colors/grey";

export const LightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fd548e",
      dark: pink["A700"]
    },
    secondary: {
      main: pink["A700"]
    },
    background: {
      default: "#ffffff",
      paper: grey['50']
    },
    error: {
      main: "#B00020"
    },
    action: { 
      main: "#232f34" 
    },
    text: {
      secondary: grey["600"],
      disabled: grey["50"],
      light: "#ffffff",
      hint: grey["50"]
    },
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
      fontSize: "1.05rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0.5px"
    },
    body2: {
      fontSize: "0.89rem",
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

export const DarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#fd548e",
      dark: pink["A700"]
    },
    secondary: {
      main: pink["A700"]
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
      secondary: "#ffffff",
      disabled: grey["50"],
      light: "#fd548e",
      hint: grey["50"]
    },
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
      fontSize: "1.05rem",
      fontWeight: 400,
      fontFamily: "Poppins",
      letterSpacing: "0.5px"
    },
    body2: {
      fontSize: "0.89rem",
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
