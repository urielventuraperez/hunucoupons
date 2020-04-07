import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopNavigator from "../components/navbar";
import BottomNavigator from "../components/bottom-navigator";
import Footer from "../components/footer";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import RenderRoutes from "../routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { LightTheme, DarkTheme } from "../theme";
import ScrollToTop from "../routes/scrollToTop";
import { connect } from "react-redux";

const App = ({ history, isDarkTheme }) => {
  const Theme = isDarkTheme ? DarkTheme : LightTheme;

  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={Theme}>
        <ScrollToTop />
        <CssBaseline />
        <TopNavigator />
        {RenderRoutes}
        <BottomNavigator />
        <Footer />
      </ThemeProvider>
    </ConnectedRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
  isDarkTheme: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isDarkTheme: state.theme.darkTheme,
  };
};

export default connect(mapStateToProps)(App);
