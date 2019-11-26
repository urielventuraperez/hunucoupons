import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import Routes from '../../routes';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <CssBaseline/>
      <TopNavigator />
          {Routes}
      <BottomNavigator />
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object
};

export default App;