import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../pages/favorites-coupons';
import Profile from '../pages/profile';
import BussinesFavorites from '../pages/favorites-bussines';
import Home from '../pages/home';
import Commerce from '../pages/commerce';
import NotFound from '../pages/not-found';

const Routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites-coupons" component={Favorites} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/favorites-bussines" component={BussinesFavorites} />
      <Route exact path="/commerce-example" component={Commerce} />
      <Route exact path="*" component={NotFound} />
    </Switch>
)

export default Routes