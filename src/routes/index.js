import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Favorites from "../pages/favorites-coupons";
import Profile from "../pages/profile";
import BussinesFavorites from "../pages/favorites-bussines";
import Home from "../pages/home";
import Commerce from "../pages/commerce";
import NotFound from "../pages/not-found";
import OAuthRedirect from "../components/oAuthRedirect"

const Routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/favorites-coupons" component={Favorites} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/favorites-bussines" component={BussinesFavorites} />
    <Route exact path="/commerce-example" component={Commerce} />
    {/* Rutas para los not found */}
    <Route exact path="/not-found" component={NotFound} />
    <Route path="*">
      <Redirect to="/not-found" />
    </Route>
    <Route path="/oauth2/redirect" component={OAuthRedirect}></Route>
  </Switch>
);

export default Routes;
