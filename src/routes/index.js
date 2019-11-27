import React from 'react'
import { Route, Switch } from 'react-router'
import Favorites from '../pages/favorites-coupons';
import Settings from '../pages/settings';
import BussinesFavorites from '../pages/favorites-bussines';
import Home from '../pages/home';
import Coupon from '../pages/coupon';

const Routes = (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/favorites-coupons" component={Favorites} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/favorites-bussines" component={BussinesFavorites} />
      <Route exact path="/coupon-example" component={Coupon} />
    </Switch>
)

export default Routes