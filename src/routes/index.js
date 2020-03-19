import React from "react";
import { Route, Switch, Redirect } from "react-router";
import Favorites from "../pages/favorites-coupons";
import Profile from "../pages/profile";
import BussinesFavorites from "../pages/favorites-bussines";
import Home from "../pages/home";
import Login from "../pages/login";
import Commerce from "../pages/commerce";
import NotFound from "../pages/not-found";
import OAuthRedirect from "../components/oAuthRedirect";
import ProtectedRoutes from "./protected";

const RenderRoutes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/oauth2/redirect" component={OAuthRedirect}/>
    <Route exact path="/login" component={Login} />

    {/* Rutas Protegidas */}
    <ProtectedRoutes exact path="/favorites-coupons" component={Favorites} />
    <ProtectedRoutes
      exact
      path="/favorites-bussines"
      component={BussinesFavorites}
    />
    <ProtectedRoutes exact path="/profile" component={Profile} />
    <ProtectedRoutes exact path="/commerce-example" component={Commerce} />

    {/* Rutas para los not found */}
    <Route exact path="/not-found" component={NotFound} />
    <Route path="*">
      <Redirect to="/not-found" />
    </Route>
  </Switch>
);

export default RenderRoutes;
