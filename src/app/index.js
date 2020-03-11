import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopNavigator from "../components/header";
import BottomNavigator from "../components/bottom-navigator";
import Footer from "../components/footer";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Routes from "../routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { LightTheme } from "../theme";

const App = ({ history }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <ConnectedRouter history={history}>
        <CssBaseline />
        <TopNavigator />
        {Routes}
        <BottomNavigator />
        <Footer />
      </ConnectedRouter>
    </ThemeProvider>
  );
};

App.propTypes = {
  history: PropTypes.object
};


export default App;
