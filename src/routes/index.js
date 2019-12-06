import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../pages/favorites-coupons';
import Settings from '../pages/settings';
import BussinesFavorites from '../pages/favorites-bussines';
import Home from '../pages/home';
import Commerce from '../pages/commerce';

const Routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites-coupons" component={Favorites} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/favorites-bussines" component={BussinesFavorites} />
      <Route exact path="/commerce-example" component={Commerce} />
    </Switch>
)

export default Routes