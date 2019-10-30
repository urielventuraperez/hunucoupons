import React from 'react';
import TopNavigator from '../../components/top-navigator';
import BottomNavigator from '../../components/bottom-navigator';
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";

import Container from '@material-ui/core/Container';
import Routes from '../../routes';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <TopNavigator />
      <Container>
      { Routes }
      </Container>
      <BottomNavigator />
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object
};

export default App;