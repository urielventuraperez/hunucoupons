import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../pages/favorites';
import Settings from '../pages/settings';

const routes = (
    <Switch>
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
)

export default routes