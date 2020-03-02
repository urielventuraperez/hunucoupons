import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopNavigator from "../components/header";
import BottomNavigator from "../components/bottom-navigator";
import Footer from "../components/footer";
import LoginDialog from "../components/login";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Routes from "../routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { LightTheme } from "../theme";

const App = ({ history }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => handleClickOpen(), 2000);
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <TopNavigator />
        {Routes}
        <BottomNavigator />
        <Footer />
      </ConnectedRouter>
      <LoginDialog open={open} onClose={handleClose} />
    </ThemeProvider>
  );
};

App.propTypes = {
  history: PropTypes.object
};

export default App;
