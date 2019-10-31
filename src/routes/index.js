import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../pages/favorites';
import Settings from '../pages/settings';
import BussinesFavorites from '../pages/favorites-bussines';
import Home from '../pages/home';

const routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/favorites-bussines" component={BussinesFavorites} />
    </Switch>
)

export default routes