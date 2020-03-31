import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import TopNavigator from "../components/navbar";
import BottomNavigator from "../components/bottom-navigator";
import Footer from "../components/footer";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import RenderRoutes from "../routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { LightTheme } from "../theme";
import ScrollToTop from "../routes/scrollToTop";

const App = ({ history }) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <ConnectedRouter history={history}>
        <ScrollToTop />
        <CssBaseline />
        <TopNavigator />
          {RenderRoutes}
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
